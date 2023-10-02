import React from 'react'
import Navbar from './Navbar'
import Overview from '../Pages/Overview'
import Plans from '../Pages/Plans'
import Streaming from '../Pages/Streaming'

const Home = () => {
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

export default Home