import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import { DishesList } from "./DishesList";

describe("Given a Disheslist component", () => {
  describe("When it's intantiated", () => {
    test("Then it should create one", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <DishesList />
          </Provider>
        </BrowserRouter>
      );

      const dishesList = screen.getByRole("list");
      expect(dishesList).toBeInTheDocument();
    });
  });
});
