import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

/**
 * useTheme is a small helper hook for reading ThemeContext.
 *
 * It protects us from using the context outside ThemeProvider.
 */
export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider.");
  }

  return context;
}