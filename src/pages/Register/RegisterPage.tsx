import LogoComplete from "../../components/LogoComplete/LogoComplete";
import RegisterForm from "../../components/Register/RegisterForm";

import StyledPage from "../../components/styles/StyledPage";

export const RegisterPage = (): JSX.Element => {
  return (
    <StyledPage>
      <LogoComplete />
      <RegisterForm />
    </StyledPage>
  );
};
