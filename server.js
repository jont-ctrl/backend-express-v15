import express from 'express';

const app = express();
const port = 3000;

// Returnera en hälsning med res.header():
app.get('/api/welcome', (req, res) => {
  res.header('Welcome-message', 'Welcome to our api');
  res.send('Welcome');
});

// Returnera alla inkommande headers.
app.get('/api/headers', (req, res) => {
  res.send(req.headers);
});

// Skapa en ny route som returnerar ditt namn.
app.get('/api/name', (req, res) => {
  res.send('Bob');
});

// Använd req.params för att returnera ett personligt meddelande.
app.get('/api/greet/:name', (req, res) => {
  const name = req.params.name;

  res.json({ message: `Greetings ${name}` });
});

// Använd req.query för att hämta ett namn via ?name=Mandus
app.get('/api/greet', (req, res) => {
  const name = req.query.name;

  res.json({ message: `Hejsan, ${name}` });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
