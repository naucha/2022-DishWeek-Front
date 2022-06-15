import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import { Dish } from "./Dish";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given a Dish component", () => {
  describe("When it's rendered when is createdby the user logged", () => {
    test("Then it should rendera heading, button to delete and button to edit", () => {
      const data = {
        id: "123",
        name: "Grogu a la plancha",
        veggie: "false",
        ingredients: "pep",
        image: "pep",
        resume: "pep",
        recipe: "pep",
        cookingtime: "12h",
        daysofweek: ["lunes"],
        createdby: "Grillo",
        imagebackup: "pep2.png",
      };

      const userLogin = {
        type: "user/login",
        payload: {
          username: "Grillo",
          password:
            "$2b$10$8k1qFMKfyP3WzFyhbHOHh.VbjCZ7cRU49Iqe3MCKcsUqJlRc02qy.",
          iat: 1655293518,
        },
      };

      store.dispatch(userLogin);

      render(
        <BrowserRouter>
          <Provider store={store}>
            <Dish dishes={data} />
          </Provider>
        </BrowserRouter>
      );

      const expectName = screen.getByRole("heading", { level: 2 });

      const clickImage = screen.getByAltText("Grogu a la plancha");
      userEvent.click(clickImage);

      const iconDelete = screen.getByAltText("Button for remove recipes");
      userEvent.click(iconDelete);

      const iconEdit = screen.getByAltText("Button for edit recipes");
      userEvent.click(iconEdit);
      expect(mockedUsedNavigate).toBeCalledWith("/edit/123");

      expect(mockDispatch).toHaveBeenCalled();
      expect(mockedUsedNavigate).toBeCalledWith("/detail/123");
      expect(expectName).toBeInTheDocument();
    });
  });
});
