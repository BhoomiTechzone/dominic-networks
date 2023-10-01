
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Overview.css'

const Overview = () => {
    return (
        <Card className='over-view-container' >
            <CardContent sx={{ display: "flex", justifyContent:"space-evenly", alignItems:"center",  flexWrap:"wrap", width:"100%", height:"100%"}}>
                <Box className="overviewImage-container" >
                    <img src='https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80' alt='dominicman' backgroundSize="cover" />
                </Box>
                <Box className="overviewText-container" >
                    <Typography display="inline" variant="h4">
                        SURF WITH
                        <Typography variant="h4" display="inline" sx={{ color: "warning.main" }}> EASE</Typography>
                    </Typography>
                    <Typography variant="h5" mt="10px">
                        Stay Connected, Stay Ahead
                    </Typography>
                    <Box sx={{display:"flex", justifyContent:"space-between",flexWrap:"wrap", fontSize:"24px", mt:"20px"}}>
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






