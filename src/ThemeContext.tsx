import { createContext, ReactNode, use, useState } from "react";

export type Theme = "light" | "dark";

type Context = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<Context>({
  theme: "dark",
  toggleTheme: () => {},
});

// eslint-disable-next-line react-refresh/only-export-components
export const useThemeContext = () => use(ThemeContext);

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(getBrowserTheme);
  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const getBrowserTheme = () => {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }
  return "light";
};
