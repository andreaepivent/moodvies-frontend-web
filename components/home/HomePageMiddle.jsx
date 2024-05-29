import React from "react";
import Image from "next/image";

function HomePageMiddle() {
  return (
    <div className="flex flex-col content-start">
      <h1 className="text-center text-6xl font-bold text-white mt-20">
        What is Moodvies?
      </h1>
      <div>
        <div className="w-full h-full absolute left-1/3">
          <Image
            className="pointer-events-none"
            src="/home/Graduate3.png"
            alt="Graduate"
            width={500} // Ajoutez les dimensions appropriées
            height={500}
          />
        </div>

        <div className="w-full h-full absolute top-2/4 right-1/4">
          <Image
            className="pointer-events-none"
            src="/home/Graduate1.png"
            alt="Graduate"
            width={500} // Ajoutez les dimensions appropriées
            height={500}
          />
        </div>

        <div className="flex justify-center basis-1/4 grow z-10">
          <Image
            className="mt-20 mr-4 w-19 h-20"
            src="/home/icon_1.png"
            alt="icon-filmstrip"
            width={80} // Ajoutez les dimensions appropriées
            height={80}
          />
          <div className="content-center w-4/12 mt-20 z-10">
            <h2 className="text-left text-white font-bold mb-3">
              Discover Movies Based on Your Mood
            </h2>
            <p className="text-left text-white">
              Navigate to the Your mood panel in the left sidebar. <br />
              Select your current mood to get personalized movie
              recommendations. <br />
              Select the movie icon in the upper right to see detailed
              information about the recommended films.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center basis-1/4 grow z-10">
        <Image
          className="mt-20 mr-4 w-19 h-20"
          src="/home/icon_2.png"
          alt="icon-robot"
          width={80} // Ajoutez les dimensions appropriées
          height={80}
        />
        <div className="content-center w-4/12 mt-16">
          <h2 className="text-left text-white font-bold mb-3">
            AI-Powered Recommendations
          </h2>
          <p className="text-left text-white">
            Our intelligent assistant, Maud IA, makes it easy for you to
            discover movies that match your mood. Whether you're happy, sad, or
            excited, our AI provides curated lists to enhance your viewing
            experience.
          </p>
        </div>
      </div>

      <div className="flex justify-center basis-1/4 grow z-10">
        <Image
          className="mt-20 mr-4 w-19 h-20"
          src="/home/icon_3.png"
          alt="icon-users"
          width={80} // Ajoutez les dimensions appropriées
          height={80}
        />
        <div className="content-center w-4/12 mt-16">
          <h2 className="text-left text-white font-bold mb-3">
            Real-time Collaborative Viewing
          </h2>
          <p className="text-left text-white">
            Moodvie lets you build real-time collaborative viewing experiences.
            Sync with friends to watch the same movie at the same time and share
            your reactions live!
          </p>
        </div>
      </div>

      <div className="flex justify-center basis-1/4 grow z-10">
        <Image
          className="mt-20 mr-4 w-19 h-20"
          src="/home/icon_4.png"
          alt="icon-box"
          width={80} // Ajoutez les dimensions appropriées
          height={80}
        />
        <div className="content-center w-4/12 mt-16">
          <h2 className="text-left text-white font-bold mb-3">
            Seamless Integrations with Cloud Services
          </h2>
          <p className="text-left text-white">
            Our platform leverages powerful API integrations to enhance your
            experience. Easily connect with your favorite streaming services and
            discover new content effortlessly.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePageMiddle;
