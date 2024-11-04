import { useState } from 'react';
import { BsSortNumericDownAlt } from 'react-icons/bs';
import { useData } from '../../context/useData';
import { RxCross2 } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
const DashBord = () => {
  const [tab, setTab] = useState('cart');
  const [sortedCartData, setSortedCartData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  const {
    cartData,
    wishData,
    removeCart,
    removeWish,
    clearCart,
    clearWish,
    handleOrders,
  } = useData();
  const handleSort = () => {
    const sortedData = [...sortedCartData].sort((a, b) => b.price - a.price);
    setSortedCartData(sortedData);
  };
  useState(() => {
    setSortedCartData(cartData);
  }, [cartData]);
  const handleRemoveCartItem = (item) => {
    removeCart(item);
    setSortedCartData(
      sortedCartData.filter(
        (cartItem) => cartItem.product_id !== item.product_id
      )
    );
    toast.success('Product removed from cart');
  };

  const handleRemoveWishItem = (item) => {
    removeWish(item);
    toast.success('Product removed from wishlist');
  };
  const handlePurchase = () => {
    handleOrders(cartData);
    setOpenModal(true);
    clearCart();
    clearWish();
    setSortedCartData([]);
  };
  return (
    <div>
      <Helmet>
        <title>GadgetHaven | Dashboard</title>
      </Helmet>
      <div className='bg-primary'>
        <div className='text-center  pt-8 pb-8'>
          <h1 className='font-bold text-secondary text-[32px] leading-10'>
            Dashboard
          </h1>
          <p className='mt-4 w-8/12 mx-auto text-[16px] font-normal leading-5 text-secondary'>
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <div className='flex justify-center mt-8 items-center gap-7'>
            <button
              onClick={() => setTab('cart')}
              className={`${
                tab === 'cart'
                  ? 'bg-secondary text-primary'
                  : 'bg-primary text-secondary'
              } text-[16px] font-bold leading-5 px-[30px] py-[10px] rounded-full border`}
            >
              Cart
            </button>
            <button
              onClick={() => setTab('wishlist')}
              className={`${
                tab === 'wishlist'
                  ? 'bg-secondary text-primary'
                  : 'bg-primary text-secondary'
              } border text-[16px] font-bold leading-5 px-[30px] py-[10px] rounded-full`}
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
      <div className='flex justify-between items-center w-10/12 mx-auto my-6'>
        <div>
          <h3 className='text-[24px] font-bold leading-8'>
            {tab === 'cart' ? 'Cart' : 'Wishlist'}
          </h3>
        </div>
        {tab === 'cart' && (
          <div className='flex justify-between items-center gap-6'>
            <div>
              <p className='text-[24px] font-bold leading-8'>
                Total cost:${cartData.reduce((a, b) => a + b.price, 0)}
              </p>
            </div>
            <div>
              <button className='flex border px-[22px] py-[13px] rounded-full justify-between gap-2 border-primary items-center'>
                <span onClick={() => handleSort()}>Sort by Price</span>
                <span>
                  <BsSortNumericDownAlt />
                </span>
              </button>
            </div>
            <div>
              <button
                onClick={() => handlePurchase()}
                disabled={cartData.length === 0}
                className={`bg-primary text-secondary text-[18px] font-medium leading-6 ${
                  cartData.length === 0
                    ? 'cursor-not-allowed bg-tertiary/40'
                    : ''
                } px-[30px] py-[10px] rounded-full`}
              >
                Purchase
              </button>
            </div>
            <dialog
              id='my_modal_3'
              className={`modal ${openModal ? 'modal-open' : ''}`}
            >
              <div className='modal-box'>
                <form method='dialog'>
                  <button
                    onClick={() => {
                      setOpenModal(false);
                      navigate('/');
                    }}
                    className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'
                  >
                    ✕
                  </button>
                </form>
                <h3 className='font-bold text-primary text-2xl text-center '>
                  Congratulation!
                </h3>
                <h6 className='text-center text-xl'>
                  Your order has been placed successfully
                </h6>
              </div>
            </dialog>
          </div>
        )}
      </div>
      <div className='w-10/12 mx-auto'>
        {tab === 'cart' &&
          sortedCartData.map((item, i) => (
            <div
              key={i}
              className='p-8 grid mb-5 grid-cols-12 gap-6 rounded-2xl bg-secondary'
            >
              <div className='col-span-3'>
                <img
                  className='w-full h-[200px]'
                  src={item.product_image}
                  alt=''
                />
              </div>
              <div className='col-span-8'>
                <h1 className='text-[24px] font-semibold leading-8'>
                  {item.product_title}
                </h1>
                <p className='mt-3 mb-4 text-tertiary/60 text-[18px] font-normal leading-8'>
                  {item.description}
                </p>
                <p className='text-[20px] text-tertiary/80 font-semibold leading-8'>
                  Price:${item.price}
                </p>
              </div>
              <div
                onClick={() => handleRemoveCartItem(item)}
                className='col-span-1 rounded-full border border-red-500 h-fit w-fit p-1 cursor-pointer'
              >
                <RxCross2 className='text-2xl text-red-500' />
              </div>
            </div>
          ))}
        {tab === 'wishlist' &&
          wishData.map((item, i) => (
            <div
              key={i}
              className='p-8 grid mb-5 grid-cols-12 gap-6 rounded-2xl bg-secondary'
            >
              <div className='col-span-3'>
                <img
                  className='w-full h-[200px]'
                  src={item.product_image}
                  alt=''
                />
              </div>
              <div className='col-span-8'>
                <h1 className='text-[24px] font-semibold leading-8'>
                  {item.product_title}
                </h1>
                <p className='mt-3 mb-4 text-tertiary/60 text-[18px] font-normal leading-8'>
                  {item.description}
                </p>
                <p className='text-[20px] text-tertiary/80 font-semibold leading-8'>
                  Price:${item.price}
                </p>
              </div>
              <div
                onClick={() => handleRemoveWishItem(item)}
                className='col-span-1 rounded-full border border-red-500 h-fit w-fit p-1 cursor-pointer'
              >
                <RxCross2 className='text-2xl text-red-500' />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default DashBord;
