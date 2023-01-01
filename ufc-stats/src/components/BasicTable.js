import React, { useMemo } from 'react'
import useFetch from '../components/UseFetch';
import { useTable } from 'react-table'
import { COLUMNS } from './Columns'
import FIGHTER_LIST_DATA from './FIGHTER_LIST_DATA'


const BasicTable = () => {
    //Note: Was going to make a api call to get data but useMemo is only happy when I copied the data from the api into a json file

    //This is so the page does not have to re-render every time and redo all of the logic. Improves performance
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => FIGHTER_LIST_DATA, [])
    
    const tableInstance = useTable({
        columns,
        data
    })
    console.log("data")
    console.log(data)

    //Destructuring properties from tableInstance, they are hooks from the table libary to make a table
    const { 
        getTableProps, 
        getTableBodyProps, 
        headerGroups, 
        rows, 
        prepareRow,
    } = tableInstance

    return (
        <div className='flex justify-center p-12 '>
            <table {...getTableProps()} className='w-full'>
                <thead className='bg-gray-300'>
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
                <tbody {...getTableBodyProps()} className='text-center'>
                {rows.map(row => {
                    prepareRow(row)
                    return (
                    <tr {...row.getRowProps()} className='hover:bg-gray-200 odd:bg-white even:bg-slate-50'>
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
        </div>

    )
}

export default BasicTable



