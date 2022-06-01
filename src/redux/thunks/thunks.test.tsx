import { signUpUserThunk } from "./thunks";

beforeEach(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
describe("Given a SignupUserThunk function", () => {
  describe("When it's invoked with a user", () => {
    test("Then it should", () => {
      signUpUserThunk;
    });
  });
});
