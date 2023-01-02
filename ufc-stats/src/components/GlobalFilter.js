import React, { useState } from 'react'
import { useAsyncDebounce } from 'react-table'

export const GlobalFilter = ({ filter, setFilter}) => {
    const [value, setValue] = useState(filter)
    const onChange = useAsyncDebounce(value => {
        setFilter(value || undefined)
    }, 1000)
    return (
        <div>
            Search: {' '}
            <input
                value={value || ''}
                onChange={e => {
                setValue(e.target.value);
                onChange(e.target.value);
                }}
                className='border-2 border-gray-800'
            />
        </div>
    )
}
