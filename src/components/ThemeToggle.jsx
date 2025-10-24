import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    console.log("Theme toggle clicked, current state:", isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
      console.log("Switched to light mode");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
      console.log("Switched to dark mode");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed top-5 right-16 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outline-none hover:bg-primary/10 bg-background/80 border border-primary/20"
      )}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};
