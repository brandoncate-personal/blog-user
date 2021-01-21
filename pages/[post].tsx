import Head from "next/head";
import { GetServerSideProps } from "next";
import { Box } from "@chakra-ui/react";

import styles from "../styles/Home.module.css";
import { get, Post } from "../app/services/posts";
import markdownToHtml from "../app/services/markdown";
import Header from "../app/components/Header";

export default function Page({
  post,
  content,
}: {
  post: Post;
  content: string;
}) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header backEnabled={true}>{post.title}</Header>

      <div className={styles.container}>
        <div className={styles.grid}>
          <Box
            key={post.title}
            p={5}
            shadow="md"
            borderWidth="1px"
            maxWidth="100%"
          >
            <article dangerouslySetInnerHTML={{ __html: content }} />
          </Box>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const postId = context.query["post"] as string;
  // Fetch data from external API
  const post = await get(postId);

  const content = await markdownToHtml(post.content);
  // Pass data to the page via props
  return { props: { post, content } };
};
