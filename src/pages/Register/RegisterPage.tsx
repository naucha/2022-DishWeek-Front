import { Header } from "../../components/Header/Header";
import RegisterForm from "../../components/Register/RegisterForm";
import StyledPage from "../../components/styles/StyledPage";

export const RegisterPage = (): JSX.Element => {
  return (
    <StyledPage>
      <Header />
      <RegisterForm />
    </StyledPage>
  );
};
