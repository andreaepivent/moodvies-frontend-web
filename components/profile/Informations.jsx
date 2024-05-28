import React, { useEffect, useState } from "react";
import NavbarProfile from "./Navbar/NavbarProfile";
import { Button } from "../ui/button";
import ChangeInfos from "./ChangeInfos";
import { useSelector } from "react-redux";
import ResponsiveNavbarProfile from "./Navbar/ResponsiveNavbarProfile";

function Informations() {
  const user = useSelector((state) => state.user.value);
  const [isEditClicked, setIsEditClicked] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [username, setUsername] = useState("");
  const [newsletter, setNewsletter] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/users/getUserData",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              token: user.token,
            }),
          }
        );

        if (!response.ok) {
          console.error(response.status);
        }
        const data = await response.json();
        const userData = data.data;

        setUserEmail(userData.email);
        setUsername(userData.username);
        setNewsletter(userData.newsletter);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, [isEditClicked, user.token]);

  return isEditClicked ? (
    <ChangeInfos
      isEditClicked={isEditClicked}
      setIsEditClicked={setIsEditClicked}
    />
  ) : (
    <div className="w-screen min-h-screen bg-radial-gradient flex flex-col justify-around items-center">
      <div className="fixed top-7 h-[25%] w-full">
        <ResponsiveNavbarProfile />
        <div className="w-full flex flex-col items-center mt-10 md:flex-row md:justify-between md:items-end">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 to-fuchsia-900 text-5xl mb-4 md:mb-0 md:pl-20">
            Hello {user.username}
          </h1>
        </div>
      </div>
      
      <div className="mx-auto w-1/2 h-1/4 flex justify-center mt-56">
        <div className="w-1/2 flex flex-col items-center justify-around">
          <span className="text-white">Username :</span>
          <span className="text-white">Email :</span>
          <span className="text-white">Password :</span>
          <span className="text-white">Newsletter :</span>
        </div>
        <div className="w-1/2 flex flex-col items-center justify-around">
          <span className="text-white">{username}</span>
          <span className="text-white">{userEmail}</span>
          <span className="text-white">********</span>
          <span className="text-white">
            {newsletter ? "Subscribed" : "Not Subscribed"}
          </span>
        </div>
      </div>
      
      <Button
        variant="gradientPurple"
        size="lg"
        className="mx-auto mt-10 block text-white"
        onClick={() => setIsEditClicked(true)}
      >
        Edit informations
      </Button>
    </div>
  );
}

export default Informations;
