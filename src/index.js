const express = require('express');

const app = express();

app.get('/', (request, response) => {
  return response.json({ message: 'Go Myke!'});
});

app.listen(3333);
