import styled from 'styled-components';

export const CreateContainer = styled.div`
  max-width: 1200px;
  padding-top: 90px;
  margin: 0 auto;

  div {
    position: relative;

    h3 {
      position: absolute;
      color: white;
      font-size: 40px;
      font-weight: 700;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-family: 'Open Suns';
    }
  }

  .button {
    display: flex;
    justify-content: center;
  }
`;

export const CreateForm = styled.div`
  padding: 85px 0;

  div {
    display: flex;
    gap: 20px;
  }

  Input {
    padding-left: 20px;
    border: 1px solid gray;
  }

  .secondFormContainer {
    display: flex;
    margin-top: 10px;
  }

  .formImgBackground {
    width: 385px;
    gap: 20px;
    overflow: hidden;
    object-fit: cover;
    border-radius: 10px;
    border: 1px solid gray;
    background-color: #f8f8f8;
  }
`;
