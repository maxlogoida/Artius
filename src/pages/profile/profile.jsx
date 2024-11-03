import { Link } from 'react-router-dom';

import Post from '../../components/post/post';
import { postsData } from '../../constants';
import { ProfileContainer, ProfileInfo } from './styles';

const Profile = () => {
  return (
    <ProfileContainer>
      <ProfileInfo>
        <div className="profile-info-wrapper">
          <span>INTERIOR</span>
          <h3>Laborum Ullamco Sunt id ut Sunt</h3>
          <span>May 7, 2019</span>
          <p>
            Proident aliquip velit qui commodo officia qui consectetur dolor ullamco aliquip elit incididunt. Ea minim
            ex consectetur excepteur. Ex laborum nostrud mollit sint consectetur Lorem amet aliqua do enim. Commodo duis
            dolor anim excepteur. In aliquip mollit nulla consequat velit magna.
          </p>
        </div>
      </ProfileInfo>

      <div className="list-wrapper">
        {postsData.map((post) => (
          <Link key={post.id} to={`/post/${post.id}`}>
            <Post post={post} />
          </Link>
        ))}
      </div>
    </ProfileContainer>
  );
};

export default Profile;
