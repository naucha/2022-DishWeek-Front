import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import { LandingPage } from "./LandingPage";

describe("Given a Landing Page", () => {
  describe("When it's instantiated", () => {
    test("Then it should render two buttons", () => {
      render(
        <Provider store={store}>
          <LandingPage />
        </Provider>
      );

      const buttonLoginText = "Log In";
      const buttonAccountText = "Create an account";

      const buttonLogIn = screen.getByRole("button", { name: buttonLoginText });
      const buttonAccount = screen.getByRole("button", {
        name: buttonAccountText,
      });

      expect(buttonLogIn).toBeInTheDocument();
      expect(buttonAccount).toBeInTheDocument();
    });
  });
});
