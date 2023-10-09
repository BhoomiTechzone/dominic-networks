import * as React from 'react';
import { useState } from 'react';
import './navbar.css';
import logo from '../image/logo/logo.png'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';


const SecondNavbar = () => {

    const [bar, setbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 100) {
            setbar(true)
        } else {
            setbar(false)
        }
    }
    window.addEventListener('scroll', changeBackground);


    return (
        <div>
            <Navbar expand="lg" sticky='' fixed="top"  className={bar ? 'navbar active' : 'navbar second-nav'}>
                <Container fluid>
                    <Navbar.Brand href="/">
                        <img src={logo} alt="" height="60px" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">

                        <Nav
                            className="me-auto my-2 my-lg-0"
                            navbarScroll
                        >
                            <Nav.Link className='NavLink' href="/" >Home</Nav.Link>
                            <Nav.Link href="/about">About Us</Nav.Link>
                            <NavDropdown title="For Individual" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="/broadband">Broadband</NavDropdown.Item>
                                <NavDropdown.Item href="/ott">OTT</NavDropdown.Item>
                                <NavDropdown.Item href="/iptv">IPTV</NavDropdown.Item>   
                            </NavDropdown>
                            <NavDropdown title="For Business" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="/internetleaseline">Internet Lease Line</NavDropdown.Item>
                                <NavDropdown.Item href="/cloudtelephony">Cloud Telephony</NavDropdown.Item>   
                            </NavDropdown>
                            <Nav.Link href="/contact">Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default SecondNavbar;















