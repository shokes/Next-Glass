import React from 'react';
import { client, urlFor } from '../lib/client';

const ArticleDetails = ({ articles }) => {
  // console.log(articles);
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
    <section className='article-container pt-28 pb-14'>
      <article>
        <h3 className='font-bold text-4xl mb-1 '>{name}</h3>
        <span className=' text-lg'>{date}</span>
        <p className='mt-10 text-lg '>{paragraph1}</p>
        <p className='mt-10 mb-10 text-lg'>{paragraph2}</p>
        <div className='mb-10'>
          <h3 className='font-bold text-4xl mb-3 '>Image</h3>
          <img
            src={urlFor(image)}
            alt='headphones'
            className='w-[55rem] h-[20rem] '
          />
        </div>
        <div className='mb-10'>
          <h3 className='font-bold text-4xl mb-1 '>Header</h3>
          <p>{header}</p>
        </div>
        <div className='mb-10'>
          <h3 className='font-bold text-4xl mb-3 '>Code block</h3>
          <img
            src={urlFor(codeBlockImage)}
            alt='headphones'
            className='w-[55rem] h-[20rem] '
          />
        </div>
        <div>
          <h3 className='font-bold text-4xl mb-1 '>Quoted text</h3>
          <p className='border-[#37292c] border-l-8 pl-3 italic'>{quote}</p>
        </div>
      </article>
    </section>
  );
};

export default ArticleDetails;

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
  console.log(articles);

  return { props: { articles } };
};
