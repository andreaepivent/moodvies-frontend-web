import * as React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import IconPlatform from "./IconPlatform";

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

export default function Signup({ closeModal, submit, BackSignUp }) {
  return (
    <div
      className="z-10 fixed inset-0  flex items-center justify-center"
      onClick={closeModal}
    >
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <Card
          onClick={(e) => e.stopPropagation()}
          className="w-[550px] h-[500px] dark absolute"
        >
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
              <div class=" flex flex-row flex-wrap flex justify-center m-6 mt-4 rounded ">
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
              className="w-4/12 rounded-full absolute bottom-10 inset-x-60 h-16 w-16"
              onClick={submit}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
