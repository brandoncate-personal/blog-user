import * as Factory from "factory.ts";
import faker from "faker";
import { Post } from "../../app/services/posts";

const PostsMock = Factory.Sync.makeFactory<Post>({
  _id: Factory.each(() => faker.random.uuid()),
  id: Factory.each(() => faker.random.uuid()),
  title: Factory.each(() => faker.name.title()),
  summary: Factory.each(() => faker.lorem.words(10)),
  content: Factory.each(() => faker.lorem.paragraphs(15)),
  published_at: Factory.each(() => faker.date.recent().toISOString()),
  createdAt: Factory.each(() => faker.date.recent().toISOString()),
  updatedAt: Factory.each(() => faker.date.recent().toISOString()),
  __v: Factory.each(() => faker.random.number())
});

export default PostsMock.buildList(10);
