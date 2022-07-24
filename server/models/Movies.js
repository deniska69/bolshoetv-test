const { Schema, model } = require('mongoose');

const Movies = new Schema({
  id: { type: String },
  title: { type: String },
  genre: { type: String },
  trailer: { type: String },
  release_year: { type: String },
  country: { type: String },
  rate_kp: { type: String },
  rating_age: { type: String },
  description: { type: String },
  subscriptions: { type: String }
});

module.exports = model('Movies', Movies);