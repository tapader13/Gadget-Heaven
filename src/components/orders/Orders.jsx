import { Helmet } from 'react-helmet-async';
import { useData } from '../../context/useData';

const Orders = () => {
  const { orders } = useData();

  return (
    <div>
      <Helmet>
        <title>GadgetHaven | Orders</title>
      </Helmet>
      <div>
        <div className='bg-primary'>
          <div className='text-center pt-8 pb-8'>
            <h1 className='font-bold text-secondary text-[32px] leading-10'>
              Orders Page
            </h1>
            <p className='mt-4 w-8/12 mx-auto text-[16px] font-normal leading-5 text-secondary'>
              Track your gadget purchases and stay up-to-date on your order
              status! View details of your recent orders, check delivery
              updates, and review items you love. From smart devices to the
              coolest accessories, everything you’ve ordered is right here.
            </p>
          </div>
        </div>
        <div className='w-10/12 mx-auto mt-10'>
          {orders.length > 0 ? (
            orders.map((order, orderIndex) => (
              <div key={orderIndex} className='order mb-10'>
                <h2 className='text-[24px] font-semibold leading-8 text-primary mb-4'>
                  Order {orderIndex + 1}
                </h2>
                {order.items.map((item, i) => (
                  <div
                    key={i}
                    className='p-8 grid mb-5 grid-cols-12 gap-6 rounded-2xl bg-secondary'
                  >
                    <div className='col-span-3'>
                      <img
                        className='w-full h-[200px]'
                        src={item.product_image}
                        alt={item.product_title}
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
                        Price: ${item.price}
                      </p>
                    </div>
                  </div>
                ))}
                <div className='text-right font-semibold text-[20px] text-tertiary/80 mt-4'>
                  Total Price: ${order.totalPrice.toFixed(2)}
                </div>
              </div>
            ))
          ) : (
            <h4 className='text-[24px] font-semibold leading-8 text-primary mb-4'>
              No orders found
            </h4>
          )}
        </div>
      </div>
    </div>
  );
};

export default Orders;
