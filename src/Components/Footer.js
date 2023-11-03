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
// import imgl from '../image/logo/Correction-4-removebg-preview.png';
import FotterLogo from '../image/FooLogo.png'
import { Link } from 'react-router-dom';


const Footer = () => {

    return (
        <>
            <Card sx={{ display: 'flex',backgroundColor:"#808080" ,justifyContent: "space-between",  flexWrap: "wrap" }}>
                <CardMedia
                    className='footer-logo'
                    component="img"
                    sx={{ width:"14%", height:"12%", marginLeft:"80px"}}
                    image={FotterLogo}
                    alt="Live from space album cover"
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1', width: "100%" }}>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Box sx={{ backgroundColor: "white", width: "2px", height: "27px" }} ></Box>
                            <Typography color="white" component="div" variant="h6" m="6px">
                                Quick Links
                            </Typography>
                        </Box>
                        <Typography sx={{ borderBottom: "1px dashed white" }} fontSize="15px" p="2px 0px" variant="subtitle1" color="white" component="div">
                            <Link to="/" className='flink'>
                                Home
                            </Link>
                        </Typography>
                        <Typography sx={{ borderBottom: "1px dashed white" }} fontSize="15px" p="2px 0px" variant="subtitle1" color="white" component="div">
                            <Link to="/about" className='flink'>
                                About Us
                            </Link>
                        </Typography>
                        <Typography sx={{ borderBottom: "1px dashed white" }} fontSize="15px" p="2px 0px" variant="subtitle1" color="white" component="div">
                            <Link to="/broadband" className='flink'>
                                For Individual
                            </Link>
                        </Typography>
                        <Typography sx={{ borderBottom: "1px dashed white" }} fontSize="15px" p="2px 0px" variant="subtitle1" color="white" component="div">
                            <Link to="/internetleaseline" className='flink'>
                                For Business
                            </Link>
                        </Typography>
                    </CardContent>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1', width: "100%" }}>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Box sx={{ backgroundColor: "white", width: "2px", height: "27px" }} ></Box>
                            <Typography color="white" component="div" variant="h6" m="6px">
                                Helpful Links
                            </Typography>
                        </Box>
                        <Typography sx={{ borderBottom: "1px dashed white", cursor: 'pointer' }} fontSize="15px" p="2px 0px" variant="subtitle1" color="white" component="div">
                            <Link to="/terms-conditions" className='flink'>
                                Terms and Conditions
                            </Link>
                        </Typography>
                        <Typography sx={{ borderBottom: "1px dashed white", cursor: 'pointer' }} fontSize="15px" p="2px 0px" variant="subtitle1" color="white" component="div">
                            <Link to="/privacy" className='flink'>
                                Privacy Policy
                            </Link>
                        </Typography>
                        <Typography sx={{ borderBottom: "1px dashed white", cursor: 'pointer' }} fontSize="15px" p="2px 0px" variant="subtitle1" color="" component="div">
                            <Link to="/privacy" className='flink'>
                                Refund Policy
                            </Link>
                        </Typography>
                        <Typography sx={{ borderBottom: "1px dashed white", cursor: 'pointer' }} fontSize="15px" p="2px 0px" variant="subtitle1" color="" component="div">
                            <Link to="/contact" className='flink'>
                                Contact Us
                            </Link>
                        </Typography>
                    </CardContent>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', marginRight:"30px" }}>
                    <CardContent sx={{ flex: '1', width: "100%" }}>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Box sx={{ backgroundColor: "white", width: "2px", height: "27px" }} ></Box>
                            <Typography color="white" component="div" variant="h6" m="8px">
                                Connect Us
                            </Typography>
                        </Box>
                        <Typography className='footer-lineHight' variant="subtitle1" fontSize="15px" color="white" >
                            Dominic Networks Pvt. Ltd. 
                        </Typography>
                        <Typography className='footer-lineHight' variant="subtitle1" fontSize="15px" color="white" >
                            Head Office: H.N. 502 , Tulsi Park ,Near Lions <br /> Eye Hospital, Balrampur-271201 U.P. (India)
                        </Typography>
                        <Typography className='footer-lineHight' variant="subtitle1" fontSize="15px" color="white" >
                            Corporate Office: A-36, Sector-63 Noida Uttar Pradesh
                        </Typography>
                        <Link className='flink' to="tel: 9838022833">
                            <Typography className='footer-lineHight' variant="subtitle1" fontSize="15px" >
                                Call Us: +91-9838022833
                            </Typography>
                        </Link>
                    </CardContent>
                </Box>
            </Card>
            <Box className="footer-container-icons" sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", borderTop: "2px solid #fff", backgroundColor: "#808080", p: "0.1rem 2rem" }}>
                <Typography sx={{ color: "white", fontSize: "15px" }}>
                    All Right Reserved. ©2023 Dominic Networks.
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: "space-between" }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", gap: "15px", alignItems: "center" }}>
                        <Typography sx={{ color: "white", fontSize: "15px" }}>
                            Follow Us :
                        </Typography>
                        <a href='https://www.facebook.com/dnpl.wani' target="_blank" rel="noreferrer">
                            <FacebookRoundedIcon className='footer-icon' sx={{ color: "#fff", width: "35px", height: "35px", padding: "1px", borderRadius: "50%", cursor: "pointer" }} />
                        </a>
                        <a href='https://www.youtube.com/@DominicNetworks' target="_blank" rel="noreferrer">
                            <YouTubeIcon className='footer-icon' sx={{ color: "#fff", width: "55px", height: "55px", padding: "10px", borderRadius: "50%", cursor: "pointer" }} />
                        </a>
                        <a href='https://www.instagram.com/dnpl.wani/' target="_blank" rel="noreferrer">
                            <InstagramIcon className='footer-icon'  sx={{ color: "#fff", width: "40px", height: "40px", padding: "5px", borderRadius: "50%", cursor: "pointer" }} />
                        </a>
                        <a href='https://www.linkedin.com/' target="_blank" rel="noreferrer">
                            <LinkedInIcon className='footer-icon'  sx={{ color: "#fff", width: "40px", height: "40px", padding: "5px", borderRadius: "50%", cursor: "pointer" }} />
                        </a>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Footer;



