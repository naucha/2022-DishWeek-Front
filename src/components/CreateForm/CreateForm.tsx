import { ChangeEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks";
import { createDishThunk, updateThunk } from "../../redux/thunks/dishesThunks";
import { DishesData } from "../../types/types";
import StyledForm from "../styles/StyledForm";

const CreateForm = (): JSX.Element => {
  const initialFormState: DishesData = {
    name: "",
    image: "",
    resume: "",
    recipe: "",
    veggie: "false",
    cookingtime: "",
    ingredients: [],
    imagebackup: "",
    createdby: "",
    daysofweek: [],
    id: "",
  };

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialFormState);

  const dishState = useAppSelector((state) => state.dish);
  const location = useLocation();

  useEffect(() => {
    if (dishState) {
      setFormData(dishState);
    }
  }, [dishState]);

  const changeData = (event: { target: { id: string; value: string } }) => {
    setFormData({
      ...formData,
      [(event.target as HTMLInputElement).id]:
        (event.target as HTMLInputElement).type === "checkbox"
          ? (event.target as HTMLInputElement).checked.toString()
          : (event.target as HTMLInputElement).value,
    });
  };

  const handleImageData = (event: ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.files?.[0] || "",
    });
  };

  const resetForm = () => {
    setFormData(initialFormState);
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const newDishData = new FormData();

    newDishData.append("name", formData.name);
    newDishData.append("resume", formData.resume);
    newDishData.append("recipe", formData.recipe);
    newDishData.append("cookingtime", formData.cookingtime);
    newDishData.append("veggie", formData.veggie);
    newDishData.append("ingredient", formData.ingredients[0]);
    newDishData.append("image", formData.image);

    formData.id
      ? dispatch(updateThunk(formData.id, formData))
      : dispatch(createDishThunk(newDishData));

    toast.success("Saving your recipe");
    resetForm();
    navigate("/home");
  };

  return (
    <StyledForm>
      <h2>
        {location.pathname === "/create" ? "Add new recipe" : "Update a recipe"}
      </h2>
      <p className="greeting">
        {location.pathname === "/create"
          ? "Something new to save"
          : "Something to improve"}
      </p>
      <form className="form" noValidate autoComplete="off" onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={changeData}
          placeholder="Enter a name of recipe"
        ></input>
        <label htmlFor="ingredients">Ingredients</label>

        <textarea
          name="ingredients"
          id="ingredients"
          placeholder={`${"- One Lemon \n- Mint \n- ..."}`}
          value={formData.ingredients}
          className="textarea"
          onChange={changeData}
        ></textarea>
        <p>Easy to read easy to cook, enter ingredients as shown. </p>

        <label htmlFor="cookingtime">Cooking time</label>
        <input
          aria-autocomplete="none"
          type="text"
          id="cookingtime"
          value={formData.cookingtime}
          onChange={changeData}
          placeholder="Cooking time"
        ></input>

        <label htmlFor="resume">Resume</label>
        <input
          aria-autocomplete="none"
          type="text"
          id="resume"
          value={formData.resume}
          onChange={changeData}
          placeholder="Little summary"
        ></input>

        <label htmlFor="recipe">Method</label>
        <textarea
          aria-autocomplete="none"
          id="recipe"
          name="recipe"
          value={formData.recipe}
          onChange={changeData}
          autoComplete="recipe"
          className="textarea"
          placeholder="Step by step"
        ></textarea>

        <label htmlFor="image">Image</label>
        <input
          type="file"
          id="image"
          name="image"
          autoComplete="off"
          onChange={handleImageData}
        ></input>

        <label htmlFor="veggie" className="veggie">
          Veggie recipe?
          <input
            id="veggie"
            className="checkbox"
            type="checkbox"
            value={formData.veggie}
            onChange={changeData}
          ></input>
        </label>

        <button className="button add-recipe" type="submit">
          {location.pathname === "/create" ? "Add Recipe" : "Save Changes"}
        </button>
      </form>
    </StyledForm>
  );
};

export default CreateForm;
