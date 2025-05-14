"use client"

import { useLanguage } from "@/contexts/language-context"
import { useState } from "react"
import { Globe, ChevronDown } from "react-feather"

export default function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const changeLanguage = (lang: string) => {
    toggleLanguage(lang)
    setIsOpen(false)
  }

  const currentLanguage = language

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-1 text-gray-600 hover:text-[#880E4F] border-b-2 border-transparent hover:border-[#F8BBD0] transition-colors"
      >
        <Globe className="h-4 w-4 text-[#E91E63]" />
        <span>{currentLanguage === "en" ? "EN" : "AL"}</span>
        <ChevronDown className="h-3 w-3 text-[#E91E63]" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-24 bg-white rounded-md shadow-lg overflow-hidden z-50 border border-[#F8BBD0]">
          <div className="py-1">
            <button
              onClick={() => changeLanguage("en")}
              className={`block w-full text-left px-4 py-2 text-sm ${
                currentLanguage === "en" ? "bg-[#F8BBD0] text-[#880E4F]" : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              English
            </button>
            <button
              onClick={() => changeLanguage("al")}
              className={`block w-full text-left px-4 py-2 text-sm ${
                currentLanguage === "al" ? "bg-[#F8BBD0] text-[#880E4F]" : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Albanian
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
