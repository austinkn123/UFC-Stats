import React from 'react'
import logo from '../imgs/fight-site-icon.png';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className='font-NavBarFont'>
    {/* nav bar divided into 3 different sections */}
    <ul className="flex flex-row flex-wrap justify-between bg-gray-100 w-full h-fit border-b border-gray-300 rounded" >
      {/* section 1 */}
        <li className="flex justify-left border-x border-gray-300 rounded">
            <img src={logo} className="p-4 mt-1 h-20" alt="Logo" />
        </li>
        {/* section 2 */}
        <div className='flex justify-center flex-wrap text-red-600 font-medium text-2xl'>
            <li>
                <a className="inline-block hover:bg-gray-200 duration-500 p-7" href="/">Home</a>
            </li>
            <li>
                <a className="inline-block hover:bg-gray-200 duration-500 p-7" href="/FightListPage">FightListPage</a>
            </li>
            <li>
                <a className="inline-block hover:bg-gray-200 duration-500 p-7" href="/EventList">EventList</a>
            </li>
        </div>
        {/* section 3 */}
        <div>
            {/* Github link icon */}
            {/* For search bar maybe */}
        </div>
      </ul>
    </div>
  )
}

export default NavBar