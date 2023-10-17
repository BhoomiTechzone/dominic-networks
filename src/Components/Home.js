import * as React from 'react';
import Navbar from './Navbar';
import Overview from '../Pages/Overview';
import Plans from '../Pages/Plans';
import Streaming from '../Pages/Streaming';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import '../Pages/PlanCard.css';
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect,  } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Rating from '@mui/material/Rating';
import happy1 from '../image/HappyEmoji.jpg'


const Home = () => {

  const value = 5;

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])

  return (
    <>
      <div className='home-container'>
        <Navbar />
      </div>
      <Overview />
      <Plans />
      <Streaming />
      <div>
        <Box data-aos="fade-down" sx={{ display: "flex", alignItems: "center", flexDirection: "column", m: "2rem 0px 1rem" }}>
          <Typography color="" variant='h4' textAlign="center">
            Customer Testimonials
          </Typography>
          <Typography color="" variant='h5' textAlign="center">
            What Our Customers are Saying
          </Typography>
        </Box>


        <div style={{ margin: "2rem", display:'flex',flexWrap: "wrap", gap:"25px", overflow:"scroll"}} >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={happy1}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Rating name="read-only" value={value} readOnly />
            </CardActions>
          </Card>
          
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={happy1}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Rating name="read-only" value={value} readOnly />
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={happy1}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Rating name="read-only" value={value} readOnly />
            </CardActions>
          </Card>
          
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={happy1}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Rating name="read-only" value={value} readOnly />
            </CardActions>
          </Card>
        </div>
      </div>
    </>
  )
}

export default Home;










