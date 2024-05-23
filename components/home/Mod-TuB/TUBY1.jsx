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
          className="w-[550px] h-[450px] dark absolute" 
        >
          <img src="/home/Logo-moodvie-letter.svg" className="size-10 m-2" />
          <CardHeader>
            <CardTitle className="text-center -mt-10">
              Tell us more about you
            </CardTitle >
            <CardTitle className="text-center text-sm" >Which platform(s) do you stream on?</CardTitle>
          </CardHeader>

          <CardContent>
            
            <form class="">

              <div class=" flex flex-row flex-wrap flex justify-center m-6 mt-4 rounded ">

              <img src="/logo-platform/Netflix.png" class="size-20 m-2 rounded transition duration-500 ease-in-out transform hover:scale-105 hover:brightness-75" alt="Netflix Logo"/>
              <img src="/logo-platform/Prime.png" class="size-20 m-2 rounded duration-500 ease-in-out transform hover:scale-105 hover:brightness-75" alt="Prime Logo" />
              <img src="/logo-platform/Disney+.png" class="size-20 m-2 rounded duration-500 ease-in-out transform hover:scale-105 hover:brightness-75" alt="Disney+ Logo" />
              <img src="/logo-platform/AppleTV.png" class="size-20 m-2 rounded duration-500 ease-in-out transform hover:scale-105 hover:brightness-75" alt="AppleTV Logo" />
              <img src="/logo-platform/MyCanal.png" class="size-20 m-2 rounded duration-500 ease-in-out transform hover:scale-105 hover:brightness-75" alt="MyCanal Logo" />
              <img src="/logo-platform/OSC.png" class="size-20 m-2 rounded duration-500 ease-in-out transform hover:scale-105 hover:brightness-75" alt="OSC Logo" />
              <img src="/logo-platform/HBO.png" class="size-20 m-2 rounded duration-500 ease-in-out transform hover:scale-105 hover:brightness-75" alt="HBO Logo" />
              </div>

            </form>

          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" className="w-4/12 rounded-full absolute bottom-10 inset-x-60 h-16 w-16">
            <ChevronRight className="h-4 w-4" />
            </Button>
          </CardFooter>

        </Card>
      </div>
    </div>
  );
}
