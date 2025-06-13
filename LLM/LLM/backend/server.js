const express = require('express');
const cors = require('cors');
const { textToMorse } = require('./morse');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Nova rota: /api/convert-to-morse
app.get('/api/convert-to-morse', (req, res) => {
  const { text } = req.query;

  if (!text) {
    return res.status(400).json({ message: 'O parâmetro "text" é obrigatório.' });
  }

  try {
    const morse = textToMorse(text);
    res.json({ morse });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao converter para código Morse', error: error.message });
  }
});

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
