const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');
const adminRoutes = require('./routes/adminRoutes');
const foodRoutes = require('./routes/foodRoutes');

// Middleware setup
app.use(express.json());
app.use(cors());

// Routes
app.use('/admin', adminRoutes);
app.use('/food', foodRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
