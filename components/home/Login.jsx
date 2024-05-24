import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { login } from "../../reducers/user";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Spinner } from "@nextui-org/spinner";

export default function Login({ closeModal }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const dispatch = useDispatch();
  const router = useRouter();

  const submitSignIn = () => {
    setLoader(true);
    const connectionData = {
      username: username,
      password: password,
    };

    fetch("http://localhost:3000/users/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(connectionData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          setUsername("");
          setPassword("");
          dispatch(
            login({
              token: data.token,
              username: data.username,
            })
          );
          router.push("/mood");
        } else {
          setLoader(false);
        }
      });
  };

  return (
    <div
      className="z-10 fixed inset-0 flex items-center justify-center"
      onClick={closeModal}
    >
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <Card
          onClick={(e) => e.stopPropagation()}
          className="w-[350px] dark absolute"
        >
          <img src="/home/Logo-moodvie-letter.svg" className="size-10 m-2" />
          {loader ? (
            <Spinner
              label="Loading..."
              color="primary"
              className="w-full mb-36 mt-10"
              size="lg"
              labelColor="primary"
            />
          ) : (
            <>
              <CardHeader>
                <CardTitle className="text-center -mt-10">
                  Login to your account
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Input
                        id="username"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
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
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  variant="gradientPurple"
                  className="w-full"
                  onClick={submitSignIn}
                >
                  Login
                </Button>
              </CardFooter>
              <p className="text-center text-sm text-slate-100 mb-3 -mt-3">
                Don’t have an account? Sign up.
              </p>
            </>
          )}
        </Card>
      </div>
    </div>
  );
}
