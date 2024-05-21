import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

function LanguageSelect() {

  return (
    <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="language" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="français">français</SelectItem>
          <SelectItem value="english">english</SelectItem>
        </SelectContent>
    </Select>
  )
}

export default LanguageSelect