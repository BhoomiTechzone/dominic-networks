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


const itemData = [
  {
    img: 'https://m.media-amazon.com/images/M/MV5BN2RjZDJhYzUtOTQ5Yy00OWM3LWE5OTctM2Y0YWVmNzAzODllXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_SX300.jpg',
    title: 'movie1',
  },
  {
    img: 'https://m.media-amazon.com/images/M/MV5BNDA1ODE0MmYtOTkwYy00YzQ4LWI1MmMtNmVmMmE1MTJmMGU1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
    title: 'movie2',
  },
  {
    img: 'https://m.media-amazon.com/images/M/MV5BNmQ3MThkOWEtNTA0NC00YzI2LWIxZjEtZjdlZTVmNzQ2ZGViXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg',
    title: 'movie3',
  },
  {
    img: 'https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg',
    title: 'movie4',
  },
  {
    img: 'https://m.media-amazon.com/images/M/MV5BNTcwMjUwYTQtYTRiYy00ZmNmLWFmNDQtYzQwZTExYjMzZTRiXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg',
    title: 'movie5',
  },
  {
    img: 'https://m.media-amazon.com/images/M/MV5BYjQ0YTdhZDctYzg5YS00NTNkLThiOWYtNDI5OTYzMGRkYWUyXkEyXkFqcGdeQXVyOTIxMzQ0NzU@._V1_SX300.jpg',
    title: 'movie6',
  },
];


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
        <Box data-aos="fade-down" sx={{ display: "flex", alignItems: "center", flexDirection: "column", m: "2rem 0px" }}>
          <Typography color="" variant='h4' textAlign="center">
            What Our Customers are Saying
          </Typography>
        </Box>
        <div style={{ marginBottom: "0rem" }} >
          <OwlCarousel
            className="owl-theme"
            loop
            nav
            margin={10}
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
            <div style={{ boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.35)", height: "250px", margin: "40px" }} className="card s-card "  >
              <Box sx={{ borderRadius: "10px", paddingTop: "2rem" }}>
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
            
            <div style={{ boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.35)", height: "250px", margin: "40px" }} className="card s-card">
              <Box sx={{ padding: "10px 20px", borderRadius: "10px", paddingTop: "2rem" }}>
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

            <div style={{ boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.35)", height: "250px", margin: "40px" }} className="card s-card ">
              <Box sx={{ padding: "10px 20px", borderRadius: "10px", paddingTop: "2rem" }}>
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

            <div style={{ boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.35)", height: "250px", margin: "40px" }} className="card s-card">
              <Box sx={{ padding: "10px 20px", borderRadius: "10px", paddingTop: "2rem" }}>
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
        <div style={{ backgroundColor: "#c53122" }}>
          <h2 style={{ color: "white", textAlign: "center", paddingTop: "20px" }}>Enjoy Sports, Movies, TV Shows & More.</h2>
          <Box sx={{ display: "flex", justifyContent: "center", gap: "15px", padding: "3rem 0px", cursor: "pointer", overflow: "scroll", }}>
            {itemData.map((ele, key) => {
              return (
                <div data-aos="zoom-in-up" key={key} style={{ textAlign: "center" }}>
                  <img src={ele.img} alt={ele.title} width="200px" height="300px" marginLeft="20px" />
                </div>
              )
            })}
          </Box>
        </div>
      </div>
    </>
  )
}

export default Home