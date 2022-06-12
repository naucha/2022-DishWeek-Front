import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import CreateForm from "./CreateForm";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

jest.mock("../../redux/thunks/dishesThunks", () => ({
  createDishThunk: jest.fn(),
}));

describe("Given a Create form component", () => {
  describe("When it's invoked", () => {
    test("Then it should render a heading, 7 labels and button", async () => {
      const expectedText = "Add new recipe";
      render(
        <BrowserRouter>
          <Provider store={store}>
            <CreateForm />
          </Provider>
        </BrowserRouter>
      );
      const expectedRenderedHeading = screen.getByRole("heading", { level: 2 });
      const expectLabelName = screen.getByLabelText("Name");
      const expectLabelResume = screen.getByLabelText("Resume");
      const expectLabelImage = screen.getByLabelText("Image");
      const expectLabelIngredients = screen.getByLabelText("Ingredients");
      const expectLabelMethod = screen.getByLabelText("Method");
      const expectLabelVeggie = screen.getByLabelText("Veggie recipe?");

      const button = screen.getByRole("button");

      expect(expectedRenderedHeading).toHaveTextContent(expectedText);
      expect(expectLabelName).toBeInTheDocument();
      expect(expectLabelIngredients).toBeInTheDocument();
      expect(expectLabelResume).toBeInTheDocument();
      expect(expectLabelMethod).toBeInTheDocument();
      expect(expectLabelImage).toBeInTheDocument();
      expect(expectLabelVeggie).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  });

  describe("When the button is clicked", () => {
    test("Then it dispatch createDishThunk", async () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <CreateForm />
          </Provider>
        </BrowserRouter>
      );
      const expectedFormData = {
        name: "Salmon",
        resume: "Salmon Salmon",
        recipe: "Salmon SalmonSalmonSalmon",
        cookingtime: "30min",
        veggie: "true",
        ingredients: "Salmon",
        image: "salmon.jpeg",
      };

      const expectLabelName = screen.getByLabelText("Name");
      const expectLabelResume = screen.getByLabelText("Resume");
      const expectLabelRecipe = screen.getByLabelText("Method");
      const expectLabelCookintime = screen.getByLabelText("Cooking time");
      const expectLabelIngredients = screen.getByLabelText("Ingredients");
      const expectLabeVeggie = screen.getByLabelText("Veggie recipe?");
      const expectLabelImage = screen.getByLabelText("Image");

      userEvent.type(expectLabelName, expectedFormData.name);
      userEvent.type(expectLabelResume, expectedFormData.resume);
      userEvent.type(expectLabelRecipe, expectedFormData.recipe);
      userEvent.type(expectLabelCookintime, expectedFormData.cookingtime);
      userEvent.type(expectLabelIngredients, expectedFormData.ingredients);
      userEvent.type(expectLabeVeggie, expectedFormData.veggie);
      userEvent.type(expectLabelImage, expectedFormData.image);

      const button = screen.getByText("Add Recipe");
      userEvent.click(button);

      await waitFor(() => {
        expect(mockDispatch).toHaveBeenCalled();
      });
    });
  });
});
