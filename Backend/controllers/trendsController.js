const googleTrends = require('google-trends-api');

exports.getTrends = async (req, res) => {
  const { keyword, category } = req.query;

  try {
    const results = await googleTrends.interestOverTime({
      keyword,
      category: category ? parseInt(category) : undefined,
      startTime: new Date(Date.now() - (365 * 24 * 60 * 60 * 1000)),
    });

    res.json(JSON.parse(results));
  } catch (error) {
    res.status(500).json({ message: 'Error fetching trends', error: error.message });
  }
};
