import React from 'react'
import { movies } from '../data'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carouselProfile";

function CollectionCarousel() {
  return (
    <Carousel className="w-[70%] mb-16">
      <CarouselContent className="">
        {movies.map((movie, index) => (
          <CarouselItem
          key={index}
          className="md:basis-1/4 basis-1/3 flex justify-center p-4"
        >
          <div className="relative image-container overflow-hidden rounded-lg h-52 w-full group hover:cursor-pointer">
            <img
              className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'
              src={`/movie/${movie.background}`}
              alt={`${movie.title} poster`}
            />
            <div className="absolute bottom-0 left-0 right-0 text-white text-center p-2 opacity-0 transform translate-y-full transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:delay-200">
              {movie.title}
            </div>
          </div>
        </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />  
      <CarouselNext />
    </Carousel>
);
}

export default CollectionCarousel