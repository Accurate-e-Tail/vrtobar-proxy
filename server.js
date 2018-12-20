const path = require('path');
const morgan = require('morgan');
const express = require('express');

const app = express();
const PORT = 3000;

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use(morgan('dev'));

// Start server
app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});
