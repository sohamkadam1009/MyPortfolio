// routes/contact.js
const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
router.post('/contactConfirm', async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    
    // Redirect on success
    res.redirect('/');
  } catch (error) {
    console.error('Error saving contact:', error);
  }
});


// console.log('contactConfirm route defined');

module.exports = router;
