const express = require('express');
const routes = require('./routes'); // Assuming routes.js is in the same directory
const app = express();

app.use(express.json());
app.use(routes); // Mount the routes at /api
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
}); 