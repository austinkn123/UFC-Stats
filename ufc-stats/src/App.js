import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import CareerStats from './components/CareerStats';
import EventPage from './components/EventPage';
import FightPage from './components/FightPage';
import FightListPage from './components/FightListPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
 
    <Router>
      <div>
        <NavBar />
        <div>
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/CareerStats" element={<CareerStats />}/>
            <Route path="/EventPage" element={<EventPage />}/>
            <Route path="/FightPage" element={<FightPage />}/>
            <Route path="/FightListPage" element={<FightListPage />}/>
          </Routes>
        </div>
      </div>
    </Router>

  );
}

export default App;
