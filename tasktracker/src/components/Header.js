import { useEffect, useState } from "react";
import Logo from "../assets/logo.png";
import { Themes } from "../utilities/themes.js";

const TITLE = "Task Tracker";
const CLASS_ATTRIBUTE = "class";
const ACTIVE_THEME_CLASS = "activeTheme";

export const Header = () => {
    const storedTheme = localStorage.getItem(ACTIVE_THEME_CLASS);
  const [theme, setTheme] = useState(storedTheme|| Themes.LIGHT_THEME);
  const themeKeys = Object.keys(Themes);

  useEffect(() => {
    document.documentElement.removeAttribute(CLASS_ATTRIBUTE);
    document.documentElement.classList.add(`${theme}`);
    localStorage.setItem(ACTIVE_THEME_CLASS, theme);
  }, [theme]);

  const getTheme = (key) => {
    return theme === Themes[key]
      ? `${Themes[key]} ${ACTIVE_THEME_CLASS}`
      : `${Themes[key]}`;
  };

  return (
    <header>
      <div className="logo">
        <img src={Logo} alt={`${TITLE} Logo`} />
        <span>{TITLE}</span>
      </div>
      <div className="themeSelector">
        {themeKeys.map((key) => {
          return (
            <span
              key={key}
              className={getTheme(key)}
              onClick={() => setTheme(Themes[key])}
            ></span>
          );
        })}
      </div>
    </header>
  );
};
