const axios = require('axios');

exports.searchVideos = async (req, res) => {
  const { term, contentType } = req.query;

  try {
    const apiKey = process.env.YOUTUBE_API_KEY;
    let videoDuration = 'any';

    if (contentType === 'shorts') {
      videoDuration = 'short'; // Videos less than 4 minutes
    }

    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        key: apiKey,
        q: term,
        type: 'video',
        maxResults: 10,
        videoDuration,
      },
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching videos', error: error.message });
  }
};

exports.getVideoStats = async (req, res) => {
  const { videoId } = req.query;

  try {
    const apiKey = process.env.YOUTUBE_API_KEY;

    const response = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
      params: {
        key: apiKey,
        id: videoId,
        part: 'statistics',
      },
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching video statistics', error: error.message });
  }
};

