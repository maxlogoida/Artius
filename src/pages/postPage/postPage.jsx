import { useParams } from 'react-router-dom';

import { postsData } from '../../constants';
import { PostPageContainer } from './styles';

const PostPage = () => {
  const { id } = useParams();
  const post = postsData.find((item) => item.id === Number(id));
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
