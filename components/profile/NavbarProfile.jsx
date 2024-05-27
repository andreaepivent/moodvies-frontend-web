import LanguageSelect from "../common/LanguageSelect";
import { useRouter } from "next/router";
import { useState } from "react";
import { Setting } from "../common/Setting";
import NavLink from "../common/NavLink";

export default function NavbarProfile() {
  const router = useRouter();
  function handleHome() {
    router.push(`/mood`);
  }

  const [showModalSettings, setShowModalSettings] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between z-10 px-8 w-full">
        <div className="flex flex-col justify-between items-center">
          <img
            src="/home/Logo-moodvie-letter.svg"
            alt="logo-moodvie"
            className="size-20 cursor-pointer ml-10"
            onClick={() => handleHome()}
          />
        </div>
        <div className="border-b border-slate-100 flex justify-around w-1/2 ">
          <NavLink
            href="/profile/informations"
            activeClassName="text-white p-4"
            nonActiveClassName="text-slate-500 p-4"
          >
            Personnal Informations
          </NavLink>
          <NavLink
            href="/profile/history"
            activeClassName="text-white p-4"
            nonActiveClassName="text-slate-500 p-4"
          >
            History
          </NavLink>
          <NavLink
            href="/profile/platforms"
            activeClassName="text-white p-4"
            nonActiveClassName="text-slate-500 p-4"
          >
            Preferred Platforms
          </NavLink>
        </div>

        <div className="flex gap-4">
          <div className="hidden items-center md:flex">
            <LanguageSelect />
          </div>
          <div
            className=" flex items-center cursor-pointer"
            onClick={() => setShowModalSettings(!showModalSettings)}
          >
            <Setting></Setting>
          </div>
        </div>
      </div>
    </>
  );
}
