import Footer from "./common/Footer";
import Navbar from "./common/Navbar";
import { useRouter } from "next/router";
import { Button } from "./ui/button";
import Image from "next/image";
import parrain from "../public/movie/le-parrain.jpeg";

export default function IAPage() {
  const router = useRouter();

  function handleClick() {
    router.push(`/movies`);
  }

  return (
    <>
      <div className=" relative w-screen h-screen flex flex-col bg-center ">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat bg-fixed "
          style={{
            backgroundImage: `url(/movie/le-parrain.jpeg)`,
            zIndex: 1,
          }}
        ></div>
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent to-black"
          style={{ zIndex: 2 }}
        ></div>

        <Navbar />

        <div className="flex-grow flex flex-col items-center justify-center gap-5 my-auto mx-32 z-10 pt-20 inset-0">
          <div>
            <h3 className="text-slate-100 font-extrabold text-3xl text-center mb-6 mt-36">
              Tell us about your mood
            </h3>
            <p className="text-slate-100 text-center mb-6">
              Our AI Maid is here to help you find the perfect movie that
              matches your current mood
            </p>
          </div>
          <div className="mx-auto h-full text-slate-100 w-full md:w-3/4 lg:w-4/5">
            <div className="rounded-xl m-10 bg-zinc-900 py-16 overflow-y-auto max-h-[70vh]">
              <div className="text-left ml-16">
                <p className="mb-4">Maud - 9:45</p>
                <p className="rounded-lg bg-gray-800 inline px-10 py-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam, non.
                </p>
              </div>
              <div className="text-right mr-16">
                <p className="mb-4">Paul - 9:45</p>
                <p className="rounded-lg bg-gray-800 inline px-10 py-2">
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
              <div className="text-left ml-16">
                <p className="mb-4">Maud - 9:45</p>
                <p className="rounded-lg bg-gray-800 inline px-10 py-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam, non.
                </p>
              </div>
              <div className="text-right mr-16">
                <p className="mb-4">Paul - 9:45</p>
                <p className="rounded-lg bg-gray-800 inline px-10 py-2">
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
              <div className="text-left ml-16">
                <p className="mb-4">Maud - 9:45</p>
                <p className="rounded-lg bg-gray-800 inline px-10 py-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam, non.
                </p>
              </div>
              <div className="text-right mr-16">
                <p className="mb-4">Paul - 9:45</p>
                <p className="rounded-lg bg-gray-800 inline px-10 py-2">
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
              <div className="text-left ml-16">
                <p className="mb-4">Maud - 9:45</p>
                <p className="rounded-lg bg-gray-800 inline px-10 py-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam, non.
                </p>
              </div>
              <div className="text-right mr-16">
                <p className="mb-4">Paul - 9:45</p>
                <p className="rounded-lg bg-gray-800 inline px-10 py-2">
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
              <div className="text-left ml-16">
                <p className="mb-4">Maud - 9:45</p>
                <p className="rounded-lg bg-gray-800 inline px-10 py-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam, non.
                </p>
              </div>
              <div className="text-right mr-16">
                <p className="mb-4">Paul - 9:45</p>
                <p className="rounded-lg bg-gray-800 inline px-10 py-2">
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <Button variant="gradientPurple" className="w-1/2">
                Submit
              </Button>
            </div>
          </div>
        </div>
        <div
          className="w-full h-full absolute bg-black "
          style={{ zIndex: 1, top: "95vh" }}
        ></div>
        <div className="mt-6 z-10">
          <Footer />
        </div>
      </div>
    </>
  );
}
