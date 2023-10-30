import * as React from 'react';
import Navbar from './Navbar';
import Overview from '../Pages/Overview';
import Plans from '../Pages/Plans';
import Streaming from '../Pages/Streaming';
import '../Pages/PlanCard.css';
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect, } from 'react';


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
    </>
  )
}

export default Home;










