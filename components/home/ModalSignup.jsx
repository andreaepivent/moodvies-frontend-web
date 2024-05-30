import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import ModalPlatforms from "./ModalPlatforms";
import { login } from "@/reducers/user";
import { useGoogleLogin } from "@react-oauth/google";

export default function ModalSignup() {
  const [isVisible, setIsVisible] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");
  const [open, setOpen] = useState(false);
  const [nextModalOpen, setNextModalOpen] = useState(false);
  const [loginData, setLoginData] = useState(null);

  const dispatch = useDispatch();
  const wait = () => new Promise((resolve) => setTimeout(resolve, 200));

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log("Google login successful:", tokenResponse);
      const { access_token } = tokenResponse;

      try {
        const response = await fetch(
          "http://localhost:3000/users/google-login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              access_token: access_token,
            }),
          }
        );

        const data = await response.json();

        if (data.result) {
          setOpen(false);
          setNextModalOpen(true);
          setLoginData({
            token: data.token,
            username: data.username,
          });
        } else {
          console.error("Google login failed on server:", data.message);
        }
      } catch (error) {
        console.error("Google login error:", error);
      }
    },
    onError: (error) => {
      console.error("Google login error:", error);
    },
  });

  const submitSignUp = () => {
    const connectionData = {
      username: username,
      password: password,
      email: email,
      birthday: birthday,
      gender: gender,
    };

    fetch("http://localhost:3000/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(connectionData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.result) {
          wait().then(() => {
            setOpen(false);
            setNextModalOpen(true);
          });
          setUsername("");
          setPassword("");
          setEmail("");
          setBirthday("");
          setGender("");
          console.log(open);
          dispatch(
            login({
              token: data.token,
              username: data.username,
            })
          );
        }
      });
  };

  return (
    <>
      <Dialog className="dark" open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="ghost" className="w-32 border-2 text-slate-100">
            Signup
          </Button>
        </DialogTrigger>
        <DialogContent className="dark text-slate-100 sm:max-w-[425px]">
          <div className="relative w-10 h-10">
            <Image
              src={"/home/logo-moodvie-letter.svg"}
              alt="logo-moodvie"
              style={{ objectFit: "contain" }}
              width={50}
              height={50}
              fetchPriority="hight"
            />
          </div>
          <DialogHeader>
            <DialogTitle className="text-center text-2xl mb-3">
              Create an account
            </DialogTitle>
            <DialogDescription>
              Please enter all this information
            </DialogDescription>
          </DialogHeader>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Input
                id="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <Input
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="relative">
              <Input
                id="password"
                placeholder="Password"
                type={isVisible ? "password" : "text"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pr-10"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center px-2"
                onClick={() => setIsVisible(!isVisible)}
              >
                {!isVisible ? (
                  <FontAwesomeIcon icon={faEye} className="" />
                ) : (
                  <FontAwesomeIcon icon={faEyeSlash} className="" />
                )}
              </button>
            </div>
            <div className="flex flex-row gap-2">
              <Input
                id="birthday"
                placeholder="  /  /   "
                type="date"
                className="w-40"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
              />
              <Select onValueChange={setGender} value={gender}>
                <SelectTrigger id="gender" value={gender}>
                  <SelectValue
                    placeholder="Gender"
                    className="text-slate-100"
                  />
                </SelectTrigger>
                <SelectContent position="popper" className="dark">
                  <SelectItem value="homme" className="cursor-pointer">
                    Homme
                  </SelectItem>
                  <SelectItem value="femme" className="cursor-pointer">
                    Femme
                  </SelectItem>
                  <SelectItem value="autres" className="cursor-pointer">
                    Non précisé
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="mt-2"></div>
          <DialogFooter>
            <Button
              type="submit"
              variant="gradientPurple"
              className="w-full mb-1"
              onClick={submitSignUp}
            >
              Submit
            </Button>
          </DialogFooter>

          <Button
            type="submit"
            variant=""
            className="w-full text-black mb-2"
            onClick={() => googleLogin()}
          >
            <div className="relative h-6 w-6 -ml-4 mr-2 ">
              <Image
                src="/logo/google.svg"
                alt="logo-google"
                style={{ objectFit: "contain" }}
                width={30}
                height={30}
                fetchPriority="hight"
              />
            </div>
            Continue with Google
          </Button>
        </DialogContent>
      </Dialog>

      <ModalPlatforms
        loginData={loginData}
        open={nextModalOpen}
        onOpenChange={setNextModalOpen}
      />
    </>
  );
}
