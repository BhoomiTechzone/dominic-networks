import * as React from 'react';
import Navbar from './Navbar';
import Overview from '../Pages/Overview';
import Plans from '../Pages/Plans';
import Streaming from '../Pages/Streaming';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import '../Pages/PlanCard.css';
import OwlCarousel from 'react-owl-carousel';
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const Home = () => {

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
            What Our Customers are Saying
          </Typography>
        </Box>
        <div style={{ marginBottom: "0rem" }} >
          <OwlCarousel
            className="owl-theme"
            loop
            nav
            margin={8}
            center
            dots={false}
            autoplay
            responsive={
              {
                '1': {
                  items: 1
                },
                '1025': {
                  items: 3
                }
              }

            }
          >
            <div style={{ boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.35)", margin: "0px 40px" }} className="card s-card "  >
              <Box sx={{ borderRadius: "10px", padding: "3rem", height: "240px" }}>
                <Typography sx={{ fontSize: "17px", textAlign: "center" }} color="text.secondary">
                  I've never experienced a single outage with Dominic Networks' s Fiber Internet and I can't thank them enough.
                </Typography>
                <Typography variant='h6' sx={{ textAlign: "center" }} >
                  Naveen Kumar Gaur
                </Typography>
                <Typography sx={{ fontSize: "19px", textAlign: "center" }} color="text.secondary">
                  Happy Customer
                </Typography>
              </Box>
            </div>
            
            <div style={{ boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.35)", margin: "0px 40px" }} className="card s-card">
              <Box sx={{ borderRadius: "10px", padding: "2rem" , height: "240px"}}>
                <Typography sx={{ fontSize: "17px", textAlign: "center" }} color="text.secondary">
                  Best Internet Fiber service in town, look no further than Dominic Networks. They've set the bar high for speed and reliability.
                </Typography>
                <Typography variant='h6' sx={{ textAlign: "center" }} >
                  Deepak Singh
                </Typography>
                <Typography sx={{ fontSize: "19px", textAlign: "center" }} color="text.secondary">
                  Happy Customer
                </Typography>
              </Box>
            </div>

            <div style={{ boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.35)", margin: "0px 40px" }} className="card s-card ">
              <Box sx={{ borderRadius: "10px", padding: "3rem", height: "240px" }}>
                <Typography sx={{ fontSize: "17px", textAlign: "center" }} color="text.secondary">
                  Awesome customer support, they fixed any issue with in given time
                </Typography>
                <Typography variant='h6' sx={{ textAlign: "center" }} >
                  Ankita
                </Typography>
                <Typography sx={{ fontSize: "19px", textAlign: "center" }} color="text.secondary">
                  Happy Customer
                </Typography>
              </Box>
            </div>

            <div style={{ boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.35)", margin: "0px 40px" }} className="card s-card">
              <Box sx={{ borderRadius: "10px", padding: "3rem" , height: "240px"}}>
                <Typography sx={{ fontSize: "17px", textAlign: "center" }} color="text.secondary">
                  Awesome customer support, they fixed any issue with in given time
                </Typography>
                <Typography variant='h6' sx={{ textAlign: "center" }} >
                  Adnna
                </Typography>
                <Typography sx={{ fontSize: "19px", textAlign: "center" }} color="text.secondary">
                  Happy Customer
                </Typography>
              </Box>
            </div>
          </OwlCarousel>
        </div>

      </div>
    </>
  )
}

export default Home