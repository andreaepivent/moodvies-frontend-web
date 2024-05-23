import React from 'react'
import MoodCarousel from './MoodCarousel'
import Navbar from './Navbar'
import CollectionCarousel from './CollectionCarousel'


function History() {
  
  return (
    <div className="h-screen bg-radial-gradient flex flex-col items-center justify-around">
      <Navbar />
      <div className="w-full h-36 flex flex-col">
        <h1 className="h-28 w-1/2 mb-0 ml-40 text-transparent text-8xl bg-clip-text bg-gradient-to-r from-fuchsia-300 to-fuchsia-900 inline-block">Hello Louis</h1>
        <p className='text-white mt-0 ml-40'><span className='text-fuchsia-500'>156h</span> de Moodage</p>
      </div>
      <div className='w-screen flex justify-center'> 
        <MoodCarousel  />
      </div>
      <div className='w-[80%] h-[5%] flex justify-between border-b'>
        <h2 className='text-white text-xl mb-3 flex flex-col justify-end'>Collection</h2>
        <h3 className='text-white text-xl font-thin mb-3 flex flex-col justify-end'>last watched</h3>
      </div>
      <CollectionCarousel />
    </div> 
  )
}


export default History