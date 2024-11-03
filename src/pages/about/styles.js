import styled from 'styled-components';

export const AboutContainer = styled.div`
  margin: 164px 150px 0;
  color: white;

  h4 {
    font-family: 'Open Sans';
    font-size: 52px;
  }

  p {
    font-size: 16px;
    margin-top: 25px;
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
  }
`;

export const AboutContainerWrapper = styled.div`
  background-color: #1c1c1c;
  overflow: hidden;
`;

export const AboutContainerFirst = styled.div`
  padding: 146px 156px 0 156px;
  display: flex;
  justify-content: space-around;

  div {
    margin-top: 30px;
    width: 32.5%;
  }
`;

export const AboutContainerSecond = styled.div`
  margin-top: -110px;
  display: flex;
  align-items: center;
  flex-direction: column;

  div {
    width: 32%;
  }
`;

export const AboutContainerThird = styled.div`
  padding: 202px 0 139px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  div {
    width: 38.5%;
    margin-bottom: 30px;
    margin-right: 180px;
  }

  span {
    display: flex;
    gap: 30px;
  }
`;

export const AboutContainerFourth = styled.div`
  text-align: center;
  margin: 160px auto;
  width: 25%;
  color: #1c1c1c;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
