import styled from "styled-components";
import { useAppSelector } from "../../redux/store/hooks";
import { Dish } from "../Dish/Dish";

const DishesListComponent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DishesList = () => {
  const dishes = useAppSelector((state) => state.dishes);

  return (
    <DishesListComponent>
      <ul>
        {dishes.map((dish) => {
          return <Dish key={dish.id} dishes={dish} />;
        })}
      </ul>
    </DishesListComponent>
  );
};
