import { getAll } from './posts'

test("get all posts", () => {
  console.log(getAll())
  expect(getAll()).toBeTruthy();
});

test("get single post by id", () => {
  const id = "abc123"

  console.log(get(id))
  expect(get(id)).toBeTruthy();
});