import React, { useState } from 'react';

const Flashcard = ({ word, type, definition }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`border rounded-lg p-4 text-sm cursor-pointer transition-transform transform hover:scale-105 shadow-lg flex items-center justify-center ${
        isFlipped ? 'bg-gray-200' : 'bg-white'
      }`}
      style={{
        width: '250px',
        height: '180px',
        textAlign: 'center',
      }}
      onClick={flipCard}
    >
      {!isFlipped ? (
        <div className="text-3xl font-extrabold text-lime-700">{word}</div>
      ) : (
        <div className="text-balck">
            <div className="mt-2 text-2xl font-extrabold">{definition}</div>
            <div className="text-sm font-semibold mt-5">Type: {type}</div>
        </div>
      )}
    </div>
  );
};

export default Flashcard;
