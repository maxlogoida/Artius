import styled from 'styled-components';

import BannerLogo from '../../assets/Banner.png';

export const BannerContainer = styled.div`
  background-image: url(${BannerLogo});
  background-size: cover;
  padding: 0 0 150px 45px;
  margin-top: 41px;
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
`;

export const BannerInfo = styled.div`
  width: 509px;
  background-color: white;
  padding: 76px 40px 96px;

  h3 {
    font-size: 20px;
    font-weight: 400;
    color: gray;
  }

  h1 {
    padding-top: 5px;
    font-size: 33px;
    font-family: 'Open Sans';
  }

  div {
    padding-top: 12px;
    display: flex;
    gap: 10px;
    font-size: 16px;
    color: gray;
  }

  p {
    padding-top: 14px;
    font-size: 16px;
  }
`;
