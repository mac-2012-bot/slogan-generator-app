import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [currentSlogan, setCurrentSlogan] = useState("Escreve qualquer coisa e eu dou-te um slogan!");

  const generateSlogan = () => {
    if (!inputText.trim()) {
      setCurrentSlogan("Por favor, escreve qualquer coisa primeiro!");
      return;
    }

    // Base de dados de slogans genéricos
    const genericSlogans = [
      `Transforma "${inputText}" em sucesso!`,
      `"${inputText}" é a tua nova paixão.`,
      `Inova com "${inputText}" hoje.`,
      `"${inputText}" leva-te mais longe.`,
      `"${inputText}": a tua marca de excelência.`,
      `"${inputText}" é a chave do teu futuro.`,
      `"${inputText}" inspira todos à tua volta.`,
      `"${inputText}": simples, direto, eficaz.`,
      `"${inputText}" é a tua próxima grande história.`,
      `"${inputText}" - onde a inovação começa.`
    ];

    const randomIndex = Math.floor(Math.random() * genericSlogans.length);
    setCurrentSlogan(genericSlogans[randomIndex]);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      generateSlogan();
    }
  };

  return (
    <div className="app">
      <div className="slogan-card">
        <h1>🤖 Gerador de Slogans</h1>
        <p className="slogan-display">{currentSlogan}</p>
        <div className="input-area">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Escreve aqui o teu tema..."
            onKeyPress={handleKeyPress}
          />
          <button onClick={generateSlogan}>Gerar Slogan</button>
        </div>
      </div>
    </div>
  );
}

export default App;