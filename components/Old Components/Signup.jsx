import * as React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import PlatfomsModal from "./Modals/PlatfomsModal";
import { Button } from "@/components/ui/button";
import { FieldCalendar } from "../ui/FieldCalendar";
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
import { useState } from "react";
import { createPortal } from "react-dom";

//Calendrier
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FieldCalendar } from "../ui/FieldCalendar";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { toast } from "@/components/ui/use-toast";

const FormSchema = z.object({
  dob: z.date({
    required_error: "A date of birth is required.",
  }),
});

export default function Signup({ closeModal, submit }) {
  const form =
    useForm <
    z.infer <
    typeof FormSchema >>
      {
        resolver: zodResolver(FormSchema),
      };

  return (
    <div
      className="z-10 fixed inset-0  flex items-center justify-center"
      onClick={closeModal}
    >
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <Card
          onClick={(e) => e.stopPropagation()}
          className="w-[390px] dark absolute"
        >
          <img src="/home/Logo-moodvie-letter.svg" className="size-10 m-2" />
          <CardHeader>
            <CardTitle className="text-center -mt-10">
              Create an account
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Input id="name" placeholder="Username" />
                  <Input id="email" placeholder="Email" />
                  <Input
                    id="password"
                    /* type="password" */ placeholder="Password"
                  />
                </div>
                <div class="flex w-full">
                  <div className="flex flex-row gap-2 w-32">
                    <Select>
                      <SelectTrigger id="gender">
                        <SelectValue
                          placeholder="Gender"
                          className="text-slate-100"
                        />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="homme">Homme</SelectItem>
                        <SelectItem value="femme">Femme</SelectItem>
                        <SelectItem
                          value="autres"
                          className="bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:bg-gradient-to-l"
                        >
                          ...
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  {/* <div class="flex-row grow ml-2 w-10">
                    <FieldCalendar />
                  </div> */}
                </div>
              </div>
              <div className="mt-6">
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms" className="text-slate-100">
                    Yes, I'd like to subscribe to the newsletter
                  </Label>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button
              variant="gradientPurple"
              className="w-full"
              onClick={() => submit()}
            >
              Submit
            </Button>
          </CardFooter>
          <p className="text-center text-slate-100 mb-3 -mt-3">or</p>
          <CardFooter className="flex flex-col gap-4">
            <Button className="w-full">
              <img src="/logo/google.svg" className="mr-2" alt="logo-google" />
              Continue with Google
            </Button>
            <Button variant="facebook" className="w-full">
              <img
                src="/logo/facebook.svg"
                className="mr-2 size-7"
                alt="logo-google"
              />
              Continue with Facebook
            </Button>
          </CardFooter>
        </Card>

        {/* <div className="relative">
          {showModalPlatforms &&
            createPortal(
              <PlatfomsModal closeModal={() => setshowModalPlatforms(false)} />,
              document.body
            )}
        </div> */}
      </div>
    </div>
  );
}