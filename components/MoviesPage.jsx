import { Button } from "../components/ui/button";
import CarrousselMood from "./CarrousselMood";
import Navbar from "./common/Navbar";
import { YouTubeEmbed } from "@next/third-parties/google";

export default function MoviesPage() {
  const movie = {
    title: "Gladiator",
    director: "Ridley Scott",
    year: 2000,
    duration: 150,
    synopsis:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, temporibus eum sed culpa obcaecati cupiditate. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, temporibus eum sed culpa obcaecati cupiditate. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, temporibus eum sed culpa obcaecati cupiditate. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, temporibus eum sed culpa obcaecati cupiditate.",
    trailer: "P5ieIbInFpg",
  };

  return (
    <>
      <div
        className="w-screen flex flex-col bg-top pl-10"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(/movie/gladiator.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <Navbar />

        <div className="my-auto text-center text-slate-100 mx-auto mt-72">
          <h2 className="text-7xl font-bold">{movie.title}</h2>
          <p className="text-1xl font-semibold mt-2">
            Directed by {movie.director}. {movie.duration} minutes. {movie.year}
          </p>
          <div className="max-w-2xl flex items-center justify-center mt-6">
            <p className="text-justify w-full h-full text-center overflow-hidden">
              {movie.synopsis}
            </p>
          </div>
          <div className="mt-12 ">
            <YouTubeEmbed videoid={movie.trailer} height={400} />

            <Button variant="ghost" className="mr-6 border">
              View on Netflix
            </Button>
            <Button variant="ghost" className="border">
              View on Prime
            </Button>
          </div>
        </div>
      </div>
      <div className="bg-black">
        <CarrousselMood />
      </div>
    </>
  );
}
