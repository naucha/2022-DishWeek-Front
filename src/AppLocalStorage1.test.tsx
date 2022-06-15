import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { localStorageMock } from "./mocks/mockLocalStorage";
import store from "./redux/store/store";

const gettingUpLocalStorage = localStorageMock;

const saveToStorage = (value: string) => {
  window.localStorage.setItem("token", value);
};

Object.defineProperty(window, "localStorage", {
  value: gettingUpLocalStorage,
});

describe("Given a App component", () => {
  describe("When its invoked with a login Page and with a real token in a localStorage", () => {
    saveToStorage(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlBhbSIsInBhc3N3b3JkIjoiJDJiJDEwJGpaSG5lQ00vUnp5QmwvSEg3VmxKUWV3cFlLL090L3NjWDVXanMyT015T2IvaC5Fa0xRS09PIiwiaWF0IjoxNjU0ODc5MDExfQ.5LBGMQ95wCsOZlkMk01WxFMOu9GqDepMwCRlN1HgjnU"
    );
    test("Then it should dispacth a getDishesThunk decoding token and dispatch loginActionCreator", () => {
      const tokenData = {
        user: {
          name: undefined,
          username: "Pam",
          id: undefined,
          logged: true,
        },
        dishes: [],
        dish: {
          id: "",
          name: "",
          veggie: "",
          ingredients: "",
          image: "",
          resume: "",
          recipe: "",
          cookingtime: "",
          daysofweek: [],
          createdby: "",
          imagebackup: "",
        },
      };

      render(
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>
      );

      const getStoreActionState = store.getState();

      expect(window.localStorage.getItem("token")).toBe(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlBhbSIsInBhc3N3b3JkIjoiJDJiJDEwJGpaSG5lQ00vUnp5QmwvSEg3VmxKUWV3cFlLL090L3NjWDVXanMyT015T2IvaC5Fa0xRS09PIiwiaWF0IjoxNjU0ODc5MDExfQ.5LBGMQ95wCsOZlkMk01WxFMOu9GqDepMwCRlN1HgjnU"
      );
      expect(getStoreActionState).toStrictEqual(tokenData);
    });
  });
});
