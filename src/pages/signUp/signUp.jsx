import { LuUser } from 'react-icons/lu';
import { RiKey2Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import ArtiusLogo from '../../assets/ArtiusLogo.png';
import Button from '../../components/button/button';
import Input from '../../components/input/input';
import { SignContainer, SignForm } from '../signIn/styles';

const SignUp = () => {
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
        <h3>Registration</h3>
        <p>Sign up to get the most out of artius.</p>
        <label>
          <LuUser size={24} />
          <Input type="text" placeholder="Username" />
        </label>
        <label>
          <RiKey2Line size={24} />
          <Input type="password" placeholder="Password" />
        </label>
        <label>
          <RiKey2Line size={24} />
          <Input type="password" placeholder="Confirm password" />
        </label>
        <span>
          <Link to={'/sign-in'}>Already have an account?</Link>
        </span>
        <Button>Sign Up</Button>
      </SignForm>
    </SignContainer>
  );
};

export default SignUp;
