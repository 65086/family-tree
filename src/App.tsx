import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Auth } from './components/auth/authIndex';
import { FamilyTree } from './components/familyTree/familyTreeIndex';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/family-tree" element={<FamilyTree />} />


        </Routes>
      </Router>
    </div>
  );
}

export default App;
