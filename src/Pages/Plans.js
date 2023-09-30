import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Plans = () => {
    return (
        <div className='container-plans'>
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box sx={{ backgroundColor: "white", width: "2px", height: "30px" }} ></Box>
                <Typography color="white" component="div" variant="h5" m="8px">
                    Fiber Plans
                </Typography>
                <Typography>
                  Experience lightning-fast internet with
                </Typography>
                <Typography>
                  Our Fiber Plans - Choose the right plan for your needs! 
                </Typography>
            </Box>
        </div>
    )
}

export default Plans;