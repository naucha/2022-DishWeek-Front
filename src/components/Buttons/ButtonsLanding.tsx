import { NavLink } from "react-router-dom";
import styled from "styled-components";
import CreateAccountButton from "./CreateAccount/CreateAccountButton";
import LoginButtonLanding from "./LoginButtonLanding/LoginButtonLanding";

const StyledButtonsLanding = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  margin-top: 50px;
`;
export const ButtonsLanding = () => {
  return (
    <StyledButtonsLanding>
      <NavLink to={"/login"} style={{ textDecoration: "none" }}>
        <LoginButtonLanding />
      </NavLink>
      <NavLink to={"/register"} style={{ textDecoration: "none" }}>
        <CreateAccountButton />
      </NavLink>
    </StyledButtonsLanding>
  );
};
