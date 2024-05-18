const mongoose = require('mongoose');

const aboutSchema = new mongoose.Schema({
  pageTitle: String,
  description: String
});

const AboutContent = mongoose.model('AboutContent', aboutSchema, 'aboutContents');
module.exports = AboutContent;
