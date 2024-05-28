import LanguageSelect from "./LanguageSelect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldCat, faBell } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { useState } from "react";
import { Setting } from "./Setting";
import Socket from "./Socket";
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  
  const router = useRouter();
  function handleHome() {
    router.push(`/mood`);
  }

  function handleMaud() {
    router.push(`/maud`);
    // router.push(`/movies/${mood.toLowerCase()}`);
  }

  const [showModalSettings, setShowModalSettings] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const handleNotification = (message) => {
    setNotifications((prevNotifications) => [...prevNotifications, message]);
    console.log(notifications);
  };

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
          <p className="text-slate-100 font-bold">
          {t('slogan')}
          </p>
        </div>
        <div
          className="hidden  flex-col justify-center items-center mt-4  lg:flex"
          onClick={() => handleMaud()}
        >
          <FontAwesomeIcon
            icon={faShieldCat}
            className="gradient-icon text-slate-100 size-8 mb-6 animate-pulse animate-infinite cursor-pointer 
            "
          />

          <p className="gradient-text text-slate-100 font-bold">
            Choose to be guided by our AI
          </p>
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
            <div className="relative">
              <FontAwesomeIcon
                icon={faBell}
                className="text-slate-100 size-8 cursor-pointer"
                onClick={() => setShowNotifications(!showNotifications)}
              />
              {notifications.length > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                  {notifications.length}
                </span>
              )}
              {showNotifications && (
                <div className="bg-stone-950/75 absolute right-0 mt-2 w-64 border rounded-lg shadow-lg overflow-hidden">
                  <ul>
                    {notifications.map((notification, index) => (
                      <li
                        key={index}
                        className="p-2 border-b border-gray-200  text-slate-100 hover:bg-stone-900/75"
                      >
                        {notification}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        <Socket onNotification={handleNotification} />
      </div>
    </>
  );
}
