import React from 'react'
import { Navbar, Nav, Container, Badge } from 'react-bootstrap'
import { FaShoppingCart, FaUser } from 'react-icons/fa'
import { LinkContainer } from 'react-router-bootstrap'
import { useSelector } from 'react-redux'
import logo from '../assets/logo2.png'

const Header = () => {
    const { cartItems } = useSelector((state) => state.cart)
  return (
    <header>
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
            <Container>
                <LinkContainer to="/">
                <Navbar.Brand>
                    <img src={logo} width="250" height="75" alt="logo"></img>
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
                <Navbar.Collapse>
                    <Nav className="ms-auto">
                        <LinkContainer to="/cart">
                            <Nav.Link><FaShoppingCart style={{marginRight:'5px'}}/>Cart {cartItems.length > 0 && (
                                <Badge pill bg='success' style={{marginLeft: '5px'}}>
                                    { cartItems.reduce((acc, curr) => acc + curr.qty, 0) }
                                </Badge>
                            ) }</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/login">
                            <Nav.Link><FaUser/> Sign In</Nav.Link>
                        </LinkContainer>
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header