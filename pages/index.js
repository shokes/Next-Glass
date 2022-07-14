import Head from 'next/head';

import { client } from '../lib/client';
import Hero from '../components/Hero/Hero';
import Articles from '../components/Articles/Articles';

const Home = function ({ articles, hero }) {
  return (
    <>
      <Head>
        <title>Next Glass</title>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
      </Head>
      <section>
        <Hero heroData={hero} />
        <Articles articlesData={articles} />
      </section>
    </>
  );
};
export default Home;

// fetching both the herotext and the articles data from sanity and passing to the home page

export const getStaticProps = async () => {
  const query = '*[_type == "article" ]';
  const queryhero = '*[_type == "hero" ]';

  const articles = await client.fetch(query);
  const hero = await client.fetch(queryhero);

  return { props: { articles, hero } };
};
