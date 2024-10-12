import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import AuthProvider from './context/AuthContext';// Importing AuthProvider as default (exported as default in AuthContext)
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Wrapping the entire app with AuthProvider to provide global access to authentication context */}
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
