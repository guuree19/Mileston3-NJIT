const mongoose = require('mongoose');
const HomePage = require('./home'); // Adjust the path to where your HomePage model is located

mongoose.connect('mongodb://localhost:27017/MyWebsiteDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB connected successfully');

    const homePageData = new HomePage({
        title: 'Welcome to My portfolio',
        description: 'I am Abdul, a dedicated full-stack developer and data scientist with a robust background in turning complex challenges into actionable solutions. Leveraging a comprehensive skill set that spans from JavaScript and Python to advanced data analytics and machine learning, I craft dynamic, user-focused applications and data-driven insights that propel businesses forward.Here, you will discover a portfolio enriched with diverse projects showcasing my ability to integrate responsive front-end techniques with robust back-end programming. My work is driven by a passion for continuous learning and improvement, where each line of code and dataset is an opportunity to enhance functionality, efficiency, and user engagement.',
        // backgroundImage: 'url_to_your_background_image.jpg'
    });

    homePageData.save()
        .then(doc => {
            console.log('Home page data successfully saved:', doc);
            mongoose.disconnect();
        })
        .catch(err => {
            console.error('Error saving home page data:', err);
            mongoose.disconnect();
        });

}).catch(err => {
    console.error('MongoDB connection error:', err);
});
