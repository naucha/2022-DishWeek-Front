import LogoComplete from "../../components/LogoComplete/LogoComplete";
import SignUpForm from "../../components/SignUp/SignUpForm";
import StyledSignUpPage from "./StyledSignUpPage";

export const SignUpPage = () => {
  return (
    <StyledSignUpPage>
      <LogoComplete />
      <SignUpForm />
    </StyledSignUpPage>
  );
};
