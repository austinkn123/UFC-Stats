import React, { useState, useEffect } from 'react';
import BasicTable from '../tables/BasicTable';
import TableSummaryText from '../components/TableSummaryText';

const FightListPage = () => {

  return (
    <div className='px-16 py-12 font-Table'>
      <BasicTable />
      <TableSummaryText />
    </div>

  )
}
export default FightListPage
