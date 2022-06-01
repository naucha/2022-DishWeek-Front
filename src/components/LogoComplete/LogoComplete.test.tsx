import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import LogoComplete from "./LogoComplete";

describe("Given a Logo complete componente", () => {
  describe("When it's invoked", () => {
    test("Then it should render a heading, and image", () => {
      render(
        <Provider store={store}>
          <LogoComplete />
        </Provider>
      );

      const expectedHeading = screen.getByRole("heading", { level: 1 });
      const expectedImage = screen.getByRole("img");

      expect(expectedHeading).toBeInTheDocument();
      expect(expectedImage).toBeInTheDocument();
    });
  });
});
