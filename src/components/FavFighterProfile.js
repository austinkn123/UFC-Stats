import React from 'react'

const FavFighterProfile = (props) => {
  return (
    <div className='flex flex-row justify-between bg-slate-100 shadow hover:shadow-md pt-4'>
        <div className='text-9xl text-bold text-center pl-7 py-7 font-NavBarFont text-red-600'>
            {props.rank}
        </div>
        <img src={props.Profile} className='object-contain h-48 w-96 ' alt="fighterIcon" />
        <div className='pr-7 py-7 text-center '>
            <h1 className='font-NavBarFont font-medium text-red-600 text-2xl'>
                {props.name}
            </h1>
            <p className='font-Table'>{props.summary}</p>
        </div>
    </div>
  )
}

export default FavFighterProfile