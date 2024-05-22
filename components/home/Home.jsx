import React, { useState } from "react";
import Footer from "../common/Footer";
import { Button } from "../ui/button";
import { createPortal } from "react-dom";
import Signup from "./Signup";

const Home = () => {
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
                variant="gradientPurple"
                className="w-32"
                onClick={toggleSignUp}
              >
                Signup
              </Button>
              <Button
                variant="gradientPurple"
                className="w-32"
                onClick={toggleSignIn}
              >
                Signin
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

      <div className="flex flex-col content-start overflow-x-hidden">
        <h1 className="text-center text-6xl font-bold text-white mt-20">
          What is Moodvies?
        </h1>

        <div className="flex justify-center basis-1/4 grow text-center">
          <img
            className="mt-20 mr-4 w-19 h-20"
            src="icon_1.png"
            alt="logo-moodvie-letter"
          />
          <div className="content-center w-4/12 mt-20">
            <h2 className="text-left text-white font-bold mb-3">
              Shared Cloud Libraries
            </h2>
            <p className="text-left text-white">
              Navigate to the Your work panel in the left sidebar. <br /> Select
              the library you want to share. <br />
              Select the Share icon in the upper right to share the library.
            </p>
          </div>
        </div>

        <div className="flex justify-center basis-1/4 grow text-center">
          <img
            className="mt-20 mr-4 w-19 h-20"
            src="icon_2.png"
            alt="logo-moodvie-letter"
          />
          <div className="content-center w-4/12 mt-16">
            <h2 className="text-left text-white font-bold mb-3">
              Free developer handoff, right inside
            </h2>
            <p className="text-left text-white">
              Cloud Inspector makes it easy for developers to get the
              information they need to turn pixels into code — all in the
              browser and, most importantly, for free.
            </p>
          </div>
        </div>

        <div className="flex justify-center basis-1/4 grow text-center">
          <img
            className="mt-20 mr-4 w-19 h-20"
            src="icon_3.png"
            alt="logo-moodvie-letter"
          />
          <div className="content-center w-4/12 mt-16">
            <h2 className="text-left text-white font-bold mb-3">
              Real-time collaborative editing
            </h2>
            <p className="text-left text-white">
              Room Service helps you build real-time collaborative features. Add
              real-time data sync! Let users edit the same data at the same
              time.
            </p>
          </div>
        </div>

        <div className="flex justify-center basis-1/4 grow text-center">
          <img
            className="mt-20 mr-4 w-19 h-20"
            src="icon_4.png"
            alt="logo-moodvie-letter"
          />
          <div className="content-center w-4/12 mt-16">
            <h2 className="text-left text-white font-bold mb-3">
              Integrations with the Cloud API
            </h2>
            <p className="text-left text-white">
              Unlocking that value requires an iPaaS that delivers the
              transformative power of APIs and integration.
            </p>
          </div>
        </div>

        <div className="flex justify-center basis-1/4 grow text-center mt-44">
          <img
            className="w-8/12 h-2/6"
            src="phone.png"
            alt="logo-moodvie-letter"
          />
          <div className="mr-20">
            <p className="mt-48 text-5xl font-bold text-white">
              Moodvies is also available on your phone!
            </p>
            <div className="flex justify-center mt-20">
              <img
                className="w-44 h-14 mr-6"
                src="GoooglePlay.png"
                alt="logo-moodvie-letter"
              />
              <img
                className="w-48 h-16"
                src="App Store.png"
                alt="logo-moodvie-letter"
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
