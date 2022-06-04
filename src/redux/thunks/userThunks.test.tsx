import { mockUserRegisterPage } from "../../mocks/mocks";
import { server } from "../../mocks/server";
import { loginUserThunk, registerUserThunk } from "./userThunks";

beforeEach(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

jest.mock("jwt-decode", () =>
  jest.fn().mockResolvedValue({ username: "Pepito", password: "Grillo" })
);

describe("Given the loginUserThunk", () => {
  describe("When invoked", () => {
    test("Then the dispatch function will be called", async () => {
      const dispatch = jest.fn();

      const thunk = loginUserThunk({
        username: "Pepito",
        password: "Grillo",
      });
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
describe("Given the registerThunk", () => {
  describe("When its invoked", () => {
    test("Then it should call dispatch", () => {
      const dispatch = jest.fn();

      const thunk = registerUserThunk(mockUserRegisterPage);

      thunk(dispatch());

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
