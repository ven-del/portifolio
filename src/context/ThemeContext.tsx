import { createContext, useState, useContext } from 'react';
import type { ReactNode } from 'react';
import { themeOptions } from '../data';

interface ThemeContextType {
  currentTheme: string;
  setTheme: (themeId: string) => void;
  getThemeClasses: () => {
    primaryClass: string;
    secondaryClass: string;
    gradientClass: string;
  };
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [currentTheme, setCurrentTheme] = useState('purple');

  const setTheme = (themeId: string) => {
    setCurrentTheme(themeId);
    document.documentElement.classList.remove(
      'theme-purple', 'theme-blue', 'theme-green', 'theme-red'
    );
    document.documentElement.classList.add(`theme-${themeId}`);
  };

  const getThemeClasses = () => {
    const theme = themeOptions.find(t => t.id === currentTheme) || themeOptions[0];
    return {
      primaryClass: theme.primaryClass,
      secondaryClass: theme.secondaryClass,
      gradientClass: theme.gradientClass
    };
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme, getThemeClasses }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};