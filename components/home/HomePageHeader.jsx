import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { createPortal } from "react-dom";
import Signup from "./Signup";
import Login from "./Login";
import MoviesModal from "./Modals/MoviesModal";
import { useRouter } from "next/router";
import NavbarHome from "./NavbarHome";
import PlatfomsModal from "./Modals/PlatfomsModal";

const HomePageHeader = () => {
  const [showModalLogin, setShowModalLogin] = useState(false);
  const [showModalSignUp, setShowModalSignUp] = useState(false);
  const [showPlatfomsModal, setShowPlatfomsModal] = useState(false);
  const [showMoviesModal, setShowMoviesModal] = useState(false);
  const router = useRouter();

  // Inverse Data Flow -> Qd valide Signup ça la ferme et ouvre Platform
  const signUpToPlatformModal = () => {
    setShowModalSignUp(false);
    setShowPlatfomsModal(true);
  };

  // Ouvre Login
  const toggleLogin = () => {
    setShowModalLogin(!showModalLogin);
  };

  const submitMovies = () => {
    setShowMoviesModal(false);
    router.push("/mood");
  };

  const isModalOpen =
    showModalLogin || showModalSignUp || showMoviesModal || showPlatfomsModal;

  // Empeche Scroll si Modal open
  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Clean up the class on component unmount
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isModalOpen]);

  return (
    <div className="relative w-screen bg-black overflow-hidden">
      <div className="">
        <video
          className={`absolute inset-0 w-full h-full object-cover z-10 ${
            isModalOpen ? "blur" : ""
          }`}
          autoPlay
          loop
          muted
        >
          <source src="/video/MATRIX4.mp4" />
        </video>
        <NavbarHome />

        <div className="flex h-screen justify-center items-center bg-pink z-10">
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
                    closeModal={() => setShowModalSignUp(false)}
                    style={{ zIndex: 1 }}
                    signUpToPlatformModal={signUpToPlatformModal}
                  />,
                  document.body
                )}
            </div>

            <div className="relative">
              {showPlatfomsModal &&
                createPortal(<PlatfomsModal />, document.body)}
            </div>

            <div className="relative">
              {showModalLogin &&
                createPortal(
                  <Login closeModal={() => setShowModalLogin(false)} />,
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageHeader;
