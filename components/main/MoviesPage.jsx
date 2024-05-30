import React from "react";
import { Button } from "../ui/button";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import { YouTubeEmbed } from "@next/third-parties/google";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import AceternityLogo from "../logo/AceternityLogo";
import { BorderBeam } from "../ui/border-beam";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

export default function MoviesPage() {
  const movies = useSelector(
    (state) => state.recommendations.value.recommendations
  );

  const moods = useSelector((state) => state.moods);

  const [mainFilm, setMainFilm] = useState(movies[0]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [seenMovies, setSeenMovies] = useState(
    Array(movies.length).fill(false)
  );
  const [lockFunction, setLockFunction] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsLoaded(true); // Mettre à jour l'état après le chargement initial de la page
  }, []);

  const handleFilmClick = (clickedFilm) => {
    setLockFunction(true);

    if (lockFunction) {
      setMainFilm(movies[clickedFilm]);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  console.log(mainFilm);

  const handleSeenMovie = async (event, index) => {
    setLockFunction(false);
    event.stopPropagation();
    const updatedSeenMovies = [...seenMovies];
    updatedSeenMovies[index] = !updatedSeenMovies[index];
    setSeenMovies(updatedSeenMovies);

    // try {
    //   const response = await fetch('your-backend-url/api/history', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       movieId: movies[index].id,
    //     }),
    //   });

    //   if (!response.ok) {
    //     throw new Error('Network response was not ok');
    //   }
    // } catch (error) {
    //   console.error('There was a problem with the fetch operation:', error);
    // }
  };

  function handleMood() {
    router.push(`/mood`);
  }

  const cleanProviderName = (providerName) => {
    // Utilise une regex pour retirer tout ce qui suit "basic"
    return providerName.replace(/\bbasic\b.*/, "Basic");
  };

  return (
    <div className="bg-black relative z-20">
      <BorderBeam />
      <div className="relative w-screen flex flex-col bg-top overflow-hidden z-10">
        <div className="absolute inset-0 bg-cover bg-no-repeat bg-fixed">
          <Image
            src={
              mainFilm &&
              `https://image.tmdb.org/t/p/original${
                mainFilm.backdrop ? mainFilm.backdrop : mainFilm.poster
              }`
            }
            alt={mainFilm && mainFilm.title.fr}
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority="high"
          />
        </div>

        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent to-black"
          style={{ zIndex: 2 }}
        ></div>

        <Navbar />

        <div className="relative mt-52 flex justify-center items-center z-10">
          <Button
            variant="ghost"
            className="w-80 border-2 text-slate-100 text-xl"
          >
            Ton mood : {moods[0]}
          </Button>
        </div>

        <div className="mt-4 flex justify-center items-center z-10">
          <Button
            variant="ghost"
            className="w-50 border-2 text-slate-100"
            onClick={() => handleMood()}
          >
            Retour
          </Button>
        </div>

        <div className="my-auto text-center text-slate-100 mx-auto mt-20 z-10">
          <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-7xl">
            {mainFilm.title.fr}
          </h2>
          <p className="scroll-m-20 text-xl font-semibold tracking-tight mt-2">
            Réalisé par {mainFilm.directors}. {mainFilm.duration} minutes.{" "}
            {mainFilm.release_date.substring(0, 4)}
          </p>
          <div className="max-w-2xl mx-auto flex items-center justify-center mt-4">
            <blockquote className="mt-6 pl-6 italic pr-4 text-justify w-full h-full text-center overflow-hidden line-clamp-6">
              {mainFilm.synopsis.fr}
            </blockquote>
          </div>
          <div className="mt-20 pr-4 pl-4 mx-auto">
            <div className="relative mb-6 w-full max-w-3xl mx-auto">
              {mainFilm.trailer ? (
                mainFilm.trailer.fr ? (
                  <>
                    <YouTubeEmbed videoid={mainFilm.trailer.fr} className="" />
                  </>
                ) : mainFilm.trailer.en ? (
                  <>
                    <YouTubeEmbed videoid={mainFilm.trailer.en} className="" />
                  </>
                ) : (
                  ""
                )
              ) : (
                ""
              )}
            </div>
            <div className="flex justify-center items-center flex-wrap gap-4">
              {mainFilm.providers.fr.length > 0 &&
                mainFilm.providers.fr.map((platform, index) => {
                  const cleanedPlatform = cleanProviderName(platform);
                  return (
                    <HoverBorderGradient
                      key={index}
                      containerClassName="rounded-full"
                      as="button"
                      className="bg-transparent text-slate-100 flex items-center space-x-2"
                    >
                      <AceternityLogo />
                      <span>Disponible sur {cleanedPlatform}</span>
                    </HoverBorderGradient>
                  );
                })}
            </div>
          </div>
        </div>
      </div>

      <h2 className="w-screen pt-20 text-3xl font-extrabold text-center text-slate-100 bg-black -mb-16">
        Tu peux aussi regarder :
      </h2>

      {isLoaded && (
        <div className="bg-black mx-auto w-screen h-screen flex items-center justify-center">
          <div className="h-[400px] flex flex-nowrap justify-start">
            {movies.map((movie, index) => (
              <React.Fragment key={index}>
                <input
                  type="radio"
                  name="slide"
                  id={index}
                  className="hidden"
                  onClick={() => handleFilmClick(index)}
                />
                <label
                  htmlFor={index}
                  className="relative group w-[80px] h-full bg-cover bg-center cursor-pointer overflow-hidden rounded-2xl mx-2 flex items-end transition-all duration-300 ease-in-out shadow-lg hover:w-[150px] md:w-[120px] md:hover:w-[350px] lg:w-[150px] lg:hover:w-[550px]"
                >
                  <div className="absolute top-2 right-2 bg-white text-black rounded-full p-4 shadow-lg z-10 flex justify-center items-center">
                    <FontAwesomeIcon
                      key={0}
                      icon={faBookmark}
                      className={`size-4 ${
                        seenMovies[index] ? "text-blue-500" : "text-gray-500"
                      }`}
                      onClick={(event) => handleSeenMovie(event, index)}
                    />
                  </div>
                  <Image
                    src={`https://image.tmdb.org/t/p/original${
                      movie.backdrop ? movie.backdrop : movie.poster
                    }`}
                    alt={movie.title.fr}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="rounded-2xl"
                  />

                  <div className="flex flex-nowrap p-4">
                    <div className="flex flex-col justify-center opacity-0 transform translate-y-8 transition-all ease-in-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:duration-300 group-hover:delay-300 duration-0 delay-0">
                      <h4 className="uppercase text-white scroll-m-20 text-2xl font-semibold tracking-tight">
                        {movie.title.fr}
                      </h4>
                      <p className="scroll-m-20 text-lg font-semibold tracking-tight pt-1 text-slate-100">
                        Réalisé par {movie.directors} - {movie.duration} minutes
                        - {movie.release_date.substring(0, 4)}
                      </p>

                      <blockquote className=" text-slate-100 pt-1 line-clamp-3 mt-2 italic pr-4 text-justify w-full h-full text-center overflow-hidden">
                        {movie.synopsis.fr}
                      </blockquote>
                    </div>
                  </div>
                </label>
              </React.Fragment>
            ))}
          </div>
        </div>
      )}

      <div className="mt-16 z-10">
        <Footer />
      </div>
    </div>
  );
}
