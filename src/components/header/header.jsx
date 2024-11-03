import { CiSearch } from 'react-icons/ci';
import { Link } from 'react-router-dom';

import Button from '../button/button';
import Nav from '../nav/nav';
import { HeaderContainer } from './styles';

const Header = () => {
  return (
    <HeaderContainer>
      <Nav />
      <div>
        <Link to={'/search'}>
          <CiSearch size={30} />
        </Link>
        {/* <Link to={'/sign-in'}> */}
        <Link to={'/profile'}>
          <Button>Sign in</Button>
        </Link>
      </div>
    </HeaderContainer>
  );
};

export default Header;
