import Footer from "@/components/common/Footer";
import HomePageBottom from "./HomePageBottom";
import HomePageMiddle from "./HomePageMiddle";
import NavbarHome from "./NavBarHome";
import ModalSignup from "./ModalSignup";
import ModalLogin from "./ModalLogin";

export default function Home() {
  return (
    <>
      <div className="bg-black">
        <div className="relative w-screen">
          <div className="">
            <video
              className="absolute inset-0 w-full h-full object-cover z-10"
              autoPlay
              loop
              muted
            >
              <source src="/video/MATRIX4.mp4" />
            </video>
            <NavbarHome />

            <div className="flex h-screen justify-center items-center bg-pink z-10">
              <div className="flex flex-col z-10">
                <div className="flex flex-col content-start">
                  <h1 className="flex text-center text-6xl font-bold text-white my-8">
                    FIND YOUR FAVORITE MOVIE <br /> FOR TONIGHT
                  </h1>
                </div>
                <div className="flex justify-center gap-10">
                  <ModalSignup />

                  <ModalLogin />
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
