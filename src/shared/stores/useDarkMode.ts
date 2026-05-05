import { create } from "zustand";
import { persist } from "zustand/middleware";

type DarkMode = {
  isDark: boolean;
  setIsDark: () => void;
};

export const useDarkMode = create<DarkMode>()(
  persist(
    (set) => ({
      isDark: false,
      setIsDark: () =>
        set((state) => {
          const next = !state.isDark;
          document.documentElement.classList.toggle("dark", next);
          return { isDark: next };
        }),
    }),
    { name: "theme" },
  ),
);
