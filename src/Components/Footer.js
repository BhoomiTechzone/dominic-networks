import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { MenuItem, Select } from '@mui/material';



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
                    <CardContent sx={{ flex: '1'}}>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Box sx={{ backgroundColor: "white", width: "2px", height: "30px" }} ></Box>
                            <Typography color="white" component="div" variant="h5" m="8px">
                              Quick Links
                            </Typography>
                        </Box>
                        <Typography sx={{borderBottom: "1px dashed white"}} variant="subtitle1" color="white" component="div">
                          Home
                        </Typography>
                        <Typography sx={{borderBottom: "1px dashed white"}} variant="subtitle1" color="white" component="div">
                          About Us
                        </Typography>
                        <Typography sx={{borderBottom: "1px dashed white"}} variant="subtitle1" color="white" component="div">
                          <Select
                            label="For Indvisible"
                          >
                          <MenuItem >OTT</MenuItem>
                          </Select>
                        </Typography>
                        <Typography sx={{borderBottom: "1px dashed white"}} variant="subtitle1" color="white" component="div">
                          Contact Us
                        </Typography>
                    </CardContent>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1', width: "80%" }}>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Box sx={{ backgroundColor: "white", width: "2px", height: "30px" }} ></Box>
                            <Typography color="white" component="div" variant="h5" m="8px">
                                Helpful Links
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
        </>
    )
}

export default Footer;



