import LanguageSelect from "@/components/common/LanguageSelect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldCat } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between pt-4">
      <div className="flex flex-col justify-center items-center">
        <img
          src="/logo-moodvie-letter.svg"
          alt="logo-moodvie"
          className="size-20"
        />
        <p className="text-slate-100 font-bold">
          Find your favorite movie for tonight
        </p>
      </div>
      <div className="flex flex-col justify-center items-center mt-4">
        <FontAwesomeIcon
          icon={faShieldCat}
          className="text-slate-100 size-8 mb-6 
            "
        />
        <p className="text-slate-100 font-bold">
          Choose to be guided by our AI
        </p>
      </div>
      <div className="flex items-center gap-4">
        <LanguageSelect />
        <img src="/logo/user.svg" alt="logo-user" className="size-6 mr-2 " />
      </div>
    </div>
  );
}
