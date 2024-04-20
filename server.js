 
const url = 'mogo db url';

 
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
 
const productRoutes = require('./routes/productRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(url, {
});

// Routes
app.use('/api', productRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
