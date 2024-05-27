<<<<<<< HEAD
import React from "react";
import { movies } from "../data";
=======
import React from 'react'; // Importing React library
import { movies } from '../data'; // Importing movie data
>>>>>>> c1f99c5eda3e5abc7c8c6640f2770a492a45ea27
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carouselProfile"; // Importing Carousel components

// Functional component to display a carousel of movie collections
function CollectionCarousel() {
  return (
<<<<<<< HEAD
    <Carousel className="w-[80%] mb-16">
=======
    // Main Carousel component with width and margin styles
    <Carousel className="w-[70%] mb-16">
>>>>>>> c1f99c5eda3e5abc7c8c6640f2770a492a45ea27
      <CarouselContent className="">
        {/* Mapping through the movies array to create Carousel items */}
        {movies.map((movie, index) => (
          <CarouselItem
            key={index} // Unique key for each item
            className="w-1/2 basis-1/3 md:basis-1/5 flex justify-center p-2 sm:p-4"
          >
            <div className="relative image-container overflow-hidden rounded-lg h-40 w-full group hover:cursor-pointer">
              <img
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                src={`/movie/${movie.background}`} // Movie background image
                alt={`${movie.title} poster`} // Alt text for accessibility
              />
<<<<<<< HEAD
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
=======
              {/* Title of the movie appears on hover */}
>>>>>>> c1f99c5eda3e5abc7c8c6640f2770a492a45ea27
              <div className="absolute bottom-0 left-0 right-0 text-white text-center p-2 opacity-0 transform translate-y-full transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:delay-200">
                {movie.title}
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious /> {/* Button to navigate to the previous item */}
      <CarouselNext /> {/* Button to navigate to the next item */}
    </Carousel>
  );
}

<<<<<<< HEAD
export default CollectionCarousel;
=======
export default CollectionCarousel; // Exporting the component as default
>>>>>>> c1f99c5eda3e5abc7c8c6640f2770a492a45ea27
