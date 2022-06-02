import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import store from "../../redux/store/store";
import { RegisterPage } from "./RegisterPage";

describe("Given a Register Page", () => {
  describe("When it's instantiated", () => {
    test("Then it should render a register Form", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterPage />
          </Provider>
        </BrowserRouter>
      );

      const registerForm = screen.getByLabelText("Username");

      expect(registerForm).toBeInTheDocument();
    });
  });
});
