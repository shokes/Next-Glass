const Footer = () => {
  return (
    <footer className='pb-4  text-sm'>
      <div className='container flex-col md:flex-row flex justify-between '>
        <ul className='flex items-center capitalize mb-3 lg:mb-0'>
          <li>
            <a
              href='https://twitter.com/Airshokes'
              target='_blank'
              rel='noreferrer'
              className='underline mr-3 '
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
    </footer>
  );
};

export default Footer;
