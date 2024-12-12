const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send({result: 'No CORS enabled here'});
});
app.get('/cors', (req, res) => {
  res.set('Access-Control-Allow-Origin', 'https://iv1201-cors-client-ed7087f7f03a.herokuapp.com/');
  res.set('Access-Control-Allow-Credentials', 'true');
  res.send({result: 'This has CORS enabled'});
});
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
