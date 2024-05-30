import React, { useState, useEffect } from "react";
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
import { addMovie } from "../../reducers/movies";
import { useDispatch, useSelector } from "react-redux";
import { login } from "@/reducers/user";

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
        src={`/movie/${nom}.jpg`}
        alt={nom + " Movie"}
        layout="fill"
        objectFit="cover"
        loading="lazy"
        placeholder="blur"
        blurDataURL={`/movie/${nom}-blur.jpg`} // Utiliser une image floutée en basse résolution pour le placeholder
      />
    </div>
  );
}

export default function ModalMovies({ open, onOpenChange, loginData }) {
  const [currentModal, setCurrentModal] = useState("movies");
  const [selectedMovies, setSelectedMovies] = useState([]);
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const user = useSelector((state) => state.user.value);
  console.log(user);

  const wait = () => new Promise((resolve) => setTimeout(resolve, 200));

  function handleNavigation(targetModal) {
    router.push("/mood");
    setLoader(true);

    selectedMovies.forEach((movie) => {
      dispatch(addMovie(movie));
    });

    dispatch(login(loginData));

    if (targetModal === "mood") {
      router.push("/mood");
    } else {
      wait().then(() => {
        setCurrentModal(targetModal);
        setLoader(false);
      });
    }
  }

  function handleSelectMovie(movie) {
    setSelectedMovies((prev) => {
      if (prev.includes(movie)) {
        return prev.filter((m) => m !== movie);
      } else if (prev.length < 5) {
        return [...prev, movie];
      }
      return prev;
    });
  }

  return (
    <>
      {currentModal === "movies" && (
        <Dialog open={open}>
          <DialogContent className="dark text-slate-100 sm:max-w-[950px]">
            <div className="relative w-10 h-10">
              <Image
                src={"/home/logo-moodvie-letter.svg"}
                alt="logo-moodvie"
                objectFit="contain"
                width={10}
                height={10}
              />
            </div>
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
                  <DialogHeader>
                    <DialogTitle className="text-center text-2xl mb-3">
                      Pick at least 5 movies
                    </DialogTitle>
                  </DialogHeader>

                  <div className="grid grid-cols-4 lg:grid-cols-10 sm:grid-cols-5 items-center gap-2">
                    {[
                      "avatar",
                      "gladiator",
                      "cercle-des-poetes",
                      "fight-club",
                      "intouchable",
                      "inception",
                      "interstellar",
                      "la-ligne-verte",
                      "la-vie-est-belle",
                      "le-parrain-2",
                      "le-voyage-de-chihiro",
                      "lebon-labrute",
                      "leon",
                      "les-evades",
                      "les-affranchis",
                      "lord-of-the-ring",
                      "pulp-fiction",
                      "retour-vers-le-futur",
                      "vol-au-dessus",
                      "the-dark-knight",
                    ].map((movie) => (
                      <IconMovie
                        key={movie}
                        nom={movie}
                        selected={selectedMovies.includes(movie)}
                        onSelect={() => handleSelectMovie(movie)}
                      />
                    ))}
                  </div>
                </>
              )}
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
                  disabled={selectedMovies.length === 0}
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
