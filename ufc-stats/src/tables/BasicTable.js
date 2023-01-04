import React, { useMemo, useState } from 'react'
import { useTable, usePagination, useRowSelect, useGlobalFilter } from 'react-table'
import { COLUMNS, GROUPED_COLUMNS } from './Columns'
import FIGHTER_LIST_DATA from './FIGHTER_LIST_DATA'
import { useNavigate } from "react-router-dom";
import { GlobalFilter } from './GlobalFilter';
import TableSummaryText from '../components/TableSummaryText';


const BasicTable = () => {
    //Note: Was going to make a api call to get data but useMemo is only happy when I copied the data from the api into a json file

    const navigate = useNavigate();

    //This is so the page does not have to re-render every time and redo all of the logic. Improves performance
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => FIGHTER_LIST_DATA, [])
    
    //useTable hook that destructures properties from tableInstance, they are hooks from the table libary to make a table
    const { 
        getTableProps, 
        getTableBodyProps, 
        headerGroups, 
        footerGroups,
        page, 
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        gotoPage,
        pageCount,
        setPageSize,
        state,
        setGlobalFilter,
        prepareRow,
    } = useTable({
        columns,
        data
    },
        useGlobalFilter,
        usePagination,
        useRowSelect,
    )

    const { pageIndex, pageSize } = state
    const { globalFilter } = state

    const navigateToFighterPage = (rowId) => {
        navigate(`/FighterPage/${rowId.original.FighterId}`);
    };

    return (
        <div className='flex justify-center flex-col w-full'>
            <div className='flex justify-between pb-4'>
                <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
                <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>
                    {
                        [10, 25, 50].map((pageSize) => (
                            <option key={pageSize} value={pageSize}>
                                View {pageSize}
                            </option>
                        ))
                    }
                </select>
            </div>
            <table {...getTableProps()} >
                {/* Header */}
                <thead className='bg-gray-300 '>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                        <th {...column.getHeaderProps()} className='p-4'>
                            {column.render('Header')}
                        </th>
                    ))}
                    </tr>
                ))}
                </thead>
                {/* Body */}
                <tbody {...getTableBodyProps()} className='text-center'>
                {page.map(row => {
                    prepareRow(row)
                    return (
                    <tr {...row.getRowProps()} className='hover:bg-gray-200 odd:bg-white even:bg-slate-50' onClick={()=> navigateToFighterPage(row)}>
                        {row.cells.map(cell => {
                        return (
                            <td {...cell.getCellProps()} className='py-4'>
                                {cell.render('Cell')}
                            </td>
                        );
                        })}
                    </tr>
                    )
                })}
                </tbody>
            </table>
            <div className='flex flex-row justify-between pt-4'>
                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage} className='hover:text-red-600 duration-500'>{'<<'}</button>
                <button onClick={() => previousPage()} disabled={!canPreviousPage} className='hover:text-red-600 duration-500'>Previous</button>
                <div>
                    {pageIndex + 1} / {pageOptions.length}
                </div>
                <button onClick={() => nextPage()} disabled={!canNextPage} className='hover:text-red-600 duration-500'>Next</button>
                <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage} className='hover:text-red-600 duration-500'>{'>>'}</button>
            </div>
            <div className='pt-4'>
                Page: {' '}
                <input type='number' defaultValue={pageIndex + 1} className='border border-gray-800 w-min'
                onChange={e=> {
                    const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                    gotoPage(pageNumber)
                }} />
            </div>
            <TableSummaryText />
        </div>

    )
}

export default BasicTable



