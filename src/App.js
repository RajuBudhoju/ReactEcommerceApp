import Header from "./components/layout/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Generics from "./components/layout/Generics";
import { useState } from "react";
import CartProvider from "./store/CartProvider";
import Cart from "./components/cart/cart";



function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <div>
      <CartProvider>
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <main>
          <Generics/>
        </main>
      </CartProvider>
      
    </div>
  );
}

export default App;
