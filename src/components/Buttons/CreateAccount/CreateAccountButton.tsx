import styled from "styled-components";

const StyledLoginButtonLanding = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 280px;
  height: 50px;
  color: var(--fc-primary);
  cursor: pointer;
  background-color: #eaeaead3;
  font-family: "Merriweather", sans-serif;
  letter-spacing: 3px;
  font-size: 21px;
  font-weight: bolder;
  border-radius: 50px;
  box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.25);
  &::after {
    transition: transform ease-in;
  }
`;
const CreateAccountButton = (): JSX.Element => {
  return <StyledLoginButtonLanding>Create an account</StyledLoginButtonLanding>;
};

export default CreateAccountButton;
