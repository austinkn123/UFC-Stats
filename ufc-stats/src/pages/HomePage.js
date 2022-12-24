import React, { useState, useEffect } from 'react';
import {Routes, Route, useNavigate} from "react-router-dom";
import fighterList from '../imgs/fighterList.jpg';
import homePageBackground from '../imgs/homePageBackground.webp';
import { Slide } from 'react-slideshow-image';

const HomePage = () => {
  const navigate = useNavigate();

  const navigateToFighterList = () => {
    // 👇️ navigate to /contacts
    navigate('/FightListPage');
  };

  const navigateToEventList = () => {
    // 👇️ navigate to /contacts
    navigate('/EventList');
  };

  const navigateToPersonalFavs = () => {
    // 👇️ navigate to /contacts
    navigate('/PersonalFavs');
  };

  const images = [
        {fighterList},
        '../imgs/homePageBackground.webp',
        '../imgs/fighterList.jpg',
    ];

  return (
    <div className='flex justify-center flex-wrap '>
      <div className='w-full h-full '>
        <Slide className='mx-0'>
            <div className='bg-homePageBackground p-8 bg-no-repeat bg-cover h-screen'>
                
            </div>
            <div className='bg-homePageBackground2 p-8  bg-no-repeat bg-cover h-screen'>

            </div>
            <div className='bg-homePageBackground3 p-8  bg-no-repeat bg-cover h-screen'>

            </div>
        </Slide>
      </div>
      

      <div className='overflow-hidden w-full mb-16 mt-16 mx-16'>
        <button 
        className='bg-fightList w-full h-full bg-no-repeat bg-cover p-36 transform transition duration-1000 hover:scale-110 mb-16'
        onClick={navigateToFighterList}
        >
          <h1 className='text-9xl text-red-600 font-NavBarFont flex justify-start'>
            Fighters
          </h1>
        </button>
      </div>

      <div className='overflow-hidden w-full mb-16 mx-16'>
        <button 
        className='bg-fightEvent w-full h-full bg-no-repeat bg-cover bg-center p-36 transform transition duration-1000 hover:scale-110 mb-16'
        onClick={navigateToEventList}
        >
          <h1 className='text-9xl text-red-600 font-NavBarFont flex justify-start'>
            Events
          </h1>
        </button>
      </div>

      <div className='overflow-hidden w-full mb-16 mx-16'>
        <button 
        className='bg-personalFav w-full h-full bg-no-repeat bg-cover p-36 transform transition duration-1000 hover:scale-110 mb-16'
        onClick={navigateToPersonalFavs}
        >
          <h1 className='text-9xl text-red-600 font-NavBarFont flex justify-start'>
            My Favorite Fighters
          </h1>
        </button>
      </div>
      
    </div>
  )
}

export default HomePage