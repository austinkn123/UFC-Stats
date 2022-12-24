import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import CareerStats from './pages/CareerStats';
import EventPage from './pages/EventPage';
import FightPage from './pages/FightPage';
import FightListPage from './pages/FightListPage';
import EventList from './pages/EventList';
import PersonalFavs from './pages/PersonalFavs';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
 
    <Router>
      <div className='min-h-screen flex flex-col'>
        <div>
          <NavBar />
        </div>
        
        <div className='flex-grow'>
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/CareerStats" element={<CareerStats />}/>
            <Route path="/EventPage" element={<EventPage />}/>
            <Route path="/FightPage" element={<FightPage />}/>
            <Route path="/FightListPage" element={<FightListPage />}/>
            <Route path="/EventList" element={<EventList />}/>
            <Route path="/PersonalFavs" element={<PersonalFavs />}/>
          </Routes>
        </div>
        <div className='pt-6  '>
          <Footer/>
        </div>
        
      </div>
    </Router>

  );
}

export default App;
