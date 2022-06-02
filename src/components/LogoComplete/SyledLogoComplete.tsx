import styled from "styled-components";

export const StyledLogoComplete = styled.div`
  background-color: #c6c9bf;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  padding: 20px;
  margin-bottom: -10px;

  .container-logo {
    width: 60%;
    display: flex;
    flex-direction: row;
    margin-top: 0%;
    align-items: flex-end;
    justify-content: center;

    h1 {
      margin: 0;
      padding: 0;
      color: #1c3b5e;
      font-size: 60px;
      letter-spacing: 5px;
    }

    img {
      display: flex;
      width: 100px;
      height: 100px;
      margin-left: 20px;
      transform: translateY(-4px);
    }
  }

  p {
    color: #4242429e;
    text-align: center;
    font-weight: 900;
    letter-spacing: 2px;
    margin-top: 10px;
    font-size: 16px;
    margin-bottom: 40px;
  }
`;
