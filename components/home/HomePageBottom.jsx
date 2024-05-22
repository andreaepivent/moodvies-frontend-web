import React from "react";

function HomePageBottom() {
  return (
    <div class="flex flex-col content-start mb-40">

      <div class="w-5/6 h-52 absolute bottom-auto right-1/3 ">
        <img class="z-40" src="Graduate2.png" alt="Graduate2" />
      </div>

      <div className="flex justify-center basis-1/4 grow text-center mt-44 ">
        <img class=" z-30 w-8/12 h-2/6 " src="phone.png" alt="logo-moodvie-letter" />

        <div className="mr-20">
          <p className=" mt-48  text-5xl font-bold text-white ">
            Moodvies is also available on your phone!
          </p>
          <div className="flex justify-center mt-20">
            <img
              class=" w-44 h-14 mr-6 "
              src="GoooglePlay.png"
              alt="logo-moodvie-letter"
            />
            <img
              class=" w-48 h-16 "
              src="App-Store.png"
              alt="logo-moodvie-letter"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePageBottom;
