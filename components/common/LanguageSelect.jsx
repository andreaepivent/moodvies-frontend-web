import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function LanguageSelect() {
  return (
    <Select>
      <SelectTrigger className="w-[100px] p-2 bg-transparent text-white cursor-pointer">
        <SelectValue placeholder="Language" className="text-slate-500" />
      </SelectTrigger>
      <SelectContent className="bg-transparent text-white">
        <SelectItem
          value="français"
          className="hover:focus:bg-slate-500 cursor-pointer"
        >
          Français
        </SelectItem>
        <SelectItem value="english" className="cursor-pointer">
          English
        </SelectItem>
      </SelectContent>
    </Select>
  );
}

export default LanguageSelect;
