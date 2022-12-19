import React from 'react'
import logo from '../imgs/fight-site-icon.png';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div>
      
    <ul className="flex flex-row flex-wrap justify-between bg-gray-300  w-full h-fit " >
        <li className="flex justify-left">
            <img src={logo} className="p-3 " alt="Logo" />
        </li>
        <div className='flex justify-center'>
            <li>
                <a className="inline-block border border-gray-300 rounded hover:border-gray-300 text-red-500 font-bold text-2xl hover:bg-gray-500 duration-500 p-7" href="/">Home</a>
            </li>
            <li>
                <a className="inline-block border border-gray-300 rounded hover:border-gray-300 text-red-500 font-bold text-2xl hover:bg-gray-500 duration-500 p-7" href="/FetchTest">FetchTest</a>
            </li>
        </div>
        <div>
            {/* For search bar maybe */}
        </div>
      </ul>
    </div>
  )
}

export default NavBar