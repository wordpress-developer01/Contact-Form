const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

let submissions = [];

app.get('/', (req, res) => {
  res.json(submissions);
});

app.post('/contact', (req, res) => {
  const { name, lastname, email, message } = req.body;
  submissions.push({ name, lastname, email, message });
  console.log('📦 Получены данные:', req.body);

  // Вернуть одно сообщение
  res.status(200).json({ message: 'Thank you! The data has been received by the server.' });
});



app.listen(PORT, () => {
  console.log(`✅ Сервер работает на http://localhost:${PORT}`);
});
