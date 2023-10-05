import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './Overview.css';
import boyImage from '../image/Untitled111-removebg-preview.png'

const Overview = () => {
    return (
        <Card className='over-view-container' >
            <CardContent sx={{ display: "flex", justifyContent:"space-evenly", alignItems:"center",  flexWrap:"wrap", width:"100%", height:"100%"}}>
                <Box className="overviewImage-container" >
                    <img src={boyImage} alt='dominicman' backgroundSize="cover" />
                </Box>
                <Box className="overviewText-container" >
                    <Typography display="inline" variant="h4">
                        SURF WITH
                        <Typography variant="h4" display="inline" sx={{ color: "#0D6EFD" }}> EASE</Typography>
                    </Typography>
                    <Typography variant="h5" mt="10px">
                        Stay Connected, Stay Ahead
                    </Typography>
                    <Box sx={{display:"flex", justifyContent:"space-between",flexWrap:"wrap", fontSize:"20px", mt:"20px"}}>
                        <ul>
                            <li>Affordable Pricing.</li>
                            <li>Unlimited download with all plans</li>
                            <li>4k & 8k apps with every plan</li>
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






