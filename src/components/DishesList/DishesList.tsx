import styled from "styled-components";
import { useAppSelector } from "../../redux/store/hooks";
import { Dish } from "../Dish/Dish";

const DishesListComponent = styled.div`
  display: flex;
  flex-direction: column;
  .list {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 12px 0;
    padding: 0;
  }
`;

export const DishesList = () => {
  const dishes = useAppSelector((state) => state.dishes);

  return (
    <DishesListComponent>
      <ul className="list">
        {dishes.map((dish) => {
          return <Dish key={dish.id} dishes={dish} />;
        })}
      </ul>
    </DishesListComponent>
  );
};
