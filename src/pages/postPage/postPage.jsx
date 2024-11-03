import { useParams } from 'react-router-dom';

import usePosts from '../../hooks/usePosts';
import { PostPageContainer } from './styles';

const PostPage = () => {
  const { id } = useParams();
  const { posts } = usePosts();
  const post = posts.find((item) => item.id === Number(id));

  return (
    <PostPageContainer>
      <img src={post.img} alt="PostImg" />
      <div>
        <h3>{post.title}</h3>
        <p>{post.description}</p>
      </div>
    </PostPageContainer>
  );
};

export default PostPage;
