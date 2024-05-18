const express = require('express');
const router = express.Router();
const About = require('../models/aboutModel'); // Ensure this model is properly defined in your project

// Get About page content
router.get('/', async (req, res) => {
    try {
        // Assuming findOne() is adequate because you expect a single document for the About page.
        const aboutContent = await About.findOne();
        if (!aboutContent) {
            // If no content is found, respond with a 404 not found status
            return res.status(404).json({ message: "About content not found" });
        }
        // Send the found about content back to the client
        res.json(aboutContent);
    } catch (error) {
        // Log the error for debugging purposes
        console.error("Failed to retrieve about content:", error);
        // Respond with a 500 internal server error status if an exception occurs
        res.status(500).json({ message: "An error occurred while fetching the about content", error: error.message });
    }
});

module.exports = router;
