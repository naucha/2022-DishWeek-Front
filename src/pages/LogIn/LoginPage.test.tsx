import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import { LogInPage } from "./LoginPage";

describe("Given a Register Page", () => {
  describe("When it's instantiated", () => {
    test("Then it should render a register Form", () => {
      render(
        <Provider store={store}>
          <LogInPage />
        </Provider>
      );

      const logInForm = screen.getByLabelText("Username");

      expect(logInForm).toBeInTheDocument();
    });
  });
});
