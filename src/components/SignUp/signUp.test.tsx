import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import SignUpForm from "./SignUp";

describe("Given a SignUpForm component", () => {
  describe("When it's invoked", () => {
    test("Then it should render 3 labels", () => {
      const expectedText = "Welcome";

      render(
        <Provider store={store}>
          <SignUpForm />
        </Provider>
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
        <Provider store={store}>
          <SignUpForm />
        </Provider>
      );

      const inputField = screen.getByLabelText("Name");
      userEvent.type(inputField, typedText);
      expect(inputField).toHaveValue(typedText);
    });
  });

  describe("When the user doesn't write in all inputs", () => {
    test("Then the button are disabled", () => {
      render(
        <Provider store={store}>
          <SignUpForm />
        </Provider>
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
        <Provider store={store}>
          <SignUpForm />
        </Provider>
      );
      const inputName = screen.getByLabelText("Name");
      const inputUsername = screen.getByLabelText("Username");
      const inputPassword = screen.getByLabelText("Password");
      const button = screen.getByRole("button", { name: "Sign Up" });

      userEvent.type(inputName, name);
      userEvent.type(inputUsername, username);
      userEvent.type(inputPassword, password);

      expect(button).not.toBeDisabled();
    });
  });
});
