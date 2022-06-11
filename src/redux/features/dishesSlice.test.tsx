import { mockDish, mockDishes } from "../../mocks/mocks";
import { DishesData } from "../../types/types";
import dishesSlice, {
  createDishActionCreator,
  deleteDishActionCreator,
  loadDishesActionCreator,
} from "./dishesSlice";

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

describe("Given a deleteDishes reducer", () => {
  describe("When receives a initial with 2 dishes", () => {
    test("Then it should return a new state with only one of them", () => {
      const expectedLength = 1;
      const initialState = mockDishes;

      const deleteAction = deleteDishActionCreator(mockDishes[1].id);
      const dishes = dishesSlice(initialState, deleteAction);

      expect(dishes).toHaveLength(expectedLength);
    });
  });
});

describe("Given a createDishes reducer", () => {
  describe("When receives a newDish if we th state only have one", () => {
    test("Then it should return a new state with the newDish init", () => {
      const expectedLength = 2;
      const initialState = mockDish;

      const newDish = {
        id: "eqwa",
        name: "arroz",
        veggie: "true",
        ingredients: "cebolla",
        image: "image",
        resume: "Poner a hervir...",
        recipe:
          "El secreto de estos macarrones es el sofrito. No tengas prisa en realizarlo y te quedará de fábula. Pocha la cebolla lentamente hasta que quede bien caramelizada. Entonces, agrega los pimientos, el ajo, el tomate… y, por último, las setas, previamente",
        cookingtime: "2h",
        daysofweek: [],
        createdby: "Grillo",
      };

      const createAction = createDishActionCreator(newDish);

      const dishes = dishesSlice(initialState, createAction);

      expect(dishes).toHaveLength(expectedLength);
    });
  });
});
