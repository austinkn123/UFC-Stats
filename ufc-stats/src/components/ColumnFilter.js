import React from 'react'

export const ColumnFilter = ({ column }) => {
    //Destructure filter value
    const { filterValue, setFilter } = column
    return (
        <div>
            Search: {' '}
            <input value={filterValue || ''} onChange={(e) => setFilter(e.target.value)} className='border-2 border-gray-800'/>
        </div>
    )
}
