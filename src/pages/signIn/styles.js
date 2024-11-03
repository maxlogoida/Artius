import styled from 'styled-components';

export const SignContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  padding: 31px 25px;
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

  .header {
    display: flex;
    align-content: center;
    justify-content: space-between;
    align-items: center;
  }
`;

export const SignForm = styled.div`
  max-width: 385px;
  padding-top: 150px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 14px;

  h3 {
    font-size: 33px;
    font-weight: 700;
    font-family: 'Open Sans';
    text-align: center;
  }

  p {
    font-size: 16px;
    text-align: center;
  }

  label {
    position: relative;
    display: flex;

    svg {
      position: absolute;
      top: 14px;
      left: 15px;
      color: gray;
    }
  }

  span {
    color: grey;
    transition: 0.3s ease-in-out;

    &:hover {
      color: #1c1c1c;
    }
  }

  Button {
    width: 100%;
  }
`;
