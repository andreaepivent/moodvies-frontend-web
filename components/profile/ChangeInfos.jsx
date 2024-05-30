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
import NavbarProfile from "./Navbar/NavbarProfile"; 
import { useDispatch, useSelector } from "react-redux";
import { update } from "@/reducers/user";

// Functional component to change user information
function ChangeInfos(props) {
  // Using Redux to get the current user's data and dispatch actions
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  // Local state to manage form inputs and messages
  const [usernameValue, setUsernameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [currentPasswordValue, setCurrentPasswordValue] = useState("");
  const [newPasswordValue, setNewPasswordValue] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [infosMessage, setInfosMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  // Function to save new username and email
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
      });
      const updatedProfile = await response.json();

      if (updatedProfile) {
        dispatch(update({ username: usernameValue })); // Dispatching update action to Redux store
        props.setIsEditClicked(false); // Closing the edit form
        setShowModal(true); // Showing success modal
      } else {
        setInfosMessage(updatedProfile.error); // Setting error message
      }
    } catch (error) {
      console.log(error.message);
      setInfosMessage("An error occured");
    }
  };

  // Function to save new password
  const saveNewPassword = async () => {
    try {
      const response = await fetch('http://localhost:3000/users/editPassword', {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          token: user.token,
          currentPassword: currentPasswordValue,
          newPassword: newPasswordValue,
        })
      });
      const data = await response.json();
      if (data.result) {
        setPasswordMessage('Le mot de passe a bien été mis à jour');
      } else {
        setPasswordMessage(data.error); // Setting error message
      }
    } catch (error) {
      console.log(error.message);
      setPasswordMessage('An error occurred.');
    }
  };

  return (
    // Main container with background and flex layout
    <div className="w-screen min-h-screen bg-radial-gradient flex flex-col justify-around items-center">
      {/* Navbar and header section */}
      <div className="fixed top-7 h-[25%] w-full">
        <NavbarProfile />
        <div className="w-full flex flex-col items-center mt-10 md:flex-row md:justify-between md:items-end">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 to-fuchsia-900 text-5xl mb-4 md:mb-0 md:pl-20">
            Salut {user.username} !
          </h1>
        </div>
      </div>

      {/* Tabs section for Account and Password */}
      <div className="flex justify-center mt-60 mb-4">
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="account">Compte</TabsTrigger>
            <TabsTrigger value="password">Mot de passe</TabsTrigger>
          </TabsList>

          {/* Account Tab Content */}
          <TabsContent value="account">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center mb-5">
                  <CardTitle>Compte</CardTitle>
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
                Apportez des modifications à votre compte ici. Cliquez sur Enregistrer lorsque vous avez terminé.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="username">Nouveau pseudo :</Label>
                  <Input 
                    id="username" 
                    value={usernameValue}
                    onChange={(e) => setUsernameValue(e.target.value)}
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="email">Nouvel email :</Label>
                  <Input 
                    id="email"
                    value={emailValue}
                    onChange={(e) => setEmailValue(e.target.value)}
                  />
                </div>
              </CardContent>
              <CardFooter className='flex flex-col'>
                <Button onClick={saveNewUsernameAndEmail}>Enregistrer</Button>
                {infosMessage && <p className='font-extrabold mt-1 text-lg'>{infosMessage}</p>}
              </CardFooter>
            </Card>
          </TabsContent>

          {/* Password Tab Content */}
          <TabsContent value="password">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center mb-5">
                  <CardTitle>Mot de passe</CardTitle>
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
                Modifiez votre mot de passe ici. Après avoir sauvegardé, vous serez déconnecté.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="current">Mot de passe actuel :</Label>
                  <Input 
                    id="current" 
                    type="password" 
                    value={currentPasswordValue}
                    onChange={(e) => setCurrentPasswordValue(e.target.value)}
                    />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="new">Nouveau mot de passe :</Label>
                  <Input 
                    id="new" 
                    type="password" 
                    value={newPasswordValue}
                    onChange={(e) => setNewPasswordValue(e.target.value)}
                  />
                </div>
              </CardContent>
              <CardFooter className='flex flex-col'>
                <Button onClick={saveNewPassword}>Enregistrer</Button>
                {passwordMessage && <p className='font-extrabold mt-1 text-lg'>{passwordMessage}</p>}
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {showModal && (
        <Dialog open={showModal} onOpenChange={setShowModal}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Modifications sauvegardées</DialogTitle>
              <DialogDescription>
              Votre profil a été mis à jour avec succès.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

export default ChangeInfos; 