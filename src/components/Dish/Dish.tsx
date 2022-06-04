import { DishesData } from "../../types/types";
import { StyledDishComponent } from "./StyledDish";

export const Dish = ({
  dishes: { id, name, image, resume, cookingTime, createdBy },
}: {
  dishes: DishesData;
}) => {
  return (
    <StyledDishComponent>
      <div className="info-text">
        <h3>{name}</h3>
        <p>{cookingTime}</p>
      </div>
      <div className="image-container">
        <img className="image-recipe" alt={name} src={image} />
      </div>
      <p>{resume}</p>
      <p>Created by: {createdBy}</p>
      <div className="dish_buttons">
        <img
          className="buttons button-minus"
          src="/images/icons/circle-minus-solid.svg"
          alt="Button for remove recipes"
        />
        <img
          className="buttons button-plus"
          src="/images/icons/circle-plus-solid.svg"
          alt="Button for add recipes"
        />
      </div>
    </StyledDishComponent>
  );
};
