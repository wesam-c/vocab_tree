import React, { useState } from 'react';

const Add = ({ addFlashcard }) => {
  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState('');
  const [type, setType] = useState('verb'); // Default to 'verb'
  const [isExpanded, setIsExpanded] = useState(false); // To toggle the form

  const handleSubmit = (e) => {
    e.preventDefault();
    if (word && definition && type) {
      addFlashcard({ word, definition, type });
      setWord('');
      setDefinition('');
      setType('verb'); // Reset to default after submission
      // Removed setIsExpanded(false) to keep the form open
    }
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded); // Toggle between open/close states
  };

  return (
    <div className="max-w-lg mx-auto">
      {/* Button to toggle expansion */}
      <button
        onClick={toggleExpand}
        className="bg-lime-700 text-white p-2 rounded-lg w-24 text-sm hover:bg-lime-600 transition-all"
      >
        {isExpanded ? 'Close' : 'Add +'} {/* Change button text depending on form state */}
      </button>

      {/* Conditional rendering of the form */}
      {isExpanded && (
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
      )}
    </div>
  );
};

export default Add;
