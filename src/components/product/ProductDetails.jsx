import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';
import { CiShoppingCart, CiHeart } from 'react-icons/ci';
import { useData } from '../../context/useData';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';
const ProductDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const { cartData, addToCart, addToWish, wishData } = useData();
  console.log(cartData);
  useEffect(() => {
    fetch('/products.json')
      .then((response) => response.json())
      .then((dat) => {
        const product = dat.find((item) => item.product_id === parseInt(id));
        setData(product);
      });
  }, [id]);
  console.log(data);
  const handleAddToCart = (data) => {
    const checkData = cartData.find(
      (item) => item.product_id === data.product_id
    );
    if (!checkData) {
      addToCart(data);
      toast.success('Product added to cart');
    }
    if (checkData) {
      toast.error('Product already in cart');
    }
  };
  const handleAddWish = (data) => {
    const checkData = wishData.find(
      (item) => item.product_id === data.product_id
    );
    if (!checkData) {
      addToWish(data);
      toast.success('Product added to wishlist');
    }
  };
  const isInWishlist = wishData.some(
    (item) => item.product_id === data?.product_id
  );
  return (
    <div>
      <Helmet>
        <title>GadgetHaven | Product Details</title>
      </Helmet>
      <div className='bg-primary'>
        <div className='text-center  pt-8 pb-[120px]'>
          <h1 className='font-bold text-secondary text-[32px] leading-10'>
            Product Details
          </h1>
          <p className='mt-4 w-8/12 mx-auto text-[16px] font-normal leading-5 text-secondary'>
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
      </div>
      <div className='w-9/12 h-[570px] border mt-[-100px] border-secondary mx-auto gap-10 bg-secondary p-6 rounded-3xl grid grid-cols-12'>
        <div className='col-span-4'>
          <img
            className='rounded-3xl w-full h-full'
            src={data?.product_image}
            alt=''
          />
        </div>
        <div className='col-span-8'>
          <h1 className='text-[28px] font-semibold leading-[35px]'>
            {data?.product_title}
          </h1>
          <p className='text-[20px] py-4 font-semibold leading-8 text-tertiary/60'>
            Price: ${data?.price}
          </p>
          <button className='bg-[#309C081A] text-[#309C08] text-[14px] font-medium leading-[18px] border border-[#309C08] border-solid px-[14px] py-[7px] rounded-full'>
            In Stock
          </button>
          <p className='text-[16px] py-4 font-normal leading-5 text-tertiary/60'>
            {data?.description}
          </p>
          <p className='text-[18px] font-bold leading-8 '>Specification:</p>
          <ol className='list-decimal py-4 list-inside'>
            {data?.specification.map((item) => (
              <li
                className='text-[18px] font-normal leading-7 text-tertiary/60'
                key={item}
              >
                {item}
              </li>
            ))}
          </ol>
          <p className='text-[18px] font-bold leading-8 '>Rating ⭐</p>
          {data && (
            <div className='flex items-center gap-5 pb-4 pt-3'>
              <span>
                <ReactStars
                  count={5}
                  size={24}
                  value={data.rating}
                  isHalf={true}
                  emptyIcon={<i className='far fa-star'></i>}
                  halfIcon={<i className='fa fa-star-half-alt'></i>}
                  fullIcon={<i className='fa fa-star'></i>}
                  activeColor='#ffd700'
                  edit={false}
                />
              </span>
              <span className='bg-tertiary/5 py-[6px] px-3 text-xs rounded-2xl'>
                {data?.rating}
              </span>
            </div>
          )}
          <div className='flex items-center gap-5'>
            <button
              onClick={() => handleAddToCart(data)}
              className='flex bg-primary px-5 text-secondary py-3 rounded-3xl items-center gap-2 text-[18px] font-bold leading-6'
            >
              <span>Add to Cart</span>
              <span>
                <CiShoppingCart />
              </span>
            </button>
            <button
              disabled={isInWishlist}
              onClick={() => handleAddWish(data)}
              className={`bg-secondary ${
                isInWishlist ? 'cursor-not-allowed' : 'cursor-pointer'
              }  border p-2 rounded-full`}
            >
              <CiHeart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
