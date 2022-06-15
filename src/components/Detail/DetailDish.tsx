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
        <img
          className="detai__image__recipe"
          alt={name}
          src={imagebackup}
          style={{ width: 380, height: "auto" }}
        />
      </div>
      <div className="detail__info">
        <h2 className="detail__info__heading">{name}</h2>
        <p className="detail__info__cookingtime">{cookingtime}</p>
      </div>
      <div className="detail__icons">
        {veggie === "true" ? (
          <p className="detail__icons__option">Veggie</p>
        ) : (
          <p className="detail__icons__option">No Veggie</p>
        )}
        <img
          className="detail__icons__add"
          src="/images/icons/circle-plus-solid.svg"
          alt="Button for add recipes to MyWeek"
          style={{ width: 60, height: 60 }}
        />
      </div>
      <div className="detail__main">
        <ul className="detail__main__list">
          <li className="detail__list__ingredient">{ingredients}</li>
        </ul>
      </div>
      <div className="detail__method">
        <h3 className="detail__method__label">Method</h3>
        <p className="detail__method__content">{recipe}</p>
      </div>
      <div className="detail__exit">
        <img
          className="detail__exit__icon"
          src="/images/icons/xmark-solid.svg"
          alt="Return to Dishes"
          width={60}
          height={60}
          style={{ width: 60, height: 60 }}
          onClick={() => navigate("/home")}
        ></img>
      </div>
    </StyledDetailDish>
  );
};
