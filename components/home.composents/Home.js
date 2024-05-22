import React from "react";

import HomePageHeader from "./HomePageHeader";
import HomePageMiddle from "./HomePageMiddle";
import HomePageBottom from "./HomePageBottom";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card } from "../ui/card";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../ui/select";
import { Checkbox } from "../ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Signup from "./home/Signup";

const Home = () => {
  return (
    <div class="w-screen bg-[black]">
      
      <div>
        <HomePageHeader />
      </div>
      <div>
        <HomePageMiddle />
      </div>

      <div>
        <HomePageBottom />
      </div>

      
        <div className="basis-1/4 grow text-center">
          <footer class="bg-zinc-900 text-white py-8 mt-auto">
            <div class="flex flex-nowrap row-auto justify-between mx-auto px-4">
              <div class="mb-8 ml-11 w-72">
                <img
                  class="flex place-self-start mt-0 mb-2 w-20 h-21 "
                  src="logo-moodvie-letter.png"
                  alt="logo-moodvie-letter"
                />

                <p class="mb-2 ml-4 text-left text-sm font-thin ">
                  {" "}
                  Lorem ipsum dolor sit amet, consecteturlabore et dolore magna
                  aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.{" "}
                </p>
              </div>
              <div class="mb-8 text-left">
                <h3 class="font-bold">Compagny</h3>
                <h4 class="mt-1 text-base font-semibold">Moodvies</h4>
                <ul>
                  <li class="mt-2 text-sm font-thin">Paris, France</li>
                  <li class="mt-2 text-sm font-thin">06 06 06 06 06</li>
                  <li class="mt-2 text-sm font-thin">contact@moodvies.com</li>
                </ul>
              </div>
              <div class="mb-8 text-sm text-left ">
                <h3 class="text-base font-bold mb-1">Quick links</h3>
                <ul>
                  <li class="mt-2 font-thin">
                    <a href="#" class="hover:underline">
                      About us
                    </a>
                  </li>
                  <li class="mt-2 font-thin">
                    <a href="#" class="hover:underline">
                      FAQ
                    </a>
                  </li>
                  <li class="mt-2 font-thin">
                    <a href="#" class="hover:underline">
                      Sign up
                    </a>
                  </li>
                  <li class="mt-2 font-thin">
                    <a href="#" class="hover:underline">
                      Log in
                    </a>
                  </li>
                </ul>
              </div>
              <div class="mb-8 text-sm text-left">
                <h3 class="text-base font-bold mb-1">Social Media</h3>
                <ul>
                  <li class="mt-2 font-thin">
                    <a href="#" class="hover:underline">
                      Facebook
                    </a>
                  </li>
                  <li class="mt-2 font-thin">
                    <a href="#" class="hover:underline">
                      Twitter
                    </a>
                  </li>
                  <li class="mt-2 font-thin">
                    <a href="#" class="hover:underline">
                      Youtube
                    </a>
                  </li>
                  <li class="mt-2 font-thin">
                    <a href="#" class="hover:underline">
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
              <div class="mb-8 mr-10">
                <h3 class="text-base font-bold mb-4">Suivez-nous</h3>
                <div className="flex w-full max-w-sm items-center space-x-2">
                  <input type="email" placeholder="Email" />
                  <button
                    variant="gradientGrey"
                    class=" bg-fuchsia-900"
                    type="submit"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </footer>
        </div>
      
    </div>
  );
};

export default Home;
