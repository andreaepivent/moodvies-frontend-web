import React from "react";
import Footer from "../common/Footer";
import { Button } from "../ui/button";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Signup from "./Signup";

const Home = () => {
  const [signin, setSignin] = useState(false);
  const [signup, setSignup] = useState(false);

  return (
    <div class="w-screen bg-[black]">
      <div class="">
        <video class="blur-xl" autoPlay loop muted>
          <source src="MATRIX4.mp4" />
        </video>

        <div class="flex h-screen z-0 justify-center items-center bg-[pink] z-10">
          <img
            class="flex place-self-start absolute left-1 top-3 w-20 h-21 "
            src="logo-moodvie-letter.png"
            alt="logo-moodvie-letter"
          />

          <div className=" flex flex-col z-10">
            <div className="basis-full flex items-center justify-center w-full bg-cover bg-center">
              <h1 className="flex text-center text-6xl font-bold text-white my-8 ">
                {" "}
                FIND YOUR FAVORITE MOVIE <br /> FOR TONIGHT{" "}
              </h1>
            </div>

            {/* EX MODAL */}
            {/* <div className="flex flex-row content-start">
              <div className="basis-1/4 grow text-center"></div>
              <div className="basis-1/4 grow text-right mr-5">
                <button
                  class="box-border p-[6px] px-[8px] gap-[8px] w-[170px] h-[50px] rounded-[8px] bg-[blue]"
                  onClick={() =>
                    document.getElementById("my_modal_login").showModal()
                  }
                >
                  Login
                </button>
              </div>
              <div className="basis-1/4 grow text-left ml-5">
                <button
                  class="box-border p-[6px] px-[8px] gap-[8px] w-[170px] h-[50px] rounded-[8px] bg-[blue]"
                  onClick={() =>
                    document.getElementById("my_modal_Create").showModal()
                  }
                >
                  Join us
                </button>
              </div>
              <div className="basis-1/4 grow text-center"></div>
            </div> */}

            <Dialog className="">
              <DialogTrigger asChild>
                <Button variant="outline">Sign-in</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Edit profile</DialogTitle>
                  <DialogDescription>
                    <Signup />
                  </DialogDescription>
                </DialogHeader>

                <DialogFooter>
                  <Button type="submit">Save changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <Button className="w-20" onClick={() => setSignup(true)}>
              Sign-up
            </Button>
          </div>
        </div>
      </div>

      <div class="flex flex-col content-start">
        <h1 className="text-center text-6xl font-bold text-white mt-20">
          {" "}
          What is Moodvies?{" "}
        </h1>

        <div className="flex justify-center basis-1/4 grow text-center ">
          <img
            class=" mt-20 mr-4 w-19 h-20 "
            src="icon_1.png"
            alt="logo-moodvie-letter"
          />
          <div className="content-center w-4/12 mt-20">
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

        <div className="flex justify-center basis-1/4 grow text-center">
          <img
            class=" mt-20 mr-4 w-19 h-20"
            src="icon_2.png"
            alt="logo-moodvie-letter"
          />
          <div className="content-center w-4/12 mt-16">
            <h2 class="text-left text-white font-bold mb-3">
              Free developer handoff, right inside
            </h2>
            <p className="text-left text-white">
              Cloud Inspector makes it easy for developers to get the
              information they need to turn pixels into code — all in the
              browser and, most importantly, for free.
            </p>
          </div>
        </div>

        <div className="flex justify-center basis-1/4 grow text-center">
          <img
            class=" mt-20 mr-4 w-19 h-20 "
            src="icon_3.png"
            alt="logo-moodvie-letter"
          />
          <div className="content-center w-4/12  mt-16">
            <h2 class="text-left text-white font-bold mb-3">
              Real-time collaborative editing
            </h2>
            <p className="text-left text-white">
              Room Service helps you build real-time collaborative features. Add
              real-time data sync! Let users edit the same data at the same
              time.
            </p>
          </div>
        </div>

        <div className="flex justify-center basis-1/4 grow text-center">
          <img
            class=" mt-20 mr-4 w-19 h-20"
            src="icon_4.png"
            alt="logo-moodvie-letter"
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

        <div className="flex justify-center basis-1/4 grow text-center border-2 border-red mt-44">
          <img
            class="w-8/12 h-2/6 "
            src="phone.png"
            alt="logo-moodvie-letter"
          />

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
                src="App Store.png"
                alt="logo-moodvie-letter"
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>

      <dialog id="my_modal_login" className="modal">
        <div className="modal-box bg-gray-700">
          <h3 className="text-center font-bold text-lg">
            Login to your account!
          </h3>
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
            <label className="input input-bordered flex items-center gap-2">
              Email
              <input
                defaultValue=""
                type="text"
                className="grow"
                placeholder="daisy@site.com"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input defaultValue="" type="password" className="grow" />
            </label>
            <button
              className="btn "
              onClick={() =>
                document.getElementById("my_modal_login").showModal()
              }
            >
              Login
            </button>
          </form>
        </div>
      </dialog>

      <dialog id="my_modal_Create" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click on ✕ button to close</p>
        </div>
      </dialog>
    </div>
  );
};

export default Home;
