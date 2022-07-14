import React from 'react';
import Article from '../Article/Article';
import Link from 'next/link';

const BlogArticles = ({ data }) => {
  return (
    <section className='container pb-10'>
      {/* checking if the articles in the database has been filtered by asking if the articles are less than the total number of articles passed into the database. (might change to a better logic later but this will do for now) */}
      {data.length < 19 || (
        <h3 className='capitalize font-extrabold text-4xl mt-20 mb-7  '>
          Blog.
        </h3>
      )}

      <Link href='/Tags/Tags'>
        <a className='uppercase underline '>view all tags</a>
      </Link>

      <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-14 mt-7'>
        {data.map((item) => {
          return (
            <div key={item.name}>
              <Article {...item} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BlogArticles;
