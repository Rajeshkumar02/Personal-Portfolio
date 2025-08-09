"use client";

import { motion } from "framer-motion";
import { Sun, Moon, Monitor } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [theme, setTheme] = useState("system");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Get theme from localStorage or default to system
    const savedTheme = localStorage.getItem("theme") || "system";
    setTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (newTheme: string) => {
    const root = window.document.documentElement;

    if (newTheme === "system") {
      const systemPreference = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      root.classList.toggle("dark", systemPreference === "dark");
    } else {
      root.classList.toggle("dark", newTheme === "dark");
    }
  };

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
  };

  if (!mounted) {
    return <div className="w-8 h-8 rounded-lg bg-muted/50 animate-pulse" />;
  }

  const themes = [
    { name: "light", icon: Sun, label: "Light" },
    { name: "dark", icon: Moon, label: "Dark" },
    { name: "system", icon: Monitor, label: "System" },
  ];

  return (
    <div className="flex items-center gap-0.5 p-0.5 bg-background/50 border border-border/60 rounded-lg">
      {themes.map((themeOption) => {
        const IconComponent = themeOption.icon;
        const isActive = theme === themeOption.name;

        return (
          <motion.button
            key={themeOption.name}
            onClick={() => handleThemeChange(themeOption.name)}
            className={`relative p-1.5 rounded-md transition-all duration-200 ${
              isActive
                ? "bg-accent text-white shadow-sm"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title={`Switch to ${themeOption.label} theme`}
          >
            <IconComponent className="w-3 h-3" />
            {isActive && (
              <motion.div
                layoutId="theme-indicator"
                className="absolute inset-0 bg-accent rounded-md"
                style={{ zIndex: -1 }}
                initial={false}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                }}
              />
            )}
          </motion.button>
        );
      })}
    </div>
  );
}
