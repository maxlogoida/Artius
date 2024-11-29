import { Link } from 'react-router-dom';

import ArtiusLogo from '../../assets/ArtiusLogo.png';
import { useAuthContext } from '../../providers/authProvider';
import { NavContainer, StyledLink } from './styles';

const Nav = () => {
  const { isAuth } = useAuthContext();

  return (
    <NavContainer data-cy={'nav'}>
      <Link to="/">
        <img src={ArtiusLogo} alt="Artius" />
      </Link>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/about" data-cy={'about'}>
        About
      </StyledLink>
      {isAuth && (
        <StyledLink to="/create" data-cy={'create'}>
          Create
        </StyledLink>
      )}
    </NavContainer>
  );
};

export default Nav;
