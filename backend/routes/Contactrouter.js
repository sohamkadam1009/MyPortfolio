// routes/contact.js
const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

router.post('/contactConfirm', async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.render('contactConfirm', { formData: contact });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).send('There was a problem saving your contact message.');
  }
});

module.exports = router;
