import * as React from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import IconPlatform from "./IconPlatform";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function PlatformsModal() {
  return (
    <div className="z-10 fixed inset-0  flex items-center justify-center">
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <Card className="w-[550px] h-[500px] dark absolute">
          <img src="/home/Logo-moodvie-letter.svg" className="size-12 m-4" />
          <CardHeader>
            <CardTitle className="text-center -mt-12 mb-4">
              Tell us more about you
            </CardTitle>
            <CardTitle className="text-center text-sm">
              Which platform(s) do you stream on?
            </CardTitle>
          </CardHeader>

          <CardContent>
            <form class="">
              <div class=" flex-row flex-wrap flex justify-center m-6 mt-4 rounded ">
                <IconPlatform nom="Netflix"></IconPlatform>
                <IconPlatform nom="Prime"></IconPlatform>
                <IconPlatform nom="Disney+"></IconPlatform>
                <IconPlatform nom="AppleTV"></IconPlatform>
                <IconPlatform nom="MyCanal"></IconPlatform>
                <IconPlatform nom="OSC"></IconPlatform>
                <IconPlatform nom="HBO"></IconPlatform>
              </div>
            </form>
          </CardContent>

          <CardFooter className="flex justify-between ">
            <Button
              variant="outline"
              className=" rounded-full absolute bottom-10 inset-x-60 h-16 w-16"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              className="rounded-full absolute top-6 right-6 h-8 w-16"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
