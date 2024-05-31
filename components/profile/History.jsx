import React from "react";
import MoodCarousel from "./MoodCarousel";
import NavbarProfile from "./Navbar/NavbarProfile";
import CollectionCarousel from "./CollectionCarousel";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ResponsiveNavbarProfile from "./Navbar/ResponsiveNavbarProfile";

function History() {
  const user = useSelector((state) => state.user.value);
  const [hourMoodage, setHourMoodage] = useState(null);

  // Récupérer le nombre d'h de moodage
  useEffect(() => {
    fetch(`http://localhost:3000/users/getRecommendations/${user.token}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        let totalDuration = 0;

        data.forEach((entry) => {
          totalDuration += entry.movie.duration;
        });

        setHourMoodage(totalDuration);
      })
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  return (
    // Main container with background and flex layout
    <div className="w-screen h-screen bg-radial-gradient flex flex-col justify-around items-center">
      {/* Navbar and header section */}
      <div className="fixed top-7 h-[25%] w-full">
        <ResponsiveNavbarProfile />
        <div className="w-full flex flex-col items-center -mt-4 md:mt-4 lg:mt-4 md:flex-row md:justify-between md:items-end">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 to-fuchsia-900  text-2xl md:text-4xl mb-4 md:mb-0 md:pl-20">
            Salut{" "}
            {user &&
              user.username.charAt(0).toUpperCase() +
                user.username.slice(1)}{" "}
            !
          </h1>
          <p className="text-white flex items-end pb-1 text-lg md:text-l md:pr-32 lg:text-xl">
            <span className="text-[#A759AD] mr-1">
              {Math.floor(hourMoodage / 60)}h
            </span>
            de Moodage
          </p>
        </div>
      </div>

      {/* Mood Carousel section */}
      <div className="w-full flex justify-center mt-52">
        <MoodCarousel />
      </div>

      {/* Collection header */}
      <div className="w-[90%] md:w-[80%] h-[5%] flex justify-between border-b mb-6 mt-4">
        <h2 className="text-white text-lg md:text-xl mb-3">Collection</h2>
        <h3 className="text-slate-300 text-sm md:text-l font-thin mb-3">
          Dernières recommandations
        </h3>
      </div>

      {/* Collection Carousel section */}
      <CollectionCarousel />
    </div>
  );
}

export default History;
