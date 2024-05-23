import React from 'react'
import { Button } from '../ui/button'
import Navbar from './Navbar'

function Platforms() {
  return (
    <div className="w-screen h-screen bg-radial-gradient flex flex-col items-center">
      <Navbar />
      <div className="w-full h-36 flex flex-col mt-3">
        <h1 className="h-28 w-1/2 mb-0 ml-40 text-transparent text-8xl bg-clip-text bg-gradient-to-r from-fuchsia-300 to-fuchsia-900 inline-block">Hello Louis</h1>
      </div>
      <Button variant='gradientPurple' className='text-white' >Add a new platform</Button>
    </div>
  )
}

export default Platforms