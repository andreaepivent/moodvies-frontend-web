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
import { setLanguage } from "@/reducers/traduction";

export function Setting() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  const currentLanguage = useSelector((state) => state.traduction.language);

  const router = useRouter();

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

  const handleChange = (language) => {
    dispatch(setLanguage(language));
  };

  function gotoHomePage() {
    dispatch(logout());
    router.push(`/`);
  }

  return (
    <>
      {user.username ? (
        <>
          <DropdownMenu className="">
            <DropdownMenuTrigger asChild>
              <Image
                src={"/logo/logo-connection.png"}
                alt="logo-moodvie"
                style={{ objectFit: "contain" }}
                width={40}
                height={40}
                className="rounded-lg"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="dark w-56">
              <DropdownMenuLabel className="text-green-500">
                Hello{" "}
                {user.username.charAt(0).toUpperCase() + user.username.slice(1)}{" "}
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem onClick={() => handleInformations()}>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleHistory()}>
                  <History className="mr-2 h-4 w-4" />
                  <span>History</span>
                  <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handlePlatforms()}>
                  <Laptop className="mr-2 h-4 w-4" />
                  <span>Plateforms</span>
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>

              <DropdownMenuSeparator />
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <Languages className="mr-2 h-4 w-4" />
                  <span>Language</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent className="dark">
                    <DropdownMenuItem onClick={() => handleChange("en")}>
                      <Earth className="mr-2 h-4 w-4" />
                      <span>English</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleChange("fr")}>
                      <Earth className="mr-2 h-4 w-4" />
                      <span>Français</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Flag className="mr-2 h-4 w-4" />
                      <span>More...</span>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
              <DropdownMenuItem>
                <Cloud className="mr-2 h-4 w-4" />
                <span>IA</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleSupport()}>
                <LifeBuoy className="mr-2 h-4 w-4" />
                <span>Support</span>
              </DropdownMenuItem>
              <DropdownMenuItem disabled>
                <Github className="mr-2 h-4 w-4" />
                <span>GitHub</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => gotoHomePage()}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </>
      ) : (
        ""
      )}
    </>
  );
}
