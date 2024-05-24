import React, { useState } from "react";
import { Button } from "../ui/button";
import NavbarProfile from "./NavbarProfile";
import { platformsLogo } from "../data";
import AddPlatform from "./AddPlatform";

function Platforms() {
  const [logos, setLogos] = useState(platformsLogo)
  const [showModal, setShowModal] = useState(false)
  const regex = /platform\/(.*)/

  const deleteLogos = (e) => {
    const newLogos = logos.filter((logo) => logo.src != e.target.previousSibling.src.match(regex)[1])
    setLogos(newLogos)
  }

  const addNewPlatform = () => {
    setShowModal(true)
  }

  const platforms = logos.map((logo, index) => {
    return (
      <div key={index} className="relative image-container overflow-hidden h-48 w-48 flex justify-center items-center ">
        <img
          className="h-36 w-36 object-cover rounded-2xl"
          src={`/logo-platform/${logo.src}`}
          alt={`${logo.name} poster`}
        />
        <div 
          className='absolute top-4 right-5 w-6 h-6 font-extrabold text-xs text-white bg-transparent border rounded-full flex justify-center items-center group hover:cursor-pointer hover:bg-slate-50 hover:bg-opacity-30 hover:text-black'
          onClick={(e) => {deleteLogos(e)}}
          >
            X
        </div>
      </div>
    )
  })

  const handleImageClicked = (imageClicked) => {
    console.log(imageClicked)
    /*imageClicked.forEach((platform) => {
      if (!logos.some((logo) => logo.src === platform.src)) {
        setLogos((prevLogos) => [...prevLogos, platform]);
      }
    });*/
  };
    

  return (
    <>
      <div className="w-screen h-screen bg-radial-gradient flex flex-col justify-around items-center">
      <div className="fixed top-7 h-[25%] w-full">
        <NavbarProfile />
        <div className="w-full flex flex-col items-center mt-10 md:flex-row md:justify-between md:items-end">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 to-fuchsia-900 text-5xl mb-4 md:mb-0 md:pl-20">
            Hello Louis
          </h1>
        </div>
      </div>
      {showModal ? <AddPlatform handleImageClicked={handleImageClicked} setShowModal={setShowModal} showModal={showModal} logos={logos} setLogos={setLogos} regex={regex}/> : 
      <div className="mt-36 flex flex-col items-center">
        <div className="w-70% flex flex-wrap">
          {platforms}
        </div>
        <Button 
          variant="gradientPurple" 
          className="text-white mt-20"
          onClick={() => {addNewPlatform()}}
          >
          Add a new platform
        </Button>
      </div>
      }
      </div>
    </>
  );
}

export default Platforms;
