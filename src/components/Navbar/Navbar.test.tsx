import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import { Navbar } from "./Nabvar";

describe("Given a Header component", () => {
  describe("When it's invoked", () => {
    test("Then it should render a heading", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Navbar />
          </Provider>
        </BrowserRouter>
      );

      const expectedListsItems = screen.getAllByRole("listitem");

      expect(expectedListsItems.length).toBe(3);
    });
  });
});
