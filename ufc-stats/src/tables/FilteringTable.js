import React, { useMemo } from 'react'
import useFetch from '../components/UseFetch';
import { useTable, useGlobalFilter, useFilters } from 'react-table'
import { COLUMNS, GROUPED_COLUMNS } from './Columns'
import FIGHTER_LIST_DATA from './FIGHTER_LIST_DATA'
import { GlobalFilter } from './GlobalFilter';


const FilteringTable = () => {
    //Note: Was going to make a api call to get data but useMemo is only happy when I copied the data from the api into a json file

    //This is so the page does not have to re-render every time and redo all of the logic. Improves performance
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => FIGHTER_LIST_DATA, [])
    //For column Filter
    // const defaultColumn = useMemo(() => {
    //     return{
    //         Filter: ColumnFilter
    //     }
    // }, [])
    
    //useTable hook that destructures properties from tableInstance, they are hooks from the table libary to make a table
    const { 
        getTableProps, 
        getTableBodyProps, 
        headerGroups, 
        footerGroups,
        rows, 
        prepareRow,
        state,
        setGlobalFilter,
    } = useTable({
        columns,
        data,
        //For column Filter
        // defaultColumn
    }, 
        //For column Filter
        // useFilters,
        useGlobalFilter
    )

    const { globalFilter } = state

    return (
        <div className='flex justify-center'>
            <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
            <table {...getTableProps()} className='w-3/4 '>
                {/* Header */}
                <thead className='bg-gray-300 '>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                        <th {...column.getHeaderProps()} className='p-4'>
                            {column.render('Header')}
                            {/* Column Filter */}
                            {/* <div>
                                {column.canFilter ? column.render('Filter') : null}
                            </div> */}
                        </th>
                    ))}
                    </tr>
                ))}
                </thead>
                {/* Body */}
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
                {/* Footer */}
                <tfoot className='bg-gray-300 font-bold text-center'>
                    {
                        footerGroups.map(footerGroup => (
                            <tr {...footerGroup.getFooterGroupProps() } className='w-full'>
                                {
                                    footerGroup.headers.map(column => (
                                        <td {...column.getFooterGroupProps} className='p-4'>
                                            {column.render('Footer')}
                                        </td>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </tfoot>
            </table>
        </div>

    )
}

export default FilteringTable



