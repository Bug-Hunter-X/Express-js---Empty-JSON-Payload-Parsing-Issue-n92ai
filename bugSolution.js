const express = require('express');
const app = express();
app.use(express.json());
app.post('/data', (req, res) => {
  if (Object.keys(req.body).length === 0) {
    console.log('Empty JSON payload received');
    res.status(204).send(); // Send a 204 No Content response
  } else {
    console.log(req.body);
    res.send('OK');
  }
});
app.listen(3000, () => console.log('Server listening on port 3000'));