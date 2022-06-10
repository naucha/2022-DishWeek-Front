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
    createdby: { name: "", username: "" },
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
    // newDishData.append("ingredient", inputIngredients);
    await dispatch(createDishThunk(newDishData));
    toast.success("Saving your recipe");
    resetForm();
    navigate("/home");
  };

  const [inputIngredients, setInputIngredients] = useState([
    { ingredient: "" },
  ]);

  const addIngredients = () => {
    let newIngredient = { ingredient: "" };
    setInputIngredients([...inputIngredients, newIngredient]);
  };

  return (
    <StyledForm>
      <h2>Add new recipe</h2>
      <p className="greeting">Someting new to save</p>
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
        <div className="container">
          <ul>
            {inputIngredients.map((ingredient, index) => {
              return (
                <li
                  className="ingredientLi"
                  key={`-ing${index} :${ingredient}`}
                >
                  <input
                    name="ingredients"
                    type="text"
                    id="ingredients"
                    placeholder="Ingredient"
                    value={formData.ingredients}
                    onChange={changeData}
                  ></input>
                </li>
              );
            })}
          </ul>
          <p onClick={addIngredients}>Add new ingredient</p>
        </div>
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
          // disabled={
          //   formData.name === "" ||
          //   formData.recipe === "" ||
          //   formData.image === "" ||
          //   formData.cookingtime === ""
          // }
        >
          Add Recipe
        </button>
      </form>
    </StyledForm>
  );
};

export default CreateForm;
