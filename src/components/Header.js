import React from 'react';
import { Link } from "react-router-dom";
import { Form, Container, FormControl, Navbar, NavbarBrand, Nav, Dropdown, Button } from "react-bootstrap"
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai"
import { CartState } from '../context/Context';

const Header = () => {
    const {state: {cart}, dispatch, productDispatch} = CartState();
    return (
        <Navbar bg='dark' variant='black' style={{ height: 80 }}>
            <Container>
                <NavbarBrand>
                    <Link to="/">Shopping Cart</Link>
                </NavbarBrand>
                <Navbar.Text>
                    <Form>
                        <FormControl
                            type="search"
                            placeholder="search"
                            aria-label="search"
                            style={{ width: 500 }}
                            className="m-auto"
                            onChange={(e) => productDispatch({
                                type: "FILTER_BY_SEARCH",
                                payload: e.target.value,
                            })}
                        />
                    </Form>
                </Navbar.Text>
                <Nav>
                    <Dropdown align="end">
                        <DropdownToggle variant="success">
                            <FaShoppingCart fontSize="25px" />
                            {/* <Badge color="white">{10}</Badge> */}
                            <span style={{display:"inline-blocks", margin: "0px 6px"}}>{cart.length}</span>
                        </DropdownToggle>
                        <DropdownMenu style={{ minWidth: 370 }}>
                            {
                                cart.length > 0 ? (
                                    <div>
                                        {
                                            cart.map(product => (
                                                <span className="cartitem" key={product.id}>
                                                    <img src={product.image} className="cartItemImg" alt={product.name} />
                                                    <div className="cartItemDetail">
                                                        <span>{product.name}</span>
                                                        <span>₹ {product.price.split(".")[0]}</span>
                                                    </div>
                                                    <AiFillDelete fontSize="20px" style={{cursor: "pointer", color: "red"}} onClick={() => dispatch({type: "REMOVE_FROM_CART", payload: product})} />
                                                </span>
                                            ))
                                        }
                                        <Link to="/cart">
                                            <Button style={{width:"95%", margin: "0 10px"}}>Go To Cart</Button>
                                        </Link>
                                    </div>
                                ) : (
                                    
                            <span style={{padding: 10}}>Cart is empty!</span>
                                )
                            }
                        </DropdownMenu>
                    </Dropdown>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header;