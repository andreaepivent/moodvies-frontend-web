import { useRouter } from "next/router";
import { useState } from "react";
import { Setting } from "../common/Setting";
import Socket from "../common/Socket";
import { useTranslation } from "react-i18next";

export default function NavbarAdmin() {
  const { t, i18n } = useTranslation();

  const router = useRouter();

  const [showModalSettings, setShowModalSettings] = useState(false);

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
