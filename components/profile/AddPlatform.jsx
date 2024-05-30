import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { platformsLogo } from "../data";
import { addPlatform } from "../../reducers/platforms";
import { useDispatch, useSelector } from "react-redux";

// Functional component to add platforms
function AddPlatform(props) {
  const dispatch = useDispatch();
  const userPlatforms = useSelector((state) => state.platforms.value);
  // State to keep track of clicked images
  const [imageClicked, setImageClicked] = useState([]);

  // Function to close the modal
  const closeModal = () => {
    props.setShowModal(false);
  };

  // Function to handle image click event
  const handleClick = (e) => {
    const newPlatformSrc = e.target.src.match(props.regex)[1]; // Extracting platform src using regex
    const newPlatformName = e.target.alt; // Getting platform name from alt attribute

    // Check if the image is already clicked
    if (
      !imageClicked.some((image) => image.src === newPlatformSrc) &&
      !userPlatforms.some((image) => image.src === newPlatformSrc)
    ) {
      // Add new image to clicked list
      setImageClicked([
        ...imageClicked,
        { src: newPlatformSrc, name: newPlatformName },
      ]);
    } else {
      // Remove image from clicked list
      setImageClicked(
        imageClicked.filter((image) => image.src !== newPlatformSrc)
      );
    }
  };

  // Function to add new platforms
  const addNewPlatforms = () => {
    // Dispatch actions to add new platforms
    imageClicked.forEach((platform) => {
      console.log(platform);
      dispatch(addPlatform(platform));
    });
    props.setShowModal(false); // Close the modal after adding the new platform
  };

  // Mapping over platformsLogo to create image elements
  const imgs = platformsLogo.map((platform, index) => {
    const isClicked = imageClicked.some((image) => image.src === platform.src); // Check if image is clicked
    const isAlreadyInList = userPlatforms.some(
      (image) => image.src === platform.src
    ); // Check if image is already in user platforms

    // N'afficher que les plateformes que nous n'avons pas
    if (!isAlreadyInList) {
      return (
        <img
          key={index}
          src={`/logo-platform/${platform.src}`}
          className={`size-20 m-4 rounded transition duration-200 ease-in-out transform hover:scale-110 hover:cursor-pointer ${
            isClicked && !isAlreadyInList ? "border-white border-2" : ""
          }`}
          alt={platform.name}
          onClick={(e) => handleClick(e)}
        />
      );
    }
  });

  return (
    <div
      className="z-10 fixed inset-0 flex items-center justify-center mt-20"
      onClick={closeModal} // Close modal on clicking outside
    >
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <Card
          onClick={(e) => e.stopPropagation()} // Prevent closing modal on clicking inside
          className="w-[550px] h-[450px] dark absolute"
        >
          <img
            src="/home/Logo-moodvie-letter.svg"
            className="size-10 m-2"
            alt="Logo"
          />
          <CardHeader>
            <CardTitle className="text-center -mt-10">Ajouter</CardTitle>
            <CardTitle className="text-center text-sm">
              Quelle(s) plateforme(s) souhaitez-vous ajouter ?
            </CardTitle>
          </CardHeader>

          <CardContent className="flex flex-row flex-wrap justify-center m-6 mt-4 rounded">
            {imgs} {/* Render the images */}
          </CardContent>

          <CardFooter className="flex justify-center">
            <Button
              variant="gradientPurple"
              className="w-40"
              onClick={addNewPlatforms} // Add new platforms on button click
            >
              Ajouter
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default AddPlatform;
