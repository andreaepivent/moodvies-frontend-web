import React, { useEffect, useState } from "react"; // Importing React and necessary hooks
import { CircularProgressbarWithChildren } from "react-circular-progressbar"; // Importing CircularProgressbarWithChildren component
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carouselProfile"; // Importing Carousel components
import { useSelector } from "react-redux";

// Functional component to display a carousel of moods
function MoodCarousel() {
  const user = useSelector((state) => state.user.value);
  const [bars, setBars] = useState([]); // State to store the generated progress bars
  const [filteredMoodsArray, setFilteredMoodsArray] = useState([]); // State to store filtered moods array
  const [maxValue, setMaxValue] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/users/getRecommendations/${user.token}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const moodCounts = {};

        // On récupère les moods associés à chaque recommandation
        data.forEach((entry) => {
          const mood = entry.userMood.fr;
          if (moodCounts[mood]) {
            moodCounts[mood]++;
          } else {
            moodCounts[mood] = 1;
          }
        });

        const result = Object.keys(moodCounts).map((mood) => {
          return {
            mood: mood.charAt(0).toUpperCase() + mood.slice(1),
            count: moodCounts[mood],
          };
        });

        // Find the mood with the maximum count pour ajuster les progress bars
        let maxMood = result[0].count;
        result.forEach((mood) => {
          if (mood.count > maxMood) {
            maxMood = mood.count;
          }
        });

        setMaxValue(maxMood);

        // On stocke les moods et leurs occurences
        setFilteredMoodsArray(result);
      })
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  // Génération des barres
  useEffect(() => {
    const generatedBars = filteredMoodsArray
      .map((mood) => {
        if (mood.count >= 1) {
          return (
            <div key={mood.mood} style={{ width: 130, height: 130}}>
              <CircularProgressbarWithChildren
                value={mood.count}
                minValue={0}
                maxValue={maxValue}
                styles={{
                  root: {
                    display: "flex",
                    justifyContent: "center",
                    width: "100%", // Ensure the root takes the full width of the container
                    height: "100%", // Ensure the root takes the full height of the container
                  },
                  path: {
                    stroke: "#A759AE",
                    strokeLinecap: "butt",
                    transition: "stroke-dashoffset 0.5s ease 0s",
                    transformOrigin: "center center",
                  },
                  trail: {
                    stroke: "white",
                    strokeLinecap: "round",
                    transform: "rotate(0.25turn)",
                    transformOrigin: "center center",
                  },
                  text: {
                    margin: "auto",
                    fill: "#f88",
                    fontSize: "16px",
                  },
                  background: {
                    fill: "#3e98c7",
                  },
                }}
              >
                <div className="text-white text-sm text-center">
                  {mood.mood}
                </div>
                <div className="text-white text-center">{mood.count}</div>
              </CircularProgressbarWithChildren>
            </div>
          );
        }
        return null;
      })
      .filter(Boolean); // Remove null values

    setBars(generatedBars); // Setting the generated bars to state
  }, [filteredMoodsArray]);

  return (
    <Carousel className="w-[50%] flex justify-center items-middle">
      <CarouselContent className="">
        {bars.map((bar, index) => (
          <CarouselItem
            key={index}
            className={`basis-1/2 flex justify-center pl-4 ${
              bars.length < 3 ? "md:basis-auto" : "md:basis-1/3"
            } ${
              bars.length < 5 ? "lg:basis-auto" : "lg:basis-1/5"
            }`}
          >
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
