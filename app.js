const express = require('express');
const app = express();
const port = 3000;
// const sqlite3 = require('sqlite3').verbose();
// const db = new sqlite3.Database('./database/localCafeteria.db');
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
