import React, { useState } from 'react'
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { platformsLogo } from '../data';

function AddPlatform(props) {
  const [imageClicked, setImageClicked] = useState([])
  const [isImageClicked, setIsImageClicked] = useState(false)

  const closeModal = () => {
    props.setShowModal(false)
  }

  const handleClick = (e) => {
    const newPlatformSrc = e.target.src.match(props.regex)[1];
    const newPlatformName = e.target.alt;
    if (!imageClicked.some(image => image.src === newPlatformSrc)) {
      setImageClicked([...imageClicked, { src: newPlatformSrc, name: newPlatformName }]);
    } else {
      setImageClicked(imageClicked.filter(image => image.src !== newPlatformSrc));
    }
  }

  const addNewPlatforms = () => {
    props.handleImageClicked(imageClicked)
  }


  const imgs = platformsLogo.map((logo, index) => {
    const isClicked = imageClicked.some(image => image.src === logo.src);
    return (
      <img
      key={index}
      src={`/logo-platform/${logo.src}`}
      className={`size-20 m-4 rounded transition duration-200 ease-in-out transform hover:scale-110 hover:cursor-pointer ${isClicked ? "border-white border-2" : ''}`}
      alt={logo.name}
      onClick={(e) => handleClick(e)}
    />
  )
});

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
          <img src="/home/Logo-moodvie-letter.svg" className="size-10 m-2" />
          <CardHeader>
            <CardTitle className="text-center -mt-10">
              Add platform
            </CardTitle >
            <CardTitle className="text-center text-sm" >Which platform(s) would you like to add?</CardTitle>
          </CardHeader>

          <CardContent className="flex flex-row flex-wrap justify-center m-6 mt-4 rounded">
              {imgs}
          </CardContent>

          <CardFooter className="flex justify-center">
            <Button 
            variant="gradientPurple" 
            onClick={() => addNewPlatforms()}
            >Add</Button>
          </CardFooter>

        </Card>
      </div>
    </div>
  );
}

export default AddPlatform