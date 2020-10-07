import React from 'react';
import { FaBars } from 'react-icons/fa';
import { useMenu } from '../../context/Menu';
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

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">dolla</NavLogo>
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
          <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
