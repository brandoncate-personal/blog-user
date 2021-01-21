import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

import { Box, Stack, Center, Heading, Text, Divider } from "@chakra-ui/react";

import { getAll, Post } from "../app/services/posts";
import Header from "../app/components/Header";

export default function Home({ posts }: { posts: Post[] }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header>BLOGGLY</Header>

      <div className={styles.container}>
        <div className={styles.grid}>
          <Stack spacing={8}>
            {posts &&
              posts.map((post) => (
                <Link key={post.id} href={`/${post.id}`}>
                  <Box
                    key={post.title}
                    p={5}
                    shadow="md"
                    borderWidth="1px"
                    style={{ transition: "all .2s ease-in-out" }}
                    _hover={{ cursor: "pointer", transform: "scale(1.03)" }}
                  >
                    <Heading fontSize="xl">{post.title}</Heading>
                    <Text mt={4} noOfLines={3}>
                      {post.summary}
                    </Text>
                  </Box>
                </Link>
              ))}
          </Stack>
        </div>
      </div>

      <Box w="100%" mt="2rem">
        <Divider />
      </Box>

      <Box w="100%" h="5rem">
        <Center h="100%">
          <Text>Powered by Brandon Cate</Text>
        </Center>
      </Box>
    </>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const posts = await getAll();

  // Pass data to the page via props
  return { props: { posts } };
}
