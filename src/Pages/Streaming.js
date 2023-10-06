import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './Overview.css';
import lady from '../image/laptop women.PNG';
import gif from '../image/Enjoy.gif';
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Streaming = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])

  return (
    <Card>
      <Box data-aos="fade-down" sx={{ display: "flex", alignItems: "center", flexDirection: "column", padding: "2rem 0px" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ backgroundColor: "#0D6EFD", width: "4px", height: "45px" }} ></Box>
          <Typography color="black" component="div" variant="h4" m="8px">
            Now Streaming
          </Typography>
        </Box>
        <Typography color="#0D6EFD" variant='h4' textAlign="center">
          Experience lightning-fast internet with
        </Typography>
      </Box>
      <CardContent sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", flexWrap: "wrap", width: "100%", height: "100%", marginBottom: "2rem" }}>
        <Box data-aos="fade-right" className="overviewImage-container" >
          <img src={lady} alt='dominicman' backgroundSize="cover" />
        </Box>
        <Box data-aos="fade-left" className="overviewText-container" >
          <img src={gif} alt='dominicgif' backgroundSize="cover" />
        </Box>
      </CardContent>
    </Card>
  )
}

export default Streaming;