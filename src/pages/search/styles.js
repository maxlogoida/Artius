import styled from 'styled-components';

export const SearchContainer = styled.div`
  margin-top: 140px;
  height: 100%;

  .input-wrapper {
    position: relative;
    margin-bottom: 60px;
  }

  input {
    width: 700px;
    border: 1px solid #1c1c1c;
    border-radius: 25px;
    margin: 0 auto;
    padding: 20px 60px 20px 20px;
    font-size: 18px;
  }

  svg {
    position: absolute;
    top: 15px;
    right: 20px;
  }

  .list-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }

  .no-results {
    text-align: center;
    margin: 100px auto;
    width: 25%;
    color: #1c1c1c;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    h4 {
      font-size: 34px;
      font-weight: bold;
      font-family: 'Open Sans';
    }

    p {
      font-size: 16px;
      font-family: sans-serif;
    }
  }
`;
