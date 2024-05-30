import { Card, CardContent } from "../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";

import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import { useRouter } from "next/router";
import { moods } from "../data";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { updateRecommendation } from "@/reducers/recommendations";
import { Spinner } from "@nextui-org/spinner";
import { addMood } from "../../reducers/moods";

export default function MoodPage() {
  const [loading, setLoading] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const user = useSelector((state) => state.user.value);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleMoodClick = (moodSelected) => {
    setLoading(true);

    fetch("http://localhost:3000/recommendation", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: user.token,
        userMood: moodSelected.toLowerCase(),
        option: "similarity",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(updateRecommendation(data.recommendations));
        dispatch(addMood(moodSelected));
        router.push(`/movies`);
        setLoading(false);
      });
  };

  useEffect(() => {
    // Afficher le titre 2 secondes après le chargement de la page
    const showTimeout = setTimeout(() => {
      setShowTitle(true);
    }, 2000);

    // Nettoyage des timeouts
    return () => {
      clearTimeout(showTimeout);
    };
  }, []);

  return (
    <>
      <div className="relative w-screen h-screen flex flex-col bg-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat bg-fixed"
          style={{
            backgroundImage: `url(/movie/blade-runner.jpg)`,
            zIndex: 1,
          }}
        ></div>
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent to-black"
          style={{ zIndex: 2 }}
        ></div>

        <Navbar />

        <div className="relative flex justify-center items-center h-screen">
          {showTitle && (
            <h1 className="absolute scroll-m-20 font-bold tracking-tight z-30 bottom-16 transform -translate-x-1/2 mx-32 overflow-hidden text-white my-8 animate-text-reveal inline-block [animation-fill-mode:backwards] uppercase  mb-20 xl:text-4xl md:text-3xl text-2xl">
              Choisis ton mood, on s'occupe du film
            </h1>
          )}
        </div>

        <div className="flex max-w-full items-center justify-center gap-5 my-auto mx-32 z-10  pb-20">
          <Carousel className="w-full flex justify-center">
            <CarouselContent className="-ml-1">
              {moods.map((mood, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 md:basis-1/6 basis-1/3"
                >
                  <div className="p-1 w-full ">
                    <Card
                      className="bg-transparent border-2 border-fuchsia-500 text-slate-100 hover:bg-gradient-to-r from-blue-900 to-fuchsia-500 cursor-pointer"
                      onClick={() => handleMoodClick(mood)}
                    >
                      <CardContent className="flex items-center justify-center p-2 ">
                        <span className="animate-mood-reveal inline-block [animation-fill-mode:backwards] text-sm scroll-m-20 md:text-base font-semibold tracking-tight p-1 px-2 text-slate-100">
                          {mood}
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>

      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="spinner-container">
            <Spinner size="lg" color="secondary" />
          </div>
        </div>
      )}

      <div className="">
        <Footer></Footer>
      </div>
    </>
  );
}
