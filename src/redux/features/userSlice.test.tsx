import { mockUserRegister } from "../../mocks/mocksUser";
import userSlice, { logInActionCreator } from "./userSlice";

describe("Given a user login reducer", () => {
  describe("When it receives an initial state status and a login action with the login user credentials", () => {
    test("Then it should return the new user state with the received user credentials and the logged property true", () => {
      const initialState = {
        name: "",
        username: "",
        id: "",
        logged: false,
      };

      const userInfo = mockUserRegister;

      const expectedState = {
        name: mockUserRegister.name,
        username: mockUserRegister.username,
        id: mockUserRegister.id,
        logged: true,
      };

      const loginAction = logInActionCreator(userInfo);
      const userStatus = userSlice(initialState, loginAction);

      expect(userStatus).toEqual(expectedState);
    });
  });
});
