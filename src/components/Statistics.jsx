import { Helmet } from 'react-helmet-async';

const Statistics = () => {
  return (
    <div>
      <Helmet>
        <title>GadgetHaven | Statistics</title>
      </Helmet>
      <div>
        <div className='bg-primary'>
          <div className='text-center pt-8 pb-8'>
            <h1 className='font-bold text-secondary text-[32px] leading-10'>
              Statistics Page
            </h1>
            <p className='mt-4 w-8/12 mx-auto text-[16px] font-normal leading-5 text-secondary'>
              Gain insights into the trends and performance of the latest
              gadgets! Here, you&apos;ll find an in-depth analysis of product
              prices, ratings, and popularity to help you make informed
              decisions. Compare various devices and discover what makes each
              one unique in our ever-evolving catalog.
            </p>
          </div>
        </div>
      </div>
      <div className='w-10/12 mx-auto mt-10'>
        <h4 className='text-[24px] text-center font-semibold leading-8 text-primary'>
          Page Under Construction
        </h4>
      </div>
    </div>
  );
};

export default Statistics;
