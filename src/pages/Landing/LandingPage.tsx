import CreateAccountButton from "../../components/Buttons/CreateAccount/CreateAccountButton";
import LoginButtonLanding from "../../components/Buttons/LoginButtonLanding/LoginButtonLanding";
import LogoComplete from "../../components/LogoComplete/LogoComplete";
import StyledFormsPage from "../../components/styles/StyledFormsPage";

export const LandingPage = () => {
  return (
    <StyledFormsPage>
      <LogoComplete />
      <LoginButtonLanding />
      <CreateAccountButton />
    </StyledFormsPage>
  );
};
