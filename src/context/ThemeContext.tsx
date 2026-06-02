import {
  createContext,
  useContext,
  useEffect,
  type ReactNode,
} from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

/**
 * Theme limits the app theme to only two valid values.
 */
type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

type ThemeProviderProps = {
  children: ReactNode;
};

const THEME_STORAGE_KEY = "react-concepts-lab-theme";

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

/**
 * ThemeProvider owns the global theme state.
 *
 * In Step 10, theme state is now persisted using the reusable
 * useLocalStorageState custom hook.
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

/**
 * useTheme is a small helper hook for reading ThemeContext.
 */
export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider.");
  }

  return context;
}