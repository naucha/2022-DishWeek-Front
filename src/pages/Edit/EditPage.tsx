import { useEffect } from "react";
import { useParams } from "react-router-dom";
import CreateForm from "../../components/CreateForm/CreateForm";
import { Header } from "../../components/Header/Header";
import StyledPage from "../../components/styles/StyledPage";
import { useAppDispatch } from "../../redux/store/hooks";
import { getDishThunk } from "../../redux/thunks/dishThunk";

export const EditPage = (): JSX.Element => {
  const { idDish } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (idDish) {
      dispatch(getDishThunk(idDish));
    }
  }, [dispatch, idDish]);

  return (
    <StyledPage>
      <Header />
      <CreateForm />
    </StyledPage>
  );
};
