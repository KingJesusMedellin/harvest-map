"use client";

import { useLanguage } from "../language-context";

export function LanguageSwitcher() {
  const { lang, setLang, t } = useLanguage();

  return (
    <div
      className="absolute top-4 left-4 z-40 flex items-center bg-white/95 backdrop-blur-md rounded-full shadow-lg border border-slate-200 p-0.5 text-xs font-semibold"
      role="group"
      aria-label={t("lang.switchTo")}
    >
      <button
        onClick={() => setLang("es")}
        className={`px-2.5 py-1 rounded-full transition-colors ${
          lang === "es"
            ? "bg-blue-600 text-white"
            : "text-slate-500 hover:text-slate-700"
        }`}
      >
        ES
      </button>
      <button
        onClick={() => setLang("en")}
        className={`px-2.5 py-1 rounded-full transition-colors ${
          lang === "en"
            ? "bg-blue-600 text-white"
            : "text-slate-500 hover:text-slate-700"
        }`}
      >
        EN
      </button>
    </div>
  );
}
