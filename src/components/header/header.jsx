import { CiSearch } from 'react-icons/ci';
import { Link } from 'react-router-dom';

import { useAuthContext } from '../../providers/authProvider';
import Button from '../button/button';
import Nav from '../nav/nav';
import { HeaderContainer } from './styles';

const Header = () => {
  const { isAuth, signOut } = useAuthContext();

  return (
    <HeaderContainer>
      <Nav />
      <div>
        <Link to={'/search'}>
          <CiSearch size={30} />
        </Link>
        {isAuth ? (
          <Button onClick={signOut}>Sign Out</Button>
        ) : (
          <Link to={'/sign-in'}>
            <Button>Sign in</Button>
          </Link>
        )}
      </div>
    </HeaderContainer>
  );
};

export default Header;
