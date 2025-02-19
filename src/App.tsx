import { Body } from "./Body";
import { Header } from "./Header";
import { BsSun } from "react-icons/bs";
import { BsMoonStars } from "react-icons/bs";
import { useThemeContext } from "./ThemeContext";

function App() {
  const { theme } = useThemeContext();

  return (
    <div
      data-theme={theme}
      className="w-screen h-screen flex flex-col justify-start overflow-hidden font-display"
    >
      <div className="bg-bg-primary flex flex-1 flex-col self-stretch text-primary p-8 *:not-first:mt-2 md:*:not-first:mt-6">
        <div className="flex flex-row justify-between items-start">
          <Header />
          <ThemeSwitcher />
        </div>
        <Body />
      </div>
    </div>
  );
}

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useThemeContext();

  const Icon = theme === "light" ? BsSun : BsMoonStars;

  return (
    <button
      className={`flex flex-row sm:w-8 sm:h-8 md:w-10 md:h-10 border-1 p-2 items-center justify-center rounded-full border-none
                 hover:bg-primary hover:text-bg-primary transition-colors cursor-pointer hover:animate-[spin_0.5s_linear_1]`}
      onClick={toggleTheme}
      title="Switch theme"
    >
      <Icon className="sm:w-4 sm:h-4 md:w-5 md:h-5" color="currentColor" />
    </button>
  );
};

export default App;
