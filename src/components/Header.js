import React from 'react';
import { Link } from "react-router-dom";
import { Form, Container, FormControl, Navbar, NavbarBrand, Nav, Dropdown, Badge } from "react-bootstrap"
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import { FaShoppingCart } from "react-icons/fa"

const Header = () => {
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
                        />
                    </Form>
                </Navbar.Text>
                <Nav>
                    <Dropdown align="end">
                        <DropdownToggle variant="success">
                            <FaShoppingCart fontSize="25px" />
                            {/* <Badge color="white">{10}</Badge> */}
                            <span>10</span>
                        </DropdownToggle>
                        <DropdownMenu style={{ minWidth: 370 }}>
                            <span style={{padding: 10}}>Cart is empty!</span>
                        </DropdownMenu>
                    </Dropdown>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header;