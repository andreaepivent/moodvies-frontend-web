import * as React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import IconMovie from "./IconMovie";

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

export default function MoviesModal({ closeModal, submit, Signup }) {
  return (
    <div
      className="z-10 fixed inset-0  flex items-center justify-center"
      onClick={closeModal}
    >
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <Card
          onClick={(e) => e.stopPropagation()}
          className="w-[750px] h-[500px] dark absolute"
        >
          <img src="/home/Logo-moodvie-letter.svg" className="size-16 m-2" />
          <CardHeader>
            <CardTitle className="text-center text-3xl -mt-10">
              Tell us more about you
            </CardTitle>
            <CardTitle className="text-center text-lg">Pick 5 movies</CardTitle>
          </CardHeader>

          <CardContent>
            <form class="flex flex-row flex-wrap flex justify-center m-6 mt-4 rounded">
              <IconMovie nom="/Barbie" />
              <IconMovie nom="/GOT" />
              <IconMovie nom="/Avengers" />
              <IconMovie nom="/Barbie" />
              <IconMovie nom="Barbie" />
              <IconMovie nom="Barbie" />
              <IconMovie nom="Barbie" />
              <IconMovie nom="Barbie" />
              <IconMovie nom="Barbie" />
              <IconMovie nom="Barbie" />
              <IconMovie nom="Barbie" />
              <IconMovie nom="Barbie" />
              <IconMovie nom="Barbie" />
              <IconMovie nom="Barbie" />
              <IconMovie nom="Barbie" />
              <IconMovie nom="Barbie" />
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button
              variant="gradientPurple"
              className="w-full"
              onClick={submit}
            >
              Submit
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
