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
import { ChevronRight, ChevronLeft } from "lucide-react";
import ModalPlatforms from "./ModalPlatforms";
import { useRouter } from "next/router";

function IconMovie({ nom, selected, onSelect }) {
  return (
    <div
      className={
        "relative size-20 m-2 rounded transition duration-500 ease-in-out transform hover:scale-110 hover:brightness-75" +
        (selected ? " border-4 border-green-500" : "")
      }
      onClick={onSelect}
      onContextMenu={(e) => e.preventDefault()}
      style={{ cursor: "pointer" }}
    >
      <Image
        src={`/movie/${nom}.jpeg`}
        alt={nom + " Movie"}
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
}

export default function ModalMovies({ open, onOpenChange }) {
  const [currentModal, setCurrentModal] = useState("movies");
  const [selectedMovies, setSelectedMovies] = useState([]);
  const router = useRouter();

  const wait = () => new Promise((resolve) => setTimeout(resolve, 200));

  function handleNavigation(targetModal) {
    if (targetModal === "mood") {
      router.push("/mood");
    } else {
      wait().then(() => setCurrentModal(targetModal));
    }
  }

  function handleSelectMovie(movie) {
    setSelectedMovies((prev) =>
      prev.includes(movie) ? prev.filter((m) => m !== movie) : [...prev, movie]
    );
  }

  return (
    <>
      {currentModal === "movies" && (
        <Dialog open={open} onOpenChange={onOpenChange}>
          <DialogContent className="dark text-slate-100 sm:max-w-[950px]">
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
                Pick 5 movies
              </DialogTitle>
            </DialogHeader>

            <div className="grid grid-cols-10 items-center gap-2">
              {[
                "avatar",
                "blade-runner",
                "gladiator",
                "le-parrain",
                "lord-of-the-ring",
                "spider-man",
                "star-wars",
                "avatar",
                "blade-runner",
                "gladiator",
                "le-parrain",
                "lord-of-the-ring",
                "spider-man",
                "star-wars",
                "avatar",
                "blade-runner",
                "gladiator",
                "le-parrain",
                "lord-of-the-ring",
                "spider-man",
              ].map((movie) => (
                <IconMovie
                  key={movie}
                  nom={movie}
                  selected={selectedMovies.includes(movie)}
                  onSelect={() => handleSelectMovie(movie)}
                />
              ))}
            </div>

            <DialogFooter>
              <div className="flex items-center justify-center w-full gap-4">
                <Button
                  type="submit"
                  variant="outline"
                  className="rounded-full size-16 mb-1 flex justify-center items-center"
                  onClick={() => handleNavigation("platforms")}
                >
                  <ChevronLeft className="h-8 w-8" />
                </Button>
                <Button
                  type="submit"
                  variant="outline"
                  className="rounded-full size-16 mb-1 flex justify-center items-center"
                  onClick={() => handleNavigation("mood")}
                >
                  <ChevronRight className="h-8 w-8" />
                </Button>
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}

      {currentModal === "platforms" && (
        <ModalPlatforms
          open={open}
          onOpenChange={(isOpen) => {
            if (!isOpen) setCurrentModal("movies");
            onOpenChange(isOpen);
          }}
        />
      )}
    </>
  );
}
