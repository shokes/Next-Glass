import Head from 'next/head';
import { client } from '../lib/client';
import Articles from '../components/Articles/Articles';
const Blog = (articles) => {
  console.log(articles);
  return (
    <>
      <Head>
        <title>Blog - Next Glass</title>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />

        <link
          href='https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300&display=swap'
          rel='stylesheet'
        />
      </Head>
      {/* <section>
        <div className='container'>blog</div>
        {articles.map((item) => {
          return <Articles articlesData={item} />;
        })}
      </section> */}
    </>
  );
};

export default Blog;

export const getServerSideProps = async () => {
  const query = '*[_type == "article" ]';

  const articles = await client.fetch(query);

  return { props: { articles } };
};
