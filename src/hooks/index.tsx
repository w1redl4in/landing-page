import React from 'react';
import { MenuProvider } from './menu';
import { ThemeProvider } from './theme';
import Theme from '../styles/global';

const RootContext: React.FC = ({ children }) => {
  return (
    <ThemeProvider>
      <MenuProvider>
        <Theme>{children}</Theme>
      </MenuProvider>
    </ThemeProvider>
  );
};

export default RootContext;
