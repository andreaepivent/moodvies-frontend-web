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
  console.log(movies)

  /*return (
      <Carousel className="w-[90%]">
        <CarouselContent className="">
          {bars.map((bar, index) => (
            <CarouselItem key={index} className="md:basis-1/5 basis-1/3 flex justify-center ">
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />  
        <CarouselNext />
      </Carousel>
  )*/
}

export default CollectionCarousel