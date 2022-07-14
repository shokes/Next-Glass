import React from 'react';
import Link from 'next/link';

const Article = (item) => {
  const {
    name,
    smallText,
    date,
    time,
    tags,
    slug: { current },
  } = item;
  return (
    <Link href={`/${current}`}>
      <article className='border border-white cursor-pointer  rounded-lg card p-4'>
        <div className='flex  mb-3'>
          {tags &&
            tags.map((tag, index) => {
              return (
                <Link key={index} href={`/Tags/${tag}`}>
                  <a className='uppercase bg-[#ffffffb3] text-[0.7rem] border mr-3 border-white py-1 px-3 rounded-sm'>
                    {tag}
                  </a>
                </Link>
              );
            })}
        </div>
        <h3 className='font-extrabold text-2xl mb-7 h-[5rem]'>{name}</h3>
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
