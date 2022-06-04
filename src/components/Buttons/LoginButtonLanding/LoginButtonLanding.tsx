import styled from "styled-components";

const StyledLoginButtonLanding = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 320px;
  height: 60px;
  cursor: pointer;
  color: white;
  background-color: var(--fc-primary);
  font-family: "Merriweather", sans-serif;
  letter-spacing: 3px;
  font-size: 22px;
  font-weight: bolder;
  border-radius: 50px;
  box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.25);
  &::after {
    transition: transform ease-in;
  }
`;

const LoginButtonLanding = (): JSX.Element => {
  return <StyledLoginButtonLanding>Log In</StyledLoginButtonLanding>;
};

export default LoginButtonLanding;
