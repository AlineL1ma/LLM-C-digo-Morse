export const fetchContextualInfo = async (userText) => {
  try {
    const response = await fetch('http://localhost:3000/api/contextual-info', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: userText }),
    });

    if (!response.ok) {
      throw new Error('Erro ao buscar informações contextuais');
    }

    const data = await response.json();
    return data.contextualizedInfo; 
  } catch (error) {
    console.error(error);
    throw error;
  }
};
