import React from 'react'
import useFetch from '../components/UseFetch';

const EventList = () => {
    const { data: eventList } = useFetch('https://api.sportsdata.io/v3/mma/scores/json/Schedule/UFC/2022?key=d5bf379ab61e488d9b81de7d86bae8ea');

  return (
    <div>
        {eventList.map( (eventList) => {
            return (
              <div className='py-10 px-5 ' key={eventList.EventId} >
                {eventList.EventId}
                {eventList.Name}
                {eventList.Season}
                {eventList.DateTime}
              </div>
            
            );
            
      })}
    </div>
  )
}

export default EventList