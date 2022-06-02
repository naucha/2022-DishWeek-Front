import styled from "styled-components";

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  letter-spacing: 2px;
  padding-left: 14px;
  padding-right: 14px;
  margin-top: 50px;
  background-color: white;

  h2 {
    margin: 20px 0 12px 0;
    text-align: left;
    font-size: 35px;
    color: #1c3b5e;
  }

  p {
    margin-bottom: 25px;
    margin-top: -10px;
    color: #4242429e;
    font-weight: 600;
  }

  .signup-form {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    gap: 5px;

    label {
      color: #1c3b5e;
      font-weight: 600;
      letter-spacing: 1px;
      font-size: 24px;
      text-align: left;
    }

    input {
      height: 30px;
      font-size: 18px;
      font-family: "Helvetica Neue", sans-serif;
      letter-spacing: 3px;
      border: 1px solid #1c3b5e;
      border-radius: 10px;
      margin: 4px 0 16px 0;
      padding: 10px;
      background-color: #ffffff;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    span {
      color: #1c3b5e;
    }
  }

  .sign-up {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1c3b5e;
    font-family: "Merriweather", sans-serif;
    letter-spacing: 3px;
    font-size: 22px;
    font-weight: bolder;
    color: white;
    width: 320px;
    height: 60px;
    margin-top: 15px;
    border-radius: 50px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  .change-form {
    letter-spacing: 2px;
    margin-top: 25px;
    font-size: 16px;
  }
`;

export default StyledForm;
