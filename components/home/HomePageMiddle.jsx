import React from "react";

function HomePageMiddle() {
  return (
    <div class="flex flex-col content-start">
      <h1 className="text-center text-6xl font-bold text-white mt-20">
        {" "}
        What is Moodvies?{" "}
      </h1>
      <div>
        <div class="w-full h-full absolute left-1/3 ">
          <img
            class=""
            src="/home/Graduate3.png"
            alt="Graduate"
            oncontextmenu="return false;"
          />
        </div>

        <div class="w-full h-full absolute top-2/4 right-1/4">
          <img
            class=""
            src="/home/Graduate1.png"
            alt="Graduate"
            oncontextmenu="return false;"
          />
        </div>

        <div className="flex justify-center basis-1/4 grow text- z-10 ">
          <img
            class=" mt-20 mr-4 w-19 h-20 "
            src="/home/icon_1.png"
            alt="icon-puzzle"
          />
          <div className="content-center w-4/12 mt-20 z-10">
            <h2 class="text-left text-white font-bold mb-3">
              Shared Cloud Libraries
            </h2>
            <p className="text-left text-white">
              Navigate to the Your work panel in the left sidebar. <br /> Select
              the library you want to share. <br />
              Select the Share icon in the upper right to share the library.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center basis-1/4 grow text-center z-10">
        <img
          class=" mt-20 mr-4 w-19 h-20"
          src="/home/icon_2.png"
          alt="icon-horgamingram"
        />
        <div className="content-center w-4/12 mt-16">
          <h2 class="text-left text-white font-bold mb-3">
            Free developer handoff, right inside
          </h2>
          <p className="text-left text-white">
            Cloud Inspector makes it easy for developers to get the information
            they need to turn pixels into code — all in the browser and, most
            importantly, for free.
          </p>
        </div>
      </div>

      <div className="flex justify-center basis-1/4 grow text-center z-10">
        <img
          class=" mt-20 mr-4 w-19 h-20 "
          src="/home/icon_3.png"
          alt="icon-rocket"
        />
        <div className="content-center w-4/12  mt-16">
          <h2 class="text-left text-white font-bold mb-3">
            Real-time collaborative editing
          </h2>
          <p className="text-left text-white">
            Room Service helps you build real-time collaborative features. Add
            real-time data sync! Let users edit the same data at the same time.
          </p>
        </div>
      </div>

      <div className="flex justify-center basis-1/4 grow text-center z-10">
        <img
          class=" mt-20 mr-4 w-19 h-20"
          src="/home/icon_4.png"
          alt="icon-box"
        />
        <div className="content-center w-4/12 mt-16">
          <h2 class="text-left text-white font-bold mb-3">
            Integrations with the Cloud API
          </h2>
          <p className="text-left text-white">
            Unlocking that value requires an iPaaS that delivers the
            transformative power of APIs and integration.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePageMiddle;
