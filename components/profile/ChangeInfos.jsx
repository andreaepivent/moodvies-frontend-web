import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Navbar from './Navbar'


function ChangeInfos(props) {

  const [usernameValue, setUsernameValue] = useState("Louis")
  const [emailValue, setEmailValue] = useState("email")
  const [passwordValue, setPasswordValue] = useState("password")

  return (
    <div  className="w-screen h-screen bg-radial-gradient">
      <Navbar />
      <div className="w-full h-36 flex flex-col mt-3">
        <h1 className="h-28 w-1/2 mb-0 ml-40 text-transparent text-8xl bg-clip-text bg-gradient-to-r from-fuchsia-300 to-fuchsia-900 inline-block">Hello Louis</h1>
      </div>

      <div className='flex justify-center'>
      <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <div className='flex justify-between items-center mb-5'>
              <CardTitle>Account</CardTitle>
              <Button variant="default" size="sm" className='bg-transparent text-black hover:bg-slate-100 hover:rounded-full' onClick={() => {props.setIsEditClicked(false)}}>X</Button>
            </div>
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
          <div className='flex justify-between items-center mb-5'>
              <CardTitle>Password</CardTitle>
              <Button variant="default" size="sm" className='bg-transparent text-black hover:bg-slate-100 hover:rounded-full' onClick={() => {props.setIsEditClicked(false)}}>X</Button>
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
  )
}

export default ChangeInfos