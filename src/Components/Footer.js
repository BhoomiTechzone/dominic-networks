import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import imgl from '../image/logo/logo.png'
import { Link } from 'react-router-dom';


const Footer = () => {

    return (
        <>
            <Card sx={{ display: 'flex', justifyContent: "space-between", alignItems: "center", backgroundColor: "", flexWrap: "wrap", borderTop: "2px solid black" }}>
                <CardMedia
                    component="img"
                    sx={{ width: 420, height: 80 }}
                    image={imgl}
                    alt="Live from space album cover"
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1', width: "100%" }}>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Box sx={{ backgroundColor: "black", width: "2px", height: "25px" }} ></Box>
                            <Typography color="black" component="div" variant="h6" m="8px">
                                Quick Links
                            </Typography>
                        </Box>
                        <Typography sx={{ borderBottom: "1px dashed white" }} p="2px 0px" variant="subtitle1" color="" component="div">
                            <Link to="/" className='flink'>
                                Home
                            </Link>
                        </Typography>
                        <Typography sx={{ borderBottom: "1px dashed white" }} p="2px 0px" variant="subtitle1" color="" component="div">
                            <Link to="/about" className='flink'>
                                About Us
                            </Link>
                        </Typography>
                        <Typography sx={{ borderBottom: "1px dashed white" }} p="2px 0px" variant="subtitle1" color="" component="div">
                            <Link to="/broadband" className='flink'>
                                For Individual
                            </Link>
                        </Typography>
                        <Typography sx={{ borderBottom: "1px dashed white" }} p="2px 0px" variant="subtitle1" color="" component="div">
                            <Link to="/internetleaseline" className='flink'>
                                For Business
                            </Link>
                        </Typography>
                        <Typography sx={{ borderBottom: "1px dashed white" }} p="2px 0px" variant="subtitle1" color="" component="div">
                            <Link to="/contact" className='flink'>
                                Contact Us
                            </Link>
                        </Typography>
                    </CardContent>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1', width: "100%" }}>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Box sx={{ backgroundColor: "black", width: "2px", height: "25px" }} ></Box>
                            <Typography color="black" component="div" variant="h6" m="8px">
                                Helpful Links
                            </Typography>
                        </Box>
                        <Typography sx={{ borderBottom: "1px dashed white", cursor: 'pointer' }} p="2px 0px" variant="subtitle1" color="" component="div">
                            <Link to="/terms-conditions" className='flink'>
                                Terms and Conditions
                            </Link>
                        </Typography>
                        <Typography sx={{ borderBottom: "1px dashed white", cursor: 'pointer' }} p="2px 0px" variant="subtitle1" color="" component="div">
                            <Link to="/privacy" className='flink'>
                                Privacy Policy
                            </Link>
                        </Typography>
                        <Typography sx={{ borderBottom: "1px dashed white", cursor: 'pointer' }} p="2px 0px" variant="subtitle1" color="" component="div">
                            <Link to="/privacy" className='flink'>
                                Refund Policy
                            </Link>
                        </Typography>
                    </CardContent>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1', width: "100%" }}>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Box sx={{ backgroundColor: "black", width: "2px", height: "25px" }} ></Box>
                            <Typography color="black" component="div" variant="h6" m="8px">
                                Connect Us
                            </Typography>
                        </Box>
                        <Typography variant="subtitle1" color="" component="div">
                            <b>Dominic Networks Pvt. Ltd.</b> 
                        </Typography>
                        <Typography variant="subtitle1" color="" component="div">
                            <b>Head Office : </b> H.N. 502 , Tulsi Park ,Near Lions <br /> Eye Hospital, Balrampur-271201 U.P. (India)
                        </Typography>
                        <Typography variant="subtitle1" color="" component="div">
                            <b>Corporate Office : </b> A-36, Sector-63 Noida Uttar Pradesh
                        </Typography>
                        <Link className='flink' to="tel: 9838022833">
                            <Typography variant="subtitle1" >
                                <b >Call Us: +91-9838022833</b>
                            </Typography>
                        </Link>
                    </CardContent>
                </Box>
            </Card>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", borderTop: "4px solid #fff", backgroundColor: "", p: "0.5rem 2rem" }}>
                <Typography sx={{ color: "", fontSize: "15px" }} color="text.secondary">
                    All Right Reserved. ©2023 Dominic Networks.
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: "space-between" }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", gap: "20px", alignItems: "center" }}>
                        <Typography sx={{ color: "", fontSize: "15px" }} color="text.secondary">
                            Follow Us:
                        </Typography>
                        <a href='https://www.facebook.com/dnpl.wani' target="_blank" rel="noreferrer">
                            <FacebookRoundedIcon className='footer-icon' sx={{ color: "#212529", width: "40px", height: "40px", padding: "1px", borderRadius: "50%", cursor: "pointer" }} />
                        </a>
                        <a href='https://www.youtube.com/@DominicNetworks' target="_blank" rel="noreferrer">
                            <YouTubeIcon className='footer-icon' sx={{ color: "#212529", width: "60px", height: "60px", padding: "10px", borderRadius: "50%", cursor: "pointer" }} />
                        </a>
                        <a href='https://www.instagram.com/dnpl.wani/' target="_blank" rel="noreferrer">
                            <InstagramIcon className='footer-icon'  sx={{ color: "#212529", width: "45px", height: "45px", padding: "5px", borderRadius: "50%", cursor: "pointer" }} />
                        </a>
                        <a href='https://www.youtube.com/@DominicNetworks' target="_blank" rel="noreferrer">
                            <LinkedInIcon className='footer-icon'  sx={{ color: "#212529", width: "45px", height: "45px", padding: "5px", borderRadius: "50%", cursor: "pointer" }} />
                        </a>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Footer;



