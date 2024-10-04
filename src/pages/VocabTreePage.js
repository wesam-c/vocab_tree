import React, { useState } from 'react';
import Header from '../components/Header';
import Add from '../components/TheFlashcards/Add';
import Flashcard from '../components/TheFlashcards/Flashcard';

const VocabTreePage = () => {
  const [flashcards, setFlashcards] = useState([]);

  const addFlashcard = (newCard) => {
    setFlashcards([...flashcards, newCard]);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-24 px-4">
        {/* Add Flashcard Form */}
        <Add addFlashcard={addFlashcard} />

        {/* Flashcard Display Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {flashcards.map((card, index) => (
            <Flashcard
              key={index}
              word={card.word}
              type={card.type}
              definition={card.definition}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VocabTreePage;
