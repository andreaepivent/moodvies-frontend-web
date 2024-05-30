import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import NavbarProfile from "./Navbar/NavbarProfile";
import AddPlatform from "./AddPlatform";
import { useSelector, useDispatch } from "react-redux";
import ResponsiveNavbarProfile from "./Navbar/ResponsiveNavbarProfile";
import { deletePlatform } from "../../reducers/platforms";

function Platforms() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  const platformsFromRedux = useSelector((state) => state.platforms.value);
  const [showModal, setShowModal] = useState(false);
  const regex = /platform\/(.*)/; // Regular expression to extract platform names from the URL

  // Function to delete a logo
  const deleteLogos = (e) => {
    dispatch(deletePlatform(e.target.previousSibling.src.match(regex)[1]));
  };

  // Function to show the modal for adding a new platform
  const addNewPlatform = () => {
    setShowModal(true);
  };

  // Mapping over logos to create the platform elements
  const userPlatforms = platformsFromRedux?.map((platform, index) => {
    return (
      <div
        key={index}
        className="relative image-container flex justify-between items-center group"
      >
        <img
          className="lg:size-36 md:size-30 size-24 object-cover rounded-2xl shake"
          src={`/logo-platform/${platform.src}`}
          alt={`${platform.name} poster`}
        />
        <div
          className="absolute top-4 right-5 w-6 h-6 font-extrabold text-xs text-white bg-transparent border rounded-full flex justify-center items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 hover:cursor-pointer hover:bg-slate-50 hover:bg-opacity-30 hover:text-black"
          onClick={(e) => deleteLogos(e)}
        >
          X
        </div>
      </div>
    );
  });

  // Function to handle the addition of new platforms (inverse data flow)
  const handleImageClicked = (imageClicked) => {
    imageClicked.forEach((platform) => {
      if (!platforms?.some((logo) => logo.src === platform.src)) {
        setPlatforms((prevPlatforms) => [...prevPlatforms, platform]);
        setShowModal(false); // Close the modal after adding the new platform
      }
    });
  };

  return (
    <>
      <div className="w-screen h-screen bg-radial-gradient flex flex-col justify-around items-center">
        {/* Navbar and header section */}
        <div className="fixed top-7 h-[25%] w-full">
          <ResponsiveNavbarProfile />
          <div className="w-full flex flex-col items-center mt-10 md:flex-row md:justify-between md:items-end">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 to-fuchsia-900  text-4xl md:text-5xl mb-4 md:mb-0 md:pl-20">
              Salut {user.username} !
            </h1>
          </div>
        </div>

        {/* Conditional rendering for modal and platform list */}
        {showModal ? (
          <AddPlatform
            handleImageClicked={handleImageClicked}
            setShowModal={setShowModal}
            showModal={showModal}
            regex={regex}
          />
        ) : (
          <div className="flex flex-col items-center mt-60">
            <div className="mx-auto flex justify-center flex-wrap gap-5">
              {userPlatforms}
            </div>
            <div className="lg:mt-20 mt-28">
              <Button
                variant="gradientPurple"
                className="text-white p-3"
                onClick={addNewPlatform}
              >
                Ajouter une nouvelle plateforme
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Platforms;
