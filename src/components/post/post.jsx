import { PostContainer } from './styles';

const Post = ({ post }) => {
  return (
    <PostContainer data-cy={'post'}>
      <div>
        <img src={post.img} alt="" />
      </div>
      <div>
        <h3>{post.category}</h3>
        <h2>{post.title}</h2>
        <span>
          <span>{post.author}</span>|<span>{post.date}</span>
        </span>
        <p>{post.description}</p>
      </div>
    </PostContainer>
  );
};

export default Post;
