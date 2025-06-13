const axios = require('axios');
require('dotenv').config();

async function getContextualizedInfo(info) {
  if (!info || typeof info !== "string" || info.trim() === "") {
    return "Erro: texto inválido fornecido.";
  }

  const prompt = `Dado o seguinte conteúdo: "${info}", transcreva todo o texto para a linguagem de
   código Morse, da maneira mais coerente e correta possível.`;

  try {
    const response = await axios.post(
      process.env.GEMINI_API_ENDPOINT || 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent',
      {
        model: "gemini-2.0-flash",
        messages: [{ role: "user", content: prompt }],
        max_tokens: process.env.MAX_TOKENS || 100,
        temperature: parseFloat(process.env.TEMPERATURE) || 0.7
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.GEMINI_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    if (response.data && response.data.choices && response.data.choices[0]) {
      return response.data.choices[0].message.content.trim();
    } else {
      console.error("Formato inesperado da resposta da API:", response.data);
      return "Erro ao processar a resposta da API.";
    }
  } catch (error) {
    console.error("Erro ao buscar contexto com Gemini:", error.message);
    console.log("Resposta completa:", error.response?.data || error);
    return "Erro ao buscar contexto adicional.";
  }
}

module.exports = { getContextualizedInfo };

