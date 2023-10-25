import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PlanCard from '../Pages/PlanCard';
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Plans = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])

    return (
        <div className='container-plans'>
            <Box data-aos="fade-down" sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                <Box sx={{ display: "flex", alignItems: "center", marginTop: "20px" }}>
                    <Box sx={{ backgroundColor: "white", width: "4px", height: "45px" }} ></Box>
                    <Typography color="white" component="div" variant="h4" m="8px">
                        Fiber Plans
                    </Typography>
                </Box>
                <Typography color="white" variant='h6' textAlign="center">
                    Experience lightning-fast internet with
                </Typography>
                <Typography color="white" variant='h6' fontWeight="bold" marginBottom="1rem" textAlign="center">
                    Our Fiber Plans - Choose the right plan for your needs!
                </Typography>
            </Box>
            <Box data-aos="fade-up" display='flex' justifyContent='center' className="plans-image-container">
                <PlanCard />
            </Box>
        </div>
    )
}

export default Plans;