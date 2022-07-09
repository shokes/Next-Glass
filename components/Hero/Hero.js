import React from 'react';

const Hero = ({ heroData }) => {
  const { name, smallText } = heroData[0];

  return (
    <section>
      <div className='text-center'>
        <h3>{name}</h3>
        <p>{smallText}</p>
      </div>
    </section>
  );
};

export default Hero;
