import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import './navbar.css';
import logoimg from '../image/logo/logo short.png'
import logo from '../image/logo/logo.png'
import logolong from '../image/logo/logo long.png'
import { Link } from 'react-router-dom';
import { Button  ,Container,Nav, Navbar ,NavDropdown ,Form ,FormControl } from 'react-bootstrap';




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
            {/* <AppBar sx={{ backgroundColor: "transparent", boxShadow: "none" }} position="fixed" className={bar ? 'navbar active' : 'navbar'}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters >
                        <img src={logoimg} alt="" height="60px" />
                        <img src={logolong} alt="logo text" height="60px" />

                        <Box sx={{ display: "flex", gap:"20px"}}>
                            <Link to="/">
                              <Typography>Home</Typography>
                            </Link>
                            <Link to="/about">
                              <Typography>About</Typography>
                            </Link>
                            <Link to="/contact">
                              <Typography>Contact</Typography>
                            </Link>  
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar> */}

<Navbar  expand="lg" sticky ='' fixed="top" className={bar ?'navbar active':'navbar'}>
  <Container fluid>
    <Navbar.Brand href="/">
     <img src={logo} alt="" height="60px" />
                     {/*   <img src={logolong} alt="logo text" height="60px" /> */}

    </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
    
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px'   }}
        navbarScroll
      >
        <Nav.Link className='NavLink' href="/">Home</Nav.Link>
        <Nav.Link href="/about">About Us</Nav.Link>
       
        
        <NavDropdown title="For Individual" id="navbarScrollingDropdown">
          <NavDropdown.Item href="/broadband">Broadband</NavDropdown.Item>
          <NavDropdown.Item href="/ott">OTT</NavDropdown.Item>
          <NavDropdown.Item href="/iptv">IPTV</NavDropdown.Item>
          {/* <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item> */}
        </NavDropdown>
        <NavDropdown title="For Business" id="navbarScrollingDropdown">
          <NavDropdown.Item href="/internetleaseline">Internet Lease Line</NavDropdown.Item>
          <NavDropdown.Item href="/cloudtelephony">Cloud Telephony</NavDropdown.Item>
          {/* <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item> */}
        </NavDropdown>
        <Nav.Link href="/contact">Contact Us</Nav.Link>
        {/* <Nav.Link href="#" disabled>
          Link
        </Nav.Link> */}
      </Nav>

      {/* <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form> */}
      {/* {auth ?  */}
      {/* <Nav>
       
        <Nav.Link href="/login" >logout </Nav.Link> 
        </Nav> */}
        {/* : */}
      {/* <Nav>
      <Nav.Link href="/login">Login</Nav.Link>
        <Nav.Link href="/signup">Sign Up</Nav.Link> 
      </Nav> */}
      {/* } */}
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}

export default Navbars;




