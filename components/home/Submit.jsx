import * as React from "react";
import { Checkbox } from "@/components/ui/checkbox";

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

export default function Submit({ closeModal }) {
  return (

    <div
      className="z-10 fixed inset-0  flex items-center justify-center"
      onClick={closeModal}
    >
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <Card
          onClick={(e) => e.stopPropagation()}
          className="w-[350px] dark absolute"
        >
          <img src="/Logo-moodvie-letter.svg" className="size-10 m-2" />
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
                  <Input id="password" placeholder="Password" />
                </div>
                <div className="flex flex-row gap-2">
                  <Input id="age" placeholder="Age" className="w-16" />
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
            <Button variant="gradientPurple" className="w-full">
              Submit
            </Button>
          </CardFooter>
          <p className="text-center text-slate-100 mb-3 -mt-3">or</p>
          <CardFooter className="flex flex-col gap-4">
            <Button className="w-full">
              <img src="/google.svg" className="mr-2" alt="logo-google" />
              Continue with Google
            </Button>
            <Button variant="facebook" className="w-full">
              <img
                src="/facebook.svg"
                className="mr-2 size-7"
                alt="logo-google"
              />
              Continue with Facebook
            </Button>
          </CardFooter>
        </Card>
        </div>
        </div>
   
  );
}
