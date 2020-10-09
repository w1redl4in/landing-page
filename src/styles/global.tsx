import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useTheme } from '../hooks/theme';
import { Themes, GlobalStyles } from './theme';

const Theme: React.FC = ({ children }) => {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={Themes[theme]}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
