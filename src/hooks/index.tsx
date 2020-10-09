import React from 'react';
import { MenuProvider } from './menu';
import { ThemeProvider } from './theme';

const RootContext: React.FC = ({ children }) => {
  return (
    <MenuProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </MenuProvider>
  );
};

export default RootContext;
