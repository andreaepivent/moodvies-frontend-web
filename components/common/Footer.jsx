import React, { useState } from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Input } from "../ui/input";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState({ text: "", color: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:3000/newsletters/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setMessage({
          text: data.message || "Abonnement à la newsletter réussi",
          color: "green",
        });
      } else if (response.status === 409) {
        setMessage({
          text: data.message || " Utilisateur déjà abonné ",
          color: "red",
        });
      } else if (response.status === 400) {
        setMessage({
          text: data.message || " Adresse email invalide ",
          color: "red",
        });
      } else {
        setMessage({
          text: data.message || " Abonnement à la newsletter échoué ",
          color: "red",
        });
      }
      setEmail("");

      // Définir un délai d'attente pour effacer le message après 2 secondes
      setTimeout(() => {
        setMessage("");
      }, 2000);
    } catch (error) {
      console.error("Error:", error);
      setMessage("Subscription failed");
    }
  };

  return (
    <Card className="w-screen bg-black text-slate-300 rounded-none">
      <footer className="mt-auto">
        <div className="max-w-xl mx-auto p-4 grid grid-cols-2 lg:max-w-7xl lg:grid-cols-6 md:py-10">
          <div className="m-2 mr-4">
            <img
              src="/home/Logo-moodvie-letter.svg"
              alt="logo-moodvies"
              className="size-12"
            />
            <p className="text-slate-300 my-2 text-sm sm:text-md">
              Explorez, découvrez et profitez de chaque soirée cinéma ! Votre
              prochain film préféré, recommandé par notre IA Maud
            </p>
          </div>
          <div className="m-3 md:m-3">
            <h5 className="mb-3 text-slate-100 text-md font-semibold sm:text-lg">
              Société
            </h5>
            <ul className="text-slate-300 my-2 text-sm sm:text-md">
              <li className="my-2">Moodvies</li>
              <li className="my-2">Paris, France</li>
              <li className="my-2 hover:underline cursor-pointer">
                01 23 43 12 32
              </li>
              <li className="my-2 hover:underline cursor-pointer">
                contact@moodvies.com
              </li>
            </ul>
          </div>
          
          <div className="m-3 md:m-3">
            <h5 className="mb-3 text-slate-100 text-md font-semibold sm:text-lg">
              Quelques liens
            </h5>
            <ul className="my-2 text-slate-300 text-sm sm:text-md">
              <li className="my-2">
                <a href="#" className="hover:underline">
                  Contacts
                </a>
              </li>
              <li className="my-2">
                <a href="#" className="hover:underline">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div className="m-3 md:m-3">
            <h5 className="mb-3 text-slate-100 text-md font-semibold sm:text-lg">
              Nos réseaux 
            </h5>
            <ul>
              <li className="flex items-baseline gap-1 my-2 text-slate-300 text-sm sm:text-md hover:underline">
                <img
                  src="/logo/facebook.svg"
                  className="size-3"
                  alt="logo-facebook"
                />
                <a href="#">Facebook</a>
              </li>

              <li className="flex items-baseline gap-1 my-2 text-slate-300 text-sm sm:text-md hover:underline">
                <img
                  src="/logo/twitter.svg"
                  className="size-3"
                  alt="logo-twitter"
                />
                <a href="#">Twitter</a>
              </li>
              <li className="flex items-baseline gap-1 my-2 text-slate-300 text-sm sm:text-md hover:underline">
                <img
                  src="/logo/youtube.svg"
                  className="size-3"
                  alt="logo-youtube"
                />
                <a href="#">Youtube</a>
              </li>
              <li className="flex items-baseline gap-1 my-2 text-slate-300 text-sm sm:text-md hover:underline">
                <img
                  src="/logo/instagram.svg"
                  className="size-3"
                  alt="logo-instagram"
                />
                <a href="#">Instagram</a>
              </li>
            </ul>
          </div>
          <div className="col-span-2 m-3 md:m-3">
            <h3 className="mb-5 font-semibold text-slate-100 tracking-wider text-sm sm:text-lg">
              Souscrivez à notre newsletter
            </h3>
            <form className="flex items-center">
              <Input
                placeholder="Entrez votre email"
                className="dark text-slate-300 rounded-3xl focus-visible:ring-offset-none bg-black "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Input>
              <Button
                variant="subscribe"
                className="text-slate-100 rounded-3xl h-11 w-40 -ml-24"
                onClick={handleSubmit}
              >
                Souscrire
              </Button>
            </form>
            {message && <p style={{ color: message.color }}>{message.text}</p>}
          </div>
        </div>
      </footer>
    </Card>
  );
}
