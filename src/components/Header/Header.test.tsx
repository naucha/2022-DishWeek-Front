import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import { Header } from "./Header";

describe("Given a Header component", () => {
  describe("When it's invoked", () => {
    test("Then it should render a heading, and 3 list items", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Header />
          </Provider>
        </BrowserRouter>
      );

      const expectedHeading = screen.getByRole("heading", { level: 1 });

      const expectedListsItems = screen.getAllByRole("listitem");

      expect(expectedHeading).toBeInTheDocument();
      expect(expectedListsItems.length).toBe(3);
    });
  });
});
