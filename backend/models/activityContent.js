const mongoose = require('mongoose');

// Schema definition for the 'activityContents' collection
const activityContentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// Creating the model from the schema and exporting it
const ActivityContent = mongoose.model('ActivityContent', activityContentSchema, 'activityContents');
module.exports = ActivityContent;
