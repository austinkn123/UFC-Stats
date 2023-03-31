import React from 'react';
import {useNavigate} from "react-router-dom";
import { Slide } from 'react-slideshow-image';

const HomePage = () => {
  // Use navigate hook, uses link to navigate to different page
  const navigate = useNavigate();

  // Methods to navigate to different routes
  const navigateToFighterList = () => {
    navigate('/FightListPage');
  };

  const navigateToEventList = () => {
    navigate('/EventList');
  };

  const navigateToPersonalFavs = () => {
    navigate('/PersonalFavs');
  };

  return (
    <div className='flex justify-center flex-wrap '>
      <div className='w-full'>
        {/* Imported package to slide show */}
        <Slide arrows={false}>
            <div className='bg-homePageBackground bg-no-repeat bg-cover h-screen'>

            </div>
            <div className='bg-homePageBackground2 bg-no-repeat bg-cover h-screen'>

            </div>
            <div className='bg-homePageBackground3 bg-no-repeat bg-cover h-screen'>
                
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