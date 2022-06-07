import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { localStorageMock } from "../../mocks/mockLocalStorage";
import store from "../../redux/store/store";
import { Header } from "./Header";

const token = (value: string) => {
  window.localStorage.setItem("token", value);
};

Object.defineProperty(window, "localStorage", {
  value: localStorageMock,
});

describe("Given a Header component", () => {
  describe("When its invoked with a logged user that have token", () => {
    test("Then it should render logout button and user can dispatch logoutAction", async () => {
      const userLogin = {
        type: "user/login",
        payload: {
          name: "pepito",
          username: "grillo",
          id: "as54",
          logged: true,
        },
      };

      store.dispatch(userLogin);
      token("123321321421feq");

      render(
        <BrowserRouter>
          <Provider store={store}>
            <Header />
          </Provider>
        </BrowserRouter>
      );

      const expectedLogoutState = {
        user: {
          name: "",
          username: "",
          id: "",
          logged: false,
        },
        dishes: [],
      };

      const expectButton = screen.getByRole("button", { name: "Logout" });
      expect(expectButton).toBeInTheDocument();
      userEvent.click(expectButton);

      const getState = store.getState();
      console.log(window.localStorage.getItem("token"));
      expect(window.localStorage.getItem("token")).toBe(undefined);

      expect(getState).toStrictEqual(expectedLogoutState);
    });
  });
});
