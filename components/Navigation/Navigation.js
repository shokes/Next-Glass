import React from 'react';

const Navigation = () => {
  return (
    <section>
      <nav className='flex justify-between items-center container pt-7 pb-14'>
        <div className='font-semibold text-lg'>Next Glass</div>
        <div>
          <ul className='flex font-light gap-x-3 uppercase'>
            <li>blog</li>
            <li>about</li>
            <li>contact</li>
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Navigation;
