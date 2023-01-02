import React, { useMemo } from 'react'
import useFetch from '../components/UseFetch';
import { useTable, usePagination } from 'react-table'
import { COLUMNS, GROUPED_COLUMNS } from './Columns'
import FIGHTER_LIST_DATA from './FIGHTER_LIST_DATA'


const PaginationTable = () => {
    //Note: Was going to make a api call to get data but useMemo is only happy when I copied the data from the api into a json file

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
        prepareRow,
    } = useTable({
        columns,
        data
    },
    usePagination
    )

    const { pageIndex, pageSize } = state

    return (
        <div className='flex justify-center '>
            <table {...getTableProps()} className='w-3/4 '>
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
                {/* <tfoot className='bg-gray-300 font-bold text-center'>
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
                </tfoot> */}
            </table>
            <div>
                <div>
                    <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>
                        {
                            [10, 25, 50].map((pageSize) => (
                                <option key={pageSize} value={pageSize}>
                                    Show {pageSize}
                                </option>
                            ))
                        }
                    </select>
                    <div>
                        {pageIndex + 1} / {pageOptions.length}
                    </div>
                    <div>
                        | Got to Page: {' '}
                        <input type='number' defaultValue={pageIndex + 1}
                        onChange={e=> {
                            const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                            gotoPage(pageNumber)
                        }} />
                    </div>
                </div>
                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</button>
                <button onClick={() => nextPage()} disabled={!canNextPage}>Next</button>
                <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>{'>>'}</button>
            </div>
        </div>

    )
}

export default PaginationTable
