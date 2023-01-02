import React, { useState, useEffect } from 'react';
import BasicTable from '../components/BasicTable';
import FilteringTable from '../components/FilteringTable';
import PaginationTable from '../components/PaginationTable';
import RowSelection from '../components/RowSelection';
import SortingTable from '../components/SortingTable';
import useFetch from '../components/UseFetch';

const FightListPage = () => {
  const { data: fighterList } = useFetch('https://api.sportsdata.io/v3/mma/scores/json/Fighters?key=d5bf379ab61e488d9b81de7d86bae8ea');
  
  // const sortNames = [...fighterList].sort((a, b) =>
  //   a.FirstName > b.FirstName ? 1 : -1,
  // );

  // const fighterNameWithA = fighterList.filter(fighter => {
  //   if(fighter.FirstName){
  //     if(fighter.FirstName.charAt(0) == 'A'){
  //       return fighter.FirstName;
  //     }
  //   }
  // }).sort((a, b) =>
  //   a.FirstName > b.FirstName ? 1 : -1,
  // );
  // console.log(fighterNameWithA)

  return (
    <div className='p-12'>
      {/* <BasicTable /> */}
      {/* <SortingTable /> */}
      {/* <FilteringTable /> */}
      {/* <PaginationTable /> */}
      <RowSelection />

    </div>

  )
}
export default FightListPage

      // {fighterNameWithA.map( (fightList) => {
      //       return (
      //         <div className='py-10 px-5 ' key={fightList.FighterId} >
      //           {/* {fightList.FighterId} */}
      //           {/* {fightList.FirstName.charAt(0)} */}
      //           {fightList.FirstName}
      //           {fightList.Nickname}
      //           {fightList.LastName}
      //           {fightList.BirthDate}
      //           {fightList.Height}
      //           {fightList.Weight}
      //           {fightList.Reach}
      //           {fightList.Wins}
      //           {fightList.Losses}
      //           {fightList.Draws}
      //           {fightList.NoContests}
      //           {fightList.TechnicalKnockouts}
      //           {fightList.TechnicalKnockoutLosses}
      //           {fightList.Submissions}
      //           {fightList.SubmissionLosses}
      //           {fightList.TitleWins}
      //           {fightList.TitleLosses}
      //           {fightList.TitleDraws}
      //           {/* {fightList.CareerStats.map( (CareerStats) => {
      //                   return(
      //                   <div> 
      //                       {CareerStats.DecisionPercentage} 
      //                   </div>
      //                   );
      //               })} */}
      //         </div>
            
      //       );
            
      // })}