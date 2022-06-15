import axios from "axios";
import { mockDish, mockDishes } from "../../mocks/mocks";
import { server } from "../../mocks/server";
import {
  deleteDishActionCreator,
  loadDishesActionCreator,
  updateDishActionCreator,
} from "../features/dishesSlice";
import {
  createDishThunk,
  deleteDishThunk,
  getDishesThunk,
  updateThunk,
} from "./dishesThunks";

beforeEach(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Given getDishesThunk", () => {
  describe("When its invoked with id", () => {
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

describe("Given createDishesThunk", () => {
  describe("When its invoked", () => {
    test("Then it should dispatch createaDishesActionCreator", async () => {
      const dispatch = jest.fn();
      const newDish = mockDish[0];

      const createDish = { ...newDish, id: "1212" };

      const response = { status: 201, data: createDish };

      axios.post = jest.fn().mockResolvedValue(response);

      const thunk = await createDishThunk(newDish);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given updateDishThunk", () => {
  describe("When its invoked", () => {
    test("Then it should dispatch updateDishActionCreator", async () => {
      const dispatch = jest.fn();
      const dish = mockDish[0];
      const dishId = mockDish[0].id;

      const updateDish = { ...dish };

      const response = { status: 201, data: updateDish };

      axios.put = jest.fn().mockResolvedValue(response);

      const expectedAction = updateDishActionCreator(updateDish);

      const thunk = await updateThunk(dishId, dish);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});
