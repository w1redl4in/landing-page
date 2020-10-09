/* eslint-disable react-hooks/rules-of-hooks */
import React, { createContext, useCallback, useContext, useState } from 'react';

interface ThemeProps {
  handleTheme(): void;
  theme: string;
}

const ThemeContext = createContext<ThemeProps>({} as ThemeProps);

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<string>('darkMode');

  const handleTheme = useCallback(() => {
    if (theme === 'darkMode') {
      setTheme('lightMode');
    } else {
      setTheme('darkMode');
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ handleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = (): ThemeProps => {
  const context = useContext(ThemeContext);

  if (!context)
    throw new Error('useTheme can only be used within a ThemeProvider');

  return context;
};

export { ThemeProvider, useTheme };
