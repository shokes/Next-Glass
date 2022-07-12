import React from 'react';
import Article from '../Article/Article';
import Link from 'next/link';
const Articles = ({ articlesData }) => {
  return (
    <section className='container pb-10'>
      <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-14'>
        {articlesData.slice(0, 9).map((item) => {
          return (
            <div key={item.name}>
              <Article {...item} />
            </div>
          );
        })}
      </div>
      <Link href='/Blog'>
        <div className=' text-center'>
          <button className='uppercase bg-[#ffffffb3] border border-white py-2 px-8  rounded-lg'>
            all posts
          </button>
        </div>
      </Link>
    </section>
  );
};

export default Articles;
