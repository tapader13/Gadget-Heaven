import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const Section = () => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);
  const loc = useLocation();

  const [currentCategory, setCurrentCategory] = useState('');
  useEffect(() => {
    const pathCategory =
      loc.pathname === '/'
        ? 'All Products'
        : decodeURIComponent(loc.pathname.slice(1)).replace(/-/g, ' ');
    setCurrentCategory(pathCategory);
  }, [loc.pathname]);
  console.log(currentCategory);
  useEffect(() => {
    const getCategory = () => {
      fetch('products.json')
        .then((response) => response.json())
        .then((data) => {
          const categories = data.map((item) => item.category);
          const uniqueCategories = categories.filter(
            (cat, index) => categories.indexOf(cat) === index
          );
          setCategory(['All Products', ...uniqueCategories]);
        });
    };
    const getAllData = () => {
      fetch('products.json')
        .then((response) => response.json())
        .then((data) => setData(data));
    };
    getAllData();
    getCategory();
  }, []);
  console.log(category);
  console.log(data);
  return (
    <div className='w-10/12 mx-auto'>
      <div>
        <h1 className='text-[40px] mt-24 mb-12 text-center font-bold leading-[50px]'>
          Explore Cutting-Edge Gadgets
        </h1>
        <div className='grid grid-cols-4 gap-5'>
          <div className='cols-span-1 h-fit p-6 bg-secondary flex flex-col gap-6'>
            {category.map((category, index) => (
              <Link
                key={index}
                to={category === 'All Products' ? '/' : `/${category}`}
              >
                <button
                  onClick={() => setCurrentCategory(category)}
                  className={`text-[16px] ${
                    currentCategory === category
                      ? 'bg-primary px-4 py-2 rounded-full text-secondary'
                      : 'text-tertiary/60 bg-tertiary/5 rounded-full px-4 py-2'
                  } font-bold leading-[26px] `}
                >
                  {category}
                </button>
              </Link>
            ))}
          </div>
          <div className='col-span-3'>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
