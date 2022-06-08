import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks";
import { createDishThunk } from "../../redux/thunks/dishesThunks";
import { DishesData } from "../../types/types";
import StyledForm from "../styles/StyledForm";

const CreateForm = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const blanckFields: DishesData = {
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

  const [formData, setFormData] = useState<DishesData>(blanckFields);
  const navigate = useNavigate();

  const changeData = (event: { target: { id: string; value: string } }) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const changeCheckBox = (event: {
    target: { id: string; checked: boolean };
  }) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.checked.toString(),
    });
  };

  const resetForm = () => {
    setFormData(blanckFields);
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const newDishData = new FormData();

    newDishData.append("id", formData.id);
    newDishData.append("name", formData.name);
    newDishData.append("resume", formData.resume);
    newDishData.append("recipe", formData.recipe);
    newDishData.append("cookingtime", formData.cookingtime);
    newDishData.append("cookingtime", formData.veggie);
    // newDishData.append("ingredient", formData.ingredients);

    await dispatch(createDishThunk(newDishData));
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

        <label htmlFor="textarea">Method</label>
        <textarea
          name="textarea"
          value={formData.recipe}
          onChange={changeData}
          autoComplete="none"
          className="textarea"
          placeholder="Step by step"
        ></textarea>

        <label htmlFor="dish">Image</label>
        <input
          type="file"
          id="dish"
          name="dish"
          accept="image/png ,image/jpeg"
        ></input>

        <label htmlFor="veggie" className="veggie">
          Veggie recipe?
          <input
            className="checkbox"
            type="checkbox"
            value={formData.veggie}
            onChange={changeCheckBox}
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
