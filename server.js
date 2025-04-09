import express from 'express';

const app = express();
const port = 3000;

app.get('/api/welcome', (req, res) => {
  res.header('Welcome-message', 'Welcome to our api');
  res.send('Welcome');
});

app.get('/api/headers', (req, res) => {
  res.send(req.headers);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
