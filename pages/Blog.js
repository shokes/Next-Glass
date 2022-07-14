import Head from 'next/head';
import { client } from '../lib/client';
// import Articles from '../components/Articles/Articles';
import BlogArticles from '../components/BlogArticles/BlogArticles';
const Blog = ({ articles }) => {
  return (
    <>
      <Head>
        <title>Blog - Next Glass</title>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />

        {/* <link
          href='https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300&display=swap'
          rel='stylesheet'
        /> */}
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
