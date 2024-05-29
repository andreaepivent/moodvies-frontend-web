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
import MovieModal from "./MovieModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

// Functional component to display a carousel of movie collections
function CollectionCarousel() {
  const user = useSelector((state) => state.user.value);
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleImageClick = (movie) => {
    setSelectedMovie(movie);
    setModalOpen(true);
  };

  const updateMovieNote = (movieId, newNote) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.movie._id === movieId ? { ...movie, note: newNote } : movie
      )
    );

    fetch(`http://localhost:3000/users/addFeedback`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: user.token,
        movieId: movieId,
        note: newNote,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Feedback sent successfully:", data);
      })
      .catch((error) => {
        console.error("Error sending feedback:", error);
      });
  };

  /* const movies = useSelector((state) => state.movies.value) */
  useEffect(() => {
    fetch(`http://localhost:3000/users/getRecommendations/${user.token}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setMovies(data))
      .catch((error) => console.error("Fetch error:", error));
  }, [modalOpen]);

  return (
    // Main Carousel component with width and margin styles
    <>
      <Carousel className="w-[70%] mb-16">
        <CarouselContent className="">
          {/* Mapping through the movies array to create Carousel items */}
          {movies.map((movie, index) => (
            <CarouselItem
              key={index} // Unique key for each item
              className="w-1/2 basis-1/3 md:basis-1/5 flex justify-center p-2 sm:p-4"
            >
              <div
                className="relative image-container h-40 w-full group hover:cursor-pointer"
                onClick={() => handleImageClick(movie)}
              >
                <img
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 rounded-lg"
                  src={`https://image.tmdb.org/t/p/original/${movie.movie.poster}`} // Movie background image
                  alt={`${movie.movie.title.fr} poster`} // Alt text for accessibility
                />
                <div className="absolute bottom-0 left-0 right-0 text-white text-center p-2 opacity-0 transform translate-y-full transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:delay-200">
                  {movie.movie.title.fr}
                </div>
                <div className="absolute -top-2 -right-2 bg-white text-black rounded-full px-3 py-1 shadow-lg z-10">
                  {movie.note ? (
                    movie.note
                  ) : (
                    <FontAwesomeIcon
                      key={0}
                      icon={faBookmark}
                      className="text-black"
                    />
                  )}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious /> {/* Button to navigate to the previous item */}
        <CarouselNext /> {/* Button to navigate to the next item */}
      </Carousel>
      {selectedMovie && (
        <MovieModal
        movie={selectedMovie}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        updateMovieNote={updateMovieNote}
      />
      )}
    </>
  );
}

export default CollectionCarousel;
