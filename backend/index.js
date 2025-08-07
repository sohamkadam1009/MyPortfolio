const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT
const connectDB = require('./utils/dbutil');

// Set up EJS and middleware
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

// Import and use routes
const contactRoutes = require('./routes/Contactrouter');
app.use('/', contactRoutes);

// Connect to DB and start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
  });
});
