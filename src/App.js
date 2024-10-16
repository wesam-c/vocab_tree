import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import VocabTreePage from './pages/VocabTreePage';
import Landing from './pages/Landing';
import SignInPage from './pages/SignIn';
import SignUpPage from './pages/SignUp';
import BlogPage from './pages/Blog';
import ForgetPasswordPage from './components/ForgetPassword';
import ProfilePage from './pages/Profile';
import RequireAuth from "./context/RequireAuth";
import CardPage from './pages/Cards';
import { ThemeProvider } from './context/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/vocabTreePage" element={
            <RequireAuth>
              <VocabTreePage />
            </RequireAuth>
          } />
          <Route path="/SignIn" element={<SignInPage />} />
          <Route path="/SignUp" element={<SignUpPage />} />
          <Route path="/Blog" element={<BlogPage />} />
          <Route path="/ForgetPassword" element={<ForgetPasswordPage />} />
          <Route path="/profile" element={
            <RequireAuth>
              <ProfilePage />
            </RequireAuth>
          } />
          <Route path="/cards" element={
            <RequireAuth>
              <CardPage />
            </RequireAuth>
          } />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
