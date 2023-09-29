import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import { MenuItem, Select } from '@mui/material';
// import InputLabel from '@mui/material/InputLabel';
// import FormControl from '@mui/material/FormControl';
// import NativeSelect from '@mui/material/NativeSelect';


const Footer = () => {

    return (
        <>
            <Card sx={{ display: 'flex', justifyContent: "space-between", backgroundColor: "black", flexWrap: "wrap" }}>
                <CardMedia
                    component="img"
                    sx={{ width: 251 }}
                    image="/static/images/cards/live-from-space.jpg"
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
                            <b>Call Us: +91-1111111111</b>
                        </Typography>
                    </CardContent>
                </Box>
            </Card>
            <Box sx={{ display: "flex", justifyContent: "space-between",alignItems:"center" ,flexWrap: "wrap", borderTop: "4px solid #9C27B0", backgroundColor: "#212529", p: "2rem " }}>
                <Typography sx={{ color: "white" }} variant='h6' color="text.secondary">
                    All Right Reserved. ©2023 Dominic Networks.
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: "space-between", width: "500px" }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", gap: "20px", alignItems: "center" }}>
                        <Typography sx={{ color: "white" }} variant='h6' color="text.secondary">
                            Follow Us:
                        </Typography>
                        <FacebookRoundedIcon fontSize='large' color="secondary" sx={{ backgroundColor: "white", width: "50px", height: "50px", padding: "1px", borderRadius: "50%" }} />
                        <TwitterIcon fontSize='large' color="secondary" sx={{ backgroundColor: "white", width: "50px", height: "50px", padding: "10px", borderRadius: "50%" }} />
                        <InstagramIcon fontSize='large' color="secondary" sx={{ backgroundColor: "white", width: "50px", height: "50px", padding: "5px", borderRadius: "50%" }} />
                        <LinkedInIcon fontSize='large' color="secondary" sx={{ backgroundColor: "white", width: "50px", height: "50px", padding: "5px", borderRadius: "50%" }} />
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Footer;



