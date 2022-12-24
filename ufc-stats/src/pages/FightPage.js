import React, { useState, useEffect } from 'react';

const FightPage = () => {
    const [Fight, setFight] = useState([]);
    const [FighterStats, setFighterStats] = useState([]);
    const [Fighters, setFighters] = useState([]);
    useEffect(() => {
        fetch('https://api.sportsdata.io/v3/mma/stats/json/Fight/1100?key=d5bf379ab61e488d9b81de7d86bae8ea')
        //head
        .then(response => response.json())
        //body (function)
        .then(data => {
        setFight(data);
        setFighterStats(data.FightStats);
        setFighters(data.Fighters);
        
        }
    );

    }, [])

    return (
        <div>
            {FighterStats.map( (FighterStats) => {
                return (
                <div className='py-10 px-5 ' key={FighterStats.FighterId} >
                    FightStats: {FighterStats.LastName}
                </div>
                
                );
                
             })}

             {Fighters.map( (Fighters) => {
                return (
                <div className='py-10 px-5 ' key={Fighters.FighterId} >
                    Fighters: {Fighters.PreFightNoContests}
                </div>
                
                );
                
             })}

        </div>
    )
}

export default FightPage