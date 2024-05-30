import {
  Cloud,
  Github,
  Laptop,
  LifeBuoy,
  LogOut,
  History,
  User,
  Flag,
  Languages,
  Earth,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../reducers/user";
import Image from "next/image";

import Notifications from "../common/Notifications";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

export function Setting() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);

  const [showNotifications, setShowNotifications] = useState(false);
  const [showGoHomeButton, setShowGoHomeButton] = useState(true);
  const [showUserButton, setshowUserButton] = useState(true);

  const router = useRouter();

  useEffect(() => {
    if (router.pathname === "/") {
      setShowGoHomeButton(false);
    } else {
      setShowGoHomeButton(true);
    }

    if (router.pathname === "/admin") {
      setshowUserButton(false);
    } else {
      setshowUserButton(true);
    }
  }, [router.pathname]);

  function handleHistory() {
    router.push(`/profile/history`);
  }
  function handleInformations() {
    router.push(`/profile/informations`);
  }
  function handlePlatforms() {
    router.push(`/profile/platforms`);
  }

  function handleSupport() {
    router.push(`/support`);
  }

  function handleHome() {
    router.push(`/`);
  }
  const handleChange = (language) => {
    // dispatch(setLanguage(language));
  };

  function gotoHomePage() {
    dispatch(logout());
    router.push(`/`);
  }

  function gotoIA() {
    router.push(`/maud`);
  }

  return (
    <>
      {user.username ? (
        <>
          <div className="flex mr-5">
            <Notifications
              showNotifications={showNotifications}
              setShowNotifications={setShowNotifications}
            />
          </div>

          {showUserButton && (
            <DropdownMenu className="">
              <DropdownMenuTrigger asChild>
                <Image
                  src={"/logo/logo-connection.png"}
                  alt="logo-moodvie"
                  style={{ objectFit: "contain" }}
                  width={40}
                  height={40}
                  className="rounded-lg mb-1"
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="dark w-56">
                <DropdownMenuLabel className="text-green-500">
                  Salut{" "}
                  {user.username.charAt(0).toUpperCase() +
                    user.username.slice(1)}{" "}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem onClick={() => handleInformations()}>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profil</span>
                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleHistory()}>
                    <History className="mr-2 h-4 w-4" />
                    <span>Historique</span>
                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handlePlatforms()}>
                    <Laptop className="mr-2 h-4 w-4" />
                    <span>Plateformes</span>
                    <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuGroup>

                <DropdownMenuSeparator />
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <Languages className="mr-2 h-4 w-4" />
                    <span>Langage</span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent className="dark">
                      <DropdownMenuItem
                        disabled
                        onClick={() => handleChange("en")}
                      >
                        <Earth className="mr-2 h-4 w-4" />
                        <span>English</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleChange("fr")}>
                        <Earth className="mr-2 h-4 w-4" />
                        <span>Français</span>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem disabled>
                        <Flag className="mr-2 h-4 w-4" />
                        <span>More...</span>
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuItem onClick={() => gotoIA()}>
                  <Cloud className="mr-2 h-4 w-4" />
                  <span>IA</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleSupport()}>
                  <LifeBuoy className="mr-2 h-4 w-4" />
                  <span>Support</span>
                </DropdownMenuItem>

                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => gotoHomePage()}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Déconnexion</span>
                  <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </>
      ) : (
        showGoHomeButton && (
          <Button
            onClick={() => handleHome()}
            variant="ghost"
            className="w-32 border-2 text-slate-100"
          >
            Go to home
          </Button>
        )
      )}
    </>
  );
}
