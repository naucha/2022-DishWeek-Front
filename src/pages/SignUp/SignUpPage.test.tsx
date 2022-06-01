import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

import store from "../../redux/store/store";
import { SignUpPage } from "./SignUpPage";

describe("Given a Register Page", () => {
  describe("When it's instantiated", () => {
    test("Then it should render a register Form", () => {
      render(
        <Provider store={store}>
          <SignUpPage />
        </Provider>
      );

      const signUpform = screen.getByLabelText("Username");

      expect(signUpform).toBeInTheDocument();
    });
  });
});
