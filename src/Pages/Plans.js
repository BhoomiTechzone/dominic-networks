import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PlanCard from './PlanCard';

const Plans = () => {
    return (
        <div className='container-plans'>
            <Box sx={{ display: "flex", alignItems: "center", flexDirection:"column" }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box sx={{ backgroundColor: "#c53122", width: "2px", height: "30px" }} ></Box>
                    <Typography color="white" component="div" variant="h4" >
                    Fiber Plans
                    </Typography>
                </Box>
                <Typography color="#c53122" variant="h5" >
                    Experience lightning-fast internet with
                </Typography>
                <Typography color="white" component="div" variant="h4">
                    Our Fiber Plans - Choose the right plan for your needs!
                </Typography>
            </Box>
            <PlanCard />
        </div>
    )
}

export default Plans;