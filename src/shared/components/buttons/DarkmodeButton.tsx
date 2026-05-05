import { Button } from "@/shared/components/ui/button";
import { Sun, Moon } from "lucide-react";
import { useDarkMode } from "@/shared/stores/useDarkMode";

export default function DarkmodeButton() {
  const isDark = useDarkMode((state) => state.isDark);
  const setIsDark = useDarkMode((state) => state.setIsDark);

  return (
    <Button
      size={"icon"}
      variant={"ghost"}
      className="text-amber-11 rounded-full"
      onClick={() => setIsDark()}
    >
      {isDark ? <Sun /> : <Moon />}
    </Button>
  );
}
