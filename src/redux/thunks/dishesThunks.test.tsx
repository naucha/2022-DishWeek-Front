import { mockDish } from "../../mocks/mocks";
import { server } from "../../mocks/server";
import { loadDishesActionCreator } from "../features/dishesSlice";
import { getDishesThunk } from "./dishesThunks";

beforeEach(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Given getDishesThunk", () => {
  describe("When its invoked with", () => {
    test("Then it should dispatch loadDishesActionCreator", async () => {
      const dispatch = jest.fn();
      const action = loadDishesActionCreator(mockDish);

      const thunk = getDishesThunk();

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(action);
    });
  });
});
