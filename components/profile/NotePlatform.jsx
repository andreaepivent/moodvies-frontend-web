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
import StarsModal from "../home/Modals/StarsModal";

function NotePlatform(props) {
  const [imageClicked, setImageClicked] = useState([]);

  const closeModal = () => {
    props.setShowModal(false);
  };

  const handleClick = (e) => {
    setImageClicked(true);
    const newPlatformSrc = e.target.src.match(props.regex)[1];
    const newPlatformName = e.target.alt;
    setImageClicked([
      ...imageClicked,
      { src: newPlatformSrc, name: newPlatformName },
    ]);
  };

  const addNewPlatforms = (imageClicked) => {
    props.handleImageClicked(imageClicked);
  };

  const imgs = platformsLogo.map((logo, index) => (
    <img
      key={index}
      src={`/logo-platform/${logo.src}`}
      className="size-20 m-4 rounded transition duration-200 ease-in-out transform hover:scale-110 hover:cursor-pointer"
      alt={logo.name}
      onClick={(e) => handleClick(e)}
    />
  ));

  return (
    <div
      className="z-10 fixed inset-0  flex items-center justify-center mt-20"
      onClick={closeModal}
    >
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <Card
          onClick={(e) => e.stopPropagation()}
          className="w-[550px] h-[450px] dark absolute"
        >
          <CardHeader>
            <CardTitle className="text-center"></CardTitle>
          </CardHeader>

          <CardContent className="flex flex-col justify-center m-6 mt-1">
            <div className="w-full h-full border">
              <div class="grid grid-rows-3 grid-flow-col gap-4 w-[250px] m-0">
                <p>Barbie</p>
                {/* <img
                  class=" row-span-1 w-[190px] h-[300px] rounded-tl-[10px] rounded-tr-[10px] rounded-bl-none rounded-br-none"
                  src="/movie/spider-man.jpeg"
                  alt="spider-man-Poster"
                /> */}
                <div className="col-span-0 ml-10 mb-2">
                  <span className="font-semibold ">Name</span>
                  <p className="font-light mb-6">Description Description</p>
                  <StarsModal />
                </div>
              </div>
            </div>
          </CardContent>

          <CardFooter className="flex justify-center">
            <Button
              class="border"
              variant="gradientPurple"
              onClick={() => addNewPlatforms(newPlatformSrc, newPlatformName)}
            >
              Add my note
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default NotePlatform;
