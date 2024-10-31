const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // Add password field here
  subscriptionType: { type: String, enum: ['lite', 'unlimited'], default: 'lite' },
});

module.exports = mongoose.model('User', userSchema);
