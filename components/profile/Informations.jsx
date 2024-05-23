import React, { useState } from "react";
import NavbarProfile from "./NavbarProfile";
import { Button } from "../ui/button";
import ChangeInfos from "./ChangeInfos";

function Informations() {
  const [isEditClicked, setIsEditClicked] = useState(false);

  return isEditClicked ? (
    <ChangeInfos
      isEditClicked={isEditClicked}
      setIsEditClicked={setIsEditClicked}
    />
  ) : (
    <div className="w-screen h-screen bg-radial-gradient flex flex-col items-center">
      <NavbarProfile />
      <div className="w-full h-36 flex flex-col mt-3">
        <h1 className="h-28 w-1/2 mb-0 ml-40 text-transparent text-8xl bg-clip-text bg-gradient-to-r from-fuchsia-300 to-fuchsia-900 inline-block">
          Hello Louis
        </h1>
      </div>
      <div className="mx-auto w-1/2 h-1/4 flex justify-center ">
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
      <Button
        variant="gradientPurple"
        size="lg"
        className="mx-auto mt-20 block text-white"
        onClick={() => {
          console.log(setIsEditClicked(true));
        }}
      >
        Edit informations
      </Button>
    </div>
  );
}

export default Informations;
