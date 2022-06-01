import LogInForm from "../../components/LogIn/LogInForm";
import LogoComplete from "../../components/LogoComplete/LogoComplete";
import StyledFormsPage from "../../components/styles/StyledFormsPage";

export const LogInPage = () => {
  return (
    <StyledFormsPage>
      <LogoComplete />
      <LogInForm />
    </StyledFormsPage>
  );
};
