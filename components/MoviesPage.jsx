import { Button } from "../components/ui/button";
import CarrousselMood from "./CarrousselMood";
import Navbar from "./common/Navbar";
import { YouTubeEmbed } from "@next/third-parties/google";
import { useState } from "react";
import Image from "next/image";
import { movies } from "./data";

export default function MoviesPage() {
  const [firstFilm, ...otherFilms] = movies;
  const [films, setFilms] = useState(movies);
  const [mainFilm, setMainFilm] = useState(firstFilm);

  const handleFilmClick = (clickedFilm) => {
    setMainFilm(clickedFilm);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="relative w-screen flex flex-col bg-top ">
        <div className="absolute inset-0 bg-cover bg-no-repeat bg-fixed">
          <Image
            src={`/movie/${mainFilm.background}`}
            alt={mainFilm.title}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent to-black"
          style={{ zIndex: 2 }}
        ></div>

        <Navbar />

        <div className="my-auto text-center text-slate-100 mx-auto mt-72 z-10">
          <h2 className="text-7xl font-bold">{mainFilm.title}</h2>
          <p className="text-1xl font-semibold mt-2">
            Directed by {mainFilm.director}. {mainFilm.duration} minutes.{" "}
            {mainFilm.year}
          </p>
          <div className="max-w-2xl flex items-center justify-center mt-6">
            <p className=" pr-4 pl-4 text-justify w-full h-full text-center overflow-hidden line-clamp-6">
              {mainFilm.synopsis}
            </p>
          </div>
          <div className="mt-12 pr-4 pl-4">
            <YouTubeEmbed videoid={mainFilm.trailer} height={400} />
            <Button variant="ghost" className="mr-6 border">
              View on Netflix
            </Button>
            <Button variant="ghost" className="border">
              View on Prime
            </Button>
          </div>
        </div>
      </div>

      <h2 className="pt-20 text-3xl font-extrabold text-center text-slate-100 bg-black -mb-16">
        You can also checkout :
      </h2>

      <div className="bg-black mx-auto w-full h-screen flex items-center justify-center">
        <div className="h-[400px] flex flex-nowrap justify-start">
          {movies.map((movie, index) => (
            <>
              <input
                type="radio"
                name="slide"
                id={index}
                className="hidden"
                onClick={() => handleFilmClick(movie)}
              />
              <label
                htmlFor={index}
                className="relative group w-[80px] h-full bg-cover bg-center cursor-pointer overflow-hidden rounded-2xl mx-2 flex items-end transition-all duration-300 ease-in-out shadow-lg hover:w-[150px] md:w-[120px] md:hover:w-[350px] lg:w-[150px] lg:hover:w-[550px]"
              >
                <Image
                  src={`/movie/${movie.background}`}
                  alt={movie.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl"
                />
                <div className="flex flex-nowrap p-4">
                  <div className="flex flex-col justify-center opacity-0 transform translate-y-8 transition-allease-in-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:duration-300 group-hover:delay-300 duration-0 delay-0">
                    <h4 className="uppercase text-white font-extrabold">
                      {movie.title}
                    </h4>
                    <p className="text-slate-100 pt-1">
                      Directed by {movie.director} - {movie.duration} minutes -{" "}
                      {movie.year}
                    </p>
                    <p className="text-slate-100 pt-1 line-clamp-3">
                      {movie.synopsis}
                    </p>
                  </div>
                </div>
              </label>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
