import React from 'react';
import boyPic from '../image/Untitled111-removebg-preview.png'
import Navbars from '../Components/Navbar'
import "./Broadband.css"
import Form from './Form';
const Broadband = () => {
    return (
        <div>
            <Navbars/>

            <div className="bd-header">
      <div className="container">
          <h2>Broadband</h2>
          {/* <h2>Tools at your Fingertips</h2> */}
          {/* <h2>Internet Lease Line Solutions</h2>
          <h4>Get Connected Today!</h4> */}
      </div>

  </div>
            {/* <div className='broadband-container'>
                <Typography sx={{ pt: "10%", pl: "10%" }} color="#c53122" variant='h3' >Broadband</Typography>
            </div> */}
            <div>
                {/* <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: "2rem" }}>
                    <Box className="happyboy_Image_Container" sx={{ width: "50%" }}>
                        <img src={boyPic} alt='dominicMan' />
                    </Box>
                    <Box >
                        <Typography color="" textAlign="left" fontSize="18px" lineHeight="35px"  >
                            Thank you for choosing DOMINIC Broadband, your premier destination for reliable and lightning-fast broadband services. In today's digital landscape, we understand the paramount importance of staying connected.
                            Our internet services are meticulously crafted to cater to your specific needs, whether you're a home user seeking high-speed streaming and gaming experiences or a business professional reliant on flawless online operations. With DOMINIC Broadband, you can count on uninterrupted connectivity, blazing speeds, and limitless data, all made possible by our cutting-edge technology and state-of-the-art infrastructure.
                            We believe that staying connected is the key to success in the digital age, and our dependable broadband services enable you to reach the next level of internet performance. Embrace a world of virtually limitless opportunities as you experience the seamless connectivity we offer.
                            Join us today and embark on a journey to discover the future of connectivity.
                        </Typography>
                    </Box>
                </Box> */}
                <div className="container ct-content">
          <div className="row">
          <div className="col-lg-7">
            <div className="ct-content-left">
              <h2>Broadband</h2>
              <p>
              Thank you for choosing DOMINIC Broadband, your premier destination for reliable and lightning-fast broadband services. In today's digital landscape, we understand the paramount importance of staying connected.
                            Our internet services are meticulously crafted to cater to your specific needs, whether you're a home user seeking high-speed streaming and gaming experiences or a business professional reliant on flawless online operations. With DOMINIC Broadband, you can count on uninterrupted connectivity, blazing speeds, and limitless data, all made possible by our cutting-edge technology and state-of-the-art infrastructure.
                            We believe that staying connected is the key to success in the digital age, and our dependable broadband services enable you to reach the next level of internet performance. Embrace a world of virtually limitless opportunities as you experience the seamless connectivity we offer.
                            Join us today and embark on a journey to discover the future of connectivity.</p>
            </div>
          </div>
          <div className="col-lg-5">
              <div className="ct-content-left-img">
                <img src={boyPic}  alt="" height="300px" width="90%" />
              </div>
          </div>
          </div>
        </div>
            </div>
            <Form/>
        </div>
    )
}

export default Broadband;