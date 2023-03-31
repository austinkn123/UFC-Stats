import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import fighterRightSide from '../imgs/fighter-right-side.jpg'
import fighterLeftSide from '../imgs/fighter-left-side.jpg'
import FightTabInfo from '../components/FightTabInfo';
import FightSummaryText from '../components/FightSummaryText';

const FightPage = () => {
    const { id } = useParams();
    // const navigate = useNavigate();

    const [Fight, setFight] = useState([]);
    const [FighterStats, setFighterStats] = useState([]);
    const [Fighters, setFighters] = useState([]);
    useEffect(() => {
        fetch(`https://api.sportsdata.io/v3/mma/stats/json/Fight/${id}?key=d5bf379ab61e488d9b81de7d86bae8ea`)
        //head
        .then(response => response.json())
        //body (function)
        .then(data => {
        setFight(data);
        setFighterStats(data.FightStats);
        setFighters(data.Fighters);
        console.log(Fight);
        }
    );

    })

    const showWinner = (fighterWin) => {
        if(fighterWin?.Winner){
            return(
                <div className='bg-red-600 w-fit p-2 pt-2 m-4 mt-0'>
                    WIN
                </div>
            );
        }
    };

    return (
        <div className='py-8 px-16'>
            <div className='flex justify-between w-full font-NavBarFont font-bold text-4xl '>
                <div className='flex flex-row border-b-4 border-red-600 w-1/2'>
                    <div>
                       <h1>
                            {Fighters[0]?.FirstName}{" "}{Fighters[0]?.LastName}
                        </h1> 
                        <h2 className='text-2xl text-gray-400'>
                            {Fighters[0]?.PreFightWins}{"-"}{Fighters[0]?.PreFightLosses}{"-"}{Fighters[0]?.PreFightDraws}
                        </h2>
                    </div>
                    
                    <div className='flex justify-center font-NavBarFont text-center text-white text-2xl '>
                        {showWinner(Fighters[0])}
                    </div>
                </div>
                <div className='flex flex-row justify-end border-b-4 border-blue-600 w-1/2 '>
                    <div className='font-NavBarFont text-center text-white text-2xl '>
                        {showWinner(Fighters[1])}
                    </div>
                    <div>
                        <h1>
                            {Fighters[1]?.FirstName}{" "}{Fighters[1]?.LastName}
                        </h1>
                        <h2 className='text-right text-2xl text-gray-400'>
                            {Fighters[1]?.PreFightWins}{"-"}{Fighters[1]?.PreFightLosses}{"-"}{Fighters[1]?.PreFightDraws}
                        </h2>
                    </div>
                    
                    
                </div>
                
            </div>
            <div className='flex justify-between w-full '>
                <div className='w-1/3'>
                    <img src={fighterLeftSide} className='object-contain ' alt="fighterIcon" />
                    
                </div>
                <div className='w-1/3'>
                    <FightTabInfo
                     RedFighterStats={FighterStats[0]}
                     BlueFighterStats={FighterStats[1]}
                     RedFighter={Fighters[0]}
                     BlueFighter={Fighters[1]}
                    />
                </div>
                <div className='w-1/3'>
                    <img src={fighterRightSide} className='object-contain h-max' alt="fighterIcon" />
                </div>
            </div>
            <FightSummaryText />
        </div>
    )
}

export default FightPage
