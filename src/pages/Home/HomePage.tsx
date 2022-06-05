import { DishesList } from "../../components/DishesList/DishesList";
import { Header } from "../../components/Header/Header";
import StyledPage from "../../components/styles/StyledPage";

export const HomePage = () => {
  return (
    <StyledPage>
      <Header />
      <DishesList />
    </StyledPage>
  );
};
