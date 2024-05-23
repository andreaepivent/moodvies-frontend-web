import React from "react";
import { Button } from "../ui/button";
import NavbarProfile from "./NavbarProfile";

function Platforms() {
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
      <div className="mt-60">
        <Button variant="gradientPurple" className="text-white">
          Add a new platform
        </Button>
      </div>
        
      </div>
    </>
  );
}

export default Platforms;
