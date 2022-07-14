import { client, urlFor } from '../lib/client';
import Image from 'next/image';
import Head from 'next/head';

const ArticleDetails = ({ articles }) => {
  const {
    name,
    date,
    header,
    paragraph1,
    paragraph2,
    quote,
    codeBlock: {
      asset: { _ref: codeBlockImage },
    },
    image: {
      asset: { _ref: image },
    },
  } = articles;
  return (
    <section className=''>
      <Head>
        <title>{name}</title>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
      </Head>
      <article className='article-container pt-28 pb-14'>
        <h3 className='font-bold text-4xl mb-1 '>{name}</h3>
        <span className=' text-lg'>{date}</span>
        <p className='mt-10 text-lg '>{paragraph1}</p>
        <p className='mt-10 mb-10 text-lg'>{paragraph2}</p>
        <div className='mb-10'>
          <h3 className='font-bold text-4xl mb-3 '>Image</h3>

          <Image
            src={`${urlFor(image)}`}
            alt='laptop'
            width={700}
            height={400}
          />
        </div>
        <div className='mb-10'>
          <h3 className='font-bold text-4xl mb-1 '>Header</h3>
          <p>{header}</p>
        </div>
        <div className='mb-10'>
          <h3 className='font-bold text-4xl mb-3 uppercase'>Code block</h3>

          <Image
            src={`${urlFor(codeBlockImage)}`}
            alt='laptop'
            width={700}
            height={400}
          />
        </div>
        <div>
          <h3 className='font-bold text-4xl mb-1 uppercase'>Quoted text</h3>
          <p className='border-[#37292c] border-l-8 pl-3 italic'>{quote}</p>
        </div>
      </article>
    </section>
  );
};

export default ArticleDetails;

// choosing to use get static props becausse i want the data prerendered and be very fast. Also because the data is coming from a CMS.

export const getStaticPaths = async () => {
  const query = `*[_type == "article"] {
    slug {
      current
    }
  }`;

  const articles = await client.fetch(query);
  const paths = articles.map((article) => ({
    params: {
      slug: article.slug.current,
    },
  }));
  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "article" && slug.current == '${slug}'][0]`;

  const articles = await client.fetch(query);
  // console.log(articles);

  return { props: { articles } };
};
