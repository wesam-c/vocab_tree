import React from 'react';
import Header from '../components/Header';
import Add from '../components/TheFlashcards/Add';

const VocabTreePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-24"> {/* Padding to avoid overlap with fixed Header */}
        <Add />
      </div>
    </div>
  );
};

export default VocabTreePage;
