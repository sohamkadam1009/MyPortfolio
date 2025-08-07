const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;
const connectDB = require('./utils/dbutil');

// IMPORTANT: Add JSON parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from React build
app.use(express.static(path.join(__dirname, 'public')));

// Your contact routes
const contactRoutes = require('./routes/Contactrouter'); // Make sure filename matches
// console.log('Contact routes loaded');
app.use('/', contactRoutes);
// console.log('Contact routes registered');


// SPA fallback route (must be AFTER your API routes)
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Connect to DB and start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}).catch((err) => {
  console.error('Failed to connect to DB:', err);
});
