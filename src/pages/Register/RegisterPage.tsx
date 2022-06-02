import LogoComplete from "../../components/LogoComplete/LogoComplete";
import RegisterForm from "../../components/Register/RegisterForm";

import StyledFormsPage from "../../components/styles/StyledFormsPage";

export const RegisterPage = (): JSX.Element => {
  return (
    <StyledFormsPage>
      <LogoComplete />
      <RegisterForm />
    </StyledFormsPage>
  );
};
