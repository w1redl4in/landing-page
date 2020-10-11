import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Button = styled<any>(Link)`
  border-radius: 50px;
  background: ${(props) =>
    props.primary ? props.theme.colors.primary : props.theme.colors.secondary};
  white-space: nowrap;
  padding: ${(props) => (props.big ? '14px 48px' : '12px 30px')};
  color: ${(props) =>
    props.dark ? props.theme.colors.secondary : props.theme.colors.white};
  font-size: ${(props) => (props.fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${(props) =>
      props.primary ? props.theme.colors.white : props.theme.colors.primary};
  }
`;
