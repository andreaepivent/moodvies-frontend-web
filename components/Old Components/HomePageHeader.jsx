import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { createPortal } from "react-dom";
import Signup from "./Signup";
import Login from "./Login";
import MoviesModal from "./Modals/MoviesModal";
import { useRouter } from "next/router";
import NavbarHome from "./NavbarHome";
import PlatfomsModal from "./Modals/PlatfomsModal";
import HomePageHeaders from "./HomePageHeaders";

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
              <Signup />

              <Login />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageHeader;
