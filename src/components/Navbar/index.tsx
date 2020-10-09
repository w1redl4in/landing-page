import React from 'react';
import { FaBars } from 'react-icons/fa';
import { useMenu } from '../../hooks/menu';
import { useTheme } from '../../hooks/theme';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from './styles';

const Navbar: React.FC = () => {
  const { menuItems, openOrCloseMenu } = useMenu();

  const { handleTheme } = useTheme();

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <img
              src="https://www.flaticon.com/svg/static/icons/svg/2038/2038455.svg"
              alt=""
              width="70px"
              height="70px"
            />
          </NavLogo>
          <MobileIcon onClick={openOrCloseMenu}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            {menuItems.map((menuItem) => (
              <NavItem>
                <NavLinks to={menuItem.route}>{menuItem.title}</NavLinks>
              </NavItem>
            ))}
          </NavMenu>
          <NavBtn onClick={handleTheme}>
            <NavBtnLink to="/">Theme Up!</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
