import React from 'react';

const Footer = () => {
  return (
    <section className='pb-4  text-sm'>
      <div className='container flex justify-between items-center'>
        <ul className='flex items-center gap-x-3 capitalize'>
          <li>
            <a
              href='https://twitter.com/Airshokes'
              target='_blank'
              rel='noreferrer'
              className='underline '
            >
              twitter
            </a>
          </li>
          <li>
            <a
              href='https://github.com/shokes'
              className='underline '
              target='_blank'
              rel='noreferrer'
            >
              github
            </a>
          </li>
        </ul>
        <div>
          <p>
            Built with love by
            <a
              href='https://twitter.com/Airshokes'
              target='_blank'
              rel='noreferrer'
              className='underline ml-1 '
            >
              Oshoke Oyati
            </a>{' '}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
