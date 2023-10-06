import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './Overview.css';
import lady from '../image/laptop women.PNG';
import gif from '../image/Enjoy.gif'

const Streaming = () => {
  return (
    <Card>
      <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", padding:"2rem 0px" }}>
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
      <CardContent sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", flexWrap: "wrap", width: "100%", height: "100%", marginBottom:"2rem" }}>
        <Box className="overviewImage-container" >
          <img src={lady} alt='dominicman' backgroundSize="cover" />
        </Box>
        <Box className="overviewText-container" >
        <img src={gif} alt='dominicgif' backgroundSize="cover" />
          </Box>
        
      </CardContent>
    </Card>
  )
}

export default Streaming;