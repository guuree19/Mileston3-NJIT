const express = require('express');
const router = express.Router();
const HomePage = require('../models/home'); // Adjust path as necessary

// Route to get home page data
router.get('/', async (req, res) => {
    try {
        const homePageData = await HomePage.findOne();
        if (!homePageData) {
            return res.status(404).send({ message: "Home page content not found" });
        }
        res.json(homePageData);
    } catch (error) {
        res.status(500).send({ message: "Error fetching home page content", error: error.message });
    }
});

module.exports = router;
