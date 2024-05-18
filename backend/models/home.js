const mongoose = require('mongoose');

const homePageSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    backgroundImage: { type: String, required: true } 

});

const HomePage = mongoose.model('HomePage', homePageSchema);

module.exports = HomePage;
