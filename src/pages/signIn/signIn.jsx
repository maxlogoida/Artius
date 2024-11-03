import { useState } from 'react';
import { LuUser } from 'react-icons/lu';
import { RiKey2Line } from 'react-icons/ri';
import { Link, Navigate } from 'react-router-dom';

import ArtiusLogo from '../../assets/ArtiusLogo.png';
import Button from '../../components/button/button';
import Input from '../../components/input/input';
import { useAuthContext } from '../../providers/authProvider';
import { SignContainer, SignForm } from './styles';

const SignIn = () => {
  const { signIn, isAuth } = useAuthContext();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  if (isAuth) {
    return <Navigate to="/" replace={true} />;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ username, password });

    signIn({ username, password });
  };

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
          <Input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          <RiKey2Line size={24} />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <span>
          <Link to={'/sign-up'} data-cy={'sign-up-link'}>
            Don&#39;t have an account?
          </Link>
        </span>
        <Button onClick={handleSubmit}>Sign In</Button>
      </SignForm>
    </SignContainer>
  );
};

export default SignIn;
