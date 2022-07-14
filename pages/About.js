import Head from 'next/head';
import { client, urlFor } from '../lib/client';

import Image from 'next/image';

const About = ({ aboutInfo }) => {
  const {
    name,
    aboutText,
    image: {
      asset: { _ref: image },
    },
  } = aboutInfo[0];

  return (
    <>
      <Head>
        <title>About - Next Glass</title>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
      </Head>

      <section className=''>
        <div className='container grid grid-cols-1 gap-14 lg:flex   lg:gap-x-28 py-[9rem]   lg:px-[8rem] items-center '>
          <Image
            src={`${urlFor(image)}`}
            alt='author'
            width={700}
            height={700}
            className=' rounded-full'
          />
          <div>
            <h3 className='capitalize font-extrabold text-4xl mb-2'>{name}</h3>
            <p className='text-lg'>{aboutText}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

// fetching the about data from sanity and passing to the about page

export const getStaticProps = async () => {
  const query = '*[_type == "about" ]';

  const aboutInfo = await client.fetch(query);

  return { props: { aboutInfo } };
};
