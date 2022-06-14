import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { DetailDish } from "../../components/Detail/DetailDish";
import { Header } from "../../components/Header/Header";
import StyledPage from "../../components/styles/StyledPage";
import { useAppDispatch } from "../../redux/store/hooks";
import { getDishThunk } from "../../redux/thunks/dishThunk";

export const DetailPage = (): JSX.Element => {
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
      <DetailDish />
    </StyledPage>
  );
};
