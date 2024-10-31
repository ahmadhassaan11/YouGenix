import { useState } from 'react';
import { getButtonClass } from '../components/Button';
import { generateIdeas } from '../Services/ideaGenService';
import { setAuthToken } from '../Services/api';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import sanitizeHtml from 'sanitize-html';

const IdeaGenerator = () => {
  const [selectedTab, setSelectedTab] = useState('anything');
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const bearerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjcwNmYyOWU0MWU4Mzk1Y2FhYjAzNDEzIn0sImlhdCI6MTczMDQwNTM3MywiZXhwIjoxNzMwNDA4OTczfQ.sFdr9UAjklR6WiYVP1zQTaygNygu4xQGabdllUD2nN4'; // Replace with your actual token

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async () => {
    if (!inputValue.trim()) return;

    // Add the user's message to the conversation
    const userMessage = { sender: 'user', text: inputValue };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    const term = inputValue;
    setInputValue(''); // Clear the input field

    setAuthToken(bearerToken); // Set the authorization token

    setIsLoading(true); // Start loading

    const requestBody = {
      youtubeData: {
        kind: 'youtube#searchListResponse',
        etag: 'bFZc0GP9uexXaZ_yvJXN-0hJfFs',
        nextPageToken: 'CAoQAA',
        regionCode: 'PK',
        pageInfo: { totalResults: 1000000, resultsPerPage: 10 },
        items: [
          // Include actual video data or fetch dynamically
          {
            kind: 'youtube#searchResult',
            etag: 'I3iRQd5_JK-pbuJt7o66Sk2s670',
            id: { kind: 'youtube#video', videoId: 'mcbITEln87U' },
          },
        ],
      },
      trendsData: { interest: 80 },
      term: term,
      contentType: selectedTab === 'anything' ? 'shorts' : 'videos',
    };

    try {
      const data = await generateIdeas(requestBody);

      const assistantMessage = { sender: 'assistant', text: data.ideas };
      setMessages((prevMessages) => [...prevMessages, assistantMessage]);
    } catch (error) {
      console.error('Failed to generate ideas:', error);
      const errorMessage = { sender: 'assistant', text: 'Failed to generate ideas. Please try again.' };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false); // End loading
    }
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen text-white pt-16 pb-8">
      <h1 className="text-2xl font-bold mb-4">💡 Ideas for...</h1>
      <div className="flex mb-4">
        <button
          className={`px-4 py-2 rounded-l-lg ${
            selectedTab === 'anything' ? 'bg-red-500 text-white' : 'bg-gray-700 text-gray-300'
          }`}
          onClick={() => handleTabChange('anything')}
        >
          Shorts
        </button>
        <button
          className={`px-4 py-2 rounded-r-lg ${
            selectedTab === 'business' ? 'bg-red-500 text-white' : 'bg-gray-700 text-gray-300'
          }`}
          onClick={() => handleTabChange('business')}
        >
          Videos
        </button>
      </div>
      {/* Chat window */}
      <div className="w-full max-w-2xl mb-4">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`p-2 m-1 rounded-md ${
                msg.sender === 'user' ? 'bg-red-500 text-white' : 'bg-gray-700 text-white'
              } max-w-full break-words`}
            >
              {msg.sender === 'assistant' ? (
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h1: ({ node, ...props }) => <h1 className="font-bold" {...props} />,
                    h2: ({ node, ...props }) => <h2 className="font-bold" {...props} />,
                    // Customize other elements if needed
                  }}
                >
                  {sanitizeHtml(msg.text)}
                </ReactMarkdown>
              ) : (
                <p>{msg.text}</p>
              )}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start mb-2">
            <div className="flex items-center p-3 rounded-lg bg-gray-700 text-white max-w-md">
              {/* Typing indicator with bouncing dots */}
              <div className="flex space-x-1 mr-2">
                <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-200"></div>
                <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-400"></div>
              </div>
              <span>Generating ideas...</span>
            </div>
          </div>
        )}
      </div>
      {/* Input area */}
      <textarea
        value={inputValue}
        onChange={handleInputChange}
        className="border border-gray-600 rounded-md p-2 mb-4 w-full max-w-2xl bg-gray-700 text-white resize-none"
        placeholder="Type your topic here..."
      />
      <button className={getButtonClass('gradient')} onClick={handleSubmit}>
        <span>Generate ideas</span>
        <span className="ml-2">➔</span>
      </button>
    </div>
  );
};

export default IdeaGenerator;
