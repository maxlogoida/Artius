import { Link } from 'react-router-dom';

import Post from '../../components/post/post';
import useLocalStorage from '../../hooks/useLocalStorage';
import { ProfileContainer, ProfileInfo } from './styles';

const Profile = () => {
  const { value: users } = useLocalStorage('users', []);
  const { value: posts } = useLocalStorage('posts', []);

  const profileName = users.length > 0 ? users[0].username : 'Anonymous';

  const userPosts = posts.filter((post) => post.author === profileName);

  return (
    <ProfileContainer>
      <ProfileInfo>
        <div className="profile-info-wrapper">
          <span>{profileName}</span>
          <h3>Laborum Ullamco Sunt id ut Sunt</h3>
          <span>{new Date().toLocaleDateString()}</span>
          <p>
            Proident aliquip velit qui commodo officia qui consectetur dolor ullamco aliquip elit incididunt. Ea minim
            ex consectetur excepteur. Ex laborum nostrud mollit sint consectetur Lorem amet aliqua do enim. Commodo duis
            dolor anim excepteur. In aliquip mollit nulla consequat velit magna.
          </p>
        </div>
      </ProfileInfo>

      <div className="list-wrapper">
        {userPosts.length > 0 ? (
          userPosts.map((post) => (
            <Link key={post.id} to={`/post/${post.id}`}>
              <Post post={post} />
            </Link>
          ))
        ) : (
          <p>No posts available for this user.</p>
        )}
      </div>
    </ProfileContainer>
  );
};

export default Profile;
