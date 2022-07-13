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

        <link
          href='https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300&display=swap'
          rel='stylesheet'
        />
      </Head>

      <section className=''>
        <div className='container flex gap-x-28  px-[8rem] items-center my-20 '>
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

// export const getServerSideProps = async () => {
//   const query = '*[_type == "contact" ]';

//   const contactInfo = await client.fetch(query);

//   return { props: { contactInfo } };
// };

export const getStaticProps = async () => {
  const query = '*[_type == "contact"]';
  const contactInfo = await client.fetch(query);
  // console.log(articles);

  return { props: { contactInfo } };
};
