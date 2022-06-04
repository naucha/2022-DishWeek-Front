import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import { LogInPage } from "./LoginPage";

describe("Given a Login Page", () => {
  describe("When it's instantiated", () => {
    test("Then it should render a Login Form", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            ∫
            <LogInPage />
          </Provider>
        </BrowserRouter>
      );

      const logInForm = screen.getByLabelText("Username");

      expect(logInForm).toBeInTheDocument();
    });
  });
});
