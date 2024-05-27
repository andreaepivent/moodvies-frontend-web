import React, { useState } from "react";
import { Button } from "../ui/button";
import NavbarProfile from "./NavbarProfile";
import { platformsLogo } from "../data";
import AddPlatform from "./AddPlatform";
<<<<<<< HEAD
import NotePlatform from "./NotePlatform";
=======
import { useSelector } from "react-redux";
import ResponsiveNavbarProfile from "./ResponsiveNavbarProfile";
>>>>>>> c1f99c5eda3e5abc7c8c6640f2770a492a45ea27

function Platforms() {
  const user = useSelector((state) => state.user.value)

  const [logos, setLogos] = useState(platformsLogo); // State to manage the logos
  const [showModal, setShowModal] = useState(false); // State to manage the visibility of the modal
  const regex = /platform\/(.*)/; // Regular expression to extract platform names from the URL

  // Function to delete a logo
  const deleteLogos = (e) => {
    const newLogos = logos.filter((logo) => logo.src !== e.target.previousSibling.src.match(regex)[1]);
    setLogos(newLogos);
  };

  // Function to show the modal for adding a new platform
  const addNewPlatform = () => {
    setShowModal(true);
  };

  // Mapping over logos to create the platform elements
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
          onClick={(e) => deleteLogos(e)}
        >
          X
        </div>
      </div>
    );
  });

  // Function to handle the addition of new platforms (inverse data flow)
  const handleImageClicked = (imageClicked) => {
    imageClicked.forEach((platform) => {
      if (!logos.some((logo) => logo.src === platform.src)) {
        setLogos((prevLogos) => [...prevLogos, platform]);
        setShowModal(false); // Close the modal after adding the new platform
      }
    });
  };

  return (
    <>
      <div className="w-screen h-screen bg-radial-gradient flex flex-col justify-around items-center">
        {/* Navbar and header section */}
        <div className="fixed top-7 h-[25%] w-full">
          <ResponsiveNavbarProfile />
          <div className="w-full flex flex-col items-center mt-10 md:flex-row md:justify-between md:items-end">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 to-fuchsia-900 text-5xl mb-4 md:mb-0 md:pl-20">
              Hello {user.username}
            </h1>
          </div>
        </div>
        
        {/* Conditional rendering for modal and platform list */}
        {showModal ? (
          <AddPlatform 
            handleImageClicked={handleImageClicked} 
            setShowModal={setShowModal} 
            showModal={showModal} 
            logos={logos} 
            setLogos={setLogos} 
            regex={regex}
          />
        ) : (
          <div className="mt-36 flex flex-col items-center">
            <div className="w-70% flex flex-wrap">
              {platforms}
            </div>
            <Button 
              variant="gradientPurple" 
              className="text-white mt-20"
              onClick={addNewPlatform}
            >
              Add a new platform
            </Button>
          </div>
        )}
      </div>
    </>
  );
}

export default Platforms;