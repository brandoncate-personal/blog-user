// mocks/handlers.js

import { rest } from "msw";
import posts from "./data/posts"; // contains mock data for users

export const handlers = [
  rest.get("https://backend.dev/posts", (req, res, ctx) => {
    return res(ctx.json(posts));
  }),
  rest.get("https://backend.dev/post", (req, res, ctx) => {
    return res(ctx.json(posts[0]));
  })
];
