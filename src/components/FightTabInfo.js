import React, { useState } from 'react';

const FightTabInfo = (props) => {
    const [openTab, setOpenTab] = useState(1);
    
    const showWinner = (fighterWin) => {
        if(fighterWin){
            return(
                <div>
                    WIN
                </div>
            );
        }
        if(!fighterWin){
            return(
                <div>
                    LOST
                </div>
            );
        }
    };

    return (
        <div className='pt-8'>
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-center max-w-xl">
                    <ul className="flex space-x-2 font-Table font-bold text-xl text-gray-400">
                        <li>
                            <button
                                onClick={() => setOpenTab(1)}
                                className="inline-block px-4 py-2 hover:text-gray-600 duration-500"
                            >
                                Stats
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => setOpenTab(2)}
                                className="inline-block px-4 py-2 hover:text-gray-600 duration-500"
                            >
                                Odds
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => setOpenTab(3)}
                                className="inline-block px-4 py-2 hover:text-gray-600 duration-500"
                            >
                                Rounds
                            </button>
                        </li>
                    </ul>
                    <div className="p-3 mt-6 w-full font-Table">
                        <div className={openTab === 1 ? "block" : "hidden"}>
                            <h1 className='font-bold text-center'>STRIKES</h1>
                            <div className='flex flex-row justify-center'>
                                <p className='text-red-600'>{props.RedFighterStats?.TotalStrikesAttempted}</p>
                                <p className='px-4'>ATTEMPTED</p>
                                <p className='text-blue-600'>{props.BlueFighterStats?.TotalStrikesAttempted}</p>
                            </div>
                            <div className='flex flex-row justify-center'>
                                <p className='text-red-600'>{props.RedFighterStats?.TotalStrikesLanded}</p>
                                <p className='px-4'>LANDED</p>
                                <p className='text-blue-600'>{props.BlueFighterStats?.TotalStrikesLanded}</p>
                            </div>
                            <div className='flex flex-row justify-center pb-2'>
                                <p className='text-red-600'>{props.RedFighterStats?.Knockdowns}</p>
                                <p className='px-4'>KNOCKDOWNS</p>
                                <p className='text-blue-600'>{props.BlueFighterStats?.Knockdowns}</p>
                            </div>
                            
                            <h1 className='font-bold text-center'>TAKEDOWNS</h1>
                            <div className='flex flex-row justify-center'>
                                <p className='text-red-600'>{props.RedFighterStats?.TakedownsAttempted}</p>
                                <p className='px-4'>ATTEMPTED</p>
                                <p className='text-blue-600'>{props.BlueFighterStats?.TakedownsAttempted}</p>
                            </div>
                            <div className='flex flex-row justify-center'>
                                <p className='text-red-600'>{props.RedFighterStats?.TakedownsLanded}</p>
                                <p className='px-4'>LANDED</p>
                                <p className='text-blue-600'>{props.BlueFighterStats?.TakedownsLanded}</p>
                            </div>
                            <div className='flex flex-row justify-center'>
                                <p className='text-red-600'>{props.RedFighterStats?.TakedownAccuracy}{"%"}</p>
                                <p className='px-4'>ACCURACY</p>
                                <p className='text-blue-600'>{props.BlueFighterStats?.TakedownAccuracy}{"%"}</p>
                            </div>
                            <div className='flex flex-row justify-center'>
                                <p className='text-red-600'>{props.RedFighterStats?.TakedownsSlams}</p>
                                <p className='px-4'>SLAMS</p>
                                <p className='text-blue-600'>{props.BlueFighterStats?.TakedownsSlams}</p>
                            </div>
                            <div className='flex flex-row justify-center pb-2'>
                                <p className='text-red-600'>{props.RedFighterStats?.SlamRate}{"%"}</p>
                                <p className='px-4'>SLAM RATE</p>
                                <p className='text-blue-600'>{props.BlueFighterStats?.SlamRate}{"%"}</p>
                            </div>
                            
                            <h1 className='font-bold text-center'>GROUND</h1>
                            <div className='flex flex-row justify-center'>
                                <p className='text-red-600'>{props.RedFighterStats?.Submissions}</p>
                                <p className='px-4'>SUBMISSIONS</p>
                                <p className='text-blue-600'>{props.BlueFighterStats?.Submissions}</p>
                            </div>
                            <div className='flex flex-row justify-center'>
                                <p className='text-red-600'>{props.RedFighterStats?.TimeInControl}{"s"}</p>
                                <p className='px-4'>CONTROL TIME</p>
                                <p className='text-blue-600'>{props.BlueFighterStats?.TimeInControl}{"s"}</p>
                            </div>
                            <div className='flex flex-row justify-center'>
                                <p className='text-red-600'>{props.RedFighterStats?.Advances}</p>
                                <p className='px-4'>ADVANCES</p>
                                <p className='text-blue-600'>{props.BlueFighterStats?.Advances}</p>
                            </div>
                            <div className='flex flex-row justify-center pb-2'>
                                <p className='text-red-600'>{props.RedFighterStats?.Reversals}</p>
                                <p className='px-4'>REVERSALS</p>
                                <p className='text-blue-600'>{props.BlueFighterStats?.Reversals}</p>
                            </div>
                        </div>

                        <div className={openTab === 2 ? "block" : "hidden"}>
                            <h1 className='font-bold text-center'>MONEYLINE</h1>
                            <div className='flex flex-row justify-center pb-2'>
                                <p className='text-red-600'>{props.RedFighter?.Moneyline}</p>
                                <p className='px-4'>ODDS</p>
                                <p className='text-blue-600'>{props.BlueFighter?.Moneyline}</p>
                            </div>
                            <h1 className='font-bold text-center'>DRAFT KINGS</h1>
                            <div className='flex flex-row justify-center pb-2'>
                                <p className='text-red-600'>{props.RedFighterStats?.FantasyPoints}</p>
                                <p className='px-4'>FANTASY POINTS</p>
                                <p className='text-blue-600'>{props.BlueFighterStats?.FantasyPoints}</p>
                            </div>
                        </div>

                        <div className={openTab === 3 ? "block" : "hidden"}>
                            <h1 className='font-bold text-center'>WINS</h1>
                            <div className='flex flex-row justify-center pb-2'>
                                <p className='text-red-600'>{showWinner(props.RedFighterStats?.FirstRoundWin)}</p>
                                <p className='px-4'>ROUND 1</p>
                                <p className='text-blue-600'>{showWinner(props.BlueFighterStats?.FirstRoundWin)}</p>
                            </div>

                            <div className='flex flex-row justify-center pb-2'>
                                <p className='text-red-600'>{showWinner(props.RedFighterStats?.SecondRoundWin)}</p>
                                <p className='px-4'>ROUND 2</p>
                                <p className='text-blue-600'>{showWinner(props.BlueFighterStats?.SecondRoundWin)}</p>
                            </div>

                            <div className='flex flex-row justify-center pb-2'>
                                <p className='text-red-600'>{showWinner(props.RedFighterStats?.ThirdRoundWin)}</p>
                                <p className='px-4'>ROUND 3</p>
                                <p className='text-blue-600'>{showWinner(props.BlueFighterStats?.ThirdRoundWin)}</p>
                            </div>

                            <div className='flex flex-row justify-center pb-2'>
                                <p className='text-red-600'>{showWinner(props.RedFighterStats?.FourthRoundWin)}</p>
                                <p className='px-4'>ROUND 4</p>
                                <p className='text-blue-600'>{showWinner(props.BlueFighterStats?.FourthRoundWin)}</p>
                            </div>

                            <div className='flex flex-row justify-center pb-2'>
                                <p className='text-red-600'>{showWinner(props.RedFighterStats?.FifthRoundWin)}</p>
                                <p className='px-4'>ROUND 5</p>
                                <p className='text-blue-600'>{showWinner(props.BlueFighterStats?.FifthRoundWin)}</p>
                            </div>

                            <div className='flex flex-row justify-center pb-2'>
                                <p className='text-red-600'>{showWinner(props.RedFighterStats?.DecisionWin)}</p>
                                <p className='px-4'>DECISION WIN</p>
                                <p className='text-blue-600'>{showWinner(props.BlueFighterStats?.DecisionWin)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FightTabInfo