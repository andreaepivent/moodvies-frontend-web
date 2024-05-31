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
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { login } from "@/reducers/user";
import { useDispatch } from "react-redux";
import { Spinner } from "@nextui-org/spinner";
import { useRouter } from "next/router";
import { useGoogleLogin } from "@react-oauth/google";

export default function ModalLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();
  const router = useRouter();

  // Configuration de la connexion Google
  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log("Connexion Google réussie :", tokenResponse);
      const { access_token } = tokenResponse;

      try {
        // Envoi du jeton Google au serveur pour authentification
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
        console.log(data);

        if (data.result) {
          // Connexion réussie, mise à jour de l'état global avec les informations de l'utilisateur
          dispatch(
            login({
              token: data.token,
              username: data.username,
            })
          );
          // Redirection vers la page "mood"
          router.push("/mood");
        } else {
          console.error(
            "Échec de la connexion Google sur le serveur :",
            data.message
          );
        }
      } catch (error) {
        console.error("Erreur de connexion Google :", error);
      }
    },
    onError: (error) => {
      console.error("Erreur de connexion Google :", error);
    },
  });

  // Fonction pour soumettre les informations de connexion
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
          // Connexion réussie, réinitialisation des champs de saisie
          setUsername("");
          setPassword("");
          dispatch(
            login({
              token: data.token,
              username: data.username,
            })
          );
          // Redirection vers la page "mood"
          router.push("/mood");
        } else {
          setLoader(false);
          setErrorMessage(data.error);
        }
      });
  };

  return (
    <Dialog className="dark" open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" className="w-32 border-2 text-slate-100">
          Connexion
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
            Connexion à votre compte
          </DialogTitle>
        </DialogHeader>
        <div className="grid w-full items-center gap-4">
          {loader ? (
            <Spinner
              label="Loading..."
              color="primary"
              className="w-full gap-10 pb-20 pt-16"
              size="lg"
              labelColor="primary"
            />
          ) : (
            <>
              <div className="flex flex-col space-y-1.5">
                <Input
                  id="username"
                  placeholder="Pseudo"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="relative">
                <Input
                  id="password"
                  placeholder="Mot de passe"
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
            </>
          )}
        </div>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        <DialogFooter>
          <Button
            type="submit"
            variant="gradientPurple"
            className="w-full mb-1"
            onClick={() => submitSignIn()}
          >
            Connexion
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
  );
}
