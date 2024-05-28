"use client";
import React from "react";

import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import { YouTubeEmbed } from "@next/third-parties/google";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import AceternityLogo from "../logo/AceternityLogo";
import { BorderBeam } from "../ui/border-beam";

export default function MoviesPage() {
  const movies = useSelector(
    (state) => state.recommendations.value.recommendations
  );
  const [mainFilm, setMainFilm] = useState(movies[0]);

  const handleFilmClick = (clickedFilm) => {
    setMainFilm(movies[clickedFilm]);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-black">
      <div className="relative w-screen flex flex-col bg-top overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-no-repeat bg-fixed">
          <Image
            src={`https://image.tmdb.org/t/p/original${
              mainFilm.backdrop ? mainFilm.backdrop : mainFilm.poster
            }`}
            alt={mainFilm.title.fr}
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
          <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-7xl">
            {mainFilm.title.fr}
          </h2>
          <p className="scroll-m-20 text-xl font-semibold tracking-tight mt-2">
            Directed by {mainFilm.directors[0]}. {mainFilm.duration} minutes.{" "}
            {mainFilm.release_date.substring(0, 4)}
          </p>
          <div className="max-w-2xl mx-auto flex items-center justify-center mt-6">
            <blockquote className="mt-6 pl-6 italic pr-4 text-justify w-full h-full text-center overflow-hidden line-clamp-6">
              {mainFilm.synopsis.fr}
            </blockquote>
          </div>
          <div className="mt-12 pr-4 pl-4">
            <div className="relative mb-6">
              {mainFilm.trailer ? (
                mainFilm.trailer.fr ? (
                  <>
                    <YouTubeEmbed videoid={mainFilm.trailer.fr} className="" />
                    <BorderBeam />
                  </>
                ) : mainFilm.trailer.en ? (
                  <>
                    <YouTubeEmbed videoid={mainFilm.trailer.en} className="" />
                    <BorderBeam />
                  </>
                ) : (
                  ""
                )
              ) : (
                ""
              )}
            </div>

            <div className="flex justify-center items-center gap-4">
              {mainFilm.providers.fr.length > 0 &&
                mainFilm.providers.fr.map((platform) => {
                  return (
                    <HoverBorderGradient
                      containerClassName="rounded-full"
                      as="button"
                      className="bg-transparent text-slate-100 flex items-center space-x-2"
                    >
                      <AceternityLogo />
                      <span>Available on {platform}</span>
                    </HoverBorderGradient>
                  );
                })}
            </div>
          </div>
        </div>
      </div>

      <h2 className="w-screen pt-20 text-3xl font-extrabold text-center text-slate-100 bg-black -mb-16">
        You can also checkout :
      </h2>

      <div className="bg-black mx-auto w-screen h-screen flex items-center justify-center">
        <div className="h-[400px] flex flex-nowrap justify-start">
          {movies.map((movie, index) => (
            <>
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
                <Image
                  src={`https://image.tmdb.org/t/p/original${
                    movie.backdrop ? movie.backdrop : movie.poster
                  }`}
                  alt={movie.title.fr}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl"
                />
                <div className="flex flex-nowrap p-4">
                  <div className="flex flex-col justify-center opacity-0 transform translate-y-8 transition-allease-in-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:duration-300 group-hover:delay-300 duration-0 delay-0">
                    <h4 className="uppercase text-white scroll-m-20 text-2xl font-semibold tracking-tight">
                      {movie.title.fr}
                    </h4>
                    <p className="scroll-m-20 text-lg font-semibold tracking-tight pt-1 text-slate-100">
                      Directed by {movie.directors[0]} - {movie.duration}{" "}
                      minutes - {movie.release_date.substring(0, 4)}
                    </p>

                    <blockquote className=" text-slate-100 pt-1 line-clamp-3 mt-2 italic pr-4 text-justify w-full h-full text-center overflow-hidden">
                      {movie.synopsis.fr}
                    </blockquote>
                  </div>
                </div>
              </label>
            </>
          ))}
        </div>
      </div>

      <div className="mt-16 z-10">
        <Footer />
      </div>
    </div>
  );
}
