import React from 'react';
import { useMenu } from '../../hooks/menu';
import { useTheme } from '../../hooks/theme';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarLink,
  SidebarRoute,
  SidebarWrapper,
  SideBtnWrap,
  SidebarMenu,
} from './styles';

const Sidebar: React.FC = () => {
  const { isOpen, menuItems, openOrCloseMenu } = useMenu();

  const { handleTheme } = useTheme();

  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={openOrCloseMenu}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          {menuItems.map((menuItem) => (
            <SidebarLink to={menuItem.route}>{menuItem.title}</SidebarLink>
          ))}
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/" onClick={handleTheme}>
            Theme Up!
          </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
