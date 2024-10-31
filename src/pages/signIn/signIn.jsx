import { LuUser } from 'react-icons/lu';
import { RiKey2Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import ArtiusLogo from '../../assets/ArtiusLogo.png';
import Button from '../../components/button/button';
import Input from '../../components/input/input';
import { SignContainer, SignForm } from './styles';

const SignIn = () => {
  return (
    <SignContainer>
      <div className="header">
        <Link to="/">
          <img src={ArtiusLogo} alt="Artius" />
        </Link>
        <Link to={'/sign-in'}>
          <Button>Sign in</Button>
        </Link>
      </div>
      <SignForm>
        <h3>Welcome back!</h3>
        <p>Sign in to get the most out of artius.</p>
        <label>
          <LuUser size={24} />
          <Input type="text" placeholder="Username" />
        </label>
        <label>
          <RiKey2Line size={24} />
          <Input type="password" placeholder="Password" />
        </label>
        <span>
          <Link to={'/sign-up'}>Don&#39;t have an account?</Link>
        </span>
        <Button>Sign In</Button>
      </SignForm>
    </SignContainer>
  );
};

export default SignIn;
