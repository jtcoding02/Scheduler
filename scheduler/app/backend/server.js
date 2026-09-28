const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// --- API Endpoints ---

// GET: Fetch all users/items
app.get('/api/items', async (req, res) => {
  try {
    const { rows } = await db.query('SELECT * FROM items ORDER BY id ASC');
    res.json(rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// POST: Create a new item (e.g., matching a signup or form submission)
app.post('/api/items', async (req, res) => {
  try {
    const { name, email } = req.body;
    const newEntry = await db.query(
      'INSERT INTO items (name, email) VALUES ($1, $2) RETURNING *',
      [name, email]
    );
    res.json(newEntry.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});