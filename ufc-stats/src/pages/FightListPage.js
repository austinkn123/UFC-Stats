import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';

const FightListPage = () => {
  const [fighterList, setFighterList] = useState([]);

  useEffect(() => {
    fetch('https://api.sportsdata.io/v3/mma/scores/json/Fighters?key=d5bf379ab61e488d9b81de7d86bae8ea')
    //head
    .then(response => response.json())
    //body (function)
    .then(data => {
      // console.log(data);
      setFighterList(data);
      // setCareerStats(data.CareerStats);
      // console.log(CareerStats)
    }
    
  );

  }, [])


  return (
    <div>
      FightListPage
      {fighterList.map( (fightList) => {
            return (
              <div className='py-10 px-5 ' key={fightList.FighterId} >
                {fightList.FirstName}
                {fightList.LastName}
                {fightList.Nickname}
                {fightList.BirthDate}
                {fightList.Height}
                {fightList.Weight}
                {fightList.Reach}
                {fightList.Wins}
                {fightList.Losses}
                {fightList.Draws}
                {fightList.NoContests}
                {fightList.TechnicalKnockouts}
                {fightList.TechnicalKnockoutLosses}
                {fightList.Submissions}
                {fightList.SubmissionLosses}
                {fightList.TitleWins}
                {fightList.TitleLosses}
                {fightList.TitleDraws}
                {/* {fightList.CareerStats.map( (CareerStats) => {
                        return(
                        <div> 
                            {CareerStats.DecisionPercentage} 
                        </div>
                        );
                    })} */}
              </div>
            
            );
            
      })}

    </div>
  )
}
export default FightListPage