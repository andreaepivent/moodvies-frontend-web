import React from 'react'
import NavLink from '../common/NavLink';
import LanguageSelect from '../common/LanguageSelect';


function Navbar() {

  return (
    <div className="w-full h-28 flex justify-around items-center">
      <div>
        <img src='/Logo-moodvie-letter.svg'></img>
      </div>
      <div className='flex justify-around w-1/2 border-b'>
        <NavLink 
          href='/profile/informations' 
          activeClassName='text-white p-4'
          nonActiveClassName='text-slate-500 p-4'>Personnal Informations</NavLink>
        <NavLink 
          href='/profile/history' 
          activeClassName='text-white p-4'
          nonActiveClassName='text-slate-500 p-4'>History</NavLink>
        <NavLink 
          href='/profile/platforms' 
          activeClassName='text-white p-4'
          nonActiveClassName='text-slate-500 p-4'>Preferred Platforms</NavLink>
      </div>
      <div>
        <LanguageSelect />
      </div>
    </div>
  )
}

export default Navbar