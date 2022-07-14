import Link from 'next/link';

const Navigation = () => {
  return (
    <section>
      <nav className='flex justify-between items-center container pt-7 '>
        <Link href='/'>
          <a className='font-semibold text-lg tracking-wider'> NEXT GLASS </a>
        </Link>
        <div>
          <ul className='flex items-center text-[0.7rem] md:text-sm  uppercase tracking-wider'>
            <li className='mr-3 lg:mr-5'>
              {' '}
              <Link href='/Blog'>
                <a>blog</a>
              </Link>
            </li>
            <li className='mr-3 lg:mr-5'>
              <Link href='/About'>
                <a>about</a>
              </Link>
            </li>
            <li>
              <Link href='/Contact'>
                <a>contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Navigation;
