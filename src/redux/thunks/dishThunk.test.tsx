import axios from "axios";
import { mockDish } from "../../mocks/mocks";
import { server } from "../../mocks/server";
import { loadDishActionCreator } from "../features/dishSlice";
import { getDishThunk } from "./dishThunk";

beforeEach(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Given a getdishthunk", () => {
  describe("When its invoked with and id", () => {
    test("Then it should call loadDishActionCreator", async () => {
      const dispatch = jest.fn();
      const expectedDish = mockDish[0];
      const expectedDishId = mockDish[0].id;

      axios.get = jest.fn().mockResolvedValue({
        data: { singleDish: mockDish[0] },
        status: 200,
      });

      const loadDishAction = loadDishActionCreator(expectedDish);

      const thunk = getDishThunk(expectedDishId);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(loadDishAction);
    });
  });
});
