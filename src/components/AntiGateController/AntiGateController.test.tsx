import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { localStorageMock } from "../../mocks/mockLocalStorage";
import store from "../../redux/store/store";
import { AntiGateController } from "./AntiGateController";

jest.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate,
}));

const gettingUpLocalStorage = localStorageMock;

const saveToStorage = (value: string) => {
  window.localStorage.setItem("token", value);
};

Object.defineProperty(window, "localStorage", {
  value: gettingUpLocalStorage,
});

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate,
}));

describe("Given a AntiGateController function", () => {
  describe("When it's invoked", () => {
    test("Then it should render a children when its logged", () => {
      render(
        <Provider store={store}>
          <AntiGateController>
            <h1>Children</h1>
          </AntiGateController>
        </Provider>
      );

      const expectedHeading = screen.getByRole("heading", { name: "Children" });

      expect(expectedHeading).toBeInTheDocument();
    });
  });
  describe("When have token", () => {
    saveToStorage(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlBhbSIsInBhc3N3b3JkIjoiJDJiJDEwJGpaSG5lQ00vUnp5QmwvSEg3VmxKUWV3cFlLL090L3NjWDVXanMyT015T2IvaC5Fa0xRS09PIiwiaWF0IjoxNjU0ODc5MDExfQ.5LBGMQ95wCsOZlkMk01WxFMOu9GqDepMwCRlN1HgjnU"
    );
    test("Then it should render a children when it logged", () => {
      const userLogin = {
        type: "user/login",
        payload: {
          name: "Pam Beesly",
          username: "Pam",
          id: "62a606049e307a7e839e88fa",
          logged: true,
        },
      };

      render(
        <Provider store={store}>
          <AntiGateController>
            <h1>Children</h1>
          </AntiGateController>
        </Provider>
      );

      store.dispatch(userLogin);

      expect(mockNavigate).toHaveBeenCalledWith("/");
    });
  });
});
