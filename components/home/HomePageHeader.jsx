import React, { useState } from "react";
import Footer from "../common/Footer";
import { Button } from "../ui/button";
import { createPortal } from "react-dom";
import Signup from "./Signup";
import Login from "./Login";
import PlatfomsModal from "./Modals/PlatfomsModal";
import MoviesModal from "./Modals/MoviesModal";
import { Router, useRouter } from "next/router";
import LanguageSelect from "../common/LanguageSelect";

const HomePageHeader = () => {
  const [showModalLogin, setShowModalLogin] = useState(false);
  const [showModalSignUp, setShowModalSignUp] = useState(false);
  const [showPlatfomsModal, setShowPlatfomsModal] = useState(false);
  const [showMoviesModal, setShowMoviesModal] = useState(false);
  const [showBackModalLogin, setShowBackModalLogin] = useState(false);

  const router = useRouter();

  const submitSignUp = () => {
    setShowModalSignUp(false);
    setShowPlatfomsModal(true);
  };
  const submitPlatform = () => {
    setShowPlatfomsModal(false);
    setShowMoviesModal(true);
  };

  const toggleSignUp = () => {
    setShowModalSignUp(!showModalSignUp);
  };

  const toggleLogin = () => {
    setShowModalLogin(!showModalLogin);
  };

  const submitBackSignUp = () => {
    setShowBackMoviesModal(!showBackMoviesModal);
  };

  const submitMovies = () => {
    setShowMoviesModal(false);
    router.push("/mood");
  };

  const isModalOpen =
    showModalLogin || showModalSignUp || showMoviesModal || showPlatfomsModal;

  return (
    <div className="w-screen bg-black">
     
      <div>
        
        <video className={`${isModalOpen ? "blur" : ""}`} autoPlay loop muted>
          <source src="MATRIX4.mp4" />
        </video>

        <div className="flex h-screen justify-center items-center bg-pink z-10">
          <img
            className="flex place-self-start absolute left-8 top-8 w-20 h-21"
            src="/home/logo-moodvie-letter.png"
            alt="logo-moodvie"
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
                onClick={() => setShowModalSignUp(true)}
              >
                Signup
              </Button>

              <Button
                variant="ghost"
                className="w-32 border-2 text-slate-100"
                onClick={toggleLogin}
              >
                Login
              </Button>
            </div>

            <div className="relative">
              {showModalSignUp &&
                createPortal(
                  <Signup
                    closeModal={() => {
                      setShowModalSignUp(false);
                    }}
                    submit={() => submitSignUp()}
                  />,
                  document.body
                )}
            </div>

            <div className="relative">
              {showModalLogin &&
                createPortal(
                  <Login closeModal={() => setShowModalLogin(false)} />,
                  document.body
                )}
            </div>

            <div className="relative">
              {showPlatfomsModal &&
                createPortal(
                  <PlatfomsModal
                    closeModal={() => setShowPlatfomsModal(false)}
                    submit={() => submitPlatform()}
                  />,
                  document.body
                )}
            </div>

            <div>
              {showMoviesModal &&
                createPortal(
                  <MoviesModal
                    closeModal={() => setShowMoviesModal(false)}
                    submit={() => submitMovies()}
                  />,
                  document.body
                )}
            </div>

            <div className="relative">
              {showPlatfomsModal &&
                createPortal(
                  <PlatfomsModal
                    closeModal={() => setShowPlatfomsModal(false)}
                    submit={() => submitPlatform()}
                  />,
                  document.body
                )}
            </div>

            <div className="relative">
              {showPlatfomsModal &&
                createPortal(
                  <PlatfomsModal
                    closeModal={() => setShowPlatfomsModal(false)}
                    submit={() => submitPlatform()}
                  />,
                  document.body
                )}
            </div>

            <div className="relative">
              {showBackModalLogin &&
                createPortal(
                  <PlatfomsModal
                    closeModal={() => setshowBackModalLogin(false)}
                    submit={() => submitSignUp()}
                  />,
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
