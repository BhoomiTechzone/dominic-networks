
import * as React from 'react';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './PlanCard.css';


const PlanCard = () => {

    return (
        <Box className="main-planCard-container">
            <button className='pre-btn'><p>&lt;</p></button>
            <button className='next-btn'><p>&gt;</p></button>
            <Box className="plans-container" >
                <Box sx={{ backgroundColor: "white", minWidth: "420px", minHeight: "550px", mt: "3rem", borderRadius: "10px" }}>
                    <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <Typography variant='h5'>
                            Standard
                        </Typography>
                        <Box>
                            <Typography display={'inline'} sx={{ color: "orange" }} variant='h3' color="text.secondary">
                                ₹ 470
                            </Typography>
                            <Typography display={'inline'} sx={{ color: "orange" }} variant='h6' color="text.secondary">
                                per Month
                            </Typography>
                        </Box>
                    </CardContent>
                    <div className='button-container'>
                        <div>
                            <button>Speed 200 Mbps</button>
                        </div>
                        <div className='detailsButton'>
                            <button>Unlimited Data</button>
                        </div>
                        <div className='detailsButton'>
                            <button>Unlimited Voice Call</button>
                        </div>
                        <div className='detailsButton'>
                            <button>300+ Live Channels</button>
                        </div>
                        <div className='detailsButton'>
                            <button>Free OTT Bonanza</button>
                        </div>
                        <div>
                            <button>GET STARTED</button>
                        </div>
                    </div>
                </Box>

                <Box sx={{ backgroundColor: "white", minWidth: "420px", minHeight: "550px", mt: "3rem", borderRadius: "10px" }}>
                    <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <Typography variant='h5'>
                            Business
                        </Typography>
                        <Box>
                            <Typography display={'inline'} sx={{ mb: 1.5, color: "orange" }} variant='h3' color="text.secondary">
                                ₹ 470
                            </Typography>
                            <Typography display={'inline'} sx={{ mb: 1.5, color: "orange" }} variant='h6' color="text.secondary">
                                per Month
                            </Typography>
                        </Box>
                    </CardContent>
                    <div className='button-container'>
                        <div>
                            <button>Speed 300 Mbps</button>
                        </div>
                        <div className='detailsButton'>
                            <button>Unlimited Data</button>
                        </div>
                        <div className='detailsButton'>
                            <button>Unlimited Voice Call</button>
                        </div>
                        <div className='detailsButton'>
                            <button>300+ Live Channels</button>
                        </div>
                        <div className='detailsButton'>
                            <button>Free OTT Bonanza</button>
                        </div>
                        <div>
                            <button>GET STARTED</button>
                        </div>
                    </div>
                </Box>

                <Box sx={{ backgroundColor: "white", minWidth: "420px", minHeight: "550px", mt: "3rem", borderRadius: "10px" }}>
                    <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <Typography variant='h5'>
                            Standard
                        </Typography>
                        <Box>
                            <Typography display={'inline'} sx={{ mb: 1.5, color: "orange" }} variant='h3' color="text.secondary">
                                ₹ 470
                            </Typography>
                            <Typography display={'inline'} sx={{ mb: 1.5, color: "orange" }} variant='h6' color="text.secondary">
                                per Month
                            </Typography>
                        </Box>
                    </CardContent>
                    <div className='button-container'>
                        <div>
                            <button>Speed 200 Mbps</button>
                        </div>
                        <div className='detailsButton'>
                            <button>Unlimited Data</button>
                        </div>
                        <div className='detailsButton'>
                            <button>Unlimited Voice Call</button>
                        </div>
                        <div className='detailsButton'>
                            <button>300+ Live Channels</button>
                        </div>
                        <div className='detailsButton'>
                            <button>Free OTT Bonanza</button>
                        </div>
                        <div>
                            <button>GET STARTED</button>
                        </div>
                    </div>
                </Box>
            </Box>
        </Box>
    )
}

export default PlanCard;




