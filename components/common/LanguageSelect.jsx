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
        <SelectTrigger className="w-[100px] p-2 bg-transparent text-white">
          <SelectValue placeholder="language" className='text-slate-500' />
        </SelectTrigger>
        <SelectContent className='bg-transparent text-white'>
          <SelectItem value="français" className='hover:focus:bg-slate-500'>français</SelectItem>
          <SelectItem value="english">english</SelectItem>
        </SelectContent>
    </Select>
  )
}

export default LanguageSelect