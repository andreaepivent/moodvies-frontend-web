
import { useRouter } from "next/router";
import { useState } from "react";
import { Setting } from "../../common/Setting";
import NavLink from "../../common/NavLink";
import { FaBars, FaTimes } from "react-icons/fa";

export default function BurgerNavbar() {
  const router = useRouter(); // Using Next.js useRouter hook for navigation

  // Function to navigate to the mood page
  function handleHome() {
    router.push(`/mood`);
  }

  const [showModalSettings, setShowModalSettings] = useState(false); // State to manage the visibility of the settings modal
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage the visibility of the burger menu

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

        {/* Burger menu icon */}
        <div className="flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FaTimes className="text-white" /> : <FaBars className="text-white" />}
          </button>
        </div>
      </div>

      {/* Burger menu dropdown */}
      {isMenuOpen && (
        <div className="flex flex-col items-center bg-gray-800 text-white w-full py-2">
          <NavLink
            href="/profile/informations"
            activeClassName="text-white p-2"
            nonActiveClassName="text-slate-500 p-2"
            onClick={() => setIsMenuOpen(false)} // Close menu on link click
          >
            Personal Informations
          </NavLink>
          <NavLink
            href="/profile/history"
            activeClassName="text-white p-2"
            nonActiveClassName="text-slate-500 p-2"
            onClick={() => setIsMenuOpen(false)} // Close menu on link click
          >
            History
          </NavLink>
          <NavLink
            href="/profile/platforms"
            activeClassName="text-white p-2"
            nonActiveClassName="text-slate-500 p-2"
            onClick={() => setIsMenuOpen(false)} // Close menu on link click
          >
            Preferred Platforms
          </NavLink>
          <div className="flex justify-center mt-4">
            <LanguageSelect /> {/* Language selection dropdown */}
          </div>
        </div>
      )}
    </>
  );
}