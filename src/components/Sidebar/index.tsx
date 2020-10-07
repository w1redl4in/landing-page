import React from 'react';
import { useMenu } from '../../context/Menu';
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
          <SidebarRoute to="signin">Sign Up</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
