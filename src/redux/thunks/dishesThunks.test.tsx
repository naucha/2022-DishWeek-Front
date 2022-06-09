import { mockDish, mockDishes } from "../../mocks/mocks";
import { server } from "../../mocks/server";
import {
  deleteDishActionCreator,
  loadDishesActionCreator,
} from "../features/dishesSlice";
import { deleteDishThunk, getDishesThunk } from "./dishesThunks";

beforeEach(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Given getDishesThunk", () => {
  describe("When its invoked", () => {
    test("Then it should dispatch loadDishesActionCreator", async () => {
      const dispatch = jest.fn();
      const action = loadDishesActionCreator(mockDish);

      const thunk = getDishesThunk();

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(action);
    });
  });
});

describe("Given deletDishesThunk,", () => {
  describe("When its invoked", () => {
    test("Then it should dispatch deleteDishesActionCreator", async () => {
      const dispatch = jest.fn();
      const action = deleteDishActionCreator(mockDishes[1].id);

      const thunk = deleteDishThunk(mockDishes[1].id);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(action);
    });
  });
});
