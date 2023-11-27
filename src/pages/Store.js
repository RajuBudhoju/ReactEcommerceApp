import Header from "../components/layout/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Generics from "../components/layout/Generics";
import CartProvider from "../store/CartProvider";
import Cart from "../components/cart/cart";



const Store = () => {

  return (
    <div>
      <CartProvider>
        <main>
          <Generics/>
        </main>
      </CartProvider>
      
    </div>
  );
}

export default Store;
