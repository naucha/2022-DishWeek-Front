import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { localStorageMock } from "../../mocks/mockLocalStorage";
import store from "../../redux/store/store";
import { Header } from "./Header";

const gettingUpLocalStorage = localStorageMock;

const saveToStorage = (value: string) => {
  window.localStorage.setItem("token", value);
};

Object.defineProperty(window, "localStorage", {
  value: gettingUpLocalStorage,
});

describe.skip("Given a Header component", () => {
  describe("When its invoked with a logged user that have token", () => {
    saveToStorage(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlBhbSIsInBhc3N3b3JkIjoiJDJiJDEwJGpaSG5lQ00vUnp5QmwvSEg3VmxKUWV3cFlLL090L3NjWDVXanMyT015T2IvaC5Fa0xRS09PIiwiaWF0IjoxNjU0ODc5MDExfQ.5LBGMQ95wCsOZlkMk01WxFMOu9GqDepMwCRlN1HgjnU"
    );
    test("Then it should render logout button and user can dispatch logoutAction", async () => {
      const userLogin = {
        type: "user/login",
        payload: {
          name: "Pam Beesly",
          username: "Pam",
          id: "62a606049e307a7e839e88fa",
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

      const expectButton = screen.getByRole("button", { name: "Logout" });
      userEvent.click(expectButton);
      expect(expectButton).not.toBeInTheDocument();
    });
  });
});
