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
import { useState } from "react";
import { updateRecommendation } from "@/reducers/recommendations";
import { Spinner } from "@nextui-org/spinner";
import { addMood } from "../../reducers/moods";

export default function MoodPage() {
  const [loading, setLoading] = useState(false);

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
        router.push(`/movies`);
        setLoading(false);
        dispatch(addMood([moodSelected]));
      });
  };

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

        <h1 className="uppercase text-center mt-60 text-slate-100 font-bold text-4xl">
          Select a mood, we’ll pick your movie
        </h1>
        <div className="flex max-w-full items-center justify-center gap-5 my-auto mx-32 z-10  pt-20">
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
                        <span className="text-sm scroll-m-20 md:text-lg font-semibold tracking-tight p-1 px-2 text-slate-100">
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
