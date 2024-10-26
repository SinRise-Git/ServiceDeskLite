const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();

const port = 3000;
const staticPath = path.resolve(__dirname, 'public');

app.use(express.static(staticPath));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(staticPath, 'index.html')); 
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});