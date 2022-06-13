import CreateForm from "../../components/CreateForm/CreateForm";
import { Header } from "../../components/Header/Header";
import StyledPage from "../../components/styles/StyledPage";

export const EditPage = (): JSX.Element => {
  return (
    <StyledPage>
      <Header />
      <CreateForm />
    </StyledPage>
  );
};
