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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import NavbarProfile from "./NavbarProfile"; 
import { useDispatch, useSelector } from "react-redux";
import { update } from "@/reducers/user";

// Functional component to change user information
function ChangeInfos(props) {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  // State variables to manage form inputs
  const [usernameValue, setUsernameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [currentPasswordValue, setCurrentPasswordValue] = useState("current password");
  const [showModal, setShowModal] = useState(false)

  console.log(user)

  const saveNewUsernameAndEmail = async () => {
    try {
      const response = await fetch('http://localhost:3000/users/editProfile', {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          token: user.token,
          username: usernameValue,
          email: emailValue
        })
      })
      const updatedProfile = await response.json()
      if (updatedProfile) {
        dispatch(update({username: usernameValue}))
        props.setIsEditClicked(false)
        setShowModal(true)
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    // Main container with background and flex layout
    <div className="w-screen h-screen bg-radial-gradient flex flex-col justify-around items-center">
      {/* Navbar and header section */}
      <div className="fixed top-7 h-[25%] w-full">
        <NavbarProfile />
        <div className="w-full flex flex-col items-center mt-10 md:flex-row md:justify-between md:items-end">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 to-fuchsia-900 text-5xl mb-4 md:mb-0 md:pl-20">
            Hello {user.username}
          </h1>
        </div>
      </div>

      {/* Tabs section for Account and Password */}
      <div className="flex justify-center mt-60">
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>

          {/* Account Tab Content */}
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
                      props.setIsEditClicked(false); // Close the edit form
                    }}
                  >
                    X
                  </Button>
                </div>
                <CardDescription>
                  Make changes to your account here. Click save when you're done.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="username">New username :</Label>
                  <Input 
                    id="username" 
                    value={usernameValue}
                    onChange={(e) => setUsernameValue(e.target.value)}
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="email">New email :</Label>
                  <Input 
                    id="email"
                    value={emailValue}
                    onChange={(e) => setEmailValue(e.target.value)}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button
                 onClick={(e) => saveNewUsernameAndEmail(e)}
                >Save changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* Password Tab Content */}
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
                      props.setIsEditClicked(false); // Close the edit form
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
                  <Label htmlFor="current">Current password :</Label>
                  <Input id="current" type="password" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="new">New password :</Label>
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

      {showModal && (
        <Dialog open={showDialog} onOpenChange={setShowModal}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Changes Saved</DialogTitle>
              <DialogDescription>
                Your profile has been updated successfully.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

export default ChangeInfos; // Exporting the component as default