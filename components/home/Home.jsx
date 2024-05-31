import Footer from "@/components/common/Footer";
import HomePageBottom from "./HomePageBottom";
import HomePageMiddle from "./HomePageMiddle";
import ModalSignup from "./ModalSignup";
import ModalLogin from "./ModalLogin";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import AceternityLogo from "../logo/AceternityLogo";
import Navbar from "../common/Navbar";
import { useState, useEffect } from "react";

export default function Home() {
  // Récupérer l'utilisateur actuel depuis l'état Redux
  const user = useSelector((state) => state.user.value);
  const router = useRouter();

  // Fonction pour naviguer vers la page de l'humeur
  function handleMood() {
    router.push("/mood");
  }

  // État pour stocker l'URL de la bande-annonce du film
  const [movie, setMovie] = useState("");
  // État pour contrôler l'affichage du titre
  const [showTitle, setShowTitle] = useState(false);

  // Récupérer la bande-annonce du film lorsque le composant est monté
  useEffect(() => {
    const fetchMovies = async () => {
      const url = `/api/trailers`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Erreur HTTP ! statut : ${response.status}`);
        }
        const data = await response.json();
        console.log("Données récupérées :", data);
        if (
          data.trailers &&
          data.trailers.high &&
          data.trailers.high.length > 0
        ) {
          const movie = data.trailers.high[0].film_trailer;
          console.log("Bande-annonce du film :", movie);
          setMovie(movie);
        } else {
          throw new Error("Aucune donnée de film trouvée");
        }
      } catch (err) {
        console.log("Erreur de récupération :", err);
      }
    };

    fetchMovies();
  }, []);

  // Afficher le titre 3,2 secondes après le chargement de la page
  useEffect(() => {
    const showTimeout = setTimeout(() => {
      setShowTitle(true);
    }, 3200);

    // Nettoyage des timeouts
    return () => {
      clearTimeout(showTimeout);
    };
  }, []);

  return (
    <>
      <div className="bg-black">
        <div className="relative w-screen">
          <div className="">
            {movie && (
              <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
              >
                <source src={movie} type="video/mp4" />
                Votre navigateur ne supporte pas la balise vidéo.
              </video>
            )}
            <Navbar />

            <div className="flex h-screen justify-center items-center bg-pink z-5">
              {showTitle && (
                <h1 className="absolute mb-20 mx-20 text-3xl transform -translate-x-1/2 overflow-hidden xl:text-5xl font-bold text-white my-8 animate-text-reveal inline-block [animation-fill-mode:backwards] uppercase">
                  Trouve ton film préféré pour ce soir
                </h1>
              )}
              <div className="relative flex flex-col z-10 mt-20 w-screen">
                <div className="flex flex-col content-start mt-20"></div>
                <div className="flex justify-center gap-10">
                  {user.username ? (
                    <HoverBorderGradient
                      containerClassName="rounded-full"
                      as="button"
                      className="bg-transparent text-slate-100 flex items-center space-x-2"
                      onClick={handleMood}
                    >
                      <AceternityLogo />
                      <span>Renseigne ton humeur</span>
                    </HoverBorderGradient>
                  ) : (
                    <>
                      <ModalSignup />
                      <ModalLogin />
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <HomePageMiddle />
        <HomePageBottom />
        <Footer />
      </div>
    </>
  );
}
