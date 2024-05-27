import React, { useState } from "react";
import { Button } from "../ui/button";
import { createPortal } from "react-dom";
import Signup from "./Signup";
import Login from "./Login";
import PlatfomsModal from "./Modals/PlatfomsModal";
import MoviesModal from "./Modals/MoviesModal";
import { useRouter } from "next/router";
import NavbarHome from "./NavBarHome";
import { motion } from "framer-motion";
import { AuroraBackground } from "../ui/aurora-background";

const HomePageHeader = () => {
  const [showModalLogin, setShowModalLogin] = useState(false);
  const [showModalSignUp, setShowModalSignUp] = useState(false);
  const [showPlatfomsModal, setShowPlatfomsModal] = useState(false);
  const [showMoviesModal, setShowMoviesModal] = useState(false);

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
    <div className="relative w-screen bg-black">
      <div className="">
        <video
          className={`absolute inset-0 w-full h-full object-cover z-0 ${
            isModalOpen ? "blur" : ""
          }`}
          autoPlay
          loop
          muted
        >
          <source src="/video/MATRIX4.mp4" />
        </video>
        <NavbarHome />
        <div class="z-10">
          <AuroraBackground>
            <motion.div
              initial={{ opacity: 0.0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="relative flex flex-col gap-4 items-center justify-center px-4"
            >
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
                </div>
              </div>
            </motion.div>
          </AuroraBackground>
        </div>
      </div>
    </div>
  );
};

export default HomePageHeader;
