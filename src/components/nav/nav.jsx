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
      <StyledLink to="/about" data-cy={'about'}>
        About
      </StyledLink>
      <StyledLink to="/create" data-cy={'create'}>
        Create
      </StyledLink>
    </NavContainer>
  );
};

export default Nav;
