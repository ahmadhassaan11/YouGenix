const User = require('../models/User');

const subscriptionCheck = (requiredSubscription) => {
  return async (req, res, next) => {
    const userId = req.user.id;
    const user = await User.findById(userId);

    if (user.subscriptionType === requiredSubscription || user.subscriptionType === 'unlimited') {
      next();
    } else {
      res.status(403).json({ message: 'Upgrade your subscription to access this feature' });
    }
  };
};

module.exports = subscriptionCheck;
