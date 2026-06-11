import { useEffect, type ReactNode } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";
import { ThemeContext } from "./themeContext";
import type { Theme, ThemeContextValue } from "./themeTypes";

type ThemeProviderProps = {
  children: ReactNode;
};

const THEME_STORAGE_KEY = "react-concepts-lab-theme";

/**
 * ThemeProvider owns the global theme state.
 *
 * Theme state is persisted using the reusable useLocalStorageState custom hook.
 */
export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useLocalStorageState<Theme>(
    THEME_STORAGE_KEY,
    "light",
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((currentTheme) =>
      currentTheme === "light" ? "dark" : "light",
    );
  }

  const value: ThemeContextValue = {
    theme,
    setTheme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}