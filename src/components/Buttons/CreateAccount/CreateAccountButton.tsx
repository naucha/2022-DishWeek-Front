import styled from "styled-components";

const StyledLoginButtonLanding = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 320px;
  height: 60px;
  color: #1c3b5e;
  cursor: pointer;
  background-color: #dbdbdb;
  font-family: "Merriweather", sans-serif;
  letter-spacing: 3px;
  font-size: 22px;
  font-weight: bolder;
  border-radius: 50px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transform: scale(0);
    transition: transform 0.3 ease-in;
    mix-blend-mode: difference;
  }
`;
const CreateAccountButton = (): JSX.Element => {
  return <StyledLoginButtonLanding>Create an account</StyledLoginButtonLanding>;
};

export default CreateAccountButton;