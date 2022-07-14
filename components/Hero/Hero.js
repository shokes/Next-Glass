const Hero = ({ heroData }) => {
  const { name, smallText } = heroData[0];

  return (
    <section>
      <div className='text-center my-14'>
        <h3 className='capitalize font-extrabold text-4xl mb-2'>{name}</h3>
        <p className='container w-[28rem] text-lg capitalize'>{smallText}</p>
      </div>
    </section>
  );
};

export default Hero;
