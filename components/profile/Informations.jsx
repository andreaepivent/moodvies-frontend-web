import React, {useState} from 'react'
import Navbar from './Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


function Informations() {
  const [isEditClicked, setIsEditClicked] = useState(false);
  const [nameValue, setNameValue] = useState("name")
  const [emailValue, setEmailValue] = useState("email")
  const [passwordValue, setPasswordValue] = useState("password")

  function editClickedDisplay() {
    return (
      <div class="w-screen h-screen bg-radial-gradient">
        <Navbar />
        <div class="w-full h-36 flex flex-col mt-14 ml-40">
          <h1 class="h-28 w-1/2 mb-0 text-transparent text-8xl bg-clip-text bg-gradient-to-r from-fuchsia-300 to-fuchsia-900 inline-block">Hello Binga</h1>
        </div>
  
        <div class='flex justify-center'>
        <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription>
                Make changes to your account here. Click save when you're done.
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
              <CardTitle>Password</CardTitle>
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
    )
  }

  return (
    isEditClicked ? editClickedDisplay() : 
    <div class="w-screen h-screen bg-radial-gradient">
      <Navbar />
      <div class="w-full h-36 flex flex-col mt-14 ml-40">
        <h1 class="h-28 w-1/2 mb-0 text-transparent text-8xl bg-clip-text bg-gradient-to-r from-fuchsia-300 to-fuchsia-900 inline-block">Hello Binga</h1>
      </div>
      <div class="w-full h-1/2 flex flex-col justify-around items-center ">
        <div class="w-1/2 flex justify-around">
          <span class='text-white'>Name :</span>
          <span class='text-white'>{nameValue}</span>
        </div>
        <div class="w-1/2 flex justify-around">
          <span class='text-white'>Email :</span>
          <span class='text-white'>{emailValue}</span>
        </div>
        <div class="w-1/2 flex justify-around">
          <span class='text-white'>Password :</span>
          <span class='text-white'>********</span>
        </div>
        <Button variant="gradientPurple" size="lg" onClick={() => {console.log(setIsEditClicked(true))}}>Edit</Button>
      </div>
    </div>
  )
}



export default Informations