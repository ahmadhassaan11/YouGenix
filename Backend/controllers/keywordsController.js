const googleTrends = require('google-trends-api');

exports.getKeywordSuggestions = async (req, res) => {
  const { term } = req.query;

  try {
    const results = await googleTrends.relatedQueries({ keyword: term });

    res.json(JSON.parse(results));
  } catch (error) {
    res.status(500).json({ message: 'Error fetching keyword suggestions', error: error.message });
  }
};
