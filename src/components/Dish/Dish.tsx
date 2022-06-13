import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks";
import { deleteDishThunk } from "../../redux/thunks/dishesThunks";
import { DishesData } from "../../types/types";
import { StyledDishComponent } from "./StyledDish";

export const Dish = ({
  dishes: {
    id,
    name,
    image,
    imagebackup,
    resume,
    cookingtime,
    veggie,
    createdby,
  },
}: {
  dishes: DishesData;
}) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  const deleteDish = () => {
    dispatch(deleteDishThunk(id));
  };

  return (
    <StyledDishComponent>
      <div className="info-text">
        <h2>{name}</h2>
        <p>{cookingtime}</p>
      </div>
      <div className="image-container">
        <img className="image-recipe" alt={name} src={imagebackup} />
      </div>
      <p>{resume}</p>
      <p>Created by: {createdby}</p>
      {veggie === "true" ? (
        <p className="vegan">Veggie</p>
      ) : (
        <p className="vegan">No Veggie</p>
      )}

      <div className="buttons-container">
        {user.username === createdby ? (
          <>
            <img
              className="buttons button--minus"
              src="/images/icons/circle-minus-solid.svg"
              alt="Button for remove recipes"
              onClick={deleteDish}
            />
            <img
              className="buttons button--edit"
              src="/images/icons/pen-solid.svg"
              alt="Button for edit recipes"
              onClick={() => navigate(`/edit/${id}`)}
            />
          </>
        ) : (
          ""
        )}
        <img
          className="buttons button--plus"
          src="/images/icons/circle-plus-solid.svg"
          alt="Button for add recipes"
        />
      </div>
    </StyledDishComponent>
  );
};
