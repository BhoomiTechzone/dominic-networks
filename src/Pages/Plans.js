import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PlanCard from './PlanCard';

const Plans = () => {
    return (
        <div className='container-plans'>
            <Box sx={{ display: "flex", alignItems: "center", flexDirection:"column" }}>
                <Box sx={{ display: "flex", alignItems: "center", marginTop:"20px" }}>
                    <Box sx={{ backgroundColor: "#0D6EFD", width: "4px", height: "45px" }} ></Box>
                    <Typography color="white" component="div" variant="h4" m="8px">
                        Fiber Plans
                    </Typography>
                </Box>
                <Typography color="#0D6EFD" variant='h5' textAlign="center">
                    Experience lightning-fast internet with
                </Typography>
                <Typography color="white" variant='h5' fontWeight="bold" marginBottom="1rem" textAlign="center">
                    Our Fiber Plans - Choose the right plan for your needs!
                </Typography>
            </Box>
            <PlanCard />
        </div>
    )
}

export default Plans;