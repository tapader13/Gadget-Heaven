const Footer = () => {
  return (
    <div className='mt-24 bg-secondary'>
      <div className=' py-24 w-10/12 mx-auto'>
        <div className='text-center'>
          <h1 className='text-[32px] font-bold leading-10'>Gadget Heaven</h1>
          <p className='mt-3 text-[16px] font-medium leading-5 text-tertiary/60'>
            Leading the way in cutting-edge technology and innovation.
          </p>
        </div>
        <hr className=' my-7' />
        <div className=' flex justify-between w-7/12 mx-auto'>
          <div className='text-center'>
            <h3 className='text-[18px] font-bold mb-4 leading-6'>Services</h3>
            <ul className='text-[16px] font-normal text-tertiary/60 leading-8'>
              {' '}
              <li>Product Support </li>
              <li>Order Tracking</li>
              <li>Shipping & Delivery</li>
              <li>Returns</li>
            </ul>
          </div>
          <div className='text-center'>
            <h3 className='text-[18px] font-bold mb-4 leading-6'>Company</h3>
            <ul className='text-[16px] font-normal text-tertiary/60 leading-8'>
              {' '}
              <li>About Us </li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className='text-center'>
            <h3 className='text-[18px] font-bold mb-4 leading-6'>Legal</h3>
            <ul className='text-[16px] font-normal text-tertiary/60 leading-8'>
              {' '}
              <li>Terms of Service </li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
