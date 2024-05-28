// Navbar.js
import LanguageSelect from "./LanguageSelect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldCat } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { useState } from "react";
import { Setting } from "./Setting";
import Socket from "./Socket";
import Notifications from "./Notifications";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t, i18n } = useTranslation();

  const router = useRouter();

  const [showModalSettings, setShowModalSettings] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  function handleHome() {
    router.push(`/mood`);
  }

  function handleMaud() {
    router.push(`/maud`);
  }

  return (
    <>
      <div className="flex items-center justify-between pt-4 z-10 px-8">
        <div className="flex flex-col justify-center items-center">
          <img
            src="/home/Logo-moodvie-letter.svg"
            alt="logo-moodvie"
            className="size-20 cursor-pointer"
            onClick={() => handleHome()}
          />
          <p className="text-slate-100 font-bold">{t("slogan")}</p>
        </div>
        <div
          className="hidden flex-col justify-center items-center mt-4 lg:flex"
          onClick={() => handleMaud()}
        >
          <FontAwesomeIcon
            icon={faShieldCat}
            className="gradient-icon text-slate-100 size-8 mb-6 animate-pulse animate-infinite cursor-pointer"
          />
          <p className="gradient-text text-slate-100 font-bold">
            Choose to be guided by our AI
          </p>
        </div>
        <div className="flex gap-4">
          <Notifications
            showNotifications={showNotifications}
            setShowNotifications={setShowNotifications}
          />
          <div className="hidden items-center md:flex">
            <LanguageSelect />
          </div>
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
