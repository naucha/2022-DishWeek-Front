import { render, screen } from "@testing-library/react";
import { debug } from "console";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import { Header } from "./Header";

describe("Given a Header component", () => {
  describe("When it's invoked when the user is not logged", () => {
    test("Then it should render a heading", () => {
      const userLogin = {
        type: "user/login",
        payload: {
          name: "pepito",
          username: "grillo",
          id: "ete",
          logged: true,
        },
      };

      store.dispatch(userLogin);

      render(
        <BrowserRouter>
          <Provider store={store}>
            <Header />
          </Provider>
        </BrowserRouter>
      );

      const expectedHeading = screen.getByRole("heading", { level: 1 });
      const expectedLogoutButton = screen.getByRole("button", {
        name: "Logout",
      });

      const expectedNavbar = screen.getByRole("navigation", { name: "" });

      expect(expectedNavbar).toBeInTheDocument();
      expect(expectedLogoutButton).toBeInTheDocument();
      expect(expectedHeading).toBeInTheDocument();
    });
  });

  describe("When it's invoked when the user is logged", () => {
    test("Then it should render a heading an a navbar", () => {
      const logout = {
        type: "user/logout",
      };

      store.dispatch(logout);

      render(
        <BrowserRouter>
          <Provider store={store}>
            <Header />
          </Provider>
        </BrowserRouter>
      );

      const expectedHeading = screen.getByRole("heading", { level: 1 });
      const expectedNavbar = screen.getByRole("navigation", { name: "" });

      const expectLi = screen.getByRole("link", { name: "Log In" });

      expect(expectLi).toBeInTheDocument();
      expect(expectedNavbar).toBeInTheDocument();
      expect(expectedHeading).toBeInTheDocument();
    });
  });
});
