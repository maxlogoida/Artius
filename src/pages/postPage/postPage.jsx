import { useParams } from 'react-router-dom';

import usePosts from '../../hooks/usePosts';
import { PostPageContainer } from './styles';

const PostPage = () => {
  const { id } = useParams();
  const { posts } = usePosts();
  const post = posts.find((item) => item.id === Number(id));

  return (
    <PostPageContainer data-cy={`post-${post.id}`}>
      <img src={post.img} alt="PostImg" />
      <div>
        <h3>{post.title}</h3>
        <div className="editor-description" dangerouslySetInnerHTML={{ __html: post.description }} />
      </div>
    </PostPageContainer>
  );
};

export default PostPage;
