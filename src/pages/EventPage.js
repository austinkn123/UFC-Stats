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

    })

    const showWinner = (fighterWin) => {
        if(fighterWin.Winner){
            return(
                <div>
                    WINNER
                </div>
            );
        }
    };

    const navigateToFightPage = (fightId) => {
        navigate(`/FightPage/${fightId}`);
    };

    // Tried to find a better way to insert a div between looping through a map function but ended up looping through the odds
    // and evens seperately. Couldn't find a better way :(
    return (
        <div>
            <div className=' bg-black font-NavBarFont font-semibold text-7xl text-center text-white underline decoration-red-600 p-32'>
                {event.Name}
            </div>
            <div className='py-8 px-16'>
                <div className='font-NavBarFont font-bold text-red-600 text-5xl underline decoration-black'>
                    EVENT FIGHTS:
                </div>
                {fights.map( (fights) => {
                return (
                <div 
                    className='flex justify-between py-8 px-16 my-8 border shadow hover:shadow-lg' 
                    key={fights.FightId} 
                    onClick={()=> navigateToFightPage(fights.FightId)}
                >
                    {/* Only 2 fighters per fight so not too bad for performance and runtime? */}
                    {fights.Fighters.map( (fighters, index) => {
                        if(index === 0){
                            return(
                                <div className='font-NavBarFont'>
                                    <div className=' font-semibold text-black underline decoration-red-600 text-4xl'>
                                        {fighters.FirstName}{" "}{fighters.LastName}
                                    </div>
                                    <div className='font-Table text-center text-gray-500 text-xl mt-2'>
                                        {fighters.PreFightWins}{"-"}{fighters.PreFightLosses}{"-"}{fighters.PreFightDraws}
                                    </div>
                                    <div className='bg-red-600 text-center text-white text-xl mt-2'>
                                        {showWinner(fighters)}
                                    </div>
                                </div>
                            );
                        }
                        return null;
                    })}
                    
                    <div className='font-Table text-center pt-6'>
                        <div className='font-NavBarFont font-semibold text-black text-2xl underline decoration-red-600 '>
                            VERSUS
                        </div>
                        
                        <div className='text-gray-500'>
                            <div className='px-4'>
                                Rounds: {fights.Rounds}
                            </div>
                        </div>
                    </div>
                    {fights.Fighters.map( (fighters, index) => {
                        if(index === 1){
                            return(
                                <div className='font-NavBarFont'>
                                    <div className=' font-semibold text-black underline decoration-red-600 text-4xl'>
                                        {fighters.FirstName}{" "}{fighters.LastName}
                                    </div>
                                    <div className='font-Table text-center text-gray-500 text-xl mt-2'>
                                        {fighters.PreFightWins}{"-"}{fighters.PreFightLosses}{"-"}{fighters.PreFightDraws}
                                    </div>
                                    <div className='bg-red-600 text-center text-white text-xl mt-2'>
                                        {showWinner(fighters)}
                                    </div>
                                </div>
                            );
                        }
                        return null;
                    })}
                    
                </div>
                
                );
                
             })}
             
            </div>
            
        </div>
    )
}

export default EventPage