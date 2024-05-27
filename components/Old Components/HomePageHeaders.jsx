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
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Checkbox } from "@radix-ui/react-checkbox";
import { useDispatch } from "react-redux";

export default function HomePageHeaders() {
  const [isVisible, setIsVisible] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");
  const [open, setOpen] = useState(false);
  const [secondDialogOpen, setSecondDialogOpen] = useState(false);

  const dispatch = useDispatch();

  const submitSignUp = () => {
    wait().then(() => {
      setOpen(false);
      setSecondDialogOpen(true);
    });
  };

  //   const submitSignUp = () => {
  //     const connectionData = {
  //       username: username,
  //       password: password,
  //       email: email,
  //       birthday: birthday,
  //       gender: gender,
  //     };

  //     const wait = () => new Promise((resolve) => setTimeout(resolve, 1000));

  //     fetch("http://localhost:3000/users/signup", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(connectionData),
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         if (data.result) {
  //           wait().then(() => {
  //             setOpen(false);
  //             setSecondDialogOpen(true);
  //           });
  //           signUpToPlatformModal();
  //           setUsername("");
  //           setPassword("");
  //           setEmail("");
  //           setBirthday("");
  //           setGender("");
  //           dispatch(
  //             login({
  //               token: data.token,
  //               username: data.username,
  //             })
  //           );
  //         }
  //       });
  //   };

  return (
    <>
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Portal>
          <Dialog className="dark">
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
                    <SelectTrigger
                      id="gender"
                      onValueChange={setGender}
                      value={gender}
                    >
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
              <div className="mt-2">
                {/* <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Yes, I'd like to subscribe to the newsletter
            </label>
          </div> */}
              </div>
              <DialogFooter>
                <Button
                  type="submit"
                  variant="gradientPurple"
                  className="w-full mb-1"
                  onClick={() => submitSignUp()}
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
              <Button
                type="submit"
                variant=""
                className="w-full text-black mb-2"
              >
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
        </Dialog.Portal>
      </Dialog.Root>

      <Dialog.Root open={secondDialogOpen} onOpenChange={setSecondDialogOpen}>
        <Dialog.Portal>
          <Dialog
            className="dark"
            open={secondDialogOpen}
            onOpenChange={setSecondDialogOpen}
          >
            <DialogContent className="dark text-slate-100 sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="text-center text-2xl mb-3">
                  Welcome!
                </DialogTitle>
                <DialogDescription>
                  Your account has been successfully created.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button
                  type="button"
                  variant="gradientPurple"
                  className="w-full mb-1"
                  onClick={() => setSecondDialogOpen(false)}
                >
                  Close
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
