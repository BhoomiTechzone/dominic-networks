import * as React from 'react';
import { useState } from 'react';
import './navbar.css';
import logo from '../image/logo/logo.png'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Navbars = () => {

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
      <Navbar expand="lg" sticky='' fixed="top" className={bar ? 'navbar active' : 'navbar'}>
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
               <Link to="/" className='flink'> Home </Link>
                </Nav.Link>
              <Nav.Link  >
              <Link to="/about" className='flink'>About Us</Link></Nav.Link>
              <NavDropdown title="For Individual" id="navbarScrollingDropdown">
                <NavDropdown.Item ><Link to="/broadband" className='flink'>Broadband </Link></NavDropdown.Item>
                <NavDropdown.Item ><Link to="/ott" className='flink'>OTT</Link></NavDropdown.Item>
                <NavDropdown.Item ><Link to="/iptv" className='flink'>IPTV</Link></NavDropdown.Item>  
              </NavDropdown>
              <NavDropdown title="For Business" id="navbarScrollingDropdown">
              <NavDropdown.Item ><Link to="/internetleaseline" className='flink'>Internet Lease Line</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link to="/cloudtelephony" className='flink'>Cloud Telephony</Link></NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Policy" id="navbarScrollingDropdown">
              <NavDropdown.Item ><Link to="/terms-conditions" className='flink'>Terms and Condition</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link to="/privacy" className='flink'>Privacy Policy</Link></NavDropdown.Item>
              </NavDropdown>
              <Nav.Link ><Link to="/contact" className='flink'>Contact</Link></Nav.Link>
              {/* <Nav.Link ><Link to="/ourcompany" className='flink'>Our company</Link></Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navbars;
