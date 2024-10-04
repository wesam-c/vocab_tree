import React, { useState } from 'react';

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
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6 text-lime-700">Add New Flashcard</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Word Input */}
        <input
          type="text"
          className="border rounded p-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-lime-500"
          placeholder="Enter Word"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />

        {/* Definition Input */}
        <input
          type="text"
          className="border rounded p-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-lime-500"
          placeholder="Enter Definition"
          value={definition}
          onChange={(e) => setDefinition(e.target.value)}
        />

        {/* Type Selector */}
        <select
          className="border rounded p-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-lime-500"
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
          className="bg-lime-700 text-white p-2 rounded w-full hover:bg-lime-600 transition-all"
        >
          Add Flashcard
        </button>
      </form>
    </div>
  );
};

export default Add;
