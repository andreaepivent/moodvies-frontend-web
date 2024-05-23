import * as React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Signup({ closeModal }) {
  return (
    <div
      className="z-10 fixed inset-0  flex items-center justify-center"
      onClick={closeModal}
    >
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <Card
          onClick={(e) => e.stopPropagation()}
          className="w-[750px] h-[450px] dark absolute" 
        >
          <img src="/home/Logo-moodvie-letter.svg" className="size-16 m-2" />
          <CardHeader>
            <CardTitle className="text-center text-3xl -mt-10">
              Tell us more about you
            </CardTitle >
            <CardTitle className="text-center text-lg" >Pick 5 movies</CardTitle>
          </CardHeader>

          <CardContent>
            
            <form class="flex flex-row flex-wrap flex justify-center m-6 mt-4 rounded">

            <img src="/Film_Poster/Barbie.png" className="size-16 m-2 rounded transition duration-500 ease-in-out transform hover:scale-105 hover:brightness-75" />
            <img src="/Film_Poster/Avengers.png" className="size-16 m-2 rounded transition duration-500 ease-in-out transform hover:scale-105 hover:brightness-75" />
            <img src="/Film_Poster/GOT.png" className="size-16 m-2 rounded transition duration-500 ease-in-out transform hover:scale-105 hover:brightness-75" />
            <img src="/Film_Poster/Pearl.png" className="size-16 m-2 rounded transition duration-500 ease-in-out transform hover:scale-105 hover:brightness-75" />
            <img src="/Film_Poster/Barbie.png" className="size-16 m-2 rounded transition duration-500 ease-in-out transform hover:scale-105 hover:brightness-75" />
            <img src="/Film_Poster/Avengers.png" className="size-16 m-2 rounded transition duration-500 ease-in-out transform hover:scale-105 hover:brightness-75" />
            <img src="/Film_Poster/GOT.png" className="size-16 m-2 rounded transition duration-500 ease-in-out transform hover:scale-105 hover:brightness-75" />
            <img src="/Film_Poster/Pearl.png" className="size-16 m-2 rounded transition duration-500 ease-in-out transform hover:scale-105 hover:brightness-75" />
            <img src="/Film_Poster/Barbie.png" className="size-16 m-2 rounded transition duration-500 ease-in-out transform hover:scale-105 hover:brightness-75" />
            <img src="/Film_Poster/Avengers.png" className="size-16 m-2 rounded transition duration-500 ease-in-out transform hover:scale-105 hover:brightness-75" />
            <img src="/Film_Poster/GOT.png" className="size-16 m-2 rounded transition duration-500 ease-in-out transform hover:scale-105 hover:brightness-75" />
            <img src="/Film_Poster/Pearl.png" className="size-16 m-2 rounded transition duration-500 ease-in-out transform hover:scale-105 hover:brightness-75" />
            <img src="/Film_Poster/Barbie.png" className="size-16 m-2 rounded transition duration-500 ease-in-out transform hover:scale-105 hover:brightness-75" />
            <img src="/Film_Poster/Avengers.png" className="size-16 m-2 rounded transition duration-500 ease-in-out transform hover:scale-105 hover:brightness-75" />
            <img src="/Film_Poster/Barbie.png" className="size-16 m-2 rounded transition duration-500 ease-in-out transform hover:scale-105 hover:brightness-75" />
            <img src="/Film_Poster/Avengers.png" className="size-16 m-2 rounded transition duration-500 ease-in-out transform hover:scale-105 hover:brightness-75" />
        
              

            </form>

          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="gradientPurple" className="w-full">
            Submit
            </Button>
          </CardFooter>

        </Card>
      </div>
    </div>
  );
}
