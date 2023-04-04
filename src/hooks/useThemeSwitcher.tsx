import { useEffect, useState } from 'react';

const useThemeSwitcher = () => {
  const [theme, setTheme] = useState<"dark" | "light">(localStorage.theme);
  const activeTheme = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(activeTheme);
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme, activeTheme]);

  return [activeTheme, setTheme] as const;
};

export default useThemeSwitcher;