import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "@/reducers/traduction";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function LanguageSelect() {

  const dispatch = useDispatch();
  const currentLanguage = useSelector((state) => state.traduction.language);
  console.log(currentLanguage) 

  const handleChange = (language) => {
    dispatch(setLanguage(language));
  };

  return (
    <Select>
      <SelectTrigger className="w-[100px] p-2 bg-transparent text-white cursor-pointer">
        <SelectValue
          placeholder={currentLanguage === "fr" ? "Français" : "English"}
          className="text-slate-500"
        />
      </SelectTrigger>
      <SelectContent className="bg-transparent text-white">
        <SelectItem
          value="fr"
          className="hover:focus:bg-slate-500 cursor-pointer"
        >
          Français
        </SelectItem>
        <SelectItem value="en" className="cursor-pointer">
          English
        </SelectItem>
      </SelectContent>
    </Select>
  );
}

export default LanguageSelect;
