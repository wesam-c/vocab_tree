import React, { useState } from 'react';

const Flashcard = ({ word, type, definition }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`border rounded p-4 text-sm w-full cursor-pointer ${
        isFlipped ? 'bg-gray-100' : 'bg-white'
      }`}
      onClick={flipCard}
    >
      {!isFlipped ? (
        <div className="text-lg font-bold">{word}</div>
      ) : (
        <div>
          <div className="text-sm font-semibold">Type: {type}</div>
          <div className="mt-2">{definition}</div>
        </div>
      )}
    </div>
  );
};

export default Flashcard;
