import * as React from 'react';
import Navbar from './Navbar';
import Overview from '../Pages/Overview';
import Plans from '../Pages/Plans';
import Streaming from '../Pages/Streaming';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState } from 'react';
import CardContent from '@mui/material/CardContent';
import '../Pages/PlanCard.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const feedData = [
  {
    review: 'Happy Customer',
    name: 'Naveen Kumar Gaur',
    feedback: 'we'
  },
  {
    img: '',
    title: '',
  },
  {
    img: '',
    title: '',
  },
  {
    img: '',
    title: '',
  },
  {
    img: '',
    title: '',
  },
  {
    img: '',
    title: '',
  },
];


const Home = () => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  var settings = {
    // className: "center",
    centerMode: true,
    autoplay: true,
    infinite: true,
    // centerPadding: "60px",
    slidesToShow: 2,
    speed: 1000,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className='home-container'>
        <Navbar />
      </div>
      <Overview />
      <Plans />
      <Streaming />
      <div className=''>
        <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ backgroundColor: "black", width: "2px", height: "30px" }} ></Box>
            <Typography color="black" component="div" variant="h5" m="8px">
              Fiber Plans
            </Typography>
          </Box>
          <Typography color="black">
            Experience lightning-fast internet with
          </Typography>
          <Typography color="black">
            Our Fiber Plans - Choose the right plan for your needs!
          </Typography>
        </Box>
        <div style={{ marginBottom: "3rem" }} className="container">
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

            <div className="card s-card "  >
              <Box sx={{ backgroundColor: "#f7f5f5", borderRadius: "10px", }}>
                <Typography sx={{ fontSize: "19px", textAlign: "center" }} color="text.secondary">
                  Standard
                </Typography>
                <Typography variant='h6' sx={{ textAlign: "center" }} >
                  Naveen Kumar Gaur
                </Typography>
                <Typography sx={{ fontSize: "19px", textAlign: "center" }} color="text.secondary">
                  Happy Customer
                </Typography>
              </Box>
            </div>

            <div className="card s-card">
              <Box sx={{ backgroundColor: "#f7f5f5", borderRadius: "10px", }}>
                <Typography sx={{ fontSize: "19px", textAlign: "center" }} color="text.secondary">
                  Standard
                </Typography>
                <Typography variant='h6' sx={{ textAlign: "center" }} >
                  Naveen Kumar Gaur
                </Typography>
                <Typography sx={{ fontSize: "19px", textAlign: "center" }} color="text.secondary">
                  Happy Customer
                </Typography>
              </Box>
            </div>

            <div className="card s-card ">
              <Box sx={{ backgroundColor: "#f7f5f5", borderRadius: "10px", }}>
                <Typography sx={{ fontSize: "19px", textAlign: "center" }} color="text.secondary">
                  Standard
                </Typography>
                <Typography variant='h6' sx={{ textAlign: "center" }} >
                  Gaur
                </Typography>
                <Typography sx={{ fontSize: "19px", textAlign: "center" }} color="text.secondary">
                  Happy Customer
                </Typography>
              </Box>
            </div>


            <div className="card s-card">
              <Box sx={{ backgroundColor: "#f7f5f5", borderRadius: "10px", }}>
                <Typography sx={{ fontSize: "19px", textAlign: "center" }} color="text.secondary">
                  Standard
                </Typography>
                <Typography variant='h6' sx={{ textAlign: "center" }} >
                  Kumar Gaur
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