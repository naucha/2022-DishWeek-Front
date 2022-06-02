import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import { loginUserThunk } from "../../redux/thunks/thunks";
import LogInForm from "./LogInForm";

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

  // describe("When the username and the password fields are fill and the button is clicked", () => {
  //   test("Then it should renfer the fields empty", () => {
  //     const inputText = "Pepito";

  //     render(
  //       <BrowserRouter>
  //         <Provider store={store}>
  //           <LogInForm />
  //         </Provider>
  //       </BrowserRouter>
  //     );

  //     userEvent.type(screen.getByLabelText("Username"), inputText);
  //     userEvent.type(screen.getByLabelText("Password"), inputText);

  //     const button = screen.getByRole("button");

  //     userEvent.click(button);

  //     expect(screen.getByLabelText("Username")).toHaveValue("");
  //     expect(screen.getByLabelText("Password")).toHaveValue("");
  //   });
  // });
});
