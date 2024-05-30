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
  const user = useSelector((state) => state.user.value);
  const router = useRouter();

  function handleMood() {
    router.push("/mood");
  }

  const [movie, setMovie] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      const url = `/api/trailers`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched data:", data);
        if (
          data.trailers &&
          data.trailers.high &&
          data.trailers.high.length > 0
        ) {
          const movie = data.trailers.high[0].film_trailer;
          console.log("Movie trailer:", movie);
          setMovie(movie);
        } else {
          throw new Error("No movie data found");
        }
      } catch (err) {
        console.log("Fetch error:", err);
      }
    };

    fetchMovies();
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
                Your browser does not support the video tag.
              </video>
            )}
            <Navbar />

            <div className="flex h-screen justify-center items-center bg-pink z-5 ">
              <div className="flex flex-col z-10">
                <div className="flex flex-col content-start mt-20">
                  <h1 className="flex text-center text-6xl font-bold text-white my-8">
                    TROUVE TON FILM PRÉFÉRÉ <br /> POUR CE SOIR
                  </h1>
                </div>
                <div className="flex justify-center gap-10">
                  {user.username ? (
                    <>
                      <HoverBorderGradient
                        containerClassName="rounded-full"
                        as="button"
                        className="bg-transparent text-slate-100 flex items-center space-x-2"
                        onClick={() => handleMood()}
                      >
                        <AceternityLogo />
                        <span>Renseigne ton humeur</span>
                      </HoverBorderGradient>
                    </>
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
