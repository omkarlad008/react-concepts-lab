export type Theme = "light" | "dark";

export type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme | ((currentTheme: Theme) => Theme)) => void;
  toggleTheme: () => void;
};