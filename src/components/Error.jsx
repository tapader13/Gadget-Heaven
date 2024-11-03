import { FaExclamationTriangle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-red-100'>
      <div className='bg-white p-8 rounded-lg shadow-lg text-center'>
        <div className='flex justify-center'>
          <FaExclamationTriangle className='text-red-600 text-6xl mb-4' />
        </div>
        <h1 className='text-2xl font-bold text-red-700'>
          Oops! Something Went Wrong
        </h1>
        <p className='mt-2 text-lg text-gray-600'>
          We couldn&apos;t find the page you were looking for. Please check the
          URL or return to the homepage.
        </p>
        <Link
          to='/'
          className='mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-md transition-colors hover:bg-blue-500'
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default Error;
