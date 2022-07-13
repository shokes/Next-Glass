import Head from 'next/head';
import { client } from '../lib/client';
import { urlFor } from '../lib/client';

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

        <link
          href='https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300&display=swap'
          rel='stylesheet'
        />
      </Head>

      <section className=''>
        <div className='container flex  gap-x-28 h-[85vh]  px-[8rem] items-center '>
          <img
            src={urlFor(image)}
            alt='owner'
            className='w-[55rem] h-[20rem] rounded-full'
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

export const getServerSideProps = async () => {
  const query = '*[_type == "about" ]';

  const aboutInfo = await client.fetch(query);

  return { props: { aboutInfo } };
};
