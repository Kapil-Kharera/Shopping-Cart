import React, { useEffect, useState } from 'react';
import { CartState } from "../context/Context";
import { ListGroup, ListGroupItem, Button, Row, Col, Form, Image } from "react-bootstrap";
import Rating from "../components/Rating";
import { AiFillDelete } from 'react-icons/ai';

const Cart = () => {
  // let total;
  const { state: { cart }, dispatch } = CartState();
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(cart.reduce((accumulator, current) =>
      accumulator + (Number(current.price) * current.qty), 0
    ));
  }, [cart]);
  console.log(cart);
  return (
    <div className="home">
      <div className="productContainer">
        <ListGroup>
          {
            cart.map(product => (
              <ListGroupItem key={product.id}>
                <Row>
                  <Col md={2}>
                    <Image src={product.image} alt={product.name} fluid rounded />
                  </Col>
                  <Col md={2}>
                    <span>{product.name}</span>
                  </Col>
                  <Col md={2}>{product.price}</Col>
                  <Col md={2}>
                    <Rating rating={product.ratings} />
                  </Col>
                  <Col md={2}>
                    <Form.Select defaultValue={product.qty} >
                      {
                        [...Array(product.inStock).keys()].map(x => (
                          <option key={x + 1}>{x + 1}</option>
                        ))
                      }
                    </Form.Select>
                  </Col>
                  <Col md={2}>
                    <Button type="button" variant="light" onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: product })}>
                      <AiFillDelete fontSize="20px" />
                    </Button>
                  </Col>
                </Row>
              </ListGroupItem>
            ))
          }
        </ListGroup>
      </div>
      <div className="filters summary">
        <span className="title">
          Subtotal {cart.length} items
        </span>
        <span>Total: ₹ {total}</span>
        <Button type="button" disabled={cart.length === 0}>Proceed to Checkout</Button>
      </div>
    </div>
  )
}

export default Cart;