import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './components/HomePage';
import Home from './components/home/Home';
import ProductDetails from './components/product/ProductDetails';
import DashBord from './components/dashbord/DashBord';
import Error from './components/Error';
import Orders from './components/orders/Orders';
import Statistics from './components/Statistics';
import CategoryPage from './components/category/CategoryPage';
import AllProduct from './components/category/AllProduct';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
        children: [
          {
            path: '/',
            element: <AllProduct />,
          },
          {
            path: ':categoryName',
            element: <CategoryPage />,
          },
        ],
      },

      {
        path: '/product/:id',
        element: <ProductDetails />,
      },
      {
        path: '/dashboard',
        element: <DashBord />,
      },
      {
        path: '/orders',
        element: <Orders />,
      },
      {
        path: '/statistics',
        element: <Statistics />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
