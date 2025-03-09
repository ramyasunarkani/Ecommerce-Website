import React, { useContext } from "react";
import { Button, Offcanvas, Card, Table } from "react-bootstrap";
import { CartContext } from "../../data/CartData"; 

const Cart = () => {
  const { cartItems = [], show, setShow, removeFromCart } = useContext(CartContext);
  
  return (
    <Offcanvas 
      show={show} 
      onHide={() => setShow(false)} 
      placement="end"
      backdrop={false}  
      scroll={true}     
      data-bs-backdrop="false"
      data-bs-scroll="true"
      style={{ marginTop: "4rem", width: "45vw", border: "none" }}  
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className="fw-bold text-center">
          <span className="text-center">CART</span>
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {cartItems.length === 0 ? (
          <p className="text-center">Your cart is empty.</p>
        ) : (
          <Card className="border-0 shadow-none">
            <Card.Body>
              <Table borderless>
                <thead>
                  <tr>
                    <th>ITEM</th>
                    <th>PRICE</th>
                    <th>QUANTITY</th>
                  </tr>
                  <tr>
                    <th colSpan="3"><hr /></th>
                  </tr>
                </thead>
                <tbody>
                    {cartItems.map((item) => (
                      <React.Fragment key={item.id}>
                        <tr>
                          <td className="align-middle">
                            <img src={item.imageUrl} alt={item.title} width="80" className="rounded-3"/>
                            <span className="ms-2">{item.title}</span>
                          </td>
                          <td className="align-middle">${item.price}</td>
                          <td className="align-middle">
                            {item.quantity}  
                            <Button variant="danger" size="sm" className="ms-2" onClick={() => removeFromCart(item.id)}>
                              Remove
                            </Button>
                          </td>
                        </tr>
                        <tr><td colSpan="3"><hr /></td></tr>
                      </React.Fragment>
                    ))}
                  </tbody>
              </Table>
            </Card.Body>
          </Card>
        )}
        <div className="text-center mt-3">
          <h5>Total: ${cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)}</h5>
          <Button variant="primary" className=" mt-2">PURCHASE</Button>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Cart;
