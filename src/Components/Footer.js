import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import imgl from '../image/logo/logo.png'


const Footer = () => {

    return (
        <>
            <Card sx={{ display: 'flex', justifyContent: "space-between", backgroundColor: "black", flexWrap: "wrap" }}>
                <CardMedia
                    component="img"
                    sx={{ width: 420 , height:80}}
                    image={imgl}
                    alt="Live from space album cover"
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1' }}>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Box sx={{ backgroundColor: "white", width: "2px", height: "30px" }} ></Box>
                            <Typography color="white" component="div" variant="h5" m="8px">
                                Quick Links
                            </Typography>
                        </Box>
                        <Typography sx={{ borderBottom: "1px dashed white" }} p="2px 0px" variant="subtitle1" color="white" component="div">
                            Home
                        </Typography>
                        <Typography sx={{ borderBottom: "1px dashed white" }} p="2px 0px" variant="subtitle1" color="white" component="div">
                            About Us
                        </Typography>
                        <Typography sx={{ borderBottom: "1px dashed white" }} p="2px 0px" variant="subtitle1" color="white" component="div">
                            For Individual
                        </Typography>
                        <Typography sx={{ borderBottom: "1px dashed white" }} p="2px 0px" variant="subtitle1" color="white" component="div">
                            For Business
                        </Typography>
                        <Typography sx={{ borderBottom: "1px dashed white" }} p="2px 0px" variant="subtitle1" color="white" component="div">
                            Contact Us
                        </Typography>
                    </CardContent>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1' }}>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Box sx={{ backgroundColor: "white", width: "2px", height: "30px" }} ></Box>
                            <Typography color="white" component="div" variant="h5" m="8px">
                                Helpful Links
                            </Typography>
                        </Box>
                        <Typography sx={{ borderBottom: "1px dashed white", cursor: 'pointer' }} p="2px 0px" variant="subtitle1" color="white" component="div">
                            Terms and Conditions
                        </Typography>
                        <Typography sx={{ borderBottom: "1px dashed white", cursor: 'pointer' }} p="2px 0px" variant="subtitle1" color="white" component="div">
                            Privacy Policy
                        </Typography>
                        <Typography sx={{ borderBottom: "1px dashed white", cursor: 'pointer' }} p="2px 0px" variant="subtitle1" color="white" component="div">
                            Refund Policy
                        </Typography>
                    </CardContent>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1', width: "80%" }}>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Box sx={{ backgroundColor: "white", width: "2px", height: "30px" }} ></Box>
                            <Typography color="white" component="div" variant="h5" m="8px">
                                Connect Us
                            </Typography>
                        </Box>
                        <Typography variant="subtitle1" color="white" component="div">
                            <b>Dominic Networks</b> Pvt. Ltd.
                        </Typography>
                        <Typography variant="subtitle1" color="white" component="div">
                            <b>Head Office : </b> A-36, Sector-63 Noida Uttar Pradesh
                        </Typography>
                        <Typography variant="subtitle1" color="white" component="div">
                            <b>Call Us: +91-9838022833</b>
                        </Typography>
                    </CardContent>
                </Box>
            </Card>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", borderTop: "4px solid #0D6EFD", backgroundColor: "#212529", p: "2rem " }}>
                <Typography sx={{ color: "white", fontSize:"18px" }} color="text.secondary">
                    All Right Reserved. ©2023 Dominic Networks.
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: "space-between" }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", gap: "20px", alignItems: "center" }}>
                        <Typography sx={{ color: "white", fontSize:"18px" }} color="text.secondary">
                            Follow Us:
                        </Typography>
                        <a href='https://www.facebook.com/dnpl.wani' target="_blank" rel="noreferrer">
                          <FacebookRoundedIcon fontSize='large' sx={{ backgroundColor: "white", width: "40px", height: "40px", padding: "1px", borderRadius: "50%", cursor:"pointer" }} />
                        </a>
                        <a href='' target="_blank" rel="noreferrer">
                          <TwitterIcon fontSize='large' sx={{ backgroundColor: "white", width: "40px", height: "40px", padding: "10px", borderRadius: "50%", cursor:"pointer" }} />
                        </a>
                        <a href='https://www.instagram.com/dnpl.wani/' target="_blank" rel="noreferrer">
                          <InstagramIcon fontSize='large' sx={{ backgroundColor: "white", width: "40px", height: "40px", padding: "5px", borderRadius: "50%", cursor:"pointer" }} />
                        </a>
                        <a href='https://www.youtube.com/@DominicNetworks' target="_blank" rel="noreferrer">
                          <LinkedInIcon fontSize='large' sx={{ backgroundColor: "white", width: "40px", height: "40px", padding: "5px", borderRadius: "50%", cursor:"pointer" }} />
                        </a>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Footer;



