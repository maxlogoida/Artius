import useLocalStorage from './useLocalStorage';

const useAuth = () => {
  const { value: users, setLocalStorage } = useLocalStorage('users', []);
  const { value: isAuth, setLocalStorage: setIsAuth } = useLocalStorage('isAuth', false);

  const signIn = ({ username, password }) => {
    const userIndex = users.findIndex((user) => user.username === username && user.password === password);
    if (userIndex !== -1) {
      const user = users[userIndex];
      const updatedUsers = [user, ...users.filter((_, index) => index !== userIndex)];
      setLocalStorage(updatedUsers);
      setIsAuth(true);
      alert('You are logged in');
      return user;
    }
    alert('Invalid username or password');
    return null;
  };

  const signUp = ({ username, password }) => {
    const userExists = users.some((user) => user.username === username);

    if (userExists) {
      alert('User already exists');
      return null;
    }
    const newUser = { username, password };
    setLocalStorage([newUser, ...users]);
    setIsAuth(true);
    alert('You are signed up');
    return newUser;
  };

  const signOut = () => {
    alert('You are logged out');
    setIsAuth(false);
  };

  return { users, signIn, signOut, signUp, isAuth };
};

export default useAuth;
