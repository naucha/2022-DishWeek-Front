import { ChangeEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { blankDishActionCreator } from "../../redux/features/dishSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks";
import { createDishThunk, updateThunk } from "../../redux/thunks/dishesThunks";
import { DishesData } from "../../types/types";
import StyledForm from "../styles/StyledForm";

const CreateForm = (): JSX.Element => {
  const dishState = useAppSelector((state) => state.dish);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const initialFormState: DishesData = {
    name: dishState ? dishState.name : "",
    image: dishState ? dishState.image : "",
    resume: dishState ? dishState.resume : "",
    recipe: dishState ? dishState.recipe : "",
    veggie: dishState ? dishState.veggie : "false",
    cookingtime: dishState ? dishState.cookingtime : "",
    ingredients: dishState ? dishState.ingredients : "",
    imagebackup: dishState ? dishState.imagebackup : "",
    createdby: dishState ? dishState.createdby : "",
    daysofweek: dishState ? dishState.daysofweek : [],
    id: dishState ? dishState.id : "",
  };

  const [formData, setFormData] = useState(initialFormState);

  // useEffect(() => {
  //   let ingredients = dishState.ingredients;
  //   if (ingredients) {
  //     const formatIngredients = ingredients
  //       .map((ingredient) => ingredient.replace("", "- "))
  //       .join("\r\n");
  //     console.log(formData.ingredients);
  //     console.log(dishState.ingredients);
  //     console.log(dishState);
  //   }
  // }, [dishState.ingredients, formData.ingredients]);

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

  const changeDataIngredients = (event: {
    target: { id: string; value: string };
  }) => {
    setFormData({
      ...formData,
      [(event.target as HTMLInputElement).id]: (
        event.target as HTMLInputElement
      ).value,
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
    newDishData.append("ingredient", formData.ingredients);
    newDishData.append("image", formData.image);

    console.log(formData.ingredients);
    formData.id
      ? dispatch(updateThunk(formData.id, formData))
      : dispatch(createDishThunk(newDishData));

    toast.success("Saving your recipe");
    resetForm();
    dispatch(blankDishActionCreator());
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
          onChange={changeDataIngredients}
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
