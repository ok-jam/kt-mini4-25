import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookList from './pages/BookList';
import BookCreate from './pages/BookCreate';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/create" element={<BookCreate />} />
        <Route path="/detail/:id" element={<BookDetail />} />
        <Route path="/update/:id" element={<BookUpdate />} />
      </Routes>
    </Router>
  );
}

export default App;