import React from 'react';
import Article from '../Article/Article';
const Articles = ({ articlesData }) => {
  return (
    <section>
      <div>
        {articlesData.map((item) => {
          return <Article {...item} />;
        })}
      </div>
    </section>
  );
};

export default Articles;
