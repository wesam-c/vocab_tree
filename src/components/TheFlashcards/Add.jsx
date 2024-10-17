import React, { useState, useEffect } from 'react';
import { FaTrash } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';

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
  const { isDarkMode, toggleTheme } = useTheme();

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
      <div className={`p-3.5  rounded-3xl shadow-lg mt-2.5 ${isDarkMode ? 'bg-gray-600 ' : 'bg-white'}`}>
        <h2 className="text-2xl font-bold text-center mb-3 text-lime-700 dark:text-slate-100">Add New Flashcard</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* First row: Word, Definition, and Type */}
          <div className="flex space-x-2">
            {/* Word Input */}
            <input
              type="text"
              className="border rounded p-2 text-sm w-1/2 focus:outline-none focus:ring-2 focus:ring-lime-500 dark:focus:ring-yellow-400 dark:bg-gray-100"
              placeholder="Word"
              value={word}
              onChange={(e) => setWord(e.target.value)}
            />

            {/* Definition Input */}
            <input
              type="text"
              className="border rounded p-2 text-sm w-1/2 focus:outline-none focus:ring-2 focus:ring-lime-500 dark:focus:ring-yellow-400 dark:bg-gray-100"
              placeholder="Definition"
              value={definition}
              onChange={(e) => setDefinition(e.target.value)}
            />

            {/* Type Selector */}
            <select
              className="border rounded p-2 text-sm w-1/3 focus:outline-none focus:ring-2 focus:ring-lime-500 dark:focus:ring-yellow-400 dark:bg-gray-100"
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
              className="border rounded p-2 text-sm w-1/2 focus:outline-none focus:ring-2 focus:ring-lime-500 dark:focus:ring-yellow-400 dark:bg-gray-100"
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
              className="border rounded p-2 text-sm w-1/2 focus:outline-none focus:ring-2 focus:ring-lime-500 dark:focus:ring-yellow-400 dark:bg-gray-100"
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
              className="bg-lime-700 dark:bg-yellow-500 dark:hover:bg-yellow-400 text-white text-xl p-2 rounded w-1/3 hover:bg-lime-600 transition-all"
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
const Flashcard = ({ word, type, definition, wordLanguage, definitionLanguage, onDelete, isFlipped, onFlip }) => {
  return (
    <div
      className={` rounded-3xl p-4 text-sm cursor-pointer transition-transform transform hover:scale-105 shadow-lg flex items-center justify-center relative ${
        isFlipped ? 'bg-gray-200 dark:bg-gray-400' : 'bg-gray-100 dark:bg-gray-500'
      }`}
      style={{
        width: '200px',
        height: '160px',
        textAlign: 'center',
      }}
      onClick={onFlip} // Call onFlip when the card is clicked
    >
      {!isFlipped ? (
        <div className="text-3xl font-extrabold text-lime-700 dark:text-white flex items-center justify-center ">
          {word}
          <span className="text-xs text-gray-500 ml-2 dark:text-yellow-200">({languageAbbreviations[wordLanguage]})</span>
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
        className="absolute bottom-2 right-2 text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-600"
        title="Delete Flashcard"
      >
        <FaTrash size={17} />
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
  const [flippedCards, setFlippedCards] = useState({}); // Store flip state for each card
  const { isDarkMode } = useTheme();
  // Load flashcards from local storage when the component mounts
  useEffect(() => {
    const storedFlashcards = JSON.parse(localStorage.getItem('flashcards'));
    if (storedFlashcards) {
      setFlashcards(storedFlashcards);
      // Initialize flip states for loaded flashcards
      const initialFlippedStates = {};
      storedFlashcards.forEach((_, index) => {
        initialFlippedStates[index] = false;
      });
      setFlippedCards(initialFlippedStates);
    }
  }, []);

  const addFlashcard = (newFlashcard) => {
    const updatedFlashcards = [...flashcards, newFlashcard];
    setFlashcards(updatedFlashcards);
    localStorage.setItem('flashcards', JSON.stringify(updatedFlashcards)); // Save to local storage
    setFlippedCards((prevState) => ({ ...prevState, [updatedFlashcards.length - 1]: false })); // Initialize flip state for the new card
  };

  const deleteFlashcard = (indexToDelete) => {
    const updatedFlashcards = flashcards.filter((_, index) => index !== indexToDelete);
    setFlashcards(updatedFlashcards);
    localStorage.setItem('flashcards', JSON.stringify(updatedFlashcards)); // Update local storage
    setFlippedCards((prevState) => {
      const newState = { ...prevState };
      delete newState[indexToDelete]; // Remove flip state for the deleted card
      return newState;
    });
  };

  const flipCard = (index) => {
    setFlippedCards((prevState) => ({
      ...prevState,
      [index]: !prevState[index], // Toggle flip state for the specific card
    }));
  };

  const maxCardsPerRow = 5; // Changed to 5 cards per row
  const [firstRow, otherRows] = reorderFlashcards(flashcards, maxCardsPerRow); // Reorder cards

  return (
    <div className="container mx-auto">
      <Add addFlashcard={addFlashcard} />
      <div className="mt-6 space-y-4">
        {/* Display the first row of flashcards */}
        <div className="flex justify-center flex-wrap gap-4">
          {firstRow.map((flashcard, index) => (
            <Flashcard
              key={index}
              {...flashcard}
              onDelete={() => deleteFlashcard(flashcards.indexOf(flashcard))}
              isFlipped={flippedCards[flashcards.indexOf(flashcard)] || false}
              onFlip={() => flipCard(flashcards.indexOf(flashcard))}
              isDarkMode={isDarkMode}
            />
          ))}
        </div>
        {/* Display the remaining rows of flashcards */}
        {otherRows.length > 0 && (
          <div className="flex justify-center flex-wrap gap-4">
            {otherRows.map((flashcard, index) => (
              <Flashcard
                key={index}
                {...flashcard}
                onDelete={() => deleteFlashcard(flashcards.indexOf(flashcard))}
                isFlipped={flippedCards[flashcards.indexOf(flashcard)] || false}
                onFlip={() => flipCard(flashcards.indexOf(flashcard))}
                isDarkMode={isDarkMode}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FlashcardApp;
