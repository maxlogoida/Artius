import { Link } from 'react-router-dom';

import Banner from '../../components/banner/banner';
import Post from '../../components/post/post';
import usePosts from '../../hooks/usePosts';
import { HomeContainer } from './styles';

const Home = () => {
  const { posts } = usePosts();

  return (
    <HomeContainer>
      <Banner />
      <div className="list-wrapper">
        {posts.map((post) => (
          <Link key={post.id} to={`/post/${post.id}`}>
            <Post post={post} />
          </Link>
        ))}
      </div>
    </HomeContainer>
  );
};

export default Home;
