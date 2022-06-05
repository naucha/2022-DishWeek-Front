import { configureStore, createSlice } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import GateController from "./GateController";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate,
}));

describe("Given a GateController function", () => {
  describe("When it's invoked", () => {
    test("Then it should navigate to logIn if the user is not logged", () => {
      const mockUserSlice = createSlice({
        name: "user",
        initialState: { logged: "" },
        reducers: {},
      });

      const mockStore = configureStore({
        reducer: { user: mockUserSlice.reducer },
      });
      render(
        <Provider store={mockStore}>
          <GateController>
            <h1>Children</h1>
          </GateController>
        </Provider>
      );

      expect(mockNavigate).toHaveBeenCalledWith("/login");
    });

    test("Then it should render his children if the user is logged", () => {
      const mockUserSlice = createSlice({
        name: "user",
        initialState: { logged: true },
        reducers: {},
      });

      const mockStore = configureStore({
        reducer: { user: mockUserSlice.reducer },
      });

      render(
        <Provider store={mockStore}>
          <GateController>
            <h1>Children</h1>
          </GateController>
        </Provider>
      );

      const expectedHeading = screen.getByRole("heading", { name: "Children" });

      expect(expectedHeading).toBeInTheDocument();
    });
  });
});
