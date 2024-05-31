import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import ModalSignup from "./ModalSignup";
import ModalMovies from "./ModalMovies";
import { useDispatch } from "react-redux";
import { addPlatform } from "@/reducers/platforms";

// Composant pour afficher l'icône d'une plateforme de streaming
function IconPlatform({ nom, onSelect, selected }) {
  return (
    <img
      src={`/logo-platform/${nom}.png`}
      className={
        "size-20 m-4 rounded transition duration-500 ease-in-out transform hover:scale-125 hover:brightness-75 shadow-glow-white" +
        (selected ? " border-4 border-green-500 " : "")
      }
      alt={nom + " Logo"}
      onClick={onSelect}
      onContextMenu={(e) => e.preventDefault()}
    />
  );
}

// Composant pour afficher le modal de sélection des plateformes de streaming
export default function PlatformsModal({ open, onOpenChange, loginData }) {
  const [currentModal, setCurrentModal] = useState("platforms");
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const dispatch = useDispatch();

  // Fonction pour gérer la navigation entre les différents modals
  const handleNavigation = (targetModal) => {
    // Ajouter les plateformes sélectionnées au store Redux
    selectedPlatforms.forEach((el) => {
      dispatch(addPlatform({ src: `${el}.png`, name: el }));
    });
    wait().then(() => setCurrentModal(targetModal));
  };

  // Fonction pour simuler une attente (par exemple, pour les animations de chargement)
  const wait = () => new Promise((resolve) => setTimeout(resolve, 200));

  // Fonction pour gérer la sélection et la désélection des plateformes
  function handleSelectPlatform(platform) {
    setSelectedPlatforms((prev) =>
      prev.includes(platform)
        ? prev.filter((p) => p !== platform)
        : [...prev, platform]
    );
  }

  return (
    <>
      {currentModal === "platforms" && (
        <Dialog open={open}>
          {/* Contenu du modal de sélection des plateformes */}
          <DialogContent className="dark text-slate-100 sm:max-w-[525px]">
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
                Which platform(s) do you stream on?
              </DialogTitle>
            </DialogHeader>

            <div className="grid grid-cols-4 items-center gap-4">
              {[
                "Netflix",
                "Prime",
                "Disney+",
                "AppleTV",
                "MyCanal",
                "OSC",
                "HBO",
              ].map((platform) => (
                <IconPlatform
                  key={platform}
                  nom={platform}
                  selected={selectedPlatforms.includes(platform)}
                  onSelect={() => handleSelectPlatform(platform)}
                />
              ))}
            </div>

            <DialogFooter>
              <div className="flex items-center justify-center w-full gap-4">
                <Button
                  type="submit"
                  variant="outline"
                  className="rounded-full size-16 mb-1 flex justify-center items-center"
                  onClick={() => handleNavigation("movies")}
                >
                  <ChevronRight className="h-8 w-8" />
                </Button>
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}

      {currentModal === "signup" && (
        <ModalSignup
          open={open}
          onOpenChange={(isOpen) => {
            if (!isOpen) setCurrentModal("platforms");
            onOpenChange(isOpen);
          }}
        />
      )}

      {currentModal === "movies" && (
        <ModalMovies
          loginData={loginData}
          open={open}
          onOpenChange={(isOpen) => {
            if (!isOpen) setCurrentModal("platforms");
            onOpenChange(isOpen);
          }}
        />
      )}
    </>
  );
}
