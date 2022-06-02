import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import LogInForm from "./LogInForm";

describe("Given a SignUpForm component", () => {
  describe("When it's invoked", () => {
    test("Then it should render 2 labels", () => {
      const expectedText = "Welcome back";

      render(
        <Provider store={store}>
          <LogInForm />
        </Provider>
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
        <Provider store={store}>
          <LogInForm />
        </Provider>
      );

      const inputField = screen.getByLabelText("Username");
      userEvent.type(inputField, typedText);
      expect(inputField).toHaveValue(typedText);
    });
  });

  describe("When the user doesn't write in all inputs", () => {
    test("Then the button are disabled", () => {
      render(
        <Provider store={store}>
          <LogInForm />
        </Provider>
      );

      const button = screen.getByRole("button", { name: "Log In" });

      expect(button).toBeDisabled();
    });
  });

  // describe("When the user write in all inputs", () => {
  //   test("Then the button are enabled", () => {
  //     const username = "Grillo";
  //     const password = "0000";

  //     render(
  //       <Provider store={store}>
  //         <LogInForm />
  //       </Provider>
  //     );
  //     const inputUsername = screen.getByLabelText("Username");
  //     const inputPassword = screen.getByLabelText("Password");
  //     const button = screen.getByRole("button", { name: "Log In" });

  //     userEvent.type(inputUsername, username);
  //     userEvent.type(inputPassword, password);

  //     expect(button).not.toBeDisabled();
  //   });
  // });
});
