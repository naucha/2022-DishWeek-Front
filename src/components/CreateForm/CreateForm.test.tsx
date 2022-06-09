import { render, screen } from "@testing-library/react";
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
    test("Then it should render a heading, 7 labels", () => {
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
  describe("When the user types in the inputs fields", () => {
    test("Then it should render the name given", () => {
      const typedName = "Salmon";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <CreateForm />
          </Provider>
        </BrowserRouter>
      );

      const inputField = screen.getByLabelText("Name");
      userEvent.type(inputField, typedName);

      expect(inputField).toHaveValue(typedName);
    });
    describe("When the user doesn't write in all inputs", () => {
      test("Then the button are disabled", () => {
        render(
          <BrowserRouter>
            <Provider store={store}>
              <CreateForm />
            </Provider>
          </BrowserRouter>
        );

        const button = screen.getByRole("button", { name: "Add Recipe" });

        expect(button).toBeDisabled();
      });
    });
  });
});
