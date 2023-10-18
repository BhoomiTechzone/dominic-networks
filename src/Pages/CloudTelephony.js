import React from 'react';
import './CloudTelephony.css'
import Form from './Form';
import img from '../image/cloudconnect.png'
import SecondNavbar from '../Components/SecondNavbar';

function CloudTelephony(props) {
  return (
    <div>
      <SecondNavbar />
      <div className="" >
        <div className="ct-header">
          <div className="container">
            <h2>Powerful Communication</h2>
            <h2>Tools at your Fingertips</h2>
            {/* <h2>Internet Lease Line Solutions</h2>
          <h4>Get Connected Today!</h4> */}
          </div>

        </div>
        <div className="container ct-content">
          <div className="row">
            <div className="col-lg-7">
              <div className="ct-content-left">
                <h2>Cloud Telephony</h2>
                <p>
                  Cloud telephony is a communications technology that leverages the internet to manage voice and messaging services. It replaces conventional phone systems with virtual, scalable, and cost-effective solutions hosted in the cloud. This enables businesses to handle calls, text messages, and other communication tasks with increased flexibility and efficiency. Key features include virtual phone numbers, automated responses, and intelligent call routing. Cloud telephony eliminates the need for physical phone hardware and allows for easy integration with other digital tools and platforms. It's particularly valuable for businesses seeking to enhance customer service, streamline communications, and reduce infrastructure costs.</p>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="ct-content-left-img">
                <img src={img} alt="" height="400px" width="90%" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Form />
    </div>
  );
}

export default CloudTelephony;