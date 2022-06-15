import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/store/hooks";
import { StyledDetailDish } from "./StyledDetailDish";

export const DetailDish = () => {
  const { name, imagebackup, recipe, ingredients, cookingtime, veggie } =
    useAppSelector((state) => state.dish);
  const navigate = useNavigate();
  return (
    <StyledDetailDish className="detail">
      <div className="detail__image">
        <img className="detai__image--recipe" alt={name} src={imagebackup} />
      </div>
      <div className="detail__info">
        <h2 className="detail__info--heading">{name}</h2>
        <p className="detail__info--cookingtime">{cookingtime}</p>
      </div>
      <div className="detail__icons">
        {veggie === "true" ? (
          <p className="detail__icons--option">Veggie</p>
        ) : (
          <p className="detail__icons--option">No Veggie</p>
        )}
        <img
          className="detail__icons--add"
          src="/images/icons/circle-plus-solid.svg"
          alt="Button for add recipes to MyWeek"
        />
      </div>
      <div className="detail__main">
        <ul className="detail__main--list">
          <li className="detail__list--ingredient">{ingredients}</li>
        </ul>
      </div>
      <div className="detail__method">
        <h3 className="detail__method--label">Method</h3>
        <p className="detail__method--content">{recipe}</p>
      </div>
      <div className="detail__exit">
        <img
          className="detail__exit--icon"
          src="/images/icons/xmark-solid.svg"
          alt="Return to Dishes"
          onClick={() => navigate("/home")}
        ></img>
      </div>
    </StyledDetailDish>
  );
};
