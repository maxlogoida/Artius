import { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { Link } from 'react-router-dom';

import Post from '../../components/post/post';
import { postsData } from '../../constants';
import { SearchContainer } from './styles';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = postsData.filter((post) => post.category.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <SearchContainer>
      <div className="list-wrapper">
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Search category"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <CiSearch size={30} />
        </div>

        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <Link key={post.id} to={`/post/${post.id}`}>
              <Post post={post} />
            </Link>
          ))
        ) : (
          <div className="no-results">
            <h4>Try a different category.</h4>
            <p>No posts found for your search term.</p>
          </div>
        )}
      </div>
    </SearchContainer>
  );
};

export default Search;
