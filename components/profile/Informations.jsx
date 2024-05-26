import React, { useState } from "react";
import NavbarProfile from "./NavbarProfile";
import { Button } from "../ui/button";
import ChangeInfos from "./ChangeInfos";

function Informations() {
  const [isEditClicked, setIsEditClicked] = useState(false); // State to manage the edit mode

  return isEditClicked ? (
    // Render ChangeInfos component if edit button is clicked
    <ChangeInfos
      isEditClicked={isEditClicked}
      setIsEditClicked={setIsEditClicked}
    />
  ) : (
    // Render the main information view if edit button is not clicked
    <div className="w-screen h-screen bg-radial-gradient flex flex-col justify-around items-center">
      {/* Navbar and header section */}
      <div className="fixed top-7 h-[25%] w-full">
        <NavbarProfile />
        <div className="w-full flex flex-col items-center mt-10 md:flex-row md:justify-between md:items-end">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 to-fuchsia-900 text-5xl mb-4 md:mb-0 md:pl-20">
            Hello Louis
          </h1>
        </div>
      </div>
      
      {/* User information section */}
      <div className="mx-auto w-1/2 h-1/4 flex justify-center mt-60">
        <div className="w-1/2 flex flex-col items-center justify-around">
          <span className="text-white">Username :</span>
          <span className="text-white">Email :</span>
          <span className="text-white">Password :</span>
        </div>
        <div className="w-1/2 flex flex-col items-center justify-around">
          <span className="text-white">Louis</span>
          <span className="text-white">louis@gmail.com</span>
          <span className="text-white">********</span>
        </div>
      </div>
      
      {/* Edit button */}
      <Button
        variant="gradientPurple"
        size="lg"
        className="mx-auto mt-20 block text-white"
        onClick={() => {
          setIsEditClicked(true); // Set edit mode to true when button is clicked
        }}
      >
        Edit informations
      </Button>
    </div>
  );
}

export default Informations;
