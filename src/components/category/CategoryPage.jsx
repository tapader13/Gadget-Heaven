import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useParams } from 'react-router-dom';

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const nav = useLocation();
  console.log(nav, 7);
  useEffect(() => {
    fetch('/products.json')
      .then((response) => response.json())
      .then((data) => {
        console.log(data, 0);
        const filteredProducts =
          categoryName && categoryName !== 'All Products'
            ? data.filter((product) => product.category === categoryName)
            : data;
        setProducts(filteredProducts);
      });
  }, [categoryName]);
  return (
    <div>
      <Helmet>
        <title>GadgetHaven | {categoryName}</title>
      </Helmet>{' '}
      <div className='grid grid-cols-3 w-full gap-5'>
        {products.map((item, i) => (
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
  );
};

export default CategoryPage;
