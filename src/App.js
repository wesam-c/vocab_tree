import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import VocabTreePage from './pages/VocabTreePage';
import Landing from './pages/Landing';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/vocabTreePage" element={<VocabTreePage />} />
      </Routes>
    </Router>
  );
};

export default App;
