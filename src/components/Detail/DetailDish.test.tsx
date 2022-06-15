import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import { DetailDish } from "./DetailDish";

describe("Given a DetailDish component", () => {
  describe("When it's invoked", () => {
    test("Then it should render 3 headings", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <DetailDish />
          </Provider>
        </BrowserRouter>
      );

      const expectedHeading2 = screen.getByRole("heading", { level: 2 });
      const expectedHeading3 = screen.getByRole("heading", { level: 3 });

      expect(expectedHeading2).toBeInTheDocument();
      expect(expectedHeading3).toBeInTheDocument();
    });
  });
});
