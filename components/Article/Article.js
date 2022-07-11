import React from 'react';

const Article = (item) => {
  // console.log(item);
  const { name, smallText, date, time } = item;
  return (
    <article className='border border-white  rounded-lg card p-4'>
      <div className=''>
        <h3 className='font-bold text-2xl mb-7 h-[5rem]'>{name}</h3>
        <p className='text-lg h-[7rem] '>{smallText}</p>
        <div className='flex justify-between items-center mt-7'>
          <p>{date}</p>
          <span>{time}</span>
        </div>
      </div>
    </article>
  );
};

export default Article;
