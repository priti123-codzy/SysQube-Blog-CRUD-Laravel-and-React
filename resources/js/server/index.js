// server/index.js

const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to serve static files
app.use(express.static(path.join(__dirname, '../public')));

// Simple route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
