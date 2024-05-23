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

export default function Login({ closeModal }) {
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
          <img src="/home/Logo-moodvie-letter.svg" className="size-10 m-2" />
          <CardHeader>
            <CardTitle className="text-center -mt-10">
              Login to your account
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Input id="email" placeholder="Email" />
                  <Input id="password" placeholder="Password" />
                </div>
                <div className="flex flex-row gap-2"></div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="gradientPurple" className="w-full">
              Login
            </Button>
          </CardFooter>
          <p className="text-center text-sm text-slate-100 mb-3 -mt-3">
            Don’t have an account ? Sign up.
          </p>
        </Card>
      </div>
    </div>
  );
}
