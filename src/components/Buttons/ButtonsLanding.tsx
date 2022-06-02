import styled from "styled-components";
import CreateAccountButton from "./CreateAccount/CreateAccountButton";
import LoginButtonLanding from "./LoginButtonLanding/LoginButtonLanding";

const StyledButtonsLanding = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  position: relative;
  top: 15%;
`;
export const ButtonsLanding = () => {
  return (
    <StyledButtonsLanding>
      <LoginButtonLanding />
      <CreateAccountButton />
    </StyledButtonsLanding>
  );
};
