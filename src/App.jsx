// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MemoriesPage from './pages/MemoriesPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/memories" element={<MemoriesPage />} />
      </Routes>
    </Router>
  );
}
