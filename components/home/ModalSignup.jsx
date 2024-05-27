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
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import ModalPlatforms from "./ModalPlatforms";
import { login } from "@/reducers/user";

export default function ModalSignup() {
  const [isVisible, setIsVisible] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");
  const [open, setOpen] = useState(false);
  const [nextModalOpen, setNextModalOpen] = useState(false);

  const dispatch = useDispatch();

  const wait = () => new Promise((resolve) => setTimeout(resolve, 1000));

  const submitTest = () => {
    wait().then(() => {
      setOpen(false);
      setNextModalOpen(true);
    });
  };

  // const submitSignUp = () => {
  //   const connectionData = {
  //     username: username,
  //     password: password,
  //     email: email,
  //     birthday: birthday,
  //     gender: gender,
  //   };

  //   fetch("http://localhost:3000/users/signup", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(connectionData),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (data.result) {
  //         console.log(data);
  //         wait().then(() => {
  //           setOpen(false);
  //           setNextModalOpen(true);
  //         });
  //         setUsername("");
  //         setPassword("");
  //         setEmail("");
  //         setBirthday("");
  //         setGender("");
  //         dispatch(
  //           login({
  //             token: data.token,
  //             username: data.username,
  //           })
  //         );
  //       }
  //     });
  // };

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
              layout="fill"
              objectFit="contain"
            />
          </div>
          <DialogHeader>
            <DialogTitle className="text-center text-2xl mb-3">
              Create an account
            </DialogTitle>
            <DialogDescription>
              Please enter all this informations
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
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="relative">
              <Input
                id="password"
                placeholder="Password"
                type={isVisible ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pr-10"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center px-2"
                onClick={() => setIsVisible(!isVisible)}
              >
                {isVisible ? (
                  <FontAwesomeIcon
                    icon={faEye}
                    className="text-base text-default-400"
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faEyeSlash}
                    className="text-base text-default-400"
                  />
                )}
              </button>
            </div>
            <div className="flex flex-row gap-2">
              <Input
                id="age"
                placeholder="Age"
                className="w-16"
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
              onClick={() => submitTest()}
            >
              Submit
            </Button>
          </DialogFooter>

          <Button
            type="submit"
            variant="facebook"
            className="w-full flex items-center justify-center mb-1"
          >
            <div className="relative h-6 w-6 mr-2">
              <Image
                src="/logo/facebook.svg"
                alt="logo-facebook"
                layout="fill"
                objectFit="contain"
                className=""
              />
            </div>
            Continue with Facebook
          </Button>
          <Button type="submit" variant="" className="w-full text-black mb-2">
            <div className="relative h-6 w-6 -ml-4 mr-2 ">
              <Image
                src="/logo/google.svg"
                alt="logo-google"
                layout="fill"
                objectFit="contain"
                className=""
              />
            </div>
            Continue with Google
          </Button>
        </DialogContent>
      </Dialog>

      <ModalPlatforms open={nextModalOpen} onOpenChange={setNextModalOpen} />
    </>
  );
}
