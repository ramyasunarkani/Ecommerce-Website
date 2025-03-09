import React, { createContext, useState } from "react";

export const CartContext = createContext(); 

const CartData = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
    const [show, setShow] = useState(false);
    const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
  };
  const addToCart=(item)=>{
    setCartItems((prev)=>{
      const exit=prev.find(oldItem=>oldItem.id===item.id);
      if(exit){
        return prev.map(oldItem=>oldItem.id===item.id?{...oldItem,quantity:oldItem.quantity+1}:oldItem);
      }
      else{
        return [...prev,{...item,quantity:1}];
      }
    })

  }

  

  return (
    <CartContext.Provider value={{ cartItems, setCartItems ,show,setShow,removeFromCart,addToCart}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartData;