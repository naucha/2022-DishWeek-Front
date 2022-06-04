import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { mockUserRegisterPage } from "../../mocks/mocks";
import store from "../../redux/store/store";
import RegisterForm from "./RegisterForm";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given a Register component", () => {
  describe("When it's invoked", () => {
    test("Then it should render 3 labels and a button", () => {
      const expectedText = "Welcome";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterForm />
          </Provider>
        </BrowserRouter>
      );

      const expectedRenderedHeading = screen.getByRole("heading", { level: 2 });

      const inputName = screen.getByLabelText("Name");
      const inputUsername = screen.getByLabelText("Username");
      const inputPassword = screen.getByLabelText("Password");
      const button = screen.getByRole("button");

      expect(inputName).toBeInTheDocument();
      expect(inputUsername).toBeInTheDocument();
      expect(inputPassword).toBeInTheDocument();
      expect(button).toBeInTheDocument();
      expect(expectedRenderedHeading).toHaveTextContent(expectedText);
    });
  });

  describe("When the user types in the input field", () => {
    test("Then it should render the name given", () => {
      const typedText = "Pepito";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterForm />
          </Provider>
        </BrowserRouter>
      );

      const inputField = screen.getByLabelText("Name");
      userEvent.type(inputField, typedText);
      expect(inputField).toHaveValue(typedText);
    });
  });

  describe("When the user doesn't write in all inputs", () => {
    test("Then the button are disabled", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterForm />
          </Provider>
        </BrowserRouter>
      );

      const button = screen.getByRole("button", { name: "Sign Up" });

      expect(button).toBeDisabled();
    });
  });

  describe("When the user write in all inputs", () => {
    test("Then the button are enabled", () => {
      const name = "Pepito";
      const username = "Grillo";
      const password = "0000";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterForm />
          </Provider>
        </BrowserRouter>
      );
      const inputName = screen.getByLabelText("Name");
      const inputUsername = screen.getByLabelText("Username");
      const inputPassword = screen.getByLabelText("Password");
      const button = screen.getByRole("button", { name: "Sign Up" });

      userEvent.type(inputName, name);
      userEvent.type(inputUsername, username);
      userEvent.type(inputPassword, password);

      expect(button).toBeEnabled();
    });
  });
  describe("When the button is clicked", () => {
    test("Then dispatch the registerUserThunk", () => {
      const userData = mockUserRegisterPage;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterForm />
          </Provider>
        </BrowserRouter>
      );

      const inputName = screen.getByLabelText("Name");
      const inputUsername = screen.getByLabelText("Username");
      const inputPassword = screen.getByLabelText("Password");

      userEvent.type(inputName, userData.name);
      userEvent.type(inputUsername, userData.username);
      userEvent.type(inputPassword, userData.password);

      const button = screen.getByRole("button", { name: "Sign Up" });
      userEvent.click(button);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
