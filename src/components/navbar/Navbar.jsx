import { Link, useLocation } from 'react-router-dom';
import { CiShoppingCart, CiHeart } from 'react-icons/ci';
import { useData } from '../../context/useData';

const Navbar = () => {
  const { pathname } = useLocation();
  const { cartData, wishData } = useData();
  console.log(pathname, cartData, wishData);
  return (
    <div
      className={`${
        pathname === '/' ? 'bg-primary' : ''
      } w-[96%] mx-auto mt-5 rounded-t-3xl`}
    >
      <div
        className={`flex items-center py-7 justify-between w-10/12 mx-auto ${
          pathname === '/' ? 'text-secondary' : 'text-tertiary'
        }`}
      >
        <div>
          <h2 className='text-[20px] font-bold leading-6'>Gadget Heaven</h2>
        </div>
        <div>
          <ul className={`flex items-center gap-12 text-[16px]  leading-5 `}>
            <li
              className={`${
                pathname === '/'
                  ? 'font-bold'
                  : pathname.startsWith('/product')
                  ? 'font-bold text-primary'
                  : 'font-medium'
              }`}
            >
              <Link to='/'>Home</Link>
            </li>
            <li
              className={`${
                pathname === '/statistics'
                  ? 'font-bold text-primary'
                  : 'font-medium'
              }`}
            >
              <Link to='/statistics'>Statistics</Link>
            </li>
            <li
              className={`${
                pathname === '/dashboard'
                  ? 'font-bold text-primary'
                  : 'font-medium'
              }`}
            >
              <Link to='/dashboard'>Dashboard</Link>
            </li>
            <li
              className={`${
                pathname === '/orders'
                  ? 'font-bold text-primary'
                  : 'font-medium'
              }`}
            >
              <Link to='/orders'>Orders</Link>
            </li>
          </ul>
        </div>
        <div className='flex gap-5 items-center'>
          <div className='bg-secondary p-2 rounded-full relative'>
            <CiShoppingCart className='text-black' size={20} />
            {cartData.length > 0 && (
              <div className='absolute -top-2 -right-2 bg-secondary text-primary text-[12px] w-7 h-7 rounded-full flex items-center justify-center'>
                {cartData.length}
              </div>
            )}
          </div>
          <div className='bg-secondary p-2 rounded-full relative'>
            <CiHeart className='text-black' size={20} />
            {wishData.length > 0 && (
              <div className='absolute -top-2 -right-2 bg-secondary text-primary text-[12px] w-7 h-7 rounded-full flex items-center justify-center'>
                {wishData.length}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
