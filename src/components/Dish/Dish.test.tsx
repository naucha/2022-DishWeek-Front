import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import { Dish } from "./Dish";

describe("Given a Dish component", () => {
  describe("When it's rendered", () => {
    test("Then it should render two buttons", () => {
      const data = {
        id: "123",
        name: "pep",
        veggy: true,
        ingredients: ["pep"],
        image: "pep",
        resume: "pep",
        recipe: "pep",
        cookingtime: "12h",
        daysofweek: ["lunes"],
        createdby: "pep",
      };

      render(
        <BrowserRouter>
          <Provider store={store}>
            <Dish dishes={data} />
          </Provider>
        </BrowserRouter>
      );

      const expectName = screen.getByRole("heading", { level: 3 });

      expect(expectName).toBeInTheDocument();
    });
  });
});
