import { ButtonsLanding } from "../../components/Buttons/ButtonsLanding";
import LogoComplete from "../../components/LogoComplete/LogoComplete";
import StyledPage from "../../components/styles/StyledPage";

export const LandingPage = () => {
  return (
    <>
      <StyledPage>
        <LogoComplete />
        <ButtonsLanding />
      </StyledPage>
    </>
  );
};
