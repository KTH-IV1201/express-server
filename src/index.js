const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send({result: 'No CORS enabled here'});
});
app.get('/cors', (req, res) => {
  res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.send({result: 'This has CORS enabled'});
});
app.listen(8080, () => {
  console.log('listening on port 8080');
});
