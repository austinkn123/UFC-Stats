import { format } from 'date-fns'
import { ColumnFilter } from './ColumnFilter'

export const COLUMNS = [
    {
        Header: 'Id',
        Footer: 'Id',
        accessor: 'FighterId',
    },
    {
        Header: 'First Name',
        Footer: 'First Name',
        accessor: 'FirstName',
    },
    {
        Header: 'Last Name',
        Footer: 'Last Name',
        accessor: 'LastName',
    },
    {
        Header: 'Nick Name',
        Footer: 'Nick Name',
        accessor: 'Nickname',
    },
    {
        Header: 'Date of Birth',
        Footer: 'Date of Birth',
        accessor: 'BirthDate',
        Cell: ({ value }) => {
            return format(new Date(value), 'MM/dd/yyyy')
        },
    },
    {
        Header: 'W',
        Footer: 'W',
        accessor: 'Wins',
    },
    {
        Header: 'L',
        Footer: 'L',
        accessor: 'Losses',
    },
    {
        Header: 'Ht',
        Footer: 'Ht',
        accessor: 'Height',
        Cell: ({ value }) => {
            return value + "\""
        },
    },
    {
        Header: 'Wt',
        Footer: 'Wt',
        accessor: 'Weight',
        Cell: ({ value }) => {
            return value + "lbs"
        },
    },
    {
        Header: 'Reach',
        Footer: 'Reach',
        accessor: 'Reach',
        Cell: ({ value }) => {
            return value + "\""
        },
    },
]

export const GROUPED_COLUMNS = [
    {
        Header: 'Id',
        Footer: 'Id',
        accessor: 'FighterId'
    },
    {
        Header: 'Name',
        Footer: 'Name', 
        columns: [
            {
                Header: 'First Name',
                Footer: 'First Name',
                accessor: 'FirstName'
            },
            {
                Header: 'Last Name',
                Footer: 'Last Name',
                accessor: 'LastName'
            },
            {
                Header: 'Nick Name',
                Footer: 'Nick Name',
                accessor: 'Nickname'
            },
        ]
    },
    {
        Header: 'Info',
        Footer: 'Info',
        columns: [
            {
                Header: 'Date of Birth',
                Footer: 'Date of Birth',
                accessor: 'BirthDate'
            },
            {
                Header: 'Ht (cm)',
                Footer: 'Ht (cm)',
                accessor: 'Height'
            },
            {
                Header: 'Wt (lbs)',
                Footer: 'Wt (lbs)',
                accessor: 'Weight'
            },
            {
                Header: 'Reach (cm)',
                Footer: 'Reach (cm)',
                accessor: 'Reach'
            },
        ]
    },
]