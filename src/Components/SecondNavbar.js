import * as React from 'react';
import { useState } from 'react';
import './navbar.css';
import logo from '../image/logo/logo.png'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


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
      <Navbar expand="lg" sticky='' fixed="top" className={bar ? 'navbar act' : 'navbar second-nav'}>
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
              <Nav.Link className='NavLink' href="/" >
                <NavLink to="/" className='flink'> Home </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/about" className='flink'>About Us</NavLink>
              </Nav.Link>
              <NavDropdown title="For Individual" id="navbarScrollingDropdown">
                <NavDropdown.Item ><NavLink to="/broadband" className='flink'>Broadband </NavLink></NavDropdown.Item>
                <NavDropdown.Item ><NavLink to="/ott" className='flink'>OTT</NavLink></NavDropdown.Item>
                <NavDropdown.Item ><NavLink to="/iptv" className='flink'>IPTV</NavLink></NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="For Business" id="navbarScrollingDropdown">
                <NavDropdown.Item ><NavLink to="/internetleaseline" className='flink'>Internet Lease Line</NavLink></NavDropdown.Item>
                <NavDropdown.Item ><NavLink to="/cloudtelephony" className='flink'>Cloud Telephony</NavLink></NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Policy" id="navbarScrollingDropdown">
                <NavDropdown.Item ><NavLink to="/terms-conditions" className='flink'>Terms and Condition</NavLink></NavDropdown.Item>
                <NavDropdown.Item ><NavLink to="/privacy" className='flink'>Privacy Policy</NavLink></NavDropdown.Item>
              </NavDropdown>
              <Nav.Link ><NavLink to="/contact" className='flink'>Contact</NavLink></Nav.Link>
              {/* <Nav.Link ><Link to="/ourcompany" className='flink'>Our company</Link></Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default SecondNavbar;















