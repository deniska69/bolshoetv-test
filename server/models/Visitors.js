const { Schema, model } = require('mongoose');

const Visitors = new Schema({
  event: { type: String },
  user_agent: { type: String },
  uid: { type: String },
  ip: { type: String },
  source: { type: String },
  campaign_id: { type: String },
  content_id: { type: String },
  date_visit: { type: String },
  date_last: { type: String },
  url_visit: { type: String },
  url_last: { type: String },
});

module.exports = model('Visitors', Visitors);