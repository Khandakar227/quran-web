import { writable } from 'svelte/store';

export const SurahList = writable([]);
export const SurahNum = writable(+localStorage.getItem("SurahNumber") || 1);
export const AyahNum = writable(+localStorage.getItem("VerseNumber") || 1);
// export const startingAyah = writable(+localStorage.getItem("StartingNumber") || 1);

export const DarkMode = writable(localStorage.getItem("DarkMode")==="true" || false);
export const Theme = writable(localStorage.getItem("theme") ?? "0");
export const TranslateTo = writable(+localStorage.getItem("TranslateTo") ?? 1);
export const ArabicFont = writable(localStorage.getItem("ArabicFont") || "Uthmani-Hafs");
export const showCredit = writable(false);
