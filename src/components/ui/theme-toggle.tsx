import { Moon, Sun } from "lucide-react";
import { Button } from "./button";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    // Check stored preference or default to dark
    const storedTheme = typeof localStorage !== "undefined" ? localStorage.getItem("theme") : null;
    const isDark = document.documentElement.classList.contains("dark");
    
    // If no stored preference and not dark, set to dark
    if (!storedTheme && !isDark) {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      setTheme(isDark ? "dark" : "light");
    }
  }, []);

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.contains("dark");
    const newTheme = isDark ? "light" : "dark";

    document.documentElement.classList.toggle("dark");
    setTheme(newTheme);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="rounded-full cursor-pointer"
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
