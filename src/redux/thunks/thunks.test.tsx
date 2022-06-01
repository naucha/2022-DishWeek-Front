import { server } from "../mocks/server";
import { signUpUserThunk } from "./thunks";

beforeEach(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Given a SignupUserThunk function", () => {
  describe("When it's invoked with a user", () => {
    test("Then it should POST with the user Info", async () => {
      const userData = {
        name: "Pepito",
        username: "Grillo",
        password: "0000",
        id: "1234",
      };

      const dispatch = jest.fn();

      const thunk = signUpUserThunk(userData);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
