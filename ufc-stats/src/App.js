import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import FetchTest from './components/FetchTest';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
 
    <Router>
      <div>
        <NavBar />
        <div>
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/FetchTest" element={<FetchTest />}/>
          </Routes>
        </div>
      </div>
    </Router>

  );
}

export default App;
