import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import store from "../../redux/store/store";

import LogInForm from "./LogInForm";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

jest.mock("../../redux/thunks/userThunks", () => ({
  loginUserThunk: jest.fn(),
}));

describe("Given a LogInForm component", () => {
  describe("When it's invoked", () => {
    test("Then it should render 2 labels", () => {
      const expectedText = "Welcome";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <LogInForm />
          </Provider>
        </BrowserRouter>
      );

      const expectedRenderedHeading = screen.getByRole("heading", { level: 2 });

      const inputUsername = screen.getByLabelText("Username");
      const inputPassword = screen.getByLabelText("Password");
      const button = screen.getByRole("button");

      expect(inputUsername).toBeInTheDocument();
      expect(inputPassword).toBeInTheDocument();
      expect(button).toBeInTheDocument();
      expect(expectedRenderedHeading).toHaveTextContent(expectedText);
    });
  });

  describe("When the user types in the input field", () => {
    test("Then it should render the username given", () => {
      const typedText = "Pepito";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <LogInForm />
          </Provider>
        </BrowserRouter>
      );

      const inputField = screen.getByLabelText("Username");
      userEvent.type(inputField, typedText);
      expect(inputField).toHaveValue(typedText);
    });
  });

  describe("When the user doesn't write in all inputs", () => {
    test("Then the button are disabled", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <LogInForm />
          </Provider>
        </BrowserRouter>
      );

      const button = screen.getByRole("button", { name: "Log In" });

      expect(button).toBeDisabled();
    });
  });

  describe("When the username and the password fields are fill when the button is clicked", () => {
    test("Then it dispatch", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <LogInForm />
          </Provider>
        </BrowserRouter>
      );
      const userNameInput = screen.getByLabelText("Username");
      const passwordInput = screen.getByLabelText("Password");

      userEvent.type(userNameInput, "Pepito");
      userEvent.type(passwordInput, "Grillo");

      const button = screen.getByRole("button", { name: "Log In" });

      userEvent.click(button);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
