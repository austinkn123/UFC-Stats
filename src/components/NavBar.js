import React from 'react'
import logo from '../imgs/fight-site-icon.png';
import GithubIcon from "../imgs/Github-Icon.png"

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
                <a className="inline-block hover:bg-gray-200 duration-500 p-7" href="/">HOME</a>
            </li>
            <li>
                <a className="inline-block hover:bg-gray-200 duration-500 p-7" href="/FightListPage">Fighters</a>
            </li>
            <li>
                <a className="inline-block hover:bg-gray-200 duration-500 p-7" href="/EventList">Events</a>
            </li>
            <li>
                <a className="inline-block hover:bg-gray-200 duration-500 p-7" href="/PersonalFavs">Favorites</a>
            </li>
        </div>
        {/* section 3 */}
        <div className='mt-7 mr-1'>
          {/* Opens the link in the new tab */}
          <a href="https://github.com/austinkn123/UFC-Stats" target="_blank" rel="noreferrer">
            <img src={GithubIcon} className='object-contain h-8 w-16' alt="GithubIcon" />
          </a>
            
        </div>
      </ul>
    </div>
  )
}

export default NavBar