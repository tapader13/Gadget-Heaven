import { Link, useLocation } from 'react-router-dom';
import { CiShoppingCart, CiHeart } from 'react-icons/ci';

const Navbar = () => {
  const { pathname } = useLocation();

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
            <li className={`${pathname === '/' ? 'font-bold' : 'font-medium'}`}>
              <Link to='/'>Home</Link>
            </li>
            <li
              className={`${
                pathname === '/statistics' ? 'font-bold' : 'font-medium'
              }`}
            >
              <Link to='/statistics'>Statistics</Link>
            </li>
            <li
              className={`${
                pathname === '/dashboard' ? 'font-bold' : 'font-medium'
              }`}
            >
              <Link to='/dashboard'>Dashboard</Link>
            </li>
          </ul>
        </div>
        <div className='flex gap-5 items-center'>
          <div className='bg-secondary p-2 rounded-full'>
            <CiShoppingCart className='text-black' size={20} />
          </div>
          <div className='bg-secondary p-2 rounded-full'>
            <CiHeart className='text-black' size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
