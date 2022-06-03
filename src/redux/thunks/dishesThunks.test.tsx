import { mockDishes } from "../../mocks/mocksUser";
import { server } from "../../mocks/server";
import { loadDishesActionCreator } from "../features/dishesSlice";
import { getDishesThunk } from "./dishesThunks";

beforeEach(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Given getDishesThunk", () => {
  describe("When its invoked", () => {
    test("Then it should dispatch loadDishesActionCreator", async () => {
      const dispatch = jest.fn();

      const loadAction = loadDishesActionCreator(mockDishes);

      const thunk = getDishesThunk();

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(loadAction);
    });
  });
});
