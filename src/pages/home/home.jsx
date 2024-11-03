import { Link } from 'react-router-dom';

import Banner from '../../components/banner/banner';
import Post from '../../components/post/post';
import { postsData } from '../../constants';
import { HomeContainer } from './styles';

const Home = () => {
  return (
    <HomeContainer>
      <Banner />
      <div className="list-wrapper">
        {postsData.map((post) => (
          <Link key={post.id} to={`/post/${post.id}`}>
            <Post post={post} />
          </Link>
        ))}
      </div>
    </HomeContainer>
  );
};

export default Home;
