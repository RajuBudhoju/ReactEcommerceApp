import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Store from './pages/Store';
import Home from './pages/Home';
import About from './pages/About';
import CartProvider from './store/CartProvider';
import { useState } from "react";
import Header from './components/layout/Header';
import Cart from './components/cart/cart';

const router = createBrowserRouter([
  { path: '/', element: <Store/> },
  { path: '/home', element: <Home/>},
  { path: '/about', element: <About/>}
]);

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
       {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <RouterProvider router={router}/>
    </CartProvider>
  );
}

export default App;
