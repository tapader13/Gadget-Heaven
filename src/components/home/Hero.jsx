import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='bg-primary w-[96%] mx-auto rounded-b-3xl text-secondary'>
      <div className='w-9/12 mx-auto text-center'>
        <h1 className='text-[56px] pt-3 font-bold leading-[72px]'>
          Upgrade Your Tech Accessorize with Gadget Heaven Accessories
        </h1>
        <p className='mt-6 mb-8 text-[16px] w-8/12 mx-auto font-normal leading-[26px]'>
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <Link to='/dashboard'>
          <button className='bg-secondary mb-[210px] text-primary text-[20px] font-bold leading-[26px] px-[30px] py-[15px] rounded-full'>
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
