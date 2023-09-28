import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';


const Footer = () => {
    const theme = useTheme();
    return (
        <>
            <Card sx={{ display: 'flex',justifyContent:"space-between" , backgroundColor:"black"}}>
                <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image="/static/images/cards/live-from-space.jpg"
                    alt="Live from space album cover"
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography color="white" component="div" variant="h5">
                           | Live From Space
                        </Typography>
                        <Typography variant="subtitle1" color="white" component="div">
                            Mac Miller
                        </Typography>
                    </CardContent>   
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography color="white" component="div" variant="h5">
                           | Live From Space
                        </Typography>
                        <Typography variant="subtitle1" color="white" component="div">
                            Mac Miller
                        </Typography>
                    </CardContent>   
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1' }}>
                        <Typography color="white" component="div" variant="h5">
                           | Live From Space
                        </Typography>
                        <Typography variant="subtitle1" color="white" component="div">
                            Mac Miller
                        </Typography>
                        <Typography variant="subtitle1" color="white" component="div">
                            Mac Miller
                        </Typography>
                        <Typography variant="subtitle1" color="white" component="div">
                            Mac Miller
                        </Typography>
                        <Typography variant="subtitle1" color="white" component="div">
                            Mac Miller
                        </Typography>
                    </CardContent>   
                </Box>
            </Card>
        </>
    )
}

export default Footer;



