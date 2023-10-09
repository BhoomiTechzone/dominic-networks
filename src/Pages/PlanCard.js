import * as React from 'react';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './PlanCard.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const PlanCard = () => {
    
    return (
        <>
            <div className="container">
                <OwlCarousel
                    className="owl-theme"
                    loop
                    nav
                    margin={10}
                    center
                    dots={false}
                    autoplay
                    responsive={
                        {
                            '1': {
                                items: 1
                            },
                            '1025': {
                                items: 3
                            }
                        }
                    }
                >
                    <div><div className="card s-card "   >
                        <Box sx={{ backgroundColor: "white", minWidth: "420px", minHeight: "550px", mt: "3rem", borderRadius: "10px" }}>
                            <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                <Typography sx={{color:"#c53122"}} variant='h4' marginBottom="2px">
                                    Standard
                                </Typography>
                                <Box>
                                    <Typography display={'inline'} sx={{ color: "white" }} variant='h3' color="text.secondary">
                                        ₹ 470
                                    </Typography>
                                    <Typography display={'inline'} sx={{ color: "white" }} variant='h6' color="text.secondary">
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
                    </div></div>
                    <div> <div className="card s-card "   >
                        <Box sx={{ backgroundColor: "white", minWidth: "420px", minHeight: "550px", mt: "3rem", borderRadius: "10px" }}>
                            <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <Typography sx={{color:"white"}} variant='h4' marginBottom="2px">
                                    Business
                                </Typography>
                                <Box>
                                    <Typography  display={'inline'} sx={{ color: "#c53122" }} variant='h3' color="text.secondary">
                                        ₹ 770
                                    </Typography>
                                    <Typography display={'inline'} sx={{ color: "#c53122" }} variant='h6' color="text.secondary">
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
                    </div></div>
                    <div> <div className="card s-card "   >
                        <Box sx={{ backgroundColor: "white", minWidth: "420px", minHeight: "550px", mt: "3rem", borderRadius: "10px" }}>
                            <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <Typography sx={{color:"#c53122"}} variant='h4'>
                                    Enterainment
                                </Typography>
                                <Box>
                                    <Typography display={'inline'} sx={{ color: "white" }} variant='h3' color="text.secondary">
                                        ₹ 930
                                    </Typography>
                                    <Typography display={'inline'} sx={{ color: "white" }} variant='h6' color="text.secondary">
                                        per Month
                                    </Typography>
                                </Box>
                            </CardContent>
                            <div className='button-container'>
                                <div>
                                    <button>Speed 500 Mbps</button>
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
                    </div></div>


                </OwlCarousel>
            </div>

        </>
    )
}

export default PlanCard;




