import React from 'react';
import CountUp from 'react-countup';
import './Count.css'

function Count(props) {
    return (
        <div>
            <div className="count">
                <div className="container">
                <div className="row">
                    <h1><span className='countb'></span>By the Numbers: Our Telecom Services in Action</h1>
                    <div className="col-lg-3">
                        <h2><CountUp end={18} duration={5}/> <span>+</span></h2>
                        <h3>Years of experience</h3>

                    </div>
                    <div className="col-lg-3">
                        <h2><CountUp end={500} duration={5}/> <span>+</span></h2>
                        <h3>KMs
of Underground Fiber</h3>

                    </div>
                    <div className="col-lg-3">
                        <h2><CountUp end={100} duration={5}/> <span>+</span></h2>
                        <h3>Connecting More Than
2 Lakhs Homes & 200 Businesses</h3>

                    </div>
                    <div className="col-lg-3">
                        <h2><CountUp end={1200} duration={5}/> <span>+</span></h2>
                        <h3>Serving
ISPs & LCOs pan India</h3>

                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Count;