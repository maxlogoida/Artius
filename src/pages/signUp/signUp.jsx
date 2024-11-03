import { useState } from 'react';
import { LuUser } from 'react-icons/lu';
import { RiKey2Line } from 'react-icons/ri';
import { Link, Navigate } from 'react-router-dom';

import ArtiusLogo from '../../assets/ArtiusLogo.png';
import Button from '../../components/button/button';
import Input from '../../components/input/input';
import { useAuthContext } from '../../providers/authProvider';
import { SignContainer, SignForm } from '../signIn/styles';

const SignUp = () => {
  const { signUp, isAuth } = useAuthContext();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  if (isAuth) {
    return <Navigate to="/" replace={true} />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    signUp({ username, password });
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
        <h3>Registration</h3>
        <p>Sign up to get the most out of Artius.</p>
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
        <label>
          <RiKey2Line size={24} />
          <Input
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        <span>
          <Link to={'/sign-in'}>Already have an account?</Link>
        </span>
        <Button onClick={handleSubmit}>Sign Up</Button>
      </SignForm>
    </SignContainer>
  );
};

export default SignUp;
