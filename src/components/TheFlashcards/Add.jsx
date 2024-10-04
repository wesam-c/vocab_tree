import React, { useState } from 'react';

const Add = ({ onAdd }) => {
    const [word, setWord] = useState('');
    const [translation, setTranslation] = useState('');
    const [type, setType] = useState('verb');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd({ word, translation, type });
        setWord('');
        setTranslation('');
    };

    return (
        <form onSubmit={handleSubmit} className="mt-8 flex items-center justify-center space-x-4 bg-slate-400/10 backdrop-blur-lg p-4 rounded-lg shadow-lg w-full max-w-3xl mx-auto">
            <div>
                <input 
                    type="text" 
                    placeholder="Enter word" 
                    value={word} 
                    onChange={(e) => setWord(e.target.value)} 
                    required 
                    className="border rounded p-2 text-sm w-full"
                />
            </div>
            <div>
                <input 
                    type="text" 
                    placeholder="Enter translation" 
                    value={translation} 
                    onChange={(e) => setTranslation(e.target.value)} 
                    required 
                    className="border rounded p-2 text-sm w-full"
                />
            </div>
            <div>
                <select 
                    value={type} 
                    onChange={(e) => setType(e.target.value)} 
                    className="border rounded p-2 text-sm w-full"
                >
                    <option value="verb">Verb</option>
                    <option value="adj">Adjective</option>
                    <option value="adverb">Adverb</option>
                </select>
            </div>
            <button 
                type="submit" 
                className="bg-lime-900 text-white py-2 px-4 rounded hover:bg-lime-700"
            >
                Add Word
            </button>
        </form>
    );
};

export default Add;
