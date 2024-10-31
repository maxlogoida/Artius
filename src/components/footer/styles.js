import styled from 'styled-components';

export const FooterContainer = styled.div`
  position: relative;
  bottom: 0;
  margin: 150px 35px 0px;
  background-color: #1c1c1c;
  color: white;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 18%;
    margin: 0 auto;
    padding: 119px 0px 29px;
  }

  h3 {
    font-size: 33px;
  }

  p {
    font-size: 16px;
    margin: 30px 0;
  }

  ul {
    display: flex;
    gap: 15px;
  }

  img {
    width: 33px;
    height: 30px;
  }

  svg {
    transition: 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
      color: grey;
    }
  }
`;
