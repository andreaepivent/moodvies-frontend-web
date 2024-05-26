import React, { useEffect, useState } from 'react'; // Importing React and necessary hooks
import { moods } from '../data'; // Importing moods data
import { CircularProgressbarWithChildren } from 'react-circular-progressbar'; // Importing CircularProgressbarWithChildren component
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carouselProfile"; // Importing Carousel components

// Functional component to display a carousel of moods
function MoodCarousel() {
  const [bars, setBars] = useState([]); // State to store the generated progress bars
  const [filteredMoodsArray, setFilteredMoodsArray] = useState([]); // State to store filtered moods array

  // Function to get a random mood index
  const randomMoodIndex = () => {
    return moods[Math.round(Math.random() * moods.length)];
  };
  
  // Generating an array of 20 random moods with notes
  const moodsArray = Array.from({ length: 20 }, () => ({
    mood: randomMoodIndex(),
    note: Math.round(Math.random() * 10)
  }));  
  
  useEffect(() => {
    // Filtering moodsArray to remove duplicates and count occurrences
    for (const m of moodsArray) {
      if (!filteredMoodsArray.some((e) => e.mood === m.mood)) {
        if (m.mood != undefined) {
          filteredMoodsArray.push({ mood: m.mood, count: 1 });
        }
      } else {
        filteredMoodsArray[filteredMoodsArray.indexOf(filteredMoodsArray.find((e) => e.mood === m.mood))].count++;
      }
    }
  }, [filteredMoodsArray]);
  
  useEffect(() => {
    // Generating progress bars for filtered moods
    const generatedBars = filteredMoodsArray.map((mood) => {
      if (mood.count >= 1) {
        return (
          <div key={mood.mood} style={{ width: 130, height: 130 }}>
            <CircularProgressbarWithChildren 
              value={mood.count} 
              minValue={0} 
              maxValue={10} 
              styles={{
                root: {
                  display: "flex",
                  justifyContent: "center"
                },
                path: {
                  stroke: '#A759AE',
                  strokeLinecap: 'butt',
                  transition: 'stroke-dashoffset 0.5s ease 0s',
                  transform: 'rotate(0.25turn)',
                  transformOrigin: 'center center',
                },
                trail: {
                  stroke: "white",
                  strokeLinecap: 'round',
                  transform: 'rotate(0.25turn)',
                  transformOrigin: 'center center',
                },
                text: {
                  margin: "auto",
                  fill: '#f88',
                  fontSize: '16px',
                },
                background: {
                  fill: '#3e98c7',
                },
              }}
            >
              <div className="text-white text-sm text-center">{mood.mood}</div>
              <div className="text-white text-center">{mood.count}</div>
            </CircularProgressbarWithChildren>
          </div>
        );
      }
      return null;
    }).filter(Boolean); // Remove null values

    setBars(generatedBars); // Setting the generated bars to state
  }, [filteredMoodsArray]);

  return (
    <Carousel className="w-[50%] flex justify-center items-middle">
      <CarouselContent className="">
        {bars.map((bar, index) => (
          <CarouselItem key={index} className="basis-1/2 flex justify-center pl-4 md:basis-1/3 lg:basis-1/5">
            {bar}
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious /> {/* Button to navigate to the previous item */}
      <CarouselNext /> {/* Button to navigate to the next item */}
    </Carousel>
  );
}

export default MoodCarousel; // Exporting the component as default