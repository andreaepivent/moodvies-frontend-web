import React from 'react'
import { CircularProgressbarWithChildren } from 'react-circular-progressbar'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carouselProfile"
import { Card, CardContent } from '../ui/card'



function MoodCarousel({filteredMoodsArray}) {
  const bars = filteredMoodsArray.map((mood, index) => {
    return (
      mood.count > 5 &&
      <div key={index} style={{ width: 150, height: 150, margin: 20 }}>
        <CircularProgressbarWithChildren value={mood.count} minValue={1} maxValue={10} styles={{
        // Customize the root svg element
        root: {
          display: "flex",
          justifyContent: "center"
        },
        // Customize the path, i.e. the "completed progress"
        path: {
          // Path color
          stroke: '#A759AE',
          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
          strokeLinecap: 'butt',
          // Customize transition animation
          transition: 'stroke-dashoffset 0.5s ease 0s',
          // Rotate the path
          transform: 'rotate(0.25turn)',
          transformOrigin: 'center center',
          
        },
        // Customize the circle behind the path, i.e. the "total progress"
        trail: {
          // Trail color
          stroke: "white",
          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
          strokeLinecap: 'butt',
          // Rotate the trail
          transform: 'rotate(0.25turn)',
          transformOrigin: 'center center',
        },
        // Customize the text
        text: {
          margin: "auto",
          // Text color
          fill: '#f88',
          // Text size
          fontSize: '16px',
        },
        // Customize background - only used when the `background` prop is true
        background: {
          fill: '#3e98c7',
        },
        }}>
          <div className="text-white text-center">{mood.mood}</div>
        </CircularProgressbarWithChildren>
      </div>
    )

    
  })

    return (
      <div>
        <Carousel className="w-full flex justify-center">
          {Array.from({ length: 1 }).map((_, index) => (   
            bars.map((obj, index) => {
              console.log(obj)
              return (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="w-40 bg-transparent border-none">
                      <CardContent className="flex w-40 items-center justify-center p-6">
                        <div>{obj}</div>
                      </CardContent>
                    </Card>
                </CarouselItem>
              )
            })
          ))}
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>      
    )

}

export default MoodCarousel