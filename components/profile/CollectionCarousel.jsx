import React from "react";
import { movies } from "../data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carouselProfile"; // Importing Carousel components
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

// Functional component to display a carousel of movie collections
function CollectionCarousel() {
  const user = useSelector((state) => state.user.value);
  const [movies, setMovies] = useState([]);
  /* const movies = useSelector((state) => state.movies.value) */
  useEffect(() => {
    fetch(
      `http://localhost:3000/users/getRecommendations/7uxE57OsyHo8DvMgl3TSAqD5HHNlktvd`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setMovies(data))
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  return (
    // Main Carousel component with width and margin styles
    <Carousel className="w-[70%] mb-16">
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
                src={`https://image.tmdb.org/t/p/original/${movie.movie.poster}`} // Movie background image
                alt={`${movie.movie.title.fr} poster`} // Alt text for accessibility
              />
              <div className="absolute bottom-0 left-0 right-0 text-white text-center p-2 opacity-0 transform translate-y-full transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:delay-200">
                {movie.movie.title.fr}
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

export default CollectionCarousel;
