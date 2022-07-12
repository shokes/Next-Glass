import React from 'react';
import Article from '../Article/Article';

const BlogArticles = ({ data }) => {
  return (
    <section className='container pb-10'>
      <h3 className='capitalize font-extrabold text-4xl mt-20 mb-7  '>Blog</h3>
      <a href='' className='uppercase underline '>
        view all tags
      </a>
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
