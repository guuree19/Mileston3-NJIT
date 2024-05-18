const express = require('express');
const router = express.Router();
const ActivityContent = require('../models/activityContent');

// Route to get all activities
router.get('/', async (req, res) => {
  try {
    const activities = await ActivityContent.find();
    res.json(activities);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to create a new activity
router.post('/', async (req, res) => {
  const activity = new ActivityContent({
    title: req.body.title,
    description: req.body.description
  });

  try {
    const newActivity = await activity.save();
    res.status(201).json(newActivity);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
