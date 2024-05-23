import React from "react";
import { Button } from "../ui/button";
import NavbarProfile from "./NavbarProfile";

function Platforms() {
  return (
    <div className="w-screen h-screen bg-radial-gradient flex flex-col items-center">
      <NavbarProfile />
      <div className="w-full h-36 flex flex-col mt-3"></div>
      <Button variant="gradientPurple" className="text-white">
        Add a new platform
      </Button>
    </div>
  );
}

export default Platforms;
