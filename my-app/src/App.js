import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import Inscription from './pages/Inscription';
import HomePage from './pages/HomePage';
import React from 'react';
import { useState } from 'react';
import './App.css';
import ListUsers from './pages/ListUsers';
import NotFound from './pages/NotFound';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);  

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navbar setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/home" element={<HomePage setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/users" element={<ListUsers />} />
          <Route path="/error" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
