import React from 'react';
import Link from 'next/link';

const Article = (item) => {
  console.log(item);
  const {
    name,
    smallText,
    date,
    time,
    slug: { current },
  } = item;
  return (
    <Link href={`/${current}`}>
      <article className='border border-white cursor-pointer  rounded-lg card p-4'>
        <h3 className='font-bold text-2xl mb-7 h-[5rem]'>{name}</h3>
        <p className='text-lg h-[7rem] '>{smallText}</p>
        <div className='flex justify-between items-center mt-7'>
          <p>{date}</p>
          <span>{time}</span>
        </div>
      </article>
    </Link>
  );
};

export default Article;
