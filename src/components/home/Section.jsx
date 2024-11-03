import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Section = () => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);
  const [selectCategory, setSelectCategory] = useState('All Product');
  useEffect(() => {
    const getCategory = () => {
      fetch('products.json')
        .then((response) => response.json())
        .then((data) => {
          const categories = data.map((item) => item.category);
          const uniqueCategories = categories.filter(
            (cat, index) => categories.indexOf(cat) === index
          );
          setCategory(uniqueCategories);
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
            <button
              className={`rounded-full px-4 py-2 ${
                selectCategory === 'All Product'
                  ? 'bg-primary text-secondary'
                  : 'bg-tertiary/5 text-tertiary/60'
              } `}
            >
              All Product
            </button>
            {category.map((item, i) => (
              <button
                key={i}
                className={`rounded-full px-4 py-2 ${
                  selectCategory === item
                    ? 'bg-primary text-secondary'
                    : 'bg-tertiary/5 text-tertiary/60'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          <div className='col-span-3'>
            <div className='grid grid-cols-3 w-full gap-5'>
              {data.map((item, i) => (
                <div key={i} className='p-5 bg-secondary rounded-2xl'>
                  <img
                    className='w-full h-[185px] rounded-xl'
                    src={item.product_image}
                    alt=''
                  />
                  <h1 className='mt-6 mb-3 font-semibold text-[24px] leading-[30px]'>
                    {item.product_title}
                  </h1>
                  <p className='text-[20px] mb-4 text-black/60 font-medium leading-[25px]'>
                    Price: ${item.price}
                  </p>
                  <Link to={`/product/${item.product_id}`}>
                    <button className='rounded-full px-6 py-3 text-primary  text-[18px] font-semibold leading-6 border border-primary'>
                      View Details
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
