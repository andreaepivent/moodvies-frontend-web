import Footer from "@/components/common/Footer";
import HomePageBottom from "./HomePageBottom";
import HomePageMiddle from "./HomePageMiddle";
import NavbarHome from "./NavbarHome";
import ModalSignup from "./ModalSignup";
import ModalLogin from "./ModalLogin";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import AceternityLogo from "../logo/AceternityLogo";

export default function Home() {
  const user = useSelector((state) => state.user.value);
  const router = useRouter();

  function handleMood() {
    router.push("/mood");
  }

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
