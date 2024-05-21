import React from 'react'
import { cn } from '@/lib/utils'
import Navbar from './Navbar'

function History() {
  return (
    <div class="w-screen h-screen bg-radial-gradient">
      <Navbar />
      <div class="w-full h-36 flex flex-col mt-14 ml-40">
        <h1 class="h-28 w-1/2 mb-0 text-transparent text-8xl bg-clip-text bg-gradient-to-r from-fuchsia-300 to-fuchsia-900 inline-block">Hello Binga</h1>
        <p class='text-white mt-0'><span class='text-fuchsia-500'>156h</span> de Moodage</p>
      </div>
    </div>
  )
}
export default History