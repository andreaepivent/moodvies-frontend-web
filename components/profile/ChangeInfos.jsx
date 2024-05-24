import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import NavbarProfile from "./NavbarProfile";

function ChangeInfos(props) {
  const [usernameValue, setUsernameValue] = useState("Louis");
  const [emailValue, setEmailValue] = useState("email");
  const [passwordValue, setPasswordValue] = useState("password");

  return (
    <div className="w-screen h-screen bg-radial-gradient flex flex-col justify-around items-center">
      <div className="fixed top-7 h-[25%] w-full">
        <NavbarProfile />
        <div className="w-full flex flex-col items-center mt-10 md:flex-row md:justify-between md:items-end">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 to-fuchsia-900 text-5xl mb-4 md:mb-0 md:pl-20">
            Hello Louis
          </h1>
        </div>
      </div>

      <div className="flex justify-center mt-60">
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center mb-5">
                  <CardTitle>Account</CardTitle>
                  <Button
                    variant="default"
                    size="sm"
                    className="bg-transparent text-black hover:bg-slate-100 hover:rounded-full"
                    onClick={() => {
                      props.setIsEditClicked(false);
                    }}
                  >
                    X
                  </Button>
                </div>
                <CardDescription>
                  Make changes to your account here. Click save when you're
                  done.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" defaultValue="@peduarte" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" defaultValue="peduarte@gmail.com" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="password">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center mb-5">
                  <CardTitle>Password</CardTitle>
                  <Button
                    variant="default"
                    size="sm"
                    className="bg-transparent text-black hover:bg-slate-100 hover:rounded-full"
                    onClick={() => {
                      props.setIsEditClicked(false);
                    }}
                  >
                    X
                  </Button>
                </div>
                <CardDescription>
                  Change your password here. After saving, you'll be logged out.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="current">Current password</Label>
                  <Input id="current" type="password" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="new">New password</Label>
                  <Input id="new" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save password</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default ChangeInfos;
