import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../../data/CartData"; 

const CartButton = () => {
  const { cartItems = [],setShow } = useContext(CartContext); 
  return (
    <Button variant="outline-light" className="cart-button position-relative" onClick={()=>setShow(true)}>
      Cart
      <span className="cart-count position-absolute top-0 start-100 translate-middle badge bg-danger rounded-circle">
        {cartItems.length}
      </span>
    </Button>
  );
};

export default CartButton;
