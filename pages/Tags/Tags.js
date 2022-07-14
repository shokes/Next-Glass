import { client } from '../../lib/client';
import Link from 'next/link';
import Head from 'next/head';

const Tags = ({ articles }) => {
  // looping over each article to get the tags and pushing them into an array
  let newTags = [];
  articles.map((article) => {
    const { tags } = article;
    tags.map((tag) => {
      newTags.push(tag);
    });
  });

  // removing duplicate tags in the newTags array
  let uniqueTags = [...new Set(newTags)];

  return (
    <section>
      <Head>
        <title>All tags - Next Glass</title>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
      </Head>
      <div className='container h-[75vh]'>
        <h3 className='capitalize font-extrabold text-4xl mt-20 mb-7  '>
          all tags
        </h3>
        <ul>
          {uniqueTags.map((tag, index) => {
            return (
              <li
                key={index}
                className='text-lg underline mb-2 underline-offset-2'
              >
                {' '}
                <Link href={`/Tags/${tag}`}>{tag}</Link>{' '}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Tags;

export const getStaticProps = async () => {
  const query = '*[_type == "article" ]';

  const articles = await client.fetch(query);

  return { props: { articles } };
};
