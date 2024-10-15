import React, { useState } from 'react';

// Abbreviations for languages
const languageAbbreviations = {
  English: 'EN',
  Spanish: 'ES',
  French: 'FR',
  German: 'DE',
  Arabic: 'AR',
  Chinese: 'ZH',
  Japanese: 'JA',
  Korean: 'KO',
  Russian: 'RU',
};

// Add Component
const Add = ({ addFlashcard }) => {
  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState('');
  const [type, setType] = useState('noun'); // Default to 'noun'
  const [wordLanguage, setWordLanguage] = useState('English'); // Default word language
  const [definitionLanguage, setDefinitionLanguage] = useState('English'); // Default definition language

  const handleSubmit = (e) => {
    e.preventDefault();
    if (word && definition) {
      addFlashcard({ word, definition, type, wordLanguage, definitionLanguage });
      setWord(''); // Reset word input
      setDefinition(''); // Reset definition input
      // Do not reset type and language selections
    }
  };

  const languageOptions = Object.keys(languageAbbreviations);

  return (
    <div className="max-w-lg mx-auto">
      <div className="p-3.5 bg-white rounded-lg shadow-lg mt-2.5">
        <h2 className="text-xl font-bold text-center mb-3 text-lime-700">Add New Flashcard</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* First row: Word, Definition, and Type */}
          <div className="flex space-x-2">
            {/* Word Input */}
            <input
              type="text"
              className="border rounded p-2 text-sm w-1/2 focus:outline-none focus:ring-2 focus:ring-lime-500"
              placeholder="Word"
              value={word}
              onChange={(e) => setWord(e.target.value)}
            />

            {/* Definition Input */}
            <input
              type="text"
              className="border rounded p-2 text-sm w-1/2 focus:outline-none focus:ring-2 focus:ring-lime-500"
              placeholder="Definition"
              value={definition}
              onChange={(e) => setDefinition(e.target.value)}
            />

            {/* Type Selector */}
            <select
              className="border rounded p-2 text-sm w-1/3 focus:outline-none focus:ring-2 focus:ring-lime-500"
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
          </div>

          {/* Second Row: Word Language and Definition Language */}
          <div className="flex space-x-2 mt-2 w-[74%]"> {/* This wraps the inputs */}
            {/* Word Language Selector */}
            <select
              className="border rounded p-2 text-sm w-1/2 focus:outline-none focus:ring-2 focus:ring-lime-500"
              value={wordLanguage}
              onChange={(e) => setWordLanguage(e.target.value)}
            >
              {languageOptions.map((lang) => (
                <option key={lang} value={lang}>
                  {lang} ({languageAbbreviations[lang]})
                </option>
              ))}
            </select>

            {/* Definition Language Selector */}
            <select
              className="border rounded p-2 text-sm w-1/2 focus:outline-none focus:ring-2 focus:ring-lime-500"
              value={definitionLanguage}
              onChange={(e) => setDefinitionLanguage(e.target.value)}
            >
              {languageOptions.map((lang) => (
                <option key={lang} value={lang}>
                  {lang} ({languageAbbreviations[lang]})
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-lime-700 text-white p-2 rounded w-1/3 hover:bg-lime-600 transition-all"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Flashcard Component
const Flashcard = ({ word, type, definition, wordLanguage, definitionLanguage, onDelete }) => {
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
        <div className="text-3xl font-extrabold text-lime-700 flex items-center justify-center">
          {word}
          <span className="text-xs text-gray-500 ml-2">({languageAbbreviations[wordLanguage]})</span>
        </div>
      ) : (
        <div className="text-black">
          <div className="mt-2 text-2xl font-extrabold">{definition}</div>
          <div className="text-xs text-gray-500">({languageAbbreviations[definitionLanguage]})</div>
          <div className="text-sm font-semibold mt-2">Type: {type}</div>
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

// Helper function to re-arrange flashcards for proper order
const reorderFlashcards = (flashcards, maxPerRow) => {
  // Get the last 'maxPerRow' cards for the first row (newest ones), rest go to the next row
  const firstRow = flashcards.slice(-maxPerRow);
  const otherRows = flashcards.slice(0, -maxPerRow);
  return [firstRow, otherRows];
};

// Parent Component to manage flashcards
const FlashcardApp = () => {
  const [flashcards, setFlashcards] = useState([]);

  const addFlashcard = (newFlashcard) => {
    setFlashcards((prevFlashcards) => [...prevFlashcards, newFlashcard]);
  };

  const deleteFlashcard = (indexToDelete) => {
    setFlashcards((prevFlashcards) =>
      prevFlashcards.filter((_, index) => index !== indexToDelete)
    );
  };

  const maxCardsPerRow = 4;
  const [firstRow, otherRows] = reorderFlashcards(flashcards, maxCardsPerRow); // Reorder cards

  return (
    <div className="container mx-auto">
      <Add addFlashcard={addFlashcard} />
      <div className="mt-6 space-y-4">
        {/* Display the first row of flashcards (the newest ones) */}
        <div className="grid grid-cols-4 gap-4">
          {firstRow.map((flashcard, index) => (
            <Flashcard
              key={index}
              word={flashcard.word}
              type={flashcard.type}
              definition={flashcard.definition}
              wordLanguage={flashcard.wordLanguage}
              definitionLanguage={flashcard.definitionLanguage}
              onDelete={() => deleteFlashcard(index)} // Index based on current rendering
            />
          ))}
        </div>
        {/* Display the remaining flashcards in subsequent rows */}
        {otherRows.length > 0 && (
          <div className="grid grid-cols-4 gap-4">
            {otherRows.map((flashcard, index) => (
              <Flashcard
                key={index + firstRow.length} // Ensure unique keys
                word={flashcard.word}
                type={flashcard.type}
                definition={flashcard.definition}
                wordLanguage={flashcard.wordLanguage}
                definitionLanguage={flashcard.definitionLanguage}
                onDelete={() => deleteFlashcard(index + firstRow.length)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FlashcardApp;
