import React from 'react';
import './InternetLeaseLine.css';
import Form from './Form';
import img from '../image/ill/1.png';
import Count from './Count';
import SecondNavbar from '../Components/SecondNavbar';

export default function InternetLeaseLine() {
  return (
    <div>
      <SecondNavbar />

      <div className="" >
        <div className="ill-header">
            <div className="container">
                <h2>Unleash your Business' potential</h2>
                <h2>With Our Reliable and High-Speed</h2>
                <h2>Internet Lease Line Solutions</h2>
                <h4>Get Connected Today!</h4>
            </div>

        </div>
        <div className="container ill-content">
          <div className="row">
          <div className="col-lg-7">
            <div className="ill-content-left">
              <h2>Internet Lease Line (ILL)</h2>
              <p>Our Internet Lease Line (ILL) product is a dedicated, high-speed, symmetric data connection that provides exclusive and reliable access to the internet. Designed for businesses, government agencies, and other organizations that require fast and reliable internet access, we have a well connected underground fiber system spanning over 500 KMs in the NCR. On entering the business premises we connect our customers to the world wide web via a ring topology which provides for a better up time and limits redundancy. We have tie ups with major telecom partner in the industry and we provide for competitive pricing and a quicker delivery time with 24/7 customer support. With our ILL service, you can be assured of fast and reliable internet connectivity, enabling you to focus on your core business activities.</p>
            </div>
          </div>
          <div className="col-lg-5">
              <div className="ill-content-left-img">
                <img src={img} alt="" height="300px" width="90%" />
              </div>
          </div>
          </div>
        </div>
      </div>
      <Form/>
      <Count/>
    </div>
  )
}
