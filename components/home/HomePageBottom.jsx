import React from "react";

function HomePageBottom() {
  return (
    <div class="flex flex-col content-start mb-40 ">

      <div class="w-5/6 h-52 absolute bottom-auto right-1/3 ">
        <img class="z-40 pointer-events-none" src="/home/Graduate2.png" alt="Graduate2" oncontextmenu="return false;" />
      </div>

      <div className="flex justify-center align-center basis-1/4 grow text-center mt-40  ">
        <img class=" z-30 w-2/4 h-4/5 mr-12 pointer-events-none" src="/home/phone.png" alt="phone-image" oncontextmenu="return false;" />

        <div className="mr-20">
          <p className=" mt-44  text-5xl font-bold text-white ">
            Moodvies is also <br/>available on <br/>your phone!
          </p>
          <div className="flex justify-center mt-20">
            <img
              class=" w-44 h-14 mr-6 "
              src="/home/GoooglePlay.png"
              alt="logo-GooglePlay"
            />
            <img
              class=" w-48 h-16 "
              src="/home/App-Store.png"
              alt="logo-App-Store"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePageBottom;
