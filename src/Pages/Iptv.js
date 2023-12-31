import React from 'react';
import './iptv.css';
import Form from './Form';
import iptv1 from '../image/iptv1.jpg';
import iptv3 from '../image/iptv2.jpg';
import iptv4 from '../image/iptv4.jpg';
import SecondNavbar from '../Components/SecondNavbar';

function Iptv(props) {
  return (
    <div>
      <SecondNavbar />
      <div className="" >
        <div className="iptv-header">
          <div className="container">
          </div>
        </div>

        <div className="container iptv-content">
          <div className="row">
            <div className="col-lg-6">
              <div className="iptv-content-left">
                <h2>Internet Protocol Television (iptv)</h2>
                <p>
                  IPTV, short for Internet Protocol Television, is a cutting-edge technology that revolutionizes the way television and multimedia content is delivered and consumed. Unlike traditional cable or satellite TV, IPTV relies on internet protocols to transmit a wide array of content, including live TV channels, video-on-demand, and interactive services. Users can access IPTV on various devices such as smart TVs, computers, smartphones, and dedicated set-top boxes. To enjoy IPTV, individuals typically need a subscription and a stable high-speed internet connection. This technology offers an array of features like time-shifting, allowing users to pause, rewind, or record live TV, and extensive video-on-demand libraries for on-demand viewing. IPTV is known for its interactive capabilities, with on-screen menus, program guides, and content recommendations. It's widely used in diverse settings, including hotels, businesses, and residential areas, offering customized and high-quality digital content delivery in both standard-definition (SD) and high-definition (HD) formats. IPTV's efficient content distribution methods make it an increasingly popular choice, eliminating the need for traditional cable or satellite infrastructure while providing personalized and flexible content consumption experiences for users.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="iptv-content-left-img">
                <div>
                  <div className='first-image'>
                    <img src={iptv1} alt="iptv" height="230px" width="300px" />
                  </div>
                  <div className='second-image'>
                    <img src={iptv3} alt="iptv" height="230px" width="300px" />
                  </div>
                </div>
                <div className='iptv-content-left-imageLast'>
                  <img src={iptv4} alt="iptv" height="235px" width="300px" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Form />
    </div>
  );
}

export default Iptv;