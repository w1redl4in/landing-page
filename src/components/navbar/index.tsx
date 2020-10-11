import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { useMenu } from '../../hooks/menu';
import { useTheme } from '../../hooks/theme';
import {
  Nav,
  NavbarContainer,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  NavLogo2,
} from './styles';
import Lottie from '../lottie';

const Navbar: React.FC = () => {
  const { menuItems, openOrCloseMenu } = useMenu();

  const { handleTheme } = useTheme();

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo2>
            <Link to="home" smooth duration={500} spy offset={-80}>
              <Lottie />
            </Link>
          </NavLogo2>
          <MobileIcon onClick={openOrCloseMenu}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            {menuItems.map((menuItem, id) => (
              <NavItem key={id}>
                <NavLinks
                  to={menuItem.route}
                  smooth
                  duration={500}
                  spy
                  offset={-80}
                >
                  {menuItem.title}
                </NavLinks>
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
