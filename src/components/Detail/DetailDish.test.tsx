import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import { DetailDish } from "./DetailDish";

describe("Given a DetailDish component", () => {
  describe("When it's invoked", () => {
    test("Then it should render a list of 3 item", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <DetailDish />
          </Provider>
        </BrowserRouter>
      );

      const expectedHeading = screen.getByRole("heading", { level: 2 });
      const expectedHeading2 = screen.getByRole("heading", { level: 3 });

      expect(expectedHeading).toBeInTheDocument();
      expect(expectedHeading2).toBeInTheDocument();
    });
  });
});
