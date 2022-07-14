import { client } from '../../lib/client';
import BlogArticles from '../../components/BlogArticles/BlogArticles';
import { useRouter } from 'next/router';
import Head from 'next/head';

const Tags = ({ articles }) => {
  // destructuring the dynamic tag from the router.query as we switch page
  const router = useRouter();
  const { Tags } = router.query;

  // filtering the articles to get the array with contents that match the tag
  const taggedArticles = articles.filter((article) => {
    return article.tags.includes(`${Tags}`);
  });

  return (
    <section>
      <Head>
        <title>Tagged &apos;{Tags}&apos;</title>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
      </Head>
      <div className='container'>
        <h3 className='capitalize font-extrabold text-4xl mt-20 mb-7  '>
          posts tagged &quot;{Tags}&quot;
        </h3>
        <BlogArticles data={taggedArticles} />
      </div>
    </section>
  );
};

export default Tags;

export const getServerSideProps = async () => {
  const query = '*[_type == "article"]';
  const articles = await client.fetch(query);
  console.log(articles);

  return { props: { articles } };
};
