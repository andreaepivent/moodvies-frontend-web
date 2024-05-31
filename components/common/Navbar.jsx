import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldCat } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Setting } from "./Setting";
import Socket from "./Socket";
import Image from "next/image";

export default function Navbar() {
  const router = useRouter();

  const [showModalSettings, setShowModalSettings] = useState(false);
  const [showIAButton, setshowIAButton] = useState(false);

  function handleHome() {
    router.push(`/mood`);
  }

  function handleMaud() {
    router.push(`/maud`);
  }

  // Affichage IA en fonction de la page sur laquelle on est
  useEffect(() => {
    if (router.pathname === "/" || router.pathname === "/admin") {
      setshowIAButton(false);
    } else {
      setshowIAButton(true);
    }
  }, [router.pathname]);

  return (
    <>
      <div className="flex justify-between pt-7 pb-20 px-10 absolute top-0 left-0 w-full bg-transparent z-20">
        <div className="flex justify-start w-1/3">
          <Image
            src="/home/Logo-moodvie-letter.svg"
            alt="logo-moodvie"
            className="cursor-pointer"
            width={80}
            height={80}
            onClick={() => handleHome()}
          />
        </div>
        {showIAButton && (
          <div
            className="hidden flex-col justify-center items-center lg:flex w-1/3"
            onClick={() => handleMaud()}
          >
            <FontAwesomeIcon
              icon={faShieldCat}
              className="gradient-icon text-slate-100 size-8 mb-6 cursor-pointer"
            />
            <p className="gradient-text text-slate-100 font-bold">
              Laisse toi guider par notre IA
            </p>
          </div>
        )}
        <div className="flex justify-end gap-4 w-1/3">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => setShowModalSettings(!showModalSettings)}
          >
            <Setting />
          </div>
        </div>
        <Socket />
      </div>
    </>
  );
}
