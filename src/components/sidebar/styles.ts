import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

interface SidebarContainterProps {
  isOpen: boolean;
}

export const SidebarContainer = styled.aside<SidebarContainterProps>`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.colors.background};
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${(props) => (props.isOpen ? '100%' : '0%')};
  top: ${(props) => (props.isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
  color: ${(props) => props.theme.colors.white};
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: ${(props) => props.theme.colors.white};
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
    transition: 0.2s ease-in-out;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarRoute = styled(LinkR)`
  border-radius: 50px;
  background: ${(props) => props.theme.colors.primary};
  white-space: nowrap;
  padding: 16px 64px;
  color: ${(props) => props.theme.colors.white};
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.primary};
  }
`;
