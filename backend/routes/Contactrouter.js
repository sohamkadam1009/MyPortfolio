// routes/contact.js
const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

router.post('/contactConfirm', async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    
    // CHANGED: Return JSON instead of rendering EJS template
    res.status(200).json({ 
      success: true, 
      message: 'Contact message saved successfully',
      data: contact 
    });
  } catch (error) {
    console.error('Error saving contact:', error);
    
    // CHANGED: Return JSON error instead of sending HTML error page
    res.status(500).json({ 
      success: false, 
      message: 'There was a problem saving your contact message.' 
    });
  }
});

// console.log('contactConfirm route defined');

module.exports = router;
