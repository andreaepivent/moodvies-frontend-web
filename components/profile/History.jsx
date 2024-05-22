import React from 'react'
import MoodCarousel from './MoodCarousel'
import moods from '../data'
import Navbar from './Navbar'


function History() {
  const randomMoodIndex = () => {
    return moods[Math.round(Math.random() * moods.length) +1]
  }
  
  const moodsArray = Array.from({ length: 3 }, () => ({
    mood: randomMoodIndex(),
    note: Math.round(Math.random() * 10)
  }));  
  
  let filteredMoodsArray = []
  
  for (const m of moodsArray) {
    if (!filteredMoodsArray.some((e) => e.mood === m.mood)) {
      if (m.mood != undefined ) {
        filteredMoodsArray.push({mood: m.mood, count: 1})
      }
    } else {
      filteredMoodsArray[filteredMoodsArray.indexOf(filteredMoodsArray.find((e) => e.mood === m.mood))].count ++
    }
  }
  
  return (
    <div className="w-screen h-screen bg-radial-gradient">
      <Navbar />
      <div className="w-full h-36 flex flex-col mt-14 ml-40">
        <h1 className="h-28 w-1/2 mb-0 text-transparent text-8xl bg-clip-text bg-gradient-to-r from-fuchsia-300 to-fuchsia-900 inline-block">Hello Binga</h1>
        <p className='text-white mt-0'><span className='text-fuchsia-500'>156h</span> de Moodage</p>
      </div>
      <div className='w-full flex justify-center'> 
        <MoodCarousel filteredMoodsArray={filteredMoodsArray} />
      </div>
    </div> 
  )
}


export default History