import React, { useEffect, useState } from 'react';
import { moods } from '../data'
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carouselProfile";

function MoodCarousel() {
  const [bars, setBars] = useState([]);
  const [filteredMoodsArray, setFilteredMoodsArray] = useState([])

  const randomMoodIndex = () => {
    return moods[Math.round(Math.random() * moods.length)]
  }
  
  const moodsArray = Array.from({ length: 20 }, () => ({
    mood: randomMoodIndex(),
    note: Math.round(Math.random() * 10)
  }));  
  
  useEffect(() => {
    for (const m of moodsArray) {
      if (!filteredMoodsArray.some((e) => e.mood === m.mood)) {
        if (m.mood != undefined ) {
          filteredMoodsArray.push({mood: m.mood, count: 1})
        }
      } else {
        filteredMoodsArray[filteredMoodsArray.indexOf(filteredMoodsArray.find((e) => e.mood === m.mood))].count ++
      }
    }
  }, [filteredMoodsArray])
  

  useEffect(() => {
    const generatedBars = filteredMoodsArray.map((mood) => {
      if (mood.count >= 1) {
        return (
          <div key={mood.mood} style={{ width: 130, height: 130 }}>
            <CircularProgressbarWithChildren value={mood.count} minValue={0} maxValue={10} styles={{
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
              strokeLinecap: 'round',
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
          <div className="text-white text-sm text-center">{mood.mood}</div>
          <div className="text-white text-center">{mood.count}</div>
        </CircularProgressbarWithChildren>
          </div>
        );
      }
      return null;
    }).filter(Boolean);

    setBars(generatedBars);
  }, [filteredMoodsArray]);

  return (
      <Carousel className="w-[50%] flex justify-center items-middle">
        <CarouselContent className="">
          {bars.map((bar, index) => (
            <CarouselItem key={index} className="basis-1/2 flex justify-center pl-4 md:basis-1/3 lg:basis-1/5 ">
              {bar}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />  
        <CarouselNext />
      </Carousel>
  );
}

export default MoodCarousel;