import { mockDish } from "../../mocks/mocks";
import { DishesData } from "../../types/types";
import dishSlice, { loadDishActionCreator } from "./dishSlice";

describe("Given a dishSlice reduecer", () => {
  describe("When receives and initial state and a loadDishActionCreator", () => {
    test("Then it should return a new state with the dish receives", () => {
      const initialState: DishesData = {
        id: "",
        name: "",
        veggie: "",
        ingredients: [],
        image: "",
        resume: "",
        recipe: "",
        cookingtime: "",
        daysofweek: [],
        createdby: "",
        imagebackup: "",
      };
      const dish = mockDish[0];
      const expectDish = { ...dish };
      const loadDish = loadDishActionCreator(dish);

      const dishStatus = dishSlice(initialState, loadDish);

      expect(dishStatus).toEqual(expectDish);
    });
  });
});
