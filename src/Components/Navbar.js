import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import './navbar.css';
import logoimg from '../image/logo/logo short.png'
import logolong from '../image/logo/logo long.png'
import { Link } from 'react-router-dom';




const Navbar = () => {

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
            <AppBar sx={{ backgroundColor: "transparent", boxShadow: "none" }} position="fixed" className={bar ? 'navbar active' : 'navbar'}>
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
                            <Link to="/broadband">
                              <Typography>Broadband</Typography>
                            </Link>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    )
}

export default Navbar;




