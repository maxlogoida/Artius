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
`;
