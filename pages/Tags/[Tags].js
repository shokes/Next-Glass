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

// choosing to use get static props becausse i want the data prerendered and be very fast. Also because the data is coming from a CMS.

// export const getStaticPaths = async () => {
//   const query = `*[_type == "article"] {
//     slug {
//       current
//     }
//   }`;

//   const articles = await client.fetch(query);
//   const paths = articles.map((article) => ({
//     params: {
//       slug: article.slug.current,
//     },
//   }));
//   return {
//     paths,
//     fallback: 'blocking',
//   };
// };

//from here

// export const getStaticPaths = async () => {
//   const query = `*[_type == "article"] {
//     tag {
//       current
//     }
//   }`;

//   const articles = await client.fetch(query);
//   const paths = articles.map((article) => ({
//     params: { tag: article.tag.current.toString() },
//     // params: {
//     //   tag: article.tag,
//     // },
//   }));
//   return {
//     paths,
//     fallback: 'blocking',
//   };
// };

export const getServerSideProps = async () => {
  const query = '*[_type == "article"]';
  const articles = await client.fetch(query);
  console.log(articles);

  return { props: { articles } };
};
