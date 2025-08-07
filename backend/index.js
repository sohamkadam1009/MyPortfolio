const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;
const connectDB = require('./utils/dbutil');

// Middleware for parsing URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Set up EJS (if needed for some server-rendered pages, optional)
app.set('view engine', 'ejs');

// Serve static files from the frontend build
app.use(express.static(path.join(__dirname, 'public')));

// API/backend routes (adjust as needed)
const contactRoutes = require('./routes/Contactrouter');
app.use('/', contactRoutes);

// SPA fallback: serve index.html for any unmatched route (after all API routes)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Connect to DB and start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
  });
}).catch((err) => {
  console.error('Failed to connect to DB:', err);
});
