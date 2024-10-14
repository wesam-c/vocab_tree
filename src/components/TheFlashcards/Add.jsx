import React, { useState } from 'react';

// Add Component
const Add = ({ addFlashcard }) => {
  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState('');
  const [type, setType] = useState('verb'); // Default to 'verb'

  const handleSubmit = (e) => {
    e.preventDefault();
    if (word && definition && type) {
      addFlashcard({ word, definition, type });
      setWord('');
      setDefinition('');
      setType('verb'); // Reset to default after submission
    }
  };

  return (
    <div className="max-w-lg mx-auto">
      {/* Always Render the Form */}
      <div className="p-6 bg-white rounded-lg shadow-lg mt-4">
        <h2 className="text-2xl font-bold text-center mb-4 text-lime-700">Add New Flashcard</h2>
        
        {/* Using flexbox to place all elements in a row */}
        <form onSubmit={handleSubmit} className="flex space-x-2 items-center">
          {/* Word Input */}
          <input
            type="text"
            className="border rounded p-2 text-sm w-1/3 focus:outline-none focus:ring-2 focus:ring-lime-500"
            placeholder="Word"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />

          {/* Definition Input */}
          <input
            type="text"
            className="border rounded p-2 text-sm w-1/3 focus:outline-none focus:ring-2 focus:ring-lime-500"
            placeholder="Definition"
            value={definition}
            onChange={(e) => setDefinition(e.target.value)}
          />

          {/* Type Selector */}
          <select
            className="border rounded p-2 text-sm w-1/4 focus:outline-none focus:ring-2 focus:ring-lime-500"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="verb">Verb</option>
            <option value="adjective">Adjective</option>
            <option value="adverb">Adverb</option>
            <option value="noun">Noun</option>
            <option value="pronoun">Pronoun</option>
            <option value="preposition">Preposition</option>
            <option value="conjunction">Conjunction</option>
            <option value="interjection">Interjection</option>
          </select>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-lime-700 text-white p-2 rounded w-1/4 hover:bg-lime-600 transition-all"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

// Flashcard Component
const Flashcard = ({ word, type, definition, onDelete }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`border rounded-lg p-4 text-sm cursor-pointer transition-transform transform hover:scale-105 shadow-lg flex items-center justify-center relative ${
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
        <div className="text-black">
          <div className="mt-2 text-2xl font-extrabold">{definition}</div>
          <div className="text-sm font-semibold mt-5">Type: {type}</div>
        </div>
      )}
      {/* Delete Icon */}
      <button
        onClick={(e) => {
          e.stopPropagation(); // Prevent triggering flip card
          onDelete(); // Call the delete function
        }}
        className="absolute bottom-2 right-2 text-red-600 hover:text-red-800"
        title="Delete Flashcard"
      >
        🗑️ {/* Delete icon (you can replace this with an SVG or any other icon) */}
      </button>
    </div>
  );
};

// Parent Component to manage flashcards
const FlashcardApp = () => {
  const [flashcards, setFlashcards] = useState([]); // Initialize flashcards state

  // Function to add a new flashcard at the top of the list
  const addFlashcard = (newFlashcard) => {
    setFlashcards((prevFlashcards) => [newFlashcard, ...prevFlashcards]); // Add new flashcard to the top
  };

  // Function to delete a flashcard
  const deleteFlashcard = (indexToDelete) => {
    setFlashcards((prevFlashcards) =>
      prevFlashcards.filter((_, index) => index !== indexToDelete)
    );
  };

  return (
    <div className="container mx-auto">
      <Add addFlashcard={addFlashcard} />
      
      {/* Flashcard List */}
      <div className="mt-6 flex flex-wrap gap-4 justify-center">
        {flashcards.map((flashcard, index) => (
          <Flashcard 
            key={index} 
            word={flashcard.word} 
            type={flashcard.type} 
            definition={flashcard.definition} 
            onDelete={() => deleteFlashcard(index)} // Pass delete function
          />
        ))}
      </div>
    </div>
  );
};

export default FlashcardApp;
