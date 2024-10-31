import { Route, Routes } from 'react-router-dom';

import About from '../../pages/about/about';
import Create from '../../pages/create/create';
import Home from '../../pages/home/home';
import PostPage from '../../pages/postPage/postPage';
import Profile from '../../pages/profile/profile';
import Search from '../../pages/search/search';
import SignIn from '../../pages/signIn/signIn';
import SignUp from '../../pages/signUp/signUp';

const RouteComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/create" element={<Create />} />
      <Route path="/search" element={<Search />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/post/:id" element={<PostPage />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  );
};

export default RouteComponent;
