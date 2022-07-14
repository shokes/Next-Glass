import { client } from '../lib/client';
import ContactForm from '../components/ContactForm/ContactForm';
import Head from 'next/head';

const Contact = ({ contactInfo }) => {
  const { name, smallText } = contactInfo[0];
  return (
    <>
      <Head>
        <title>Contact - Next Glass</title>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
      </Head>

      <section className=''>
        <div className='container grid grid-cols-1 lg:flex gap-10  lg:gap-x-28  lg:px-[8rem] items-center my-20 '>
          <div>
            <h3 className='capitalize font-extrabold text-4xl '>{name}</h3>
            <p className='text-lg'>{smallText}</p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
};

export default Contact;

// fetching the contact data from sanity and passing to the contact page

export const getStaticProps = async () => {
  const query = '*[_type == "contact"]';
  const contactInfo = await client.fetch(query);
  // console.log(articles);

  return { props: { contactInfo } };
};
