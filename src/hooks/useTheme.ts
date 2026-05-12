import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Get the current theme from DOM
    const root = document.documentElement;
    const currentTheme = root.classList.contains('dark') ? 'dark' : 'light';
    setTheme(currentTheme);
    setMounted(true);

    const handleThemeChange = (e: Event) => {
      const customEvent = e as CustomEvent<{ theme: Theme }>;
      setTheme(customEvent.detail.theme);
    };

    window.addEventListener('trevon-theme-change', handleThemeChange);
    return () => window.removeEventListener('trevon-theme-change', handleThemeChange);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;
    
    // Remove both theme classes
    root.classList.remove('light', 'dark');
    
    // Add the appropriate theme class
    root.classList.add(theme);
    
    // Save to localStorage
    localStorage.setItem('trevon-theme', theme);
  }, [theme, mounted]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    window.dispatchEvent(new CustomEvent('trevon-theme-change', { detail: { theme: newTheme } }));
  };

  return { theme, toggleTheme };
};
