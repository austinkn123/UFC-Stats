import React from 'react'
import useFetch from '../components/UseFetch';
import { useNavigate } from "react-router-dom";

const EventList = () => {
  const { data: eventList } = useFetch('https://api.sportsdata.io/v3/mma/scores/json/Schedule/UFC/2022?key=d5bf379ab61e488d9b81de7d86bae8ea');

  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const navigate = useNavigate();

  const navigateToEventPage = (eventID) => {
      navigate(`/EventPage/${eventID}`);
  };

  return (
    <div className='text-center '>
      <div className='bg-black p-16 font-NavBarFont'>
        <h1 className=' font-semibold leading-tight text-8xl mt-0 mb-2 text-red-600 '>
          2022 EVENTS
        </h1>
        <p className='text-white text-xl px-48'>
          The UFC holds its events, or cards, almost every weekend (usually Saturday nights). There are multiple fights 
          during each event. Sometimes, more fights will be held during a particular event, sometimes less. Sometimes there 
          are more recognizable fighters fighting, sometimes less. During some events, we’ll see championship fights, during 
          some we won’t. Numbered UFC events are PPV, i.e. you have to buy a ticket to watch them. They feature the best fights on 
          the roster, with championship fights headlining the event. On average, numbered UFC events are held once per month.
          On the other hand, UFC Fight Nights are smaller types of events, usually held every weekend, that you can watch without 
          buying the PPV. They consist of somewhat “smaller” fights and rarely feature a championship fight.
        </p>
      </div>
        {eventList.map( (eventList) => {
            return (
              <div className='text-center py-10 px-5 border' key={eventList.EventId} onClick={()=> navigateToEventPage(eventList.EventId)} >
                {/* {eventList.EventId} */}
                <h1 className='font-NavBarFont font-semibold leading-tight text-5xl mt-0 mb-2 text-black underline decoration-red-600'>
                  {eventList.Name}
                </h1>
                <div className='font-NavBarFont font-semibold text-2xl text-gray-500 pt-2 pl-2'>
                  {/* {eventList.Day} */}
                  {`${monthNames[new Date(eventList.Day).getMonth()]} ${new Date(eventList.Day).getDate()}, ${new Date(eventList.Day).getFullYear()}`}
                </div>
              </div>
            
            );
            
      })}
    </div>
  )
}

export default EventList