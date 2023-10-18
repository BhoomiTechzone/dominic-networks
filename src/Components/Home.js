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
import { useEffect, } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Rating from '@mui/material/Rating';
import happy1 from '../image/HappyEmoji.jpg'


const Home = () => {

  const value = 5;
  const four = 4;

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


        <div data-aos="fade-up" className='happy-customer-testimonials' style={{ margin: "2rem", display: 'flex', gap: "25px", overflow: "scroll" }} >
          <Card sx={{ minWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={happy1}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Dhanvi Shetty
              </Typography>
              <Typography variant="body2" color="text.secondary">
                My experience from Dominic fiber internet connection is very powerful this Dominic fiber internet service is very fast i love Dominic...
              </Typography>
            </CardContent>
            <CardActions>
              <Rating name="read-only" value={value} readOnly />
            </CardActions>
          </Card>

          <Card sx={{ minWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={happy1}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Sushil
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Reasonable price and good service with awesome speed.
              </Typography>
            </CardContent>
            <CardActions>
              <Rating name="read-only" value={value} readOnly />
            </CardActions>
          </Card>

          <Card sx={{ minWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={happy1}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Deepak Yadav
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Much Batter than other internet provider I'm Used Ani, den and many but satisfactory Broadband is Dominic I'm using it over 1year its best.
              </Typography>
            </CardContent>
            <CardActions>
              <Rating name="read-only" value={four} readOnly />
            </CardActions>
          </Card>

          <Card sx={{ minWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={happy1}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Shyam
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Very good performance for 1 year so very happy, Best broadband provider for Dominic was..
              </Typography>
            </CardContent>
            <CardActions>
              <Rating name="read-only" value={value} readOnly />
            </CardActions>
          </Card>

          <Card sx={{ minWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={happy1}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Salman Siddiui
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Good speed and good services i m using 2 year Dominic broadband in Sector 63 100mbps speed wow.....
              </Typography>
            </CardContent>
            <CardActions>
              <Rating name="read-only" value={four} readOnly />
            </CardActions>
          </Card>

          <Card sx={{ minWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={happy1}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Rinku
              </Typography>
              <Typography variant="body2" color="text.secondary">
                I am using for Dominic broadband connection I am satisfied Dominic connection yearly plan 100 mbps proper speed am very happy for connection.
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










