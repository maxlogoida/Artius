import styled from 'styled-components';

import ArticleLogo from '../../assets/Article.png';

export const ProfileContainer = styled.div`
  margin-top: 45px;

  .list-wrapper {
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
`;

export const ProfileInfo = styled.div`
  background-image: url(${ArticleLogo});
  background-size: cover;
  max-width: 1000px;
  padding: 28px 33px 28px 0;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
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

  .profile-info-wrapper {
    max-width: 375px;
    padding: 43px 32px;
    display: flex;
    flex-direction: column;
    background-color: white;
  }

  span {
    color: grey;
  }

  h3 {
    font-size: 33px;
    font-family: 'Open Sans';
  }

  div {
    padding-top: 12px;
    display: flex;
    gap: 10px;
    font-size: 16px;
  }

  p {
    padding-top: 14px;
    font-size: 16px;
  }
`;
