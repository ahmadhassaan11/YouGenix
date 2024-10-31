const { OpenAI } = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: "https://api.openai.com/v1",
});

// Generate Ideas Controller
exports.generateIdeas = async (req, res) => {
  const { youtubeData, trendsData, term, contentType } = req.body;

  try {
    const prompt = `As a content strategist, generate 5 ${contentType} video ideas for YouTube based on the term "${term}". Use the following data for reference: YouTube Data: ${youtubeData}, Trends Data: ${JSON.stringify(trendsData)}`;

    const response = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 300,
      temperature: 0.7,
    });

    const ideas = response.choices[0].message.content.trim();
    res.json({ ideas });
  } catch (error) {
    console.error('Error generating ideas:', error.message);
    res.status(500).json({ message: 'Error generating ideas', error: error.message });
  }
};

// Generate SEO Tips Controller
exports.generateSEOTips = async (req, res) => {
  const { term } = req.body;

  try {
    const prompt = `Provide SEO optimization tips for YouTube videos on the topic "${term}". Include title and description suggestions.`;

    const response = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 200,
      temperature: 0.7,
    });

    const seoTips = response.choices[0].message.content.trim();
    res.json({ seoTips });
  } catch (error) {
    console.error('Error generating SEO tips:', error.message);
    res.status(500).json({ message: 'Error generating SEO tips', error: error.message });
  }
};
