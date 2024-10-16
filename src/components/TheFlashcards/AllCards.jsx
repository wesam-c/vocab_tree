import React from 'react';

// Language abbreviations
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

const Cards = () => {
  // Retrieve flashcards from local storage
  const flashcards = JSON.parse(localStorage.getItem('flashcards')) || [];

  return (
    <div className="container mx-auto" style={{ maxWidth: '900px' }}>
      <h2 className="text-xl font-bold text-lime-700 dark:text-slate-200 text-center mt-4">Saved Flashcards</h2>
      <table className="min-w-full border-collapse border border-gray-300 mt-4 rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-lime-700 dark:bg-cyan-800 text-white">
            <th className="border border-gray-300 p-2 text-center text-2xl dark:text-slate-300">Word</th>
            <th className="border border-gray-300 p-2 text-center text-2xl dark:text-slate-300" >Definition</th>
            <th className="border border-gray-300 p-2 text-center text-2xl dark:text-slate-300">Type</th>
            
          </tr>
        </thead>
        <tbody>
          {flashcards.map((flashcard, index) => (
            <tr key={index} className="even:bg-white odd:bg-gray-100 dark:even:bg-gray-400 dark:odd:bg-gray-300">
              <td className="border border-gray-300 p-2 font-bold text-center ">
                {flashcard.word} ({languageAbbreviations[flashcard.wordLanguage]})
              </td>
              <td className="border border-gray-300 p-2 font-bold text-center">
                {flashcard.definition} ({languageAbbreviations[flashcard.definitionLanguage]})
              </td>
              <td className="border border-gray-300 p-2 text-center">{flashcard.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cards;
