import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 40px;
`;

export const StyledLink = styled(NavLink)`
  color: #1c1c1c;
  font-size: 20px;
  font-family: 'Open Sans';
  transition: 0.3s ease-in-out;

  &.active {
    color: grey;
    text-decoration: underline;
  }

  &:hover {
    color: grey;
  }
`;
