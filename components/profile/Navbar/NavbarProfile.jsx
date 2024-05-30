
import { useRouter } from "next/router";
import { useState } from "react";
import { Setting } from "../../common/Setting";
import NavLink from "../../common/NavLink";

export default function NavbarProfile() {
  const router = useRouter(); // Using Next.js useRouter hook for navigation
  const [showModalSettings, setShowModalSettings] = useState(false); // State to manage the visibility of the settings modal

  // Function to navigate to the mood page
  function handleHome() {
    router.push("/mood");
  }

  return (
    <>
      <div className="flex items-center justify-between z-10 px-6 w-full">
        {/* Logo and home navigation */}
        <div className="flex flex-col justify-between items-center">
          <img
            src="/home/Logo-moodvie-letter.svg"
            alt="logo-moodvie"
            className="size-20 cursor-pointer ml-10"
            onClick={() => handleHome()} // Navigate to home on click
          />
        </div>

        {/* Navigation links */}
        <div className="md:flex border-b border-slate-100 justify-around w-1/2 ">
          <NavLink
            href="/profile/informations"
            activeClassName="text-white p-4"
            nonActiveClassName="text-slate-500 p-4"
          >
            Informations
          </NavLink>
          <NavLink
            href="/profile/history"
            activeClassName="text-white p-4"
            nonActiveClassName="text-slate-500 p-4"
          >
            Historique
          </NavLink>
          <NavLink
            href="/profile/platforms"
            activeClassName="text-white p-4"
            nonActiveClassName="text-slate-500 p-4"
          >
            Plateformes
          </NavLink>
        </div>
        {/* Language selection and settings */}
        <div className="flex gap-4">
          {/* <div className="flex items-center">
            <LanguageSelect /> 
          </div> */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => setShowModalSettings(!showModalSettings)} // Toggle settings modal
          >
            <Setting /> {/* Settings icon */}
          </div>
        </div>
      </div>
    </>
  );
}
