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
                    margin={15}
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
                    <div>
                        <div className="card s-card " >
                            <Box sx={{ backgroundColor: "white", mt: "2rem", borderRadius: "10px" }}>
                                <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                    <Typography sx={{ color: "#c53122" }} variant='h4' marginBottom="2px">
                                        Standard
                                    </Typography>
                                    <Box>
                                        <Typography display={'inline'} sx={{ color: "#c53122" }} variant='h3' color="text.secondary">
                                            ₹ 299
                                        </Typography>
                                        <Typography display={'inline'} sx={{ color: "#c53122" }} variant='h6' color="text.secondary">
                                            per Month
                                        </Typography>
                                    </Box>
                                </CardContent>
                                <div className='button-container'>
                                    <div>
                                        <button>Speed 10 MBPS</button>
                                    </div>
                                    <div className='detailsButton'>
                                        <button>Unlimited Data</button>
                                    </div>
                                    <div className='detailsButton'>
                                        <button>Unlimited Voice Call</button>
                                    </div>
                                    <div className='detailsButton'>
                                        <button>₹5700 Yearly</button>
                                    </div>
                                    <div className='detailsButton'>
                                        <button>❌ OTT + TV Channels</button>
                                    </div>
                                    <div>
                                        <button>GET STARTED</button>
                                    </div>
                                </div>
                            </Box>
                        </div>
                    </div>

                    <div>
                        <div className="card s-card " >
                            <Box sx={{ backgroundColor: "white", mt: "2rem", borderRadius: "10px" }}>
                                <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                    <Typography sx={{ color: "#c53122" }} variant='h4' marginBottom="2px">
                                        Standard
                                    </Typography>
                                    <Box>
                                        <Typography display={'inline'} sx={{ color: "#c53122" }} variant='h3' color="text.secondary">
                                            ₹ 399
                                        </Typography>
                                        <Typography display={'inline'} sx={{ color: "#c53122" }} variant='h6' color="text.secondary">
                                            per Month
                                        </Typography>
                                    </Box>
                                </CardContent>
                                <div className='button-container'>
                                    <div>
                                        <button>Speed 20 MBPS</button>
                                    </div>
                                    <div className='detailsButton'>
                                        <button>Unlimited Data</button>
                                    </div>
                                    <div className='detailsButton'>
                                        <button>Unlimited Voice Call</button>
                                    </div>
                                    <div className='detailsButton'>
                                        <button>₹6600 Yearly</button>
                                    </div>
                                    <div className='detailsButton'>
                                        <button>❌ OTT + TV Channels</button>
                                    </div>
                                    <div>
                                        <button>GET STARTED</button>
                                    </div>
                                </div>
                            </Box>
                        </div>
                    </div>
                    
                    <div>
                        <div className="card s-card " >
                            <Box sx={{ backgroundColor: "white", mt: "2rem", borderRadius: "10px" }}>
                                <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                    <Typography sx={{ color: "#c53122" }} variant='h4' marginBottom="2px">
                                        Standard
                                    </Typography>
                                    <Box>
                                        <Typography display={'inline'} sx={{ color: "#c53122" }} variant='h3' color="text.secondary">
                                            ₹ 499
                                        </Typography>
                                        <Typography display={'inline'} sx={{ color: "#c53122" }} variant='h6' color="text.secondary">
                                            per Month
                                        </Typography>
                                    </Box>
                                </CardContent>
                                <div className='button-container'>
                                    <div>
                                        <button>Speed 30 MBPS</button>
                                    </div>
                                    <div className='detailsButton'>
                                        <button>Unlimited Data</button>
                                    </div>
                                    <div className='detailsButton'>
                                        <button>Unlimited Voice Call</button>
                                    </div>
                                    <div className='detailsButton'>
                                        <button>₹7500 Yearly</button>
                                    </div>
                                    <div className='detailsButton'>
                                        <button>❌ OTT + TV Channels</button>
                                    </div>
                                    <div>
                                        <button>GET STARTED</button>
                                    </div>
                                </div>
                            </Box>
                        </div>
                    </div>

                    <div>
                        <div className="card s-card "   >
                            <Box sx={{ backgroundColor: "white", mt: "2rem", borderRadius: "10px" }}>
                                <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                    <Typography sx={{ color: "#c53122" }} variant='h4' marginBottom="2px">
                                        Business
                                    </Typography>
                                    <Box>
                                        <Typography display={'inline'} sx={{ color: "#c53122" }} variant='h3' color="text.secondary">
                                            ₹ 699
                                        </Typography>
                                        <Typography display={'inline'} sx={{ color: "#c53122" }} variant='h6' color="text.secondary">
                                            per Month
                                        </Typography>
                                    </Box>
                                </CardContent>
                                <div className='button-container'>
                                    <div>
                                        <button>Speed 30 MBPS</button>
                                    </div>
                                    <div className='detailsButton'>
                                        <button>Unlimited Data</button>
                                    </div>
                                    <div className='detailsButton'>
                                        <button>Unlimited Voice Call</button>
                                    </div>
                                    <div className='detailsButton'>
                                        <button>₹9800 Yearly</button>
                                    </div>
                                    <div className='detailsButton'>
                                        <button>OTT + TV Channels</button>
                                    </div>
                                    <div>
                                        <button>GET STARTED</button>
                                    </div>
                                </div>
                            </Box>
                        </div>
                    </div>

                    <div>
                        <div className="card s-card "   >
                            <Box sx={{ backgroundColor: "white", mt: "2rem", borderRadius: "10px" }}>
                                <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                    <Typography sx={{ color: "#c53122" }} variant='h4' marginBottom="2px">
                                        Business
                                    </Typography>
                                    <Box>
                                        <Typography display={'inline'} sx={{ color: "#c53122" }} variant='h3' color="text.secondary">
                                            ₹ 599
                                        </Typography>
                                        <Typography display={'inline'} sx={{ color: "#c53122" }} variant='h6' color="text.secondary">
                                            per Month
                                        </Typography>
                                    </Box>
                                </CardContent>
                                <div className='button-container'>
                                    <div>
                                        <button>Speed 50 MBPS</button>
                                    </div>
                                    <div className='detailsButton'>
                                        <button>Unlimited Data</button>
                                    </div>
                                    <div className='detailsButton'>
                                        <button>Unlimited Voice Call</button>
                                    </div>
                                    <div className='detailsButton'>
                                        <button>₹8400 Yearly</button>
                                    </div>
                                    <div className='detailsButton'>
                                        <button>❌ OTT + TV Channels</button>
                                    </div>
                                    <div>
                                        <button>GET STARTED</button>
                                    </div>
                                </div>
                            </Box>
                        </div>
                    </div>

                    <div>
                        <div className="card s-card "   >
                            <Box sx={{ backgroundColor: "white", mt: "2rem", borderRadius: "10px" }}>
                                <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                    <Typography sx={{ color: "#c53122" }} variant='h4' marginBottom="2px">
                                        Enterainment
                                    </Typography>
                                    <Box>
                                        <Typography display={'inline'} sx={{ color: "#c53122" }} variant='h3' color="text.secondary">
                                            ₹ 799
                                        </Typography>
                                        <Typography display={'inline'} sx={{ color: "#c53122" }} variant='h6' color="text.secondary">
                                            per Month
                                        </Typography>
                                    </Box>
                                </CardContent>
                                <div className='button-container'>
                                    <div>
                                        <button>Speed 50 MBPS</button>
                                    </div>
                                    <div className='detailsButton'>
                                        <button>Unlimited Data</button>
                                    </div>
                                    <div className='detailsButton'>
                                        <button>Unlimited Voice Call</button>
                                    </div>
                                    <div className='detailsButton'>
                                        <button>₹10700 Yearly</button>
                                    </div>
                                    <div className='detailsButton'>
                                        <button>OTT + TV Channels</button>
                                    </div>
                                    <div>
                                        <button>GET STARTED</button>
                                    </div>
                                </div>
                            </Box>
                        </div>
                    </div>

                    <div>
                        <div className="card s-card "   >
                            <Box sx={{ backgroundColor: "white", mt: "2rem", borderRadius: "10px" }}>
                                <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                    <Typography sx={{ color: "#c53122" }} variant='h4' marginBottom="2px">
                                        Enterainment
                                    </Typography>
                                    <Box>
                                        <Typography display={'inline'} sx={{ color: "#c53122" }} variant='h3' color="text.secondary">
                                            ₹ 899
                                        </Typography>
                                        <Typography display={'inline'} sx={{ color: "#c53122" }} variant='h6' color="text.secondary">
                                            per Month
                                        </Typography>
                                    </Box>
                                </CardContent>
                                <div className='button-container'>
                                    <div>
                                        <button>Speed 70 MBPS</button>
                                    </div>
                                    <div className='detailsButton'>
                                        <button>Unlimited Data</button>
                                    </div>
                                    <div className='detailsButton'>
                                        <button>Unlimited Voice Call</button>
                                    </div>
                                    <div className='detailsButton'>
                                        <button>₹11600 Yearly</button>
                                    </div>
                                    <div className='detailsButton'>
                                        <button>OTT + TV Channels</button>
                                    </div>
                                    <div>
                                        <button>GET STARTED</button>
                                    </div>
                                </div>
                            </Box>
                        </div>
                    </div>

                    <div>
                        <div className="card s-card "   >
                            <Box sx={{ backgroundColor: "white", mt: "2rem", borderRadius: "10px" }}>
                                <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                    <Typography sx={{ color: "#c53122" }} variant='h4' marginBottom="2px">
                                        Business
                                    </Typography>
                                    <Box>
                                        <Typography display={'inline'} sx={{ color: "#c53122" }} variant='h3' color="text.secondary">
                                            ₹ 799
                                        </Typography>
                                        <Typography display={'inline'} sx={{ color: "#c53122" }} variant='h6' color="text.secondary">
                                            per Month
                                        </Typography>
                                    </Box>
                                </CardContent>
                                <div className='button-container'>
                                    <div>
                                        <button>Speed 100 MBPS</button>
                                    </div>
                                    <div className='detailsButton'>
                                        <button>Unlimited Data</button>
                                    </div>
                                    <div className='detailsButton'>
                                        <button>Unlimited Voice Call</button>
                                    </div>
                                    <div className='detailsButton'>
                                        <button>₹10200 Yearly</button>
                                    </div>
                                    <div className='detailsButton'>
                                        <button>❌ OTT + TV Channels</button>
                                    </div>
                                    <div>
                                        <button>GET STARTED</button>
                                    </div>
                                </div>
                            </Box>
                        </div>
                    </div>

                    <div>
                        <div className="card s-card "   >
                            <Box sx={{ backgroundColor: "white", mt: "2rem", borderRadius: "10px" }}>
                                <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                    <Typography sx={{ color: "#c53122" }} variant='h4' marginBottom="2px">
                                       Enterainment
                                    </Typography>
                                    <Box>
                                        <Typography display={'inline'} sx={{ color: "#c53122" }} variant='h3' color="text.secondary">
                                            ₹ 999
                                        </Typography>
                                        <Typography display={'inline'} sx={{ color: "#c53122" }} variant='h6' color="text.secondary">
                                            per Month
                                        </Typography>
                                    </Box>
                                </CardContent>
                                <div className='button-container'>
                                    <div>
                                        <button>Speed 100 MBPS</button>
                                    </div>
                                    <div className='detailsButton'>
                                        <button>Unlimited Data</button>
                                    </div>
                                    <div className='detailsButton'>
                                        <button>Unlimited Voice Call</button>
                                    </div>
                                    <div className='detailsButton'>
                                        <button>₹12500 Yearly</button>
                                    </div>
                                    <div className='detailsButton'>
                                        <button>OTT + TV Channels</button>
                                    </div>
                                    <div>
                                        <button>GET STARTED</button>
                                    </div>
                                </div>
                            </Box>
                        </div>
                    </div>
                </OwlCarousel>
            </div>

        </>
    )
}

export default PlanCard;




