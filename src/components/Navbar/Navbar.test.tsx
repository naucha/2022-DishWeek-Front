import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import { Navbar } from "./Nabvar";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given a Navbar component", () => {
  describe("When it's invoked", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Navbar />
        </Provider>
      </BrowserRouter>
    );
    test("Then it should render a list of 3 item", () => {
      const expectedRegister = screen.getByRole("link", {
        name: /register/i,
      });

      userEvent.click(expectedRegister);
      const expectedListsItems = screen.getAllByRole("listitem");

      expect(mockDispatch).toHaveBeenCalled();
      expect(expectedListsItems.length).toBe(3);
    });
  });
});
