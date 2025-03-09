import React, { createContext, useState } from "react";

export const CartContext = createContext(); 

const CartData = ({ children }) => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1, 
      title: "Colors",
      price: 100,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 2,
    },
    {
      id: 2,
      title: "Black and white Colors",
      price: 50,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 3,
    },
    {
      id: 3,
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      quantity: 1,
    },
  ]);
    const [show, setShow] = useState(false);
    const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
  };

  

  return (
    <CartContext.Provider value={{ cartItems, setCartItems ,show,setShow,removeFromCart}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartData;