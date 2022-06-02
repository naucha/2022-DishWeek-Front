import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import TestRenderer from "react-test-renderer";
import store from "../../redux/store/store";
import LogoComplete from "./LogoComplete";

describe("Given a LogoComplete", () => {
  describe("When it's rendered", () => {
    test("Then it should match this snapshot", () => {
      const LogoCompleteTest = TestRenderer.create(
        <BrowserRouter>
          <Provider store={store}>
            <LogoComplete />
          </Provider>
        </BrowserRouter>
      );

      expect(LogoCompleteTest).toMatchSnapshot();
    });
  });
});
