import { mockDishes } from "../../mocks/mocks";
import { DishesData } from "../../types/types";
import dishesSlice, { loadDishesActionCreator } from "./dishesSlice";

describe("Given a loadDishes reducer", () => {
  describe("When receives a initial state and a loadActionCreator with dishes", () => {
    test("Then it should return a new state with the dishes received", () => {
      const initialState: DishesData[] = [];
      const dishesList = mockDishes;

      const expectedLists = [...mockDishes];

      const loadDishes = loadDishesActionCreator(dishesList);
      const dishesStatus = dishesSlice(initialState, loadDishes);

      expect(dishesStatus).toEqual(expectedLists);
    });
  });
});
