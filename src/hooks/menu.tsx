import React, { createContext, useCallback, useContext, useState } from 'react';
interface MenuContextProps {
  isOpen: boolean;
  menuItems: { title: string; route: string }[];
  openOrCloseMenu(): void;
}

interface MenuState {
  isOpen: boolean;
  menuItems: { title: string; route: string }[];
}

const MenuContext = createContext<MenuContextProps>({} as MenuContextProps);

const MenuProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<MenuState>({
    isOpen: false,
    menuItems: [
      {
        title: 'About',
        route: 'about',
      },
      {
        title: 'Discover',
        route: 'discover',
      },
      {
        title: 'Services',
        route: 'services',
      },
      {
        title: 'Find Out More',
        route: 'signup',
      },
    ],
  });

  const { isOpen, menuItems } = data;

  const openOrCloseMenu = useCallback(() => {
    setData({ isOpen: !isOpen, menuItems });
  }, [isOpen, menuItems]);

  return (
    <MenuContext.Provider value={{ isOpen, menuItems, openOrCloseMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

const useMenu = (): MenuContextProps => {
  const context = useContext(MenuContext);

  if (!context) throw new Error('useMenu can only be used within MenuProvider');

  return context;
};

export { MenuProvider, useMenu };
