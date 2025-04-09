import express from 'express';

const app = express();
const port = 3000;

// Middleware för att kunna läsa JSON i request body
app.use(express.json());

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

// Uppdatera endast namn på en användare
let users = [
  { id: 1, name: 'Anna' },
  { id: 2, name: 'Erik' },
  { id: 3, name: 'Maria' },
];

app.patch('/api/users/:id', (req, res) => {
  const userID = parseInt(req.params.id);

  const result = users.find((user) => user.id === userID);
  console.log(result);
  console.log(users);

  // Updatera namn med body request name:
  result.name = req.body.name;

  console.log(result);
  console.log(users);
  res.send(result);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
