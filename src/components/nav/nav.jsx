import { Link } from 'react-router-dom';

import ArtiusLogo from '../../assets/ArtiusLogo.png';
import { NavContainer, StyledLink } from './styles';

const Nav = () => {
  return (
    <NavContainer data-cy={'nav'}>
      <Link to="/">
        <img src={ArtiusLogo} alt="Artius" />
      </Link>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/about">About</StyledLink>
      <StyledLink to="/create">Create</StyledLink>
    </NavContainer>
  );
};

export default Nav;
