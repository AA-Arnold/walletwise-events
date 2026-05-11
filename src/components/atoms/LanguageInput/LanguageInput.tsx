"use client";

import { useState } from "react";

const LanguageInput = ({
  languages,
  setLanguages,
}: {
  languages: string[];
  setLanguages: (languages: string[]) => void;
}) => {
  const [inputValue, setInputValue] = useState("");

  const addLanguage = () => {
    const trimmed = inputValue.trim();

    if (!trimmed) return;

    if (languages.includes(trimmed)) {
      setInputValue("");
      return;
    }

    setLanguages([...languages, trimmed]);
    setInputValue("");
  };

  const removeLanguage = (lang: string) => {
    setLanguages(languages.filter((item) => item !== lang));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addLanguage();
    }
  };

  const handleBlur = () => {
    const trimmed = inputValue.trim();

    if (!trimmed) return;

    if (!languages.includes(trimmed)) {
      setLanguages([...languages, trimmed]);
    }

    setInputValue("");
  };

  return (
    <div className="w-full min-h-11 bg-[#120909] border-[#404040] border px-[14.64px] py-2 flex flex-wrap gap-2 items-center focus-within:border-[#777777] rounded-[11px]">
      {languages.map((lang) => (
        <div
          key={lang}
          className="bg-[#2A1A1A] text-[#C1C1C1] px-3 py-1 rounded-full flex items-center gap-2 text-sm"
        >
          <span>{lang}</span>

          <button
            type="button"
            onClick={() => removeLanguage(lang)}
            className="text-red-400"
          >
            ×
          </button>
        </div>
      ))}

      <input
        style={{ fontSize: "16px" }}
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        placeholder="Press Enter or comma to add language"
        className="bg-inherit flex-1 min-w-30 outline-none text-[#C1C1C1] placeholder:text-[#777777] text-sm"
      />
    </div>
  );
};

export default LanguageInput;
