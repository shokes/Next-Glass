import Head from 'next/head';
import { client } from '../lib/client';

import BlogArticles from '../components/BlogArticles/BlogArticles';
const Blog = ({ articles }) => {
  return (
    <>
      <Head>
        <title>Blog - Next Glass</title>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
      </Head>
      <section>
        <BlogArticles data={articles} />
      </section>
    </>
  );
};

export default Blog;

export const getStaticProps = async () => {
  const query = '*[_type == "article" ]';

  const articles = await client.fetch(query);

  return { props: { articles } };
};
