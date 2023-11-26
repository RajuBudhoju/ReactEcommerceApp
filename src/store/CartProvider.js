import { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};



const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: 'ADD', item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: 'REMOVE', id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

const cartReducer = (state, action) => {

  if (action.type === 'ADD') {

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    
    const existingItem = state.items[existingCartItemIndex];
    
    let updatedItems;
    let updatedTotalAmount;

    if(existingItem){
      updatedItems = state.items
      updatedTotalAmount = state.totalAmount;
    } else {
      updatedTotalAmount = state.totalAmount + action.item.price;
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };

    
  }

  if (action.type === 'REMOVE') {
    
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;

    let updatedItems;

    if (existingItem.price) {
      updatedItems = state.items.filter(item => item.id !== action.id);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
  }

  return defaultCartState;
};

export default CartProvider;