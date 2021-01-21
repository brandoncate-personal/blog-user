export interface Post {
  _id: string;
  id: string;
  title: string;
  summary: string;
  content: string;
  published_at: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const STRAPI_BASE_URL = 'http://cms.thedummydogo.com'
const POST_CONTENT_TYPE = 'posts'

async function getAll(): Promise<Post[]> {
  const response = await fetch(`${STRAPI_BASE_URL}/${POST_CONTENT_TYPE}`);
  const posts = await response.json();

  return posts;
}

async function get(id: string): Promise<Post> {
  const response = await fetch(`${STRAPI_BASE_URL}/${POST_CONTENT_TYPE}/${id}`);
  const post = await response.json();

  return post;
}

export { getAll, get };
