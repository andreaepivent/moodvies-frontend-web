import React, { useState } from "react";
import Footer from "../common/Footer";
import { Button } from "../ui/button";
import { createPortal } from "react-dom";
import Signup from "./Signup";

const HomePageHeader = () => {
  const [showModalSignIn, setShowModalSignIn] = useState(false);
  const [showModalSignUp, setShowModalSignUp] = useState(false);

  const toggleSignUp = () => {
    setShowModalSignUp(!showModalSignUp);
  };

  const toggleSignIn = () => {
    setShowModalSignIn(!showModalSignIn);
  };

  const isModalOpen = showModalSignIn || showModalSignUp;

  return (
    <div className="w-screen bg-black">
      <div>
        <video className={`${isModalOpen ? "blur" : ""}`} autoPlay loop muted>
          <source src="MATRIX4.mp4" />
        </video>

        <div className="flex h-screen justify-center items-center bg-pink z-10">
          <img
            className="flex place-self-start absolute left-1 top-3 w-20 h-21"
            src="logo-moodvie-letter.png"
            alt="logo-moodvie-letter"
          />

          <div className="flex flex-col z-10">
            <div
              className={`flex flex-col content-start ${
                isModalOpen ? "blur" : ""
              }`}
            >
              <h1 className="flex text-center text-6xl font-bold text-white my-8">
                FIND YOUR FAVORITE MOVIE <br /> FOR TONIGHT
              </h1>
            </div>
            <div className="flex justify-center gap-10">
              <Button
                variant="ghost"
                className="w-32 border-2 text-slate-100"
                onClick={toggleSignUp}
              >
                Signup
              </Button>
              <Button
                variant="ghost"
                className="w-32 border-2 text-slate-100"
                onClick={toggleSignIn}
              >
                Login
              </Button>
            </div>

            <div className="relative">
              {showModalSignUp &&
                createPortal(
                  <Signup closeModal={() => setShowModalSignUp(false)} />,
                  document.body
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageHeader;
