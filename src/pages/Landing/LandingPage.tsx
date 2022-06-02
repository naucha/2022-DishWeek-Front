import CreateAccountButton from "../../components/Buttons/CreateAccount/CreateAccountButton";
import LoginButtonLanding from "../../components/Buttons/LoginButtonLanding/LoginButtonLanding";
import LogoComplete from "../../components/LogoComplete/LogoComplete";
import StyledPage from "../../components/styles/StyledPage";

export const LandingPage = () => {
  return (
    <>
      <StyledPage>
        <LogoComplete />
        <LoginButtonLanding />
        <CreateAccountButton />
      </StyledPage>
    </>
  );
};
