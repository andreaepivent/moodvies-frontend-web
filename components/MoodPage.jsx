import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Footer from "../common/Footer";
import Navbar from "./navbarMovie/navbar";
import { useRouter } from "next/router";
import Link from "next/link";

export default function MoodPage() {
  const moods = [
    "Happy",
    "Chill",
    "Sad",
    "Angry",
    "Horny",
    "Hello",
    "Test",
    "Coucou",
    "Sad",
    "Angry",
    "Horny",
    "Hello",
    "Test",
    "Coucou",
    "Sad",
    "Angry",
    "Horny",
    "Hello",
    "Test",
    "Coucou",
  ];
  const router = useRouter();

  function handleClick(mood) {
    router.push(`/movies`);
    // router.push(`/movies/${mood.toLowerCase()}`);
  }

  return (
    <>
      <div
        className="w-screen h-screen flex flex-col bg-center pl-10"
        style={{ backgroundImage: "url(/movie/blade-runner.jpeg)" }}
      >
        <Navbar />

        <h1 className="uppercase text-center mt-60 text-slate-100 font-bold text-4xl">
          Select a mood, we’ll pick your movie
        </h1>
        <div className="flex max-w-full items-center justify-center gap-5 my-auto mx-32">
          <Carousel className="w-full flex justify-center">
            <CarouselContent className="-ml-1">
              {moods.map((mood, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 md:basis-1/6 basis-1/3"
                >
                  <div className="p-1 w-full">
                    <Card
                      className="bg-transparent border-2 border-fuchsia-500 text-slate-100 hover:bg-gradient-to-r from-blue-900 to-fuchsia-500 cursor-pointer"
                      onClick={() => handleClick(mood)}
                    >
                      <CardContent className="flex items-center justify-center p-2 ">
                        <span className="text-1xl text-slate-100 font-semibold">
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
      <Footer></Footer>
    </>
  );
}
