import styled from 'styled-components';

export const ButtonContainer = styled.button`
  width: 135px;
  height: 46px;
  background-color: white;
  border: 2px solid #1c1c1c;
  border-radius: 10px;
  font-size: 20px;
  font-family: 'Open Sans';
  transition: 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #1c1c1c;
    color: white;
  }
`;
