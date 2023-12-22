// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MeublesView from './views/MeublesView';
import LoginView from './views/LoginView';
import Navbar from './components/Navbar';
import MateriauDetails from './components/MateriauDetails'
import MeubleForm from './components/MeubleForm'
import { useState } from 'react'

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };
  return (
    <Router>
      <Navbar user={user} onLogout={handleLogout} />
      <div className="container mt-4">
      <Routes>
          <Route path="/" element={<MeublesView />} />
          <Route
            path="/login"
            element={<LoginView onLogin={handleLogin} />}
          />          
          <Route
            path="/meubles"
            element={<MeublesView user={user} />}
          />          
          <Route path="/ajouter" element={<MeubleForm />} />
          <Route path="/materiaux/:materiauId" element={<MateriauDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
