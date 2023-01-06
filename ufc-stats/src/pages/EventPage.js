import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";

const EventPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [event, setEvent] = useState([]);
    const [fights, setFights] = useState([]);
    useEffect(() => {
        fetch(`https://api.sportsdata.io/v3/mma/scores/json/Event/${id}?key=d5bf379ab61e488d9b81de7d86bae8ea`)
        //head
        .then(response => response.json())
        //body (function)
        .then(data => {
        setEvent(data);
        setFights(data.Fights);

        
        }
    );

    }, [])

    return (
        <div>
            {event.Name}
            {fights.map( (fights) => {
                return (
                <div className='py-10 px-5 ' key={fights.FightId} >
                    {fights.FightId}
                    {/* {fights.Rounds} */}
                    {fights.Fighters.map( (fighters) => {
                        return(
                        <div> 
                            {fighters.LastName} 
                        </div>
                        );
                    })}
                </div>
                
                );
                
             })}
        </div>
    )
}

export default EventPage