import styled from 'styled-components';

export const HeaderContainer = styled.div`
  padding: 31px 0 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;

  div {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  svg {
    transition: 0.3s ease-in-out;
    &:hover {
      color: grey;
    }
  }

  .profile-button {
    width: 135px;
    height: 46px;
    background-color: #1c1c1c;
    border: 2px solid #1c1c1c;
    color: white;
    border-radius: 10px;
    font-size: 20px;
    font-family: 'Open Sans';
    transition: 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
      background-color: white;
      color: #1c1c1c;
    }
  }
`;
