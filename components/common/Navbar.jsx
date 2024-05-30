import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldCat } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Setting } from "./Setting";
import Socket from "./Socket";
//import { useTranslation } from "react-i18next";

export default function Navbar() {
  //const { t, i18n } = useTranslation();

  const router = useRouter();

  const [showModalSettings, setShowModalSettings] = useState(false);
  const [showIAButton, setshowIAButton] = useState(false);

  function handleHome() {
    router.push(`/mood`);
  }

  function handleMaud() {
    router.push(`/maud`);
  }

  useEffect(() => {
    if (router.pathname === "/" || router.pathname === "/admin") {
      setshowIAButton(false);
    } else {
      setshowIAButton(true);
    }
  }, [router.pathname]);

  return (
    <>
      <div className="flex items-center justify-between pt-7 pb-20 z-1 px-8 absolute top-0 left-0 w-full bg-transparent z-20">
          <img
            src="/home/Logo-moodvie-letter.svg"
            alt="logo-moodvie"
            className="size-20 cursor-pointer"
            onClick={() => handleHome()}
          />
        {showIAButton && (
          <div
            className="hidden flex-col justify-center items-center mt-4 lg:flex"
            onClick={() => handleMaud()}
          >
            <FontAwesomeIcon
              icon={faShieldCat}
              className="gradient-icon text-slate-100 size-8 mb-6 animate-pulse animate-infinite cursor-pointer"
            />
            <p className="gradient-text text-slate-100 font-bold">
              Laisse toi guider par notre IA
            </p>
          </div>
        )}
        <div className="flex gap-4">
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
