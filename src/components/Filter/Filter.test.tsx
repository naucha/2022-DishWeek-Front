import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import { Filter } from "./Filter";

describe("Given a Header component", () => {
  describe("When it's invoked", () => {
    test("Then it should render a link with teh text 'Veggy", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Filter />
          </Provider>
        </BrowserRouter>
      );

      const link = screen.getByRole("link", { name: "Veggy" });

      expect(link).toBeInTheDocument();
    });
  });
});
