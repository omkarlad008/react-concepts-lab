import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

/**
 * Theme limits the app theme to only two valid values.
 *
 * This prevents invalid theme values like "blue", "system", or "random".
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

/**
 * ThemeContext stores global theme data.
 *
 * The initial value is undefined because the real value will come
 * from ThemeProvider.
 */
const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

/**
 * ThemeProvider owns the global theme state.
 *
 * Any component inside this provider can access the theme by using useTheme().
 */
export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>("light");

  /**
   * This effect syncs React theme state with the HTML document.
   *
   * CSS can then read data-theme="light" or data-theme="dark"
   * and apply the correct visual styles.
   */
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
 *
 * It also protects us from using the context outside ThemeProvider.
 */
export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider.");
  }

  return context;
}