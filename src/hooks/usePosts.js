import { postsData } from '../constants';
import useLocalStorage from './useLocalStorage';

const usePosts = () => {
  const { value: posts, setLocalStorage: setPosts } = useLocalStorage('posts', postsData);
  const addPost = (post) => {
    setPosts([...posts, post]);
  };
  return { posts, addPost };
};

export default usePosts;
