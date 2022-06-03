import { rest } from "msw";
import { mockDish } from "./mocks";

const mockNewUser = {
  name: "Pepito",
  username: "Grillo",
  password: "0000",
};

export const handlers = [
  rest.post(
    `${process.env.REACT_APP_API_URL}user/register`,
    (req, res, ctx) => {
      return res(ctx.status(201), ctx.json(mockNewUser));
    }
  ),
  rest.post(`${process.env.REACT_APP_API_URL}user/login`, (req, res, ctx) => {
    return res(ctx.status(201), ctx.json(mockNewUser));
  }),

  rest.get(`${process.env.REACT_APP_API_URL}dishes/list`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockDish));
  }),
];
