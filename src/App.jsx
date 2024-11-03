import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './components/HomePage';
import Home from './components/home/Home';
import ProductDetails from './components/product/ProductDetails';
import DashBord from './components/dashbord/DashBord';
import Error from './components/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },

      {
        path: '/product/:id',
        element: <ProductDetails />,
      },
      {
        path: '/dashboard',
        element: <DashBord />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
