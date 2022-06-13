import { useEffect } from "react";
import { DishesList } from "../../components/DishesList/DishesList";
import { Header } from "../../components/Header/Header";
import StyledPage from "../../components/styles/StyledPage";
import { useAppDispatch } from "../../redux/store/hooks";
import { getDishesThunk } from "../../redux/thunks/dishesThunks";

export const HomePage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getDishesThunk());
  }, [dispatch]);

  return (
    <StyledPage>
      <Header />
      <DishesList />
    </StyledPage>
  );
};
