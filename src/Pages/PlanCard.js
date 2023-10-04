import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './PlanCard.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';



const PlanCard = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    var settings = {
        // className: "center",
        centerMode: true,
        autoplay: true,
        infinite: true,
        // centerPadding: "60px",
        slidesToShow: 2,
        speed: 1000,
        responsive: [
            {
                breakpoint: 2000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

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
                    <div > <div className="card s-card "   >
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
                    </div></div>
                    <div > <div className="card s-card "   >
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
                    </div></div>
                    <div > <div className="card s-card "   >
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
                    </div></div>


                </OwlCarousel>
            </div>

        </>
    )
}

export default PlanCard;




