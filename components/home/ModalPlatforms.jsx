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

function IconPlatform({ nom, onSelect, selected }) {
  return (
    <img
      src={`/logo-platform/${nom}.png`}
      className={
        "size-20 m-4 rounded transition duration-500 ease-in-out transform hover:scale-125 hover:brightness-75 shadow-glow-white" +
        (selected ? " border-4 border-white " : "")
      }
      alt={nom + " Logo"}
      onClick={onSelect}
      onContextMenu={(e) => e.preventDefault()}
    />
  );
}

export default function PlatformsModal({ open, onOpenChange }) {
  const [currentModal, setCurrentModal] = useState("platforms");
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);

  const wait = () => new Promise((resolve) => setTimeout(resolve, 200));

  function handleNavigation(targetModal) {
    wait().then(() => setCurrentModal(targetModal));
  }

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
          {/* onOpenChange={onOpenChange} */}
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
