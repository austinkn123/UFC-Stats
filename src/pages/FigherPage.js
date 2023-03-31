import React, { useState, useEffect } from 'react';
import {  useParams } from "react-router-dom";
import fighterIcon from "../imgs/fighter-icon.jpg"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const FigherPage = () => {
    // The useParams hook returns an object of key/value pairs of the dynamic params from the 
    // current URL that were matched by the <Route path>. Child routes inherit all params from their parent routes.
    const { id } = useParams();


    const [fighter, setFighter] = useState({});
    const [CareerStats, setCareerStats] = useState({});
    
    useEffect(() => {
        fetch(`https://api.sportsdata.io/v3/mma/scores/json/Fighter/${id}?key=d5bf379ab61e488d9b81de7d86bae8ea`)
        //head
        .then(response => response.json())
        //body (function)
        .then(data => {
        setFighter(data);
        setCareerStats(data.CareerStats);
        }
    );

    }, [])

    return (
        <div>
            {/* Header Area */}
            <div className='px-16 py-12 flex justify-between'>
                <div>
                    <h1 className='font-NavBarFont font-semibold leading-tight text-5xl mt-0 mb-2 text-red-600 '>
                        {fighter.FirstName}{' '}{fighter.LastName}
                    </h1>
                    <h1 className='font-NavBarFont font-semibold leading-tight text-2xl mt-0 mb-2 text-red-600 pb-4'>
                        {fighter.Nickname}
                    </h1>
                    <h1 className='font-NavBarFont font-semibold leading-tight text-2xl mt-0 mb-2 '>
                        {fighter.Wins}{'-'}{fighter.Losses}{'-'}{fighter.Draws}{'-'}{fighter.NoContests}{'  (W-L-D-NC)'}
                    </h1>
                </div>
                <img src={fighterIcon} className='object-contain h-48 w-96' alt="fighterIcon" />
                <div className='flex flex-row text-center '>
                    <h1 className='font-NavBarFont font-semibold leading-tight text-5xl px-8'>
                        <div className='underline decoration-red-600'>
                            {fighter.TechnicalKnockouts}
                        </div>
                        <div className='text-sm pt-8'>
                            WINS BY KNOCKOUT
                        </div>
                    </h1>
                    <h1 className='font-NavBarFont font-semibold leading-tight text-5xl px-8 border-x'>
                        <div className='underline decoration-red-600'>
                            {fighter.Submissions}
                        </div>
                        <div className='text-sm pt-8'>
                            WINS BY SUBMISSION
                        </div>
                    </h1>
                    <h1 className='font-NavBarFont font-semibold leading-tight text-5xl px-8 '>
                        <div className='underline decoration-red-600'>
                            {fighter.TitleWins}
                        </div>
                        <div className='text-sm pt-8'>
                            TITLE WINS
                        </div>
                    </h1>
                </div>
            </div>
            {/* Stats Area */}
            <div className='h-max bg-black p-16'>
                <h1 className='font-NavBarFont font-semibold leading-tight text-5xl mt-0 mb-2 text-red-600 '>
                        TITLE STATS
                    </h1>
                <div className='bg-white p-4 px-8 flex flex-row justify-between'>
                    <div className='flex flex-row'>
                        <h1 className='font-NavBarFont font-semibold text-5xl '>
                            {fighter.TitleWins}
                        </h1>
                        <h1 className='font-NavBarFont font-semibold text-2xl text-gray-500 pt-2 pl-2'>
                            TITLE WINS
                        </h1>
                    </div>
                    <div className='flex flex-row'>
                        <h1 className='font-NavBarFont font-semibold text-5xl '>
                            {fighter.TitleLosses}
                        </h1>
                        <h1 className='font-NavBarFont font-semibold text-2xl pt-2 pl-2 text-gray-500'>
                            TITLE LOSSES
                        </h1>
                    </div>
                    <div className='flex flex-row'>
                        <h1 className='font-NavBarFont font-semibold text-5xl '>
                            {fighter.TitleDraws}
                        </h1>
                        <h1 className='font-NavBarFont font-semibold text-2xl pt-2 pl-2 text-gray-500'>
                            TITLE DRAWS
                        </h1>
                    </div>
                </div>
                {/* Progress Bars */}
                <div className='pt-8 flex flex-row'>
                    {/* SS Progress Bar */}
                    <div className='bg-white pt-8 flex flex-row w-1/2'>
                        <div className='font-NavBarFont p-4 text-red-600 font-semibold w-1/2 h-full'>
                            <CircularProgressbar 
                            value={CareerStats.SigStrikeAccuracy} 
                            text={`${CareerStats.SigStrikeAccuracy}%`} 
                            styles={buildStyles({
                                strokeLinecap: "butt",
                                textColor: "#dc2626",
                                pathColor: "#dc2626",
                            })}
                        />
                        </div>
                        <div className='p-4 font-NavBarFont w-fit'>
                            <h1 className='font-semibold text-5xl underline decoration-red-600'>
                                STRIKING ACCURACY
                            </h1>
                            <p className='pt-4 text-gray-500'>
                                This percentage or "rate" stat is just like completion percentage in football or free throw percentage 
                                in basketball. It simply divides the number of significant strikes landed by the number attempted and 
                                produces an accuracy percentage. A reminder: significant strikes refer to all strikes at distance and 
                                power strikes in the clinch and on the ground. It does not include small, short strikes in the clinch 
                                and on the ground. 
                            </p>
                        </div>
                        
                    </div>
                    <div className='p-4'/>
                    {/* TD Progress Bar */}
                    <div className='bg-white pt-8 flex flex-row w-1/2'>
                        <div className='font-NavBarFont p-4 text-red-600 font-semibold w-1/2 h-full '>
                            <CircularProgressbar 
                            value={CareerStats.TakedownAverage} 
                            text={`${CareerStats.TakedownAverage}%`} 
                            styles={buildStyles({
                                strokeLinecap: "butt",
                                textColor: "#dc2626",
                                pathColor: "#dc2626",
                            })}
                        />
                        </div>
                        <div className='p-4 font-NavBarFont w-fit'>
                            <h1 className='font-semibold text-5xl underline decoration-red-600'>
                                TAKEDOWN ACCURACY
                            </h1>
                            <p className='pt-4 text-gray-500'>
                                This percentage or "rate" stat is an easy one to calculate. It simply divides the number of takedowns 
                                landed by the number attempted and produces an accuracy percentage. A quick note: some fans are more 
                                generous in calling successful takedowns than we are. A takedown must be established and put the 
                                attempter in an advantageous position to count.
                            </p>
                        </div>
                        
                    </div>
                </div>
                {/* TKO STATS */}
                <div className='pt-8 '>
                    <h1 className='font-NavBarFont font-semibold leading-tight text-5xl mt-0 mb-2 text-red-600 '>
                        TECHNICAL KNOCKOUT STATS
                    </h1>
                    <div className='bg-white p-4 px-8 flex flex-row justify-between'>
                        <div className='flex flex-row'>
                            <h1 className='font-NavBarFont font-semibold text-5xl '>
                                {fighter.TechnicalKnockouts}
                            </h1>
                            <h1 className='font-NavBarFont font-semibold text-2xl text-gray-500 pt-2 pl-2'>
                                TKO WINS
                            </h1>
                        </div>
                        <div className='flex flex-row'>
                            <h1 className='font-NavBarFont font-semibold text-5xl '>
                                {fighter.TechnicalKnockoutLosses}
                            </h1>
                            <h1 className='font-NavBarFont font-semibold text-2xl pt-2 pl-2 text-gray-500'>
                                TKO LOSSES
                            </h1>
                        </div>
                        <div className='flex flex-row'>
                            <h1 className='font-NavBarFont font-semibold text-5xl '>
                                {CareerStats.TechnicalKnockoutPercentage}{'%'}
                            </h1>
                            <h1 className='font-NavBarFont font-semibold text-2xl pt-2 pl-2 text-gray-500'>
                                TKO AVG
                            </h1>
                        </div>
                    </div>
                </div>
                {/* SUB STATS */}
                <div className='pt-8 '>
                    <h1 className='font-NavBarFont font-semibold leading-tight text-5xl mt-0 mb-2 text-red-600 '>
                        SUBMISSION STATS
                    </h1>
                    <div className='bg-white p-4 px-8 flex flex-row justify-between'>
                        <div className='flex flex-row'>
                            <h1 className='font-NavBarFont font-semibold text-5xl '>
                                {fighter.Submissions}
                            </h1>
                            <h1 className='font-NavBarFont font-semibold text-2xl text-gray-500 pt-2 pl-2'>
                                SUB WINS
                            </h1>
                        </div>
                        <div className='flex flex-row'>
                            <h1 className='font-NavBarFont font-semibold text-5xl '>
                                {fighter.SubmissionLosses}
                            </h1>
                            <h1 className='font-NavBarFont font-semibold text-2xl pt-2 pl-2 text-gray-500'>
                                SUB LOSSES
                            </h1>
                        </div>
                        <div className='flex flex-row'>
                            <h1 className='font-NavBarFont font-semibold text-5xl '>
                                {CareerStats.SubmissionAverage}{'%'}
                            </h1>
                            <h1 className='font-NavBarFont font-semibold text-2xl pt-2 pl-2 text-gray-500'>
                                SUB AVG
                            </h1>
                        </div>
                    </div>
                </div>
                {/* miscellaneous STATS */}
                <div className='pt-8 '>
                    <h1 className='font-NavBarFont font-semibold leading-tight text-5xl mt-0 mb-2 text-red-600 '>
                        MISCELLANEOUS STATS
                    </h1>
                    <div className='bg-white p-4 px-8 flex flex-row justify-between'>
                        <div className='flex flex-row'>
                            <h1 className='font-NavBarFont font-semibold text-5xl '>
                                {CareerStats.SigStrikesLandedPerMinute}{'%'}
                            </h1>
                            <h1 className='font-NavBarFont font-semibold text-2xl text-gray-500 pt-2 pl-2'>
                                SIG STRIKES PER MIN
                            </h1>
                        </div>
                        <div className='flex flex-row'>
                            <h1 className='font-NavBarFont font-semibold text-5xl '>
                                {CareerStats.KnockoutPercentage}{'%'}
                            </h1>
                            <h1 className='font-NavBarFont font-semibold text-2xl pt-2 pl-2 text-gray-500'>
                                KO AVG
                            </h1>
                        </div>
                        <div className='flex flex-row'>
                            <h1 className='font-NavBarFont font-semibold text-5xl '>
                                {CareerStats.DecisionPercentage}{'%'}
                            </h1>
                            <h1 className='font-NavBarFont font-semibold text-2xl pt-2 pl-2 text-gray-500'>
                                DEC AVG
                            </h1>
                        </div>
                    </div>
                </div>
                
            </div>


        </div>
    )
}

export default FigherPage