import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/store/hooks";
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
    veggie: false,
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
      [event.target.id]: event.target.checked,
    });
    console.log("checkbox");
  };

  const resetForm = () => {
    setFormData(blanckFields);
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await dispatch(createDishThunk(formData));

    console.log("checkbox");
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
          placeholder="Enter a resume of recipe"
        ></input>
        <label htmlFor="ingredients">Ingredients</label>
        <input
          id="ingredients"
          value={formData.resume}
          onChange={changeData}
          placeholder="Enter a ingredients of recipe"
        ></input>
        <label htmlFor="textarea">Recipe</label>
        <textarea
          name="textarea"
          value={formData.recipe}
          onChange={changeData}
          autoComplete="none"
          className="textarea"
        >
          Enter your recipe
        </textarea>
        <label htmlFor="veggy">
          Veggie recipe?
          <input
            className="checkbox"
            type="checkbox"
            checked={formData.veggie}
            onChange={changeCheckBox}
          ></input>
        </label>
        <button
          className="button"
          type="submit"
          disabled={
            formData.name === "" ||
            formData.recipe === "" ||
            formData.image === "" ||
            formData.cookingtime === ""
          }
        >
          {" "}
          Add Recipe
        </button>
      </form>
    </StyledForm>
  );
};

export default CreateForm;
