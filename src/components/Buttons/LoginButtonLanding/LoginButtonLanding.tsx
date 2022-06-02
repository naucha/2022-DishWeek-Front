import styled from "styled-components";

const StyledLoginButtonLanding = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 320px;
  height: 60px;
  color: white;
  background-color: #1c3b5e;
  font-family: "Merriweather", sans-serif;
  letter-spacing: 3px;
  font-size: 22px;
  font-weight: bolder;
  border-radius: 50px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const LoginButtonLanding = (): JSX.Element => {
  return <StyledLoginButtonLanding>Log In</StyledLoginButtonLanding>;
};

export default LoginButtonLanding;
