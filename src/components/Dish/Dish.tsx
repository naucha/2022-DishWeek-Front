import { DishesData } from "../../types/types";
import { StyledDishComponent } from "./StyledDish";

export const Dish = ({
  dishes: { name, image, resume, cookingTime },
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
        <img className="image-recipe" alt="plate of" src={image} />
      </div>
      <p>{resume}</p>
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
