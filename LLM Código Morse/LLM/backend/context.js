const axios = require('axios');
require('dotenv').config();

async function getContextualizedInfo(info) {
  if (!info || typeof info !== "string" || info.trim() === "") {
    return "Erro: texto inválido fornecido.";
  }

  const prompt = `Transcreva fielmente o seguinte conteúdo para código Morse:\n\n"${info}"`;

  try {
    const response = await axios.post(
      process.env.GEMINI_API_ENDPOINT || 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent',
      {
        contents: [
          {
            role: "user",
            parts: [{ text: prompt }]
          }
        ]
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.GEMINI_API_KEY}`,
          'Content-Type': 'application/json'
        },
        params: {
          key: process.env.GEMINI_API_KEY
        }
      }
    );

    const result = response.data?.candidates?.[0]?.content?.parts?.[0]?.text;
    return result ? result.trim() : "Resposta vazia da API.";

  } catch (error) {
    console.error("Erro ao buscar contexto com Gemini:", error.message);
    console.log("Resposta completa:", error.response?.data || error);
    return "Erro ao buscar contexto adicional.";
  }
}

module.exports = { getContextualizedInfo };
