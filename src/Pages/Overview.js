
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import mob from '../image/Untitled111-removebg-preview (1).png'


const Overview = () => {
    return (
        <Card sx={{}}>
            <CardContent sx={{ display: "flex", height: "60vh" }}>
                <Box>
                    <img src={mob} alt="" height="400px" />
                </Box>
                <Box pt={10}>
                    <Typography display="inline" variant="h3">
                        SURF WITH
                        <Typography variant="h3" display="inline" sx={{ color: "warning.main" }}> EASE</Typography>
                    </Typography>
                    <Typography variant="h5">
                        Stay Connected, Stay Ahead
                    </Typography>
                    <Box sx={{display:"flex", justifyContent:"space-between", border:"1px solid red", width:"50vw", fontSize:"24px"}}>
                        <ul>
                            <li>Affordable Pricing.</li>
                            <li>Unlimited download with all plans</li>
                            <li>4k & 8k apps with every plan</li>
                        </ul>
                        <ul>
                           <li>Free OTT apps with every plan</li>
                           <li>Free 300+ Tv Channels with every plan</li>
                        </ul>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    )
}

export default Overview;






