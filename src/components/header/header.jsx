import { CiSearch } from 'react-icons/ci';
import { Link } from 'react-router-dom';

import { useAuthContext } from '../../providers/authProvider';
import Button from '../button/button';
import Nav from '../nav/nav';
import { HeaderContainer } from './styles';

const Header = () => {
  const { isAuth, signOut } = useAuthContext();

  return (
    <HeaderContainer data-cy={'header'}>
      <Nav />
      <div>
        <Link to={'/search'} data-cy={'search-link'}>
          <CiSearch size={30} />
        </Link>
        {isAuth ? (
          <div>
            <Link to={'/profile'} data-cy={'profile-link'}>
              <button className="profile-button">Profile</button>
            </Link>
            <Button onClick={signOut}>Sign Out</Button>
          </div>
        ) : (
          <Link to={'/sign-in'} data-cy={'sign-in'}>
            <Button>Sign in</Button>
          </Link>
        )}
      </div>
    </HeaderContainer>
  );
};

export default Header;
