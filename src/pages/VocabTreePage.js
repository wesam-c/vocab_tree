import React, { useState } from 'react';
import Header from '../components/Header';
import Add from '../components/TheFlashcards/Add';

const VocabTreePage = () => {
  const [flashcards, setFlashcards] = useState([]);

  const addFlashcard = (newCard) => {
    setFlashcards([...flashcards, newCard]);
  };

  return (
    <div className="min-h-screen bg-lime-200 dark:bg-gray-800">
      <Header />
      <div className="pt-24 px-2">
        {/* Add Flashcard Form */}
        <Add addFlashcard={addFlashcard} />

       
      </div>
    </div>
  );
};

export default VocabTreePage;
