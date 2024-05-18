const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');  // Ensure the path is correct

// POST route to create a new contact entry
router.post('/', async (req, res) => {
    try {
        const newContact = new Contact({
            name: req.body.name,
            email: req.body.email,
            message: req.body.message
        });
        const savedContact = await newContact.save();
        res.status(201).json(savedContact);
    } catch (error) {
        res.status(400).json({ message: "Error saving contact", error: error.message });
    }
});



router.get('/', async (req, res) => {
    try {
        const contacts = await Contact.find();  // Fetch all contacts
        res.json(contacts);
    } catch (error) {
        res.status(500).json({ message: "Error fetching contacts", error: error.message });
    }
});


module.exports = router;
