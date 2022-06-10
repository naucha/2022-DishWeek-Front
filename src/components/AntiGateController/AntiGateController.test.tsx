import { configureStore, createSlice } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { AntiGateController } from "./AntiGateController";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate,
}));

describe("Given a AntiGateController function", () => {
  describe("When it's invoked", () => {
    test("Then it should render a children when its not logged", () => {
      const mockUserSlice = createSlice({
        name: "user",
        initialState: { logged: "false" },
        reducers: {},
      });

      const mockStore = configureStore({
        reducer: { user: mockUserSlice.reducer },
      });

      render(
        <Provider store={mockStore}>
          <AntiGateController>
            <h1>Children</h1>
          </AntiGateController>
        </Provider>
      );

      const expectedHeading = screen.getByRole("heading", { name: "Children" });

      expect(expectedHeading).toBeInTheDocument();
    });
  });
});
