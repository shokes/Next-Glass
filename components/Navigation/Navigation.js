import React from 'react';
import Link from 'next/link';

const Navigation = () => {
  return (
    <section>
      <nav className='flex justify-between items-center container pt-7 '>
        <Link href='/'>
          <a className='font-semibold text-lg tracking-wider'> Next Glass </a>
        </Link>
        <div>
          <ul className='flex  gap-x-5 text-sm  uppercase tracking-wider'>
            <li>
              {' '}
              <Link href='/Blog'>
                <a>blog</a>
              </Link>
            </li>
            <li>
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
