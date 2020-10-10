import React from 'react';
import { MenuProvider } from './menu';
import { ThemeProvider } from './theme';
import Theme from '../styles/global';

const RootContext: React.FC = ({ children }) => {
  return (
    <MenuProvider>
      <ThemeProvider>
        <Theme>{children}</Theme>
      </ThemeProvider>
    </MenuProvider>
  );
};

export default RootContext;
