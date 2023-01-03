import React, { useState, useEffect } from 'react';
import BasicTable from '../tables/BasicTable';
import FilteringTable from '../tables/FilteringTable';
import PaginationTable from '../tables/PaginationTable';
import RowSelection from '../tables/RowSelection';
import SortingTable from '../tables/SortingTable';
import useFetch from '../components/UseFetch';

const FightListPage = () => {
  // const { data: fighterList } = useFetch('https://api.sportsdata.io/v3/mma/scores/json/Fighters?key=d5bf379ab61e488d9b81de7d86bae8ea');

  return (
    <div className='p-12'>
      <BasicTable />

    </div>

  )
}
export default FightListPage

