import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/store/hooks";
import { createDishThunk } from "../../redux/thunks/dishesThunks";
import { DishesData } from "../../types/types";
import StyledForm from "../styles/StyledForm";

const CreateForm = (): JSX.Element => {
  const initialDishState: DishesData = {
    id: "",
    name: "",
    image: "",
    resume: "",
    recipe: "",
    veggie: "false",
    cookingtime: "",
    ingredients: [],
    createdby: "",
    daysofweek: [],
  };

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialDishState);

  const changeData = (event: { target: { id: string; value: string } }) => {
    setFormData({
      ...formData,
      [(event.target as HTMLInputElement).id]:
        (event.target as HTMLInputElement).type === "checkbox"
          ? (event.target as HTMLInputElement).checked.toString()
          : (event.target as HTMLInputElement).value,
    });
  };

  const resetForm = () => {
    setFormData(initialDishState);
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const newDishData = new FormData();
    newDishData.append("id", formData.id);
    newDishData.append("name", formData.name);
    newDishData.append("resume", formData.resume);
    newDishData.append("recipe", formData.recipe);
    newDishData.append("cookingtime", formData.cookingtime);
    newDishData.append("veggie", formData.veggie);
    // newDishData.append("ingredient", formData.ingredients);

    await dispatch(createDishThunk(newDishData));
    toast.success("Saving your recipe");
    resetForm();
    navigate("/home");
  };

  return (
    <StyledForm>
      <h2>Add new recipe</h2>
      <p className="greeting">Someting new to save</p>
      <form className="form" noValidate autoComplete="off" onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          value={formData.name}
          onChange={changeData}
          placeholder="Enter a name of recipe"
        ></input>

        <label htmlFor="ingredients">Ingredients</label>
        <input
          id="ingredients"
          value={formData.ingredients}
          onChange={changeData}
          placeholder="Ingredient"
        ></input>

        <label htmlFor="cookingtime">Cooking time</label>
        <input
          id="cookingtime"
          value={formData.cookingtime}
          onChange={changeData}
          placeholder="Cooking time"
        ></input>

        <label htmlFor="resume">Resume</label>
        <input
          id="resume"
          value={formData.resume}
          onChange={changeData}
          placeholder="Little summary"
        ></input>

        <label htmlFor="recipe">Method</label>
        <textarea
          id="recipe"
          name="recipe"
          value={formData.recipe}
          onChange={changeData}
          autoComplete="recipe"
          className="textarea"
          placeholder="Step by step"
        ></textarea>

        <label htmlFor="newImage">Image</label>
        <input
          type="file"
          id="newImage"
          name="newImage"
          accept="image/png ,image/jpeg"
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

        <button
          className="button add-recipe"
          type="submit"
          disabled={
            formData.name === "" ||
            formData.recipe === "" ||
            formData.image === "" ||
            formData.cookingtime === ""
          }
          onChange={onSubmit}
        >
          {" "}
          Add Recipe
        </button>
      </form>
    </StyledForm>
  );
};

export default CreateForm;
