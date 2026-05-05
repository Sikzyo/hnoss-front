import { create } from "zustand";
import { persist } from "zustand/middleware";

type DarkMode = {
  theme: string;
  setTheme: (by: "light" | "dark") => void;
};

export const useDarkMode = create<DarkMode>()(
  persist(
    (set) => ({
      theme: "light",
      setTheme: (by) => set(() => ({ theme: by })),
    }),
    { name: "theme" },
  ),
);
