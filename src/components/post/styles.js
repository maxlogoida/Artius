import styled from 'styled-components';

export const PostContainer = styled.div`
  display: flex;
  max-width: 812px;
  gap: 37px;
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Open Sans',
    'Helvetica Neue',
    sans-serif;

  &:hover {
    img {
      opacity: 0.7;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  img {
    width: 237px;
    height: 177px;
    object-fit: cover;
    transition: 0.3s ease-in-out;
  }

  h3 {
    color: grey;
    font-weight: 400;
    font-size: 20px;
  }

  h2 {
    color: #1c1c1c;
    margin: 5px 0;
    font-size: 33px;
    font-family: 'Open Sans';
  }

  span {
    color: gray;
    display: flex;
    gap: 10px;
    font-size: 16px;
  }

  p {
    margin-top: 11px;
    font-size: 16px;
    color: #1c1c1c;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
