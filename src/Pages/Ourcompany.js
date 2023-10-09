import React from 'react';
import SecondNavbar from '../Components/SecondNavbar';
import '../Pages/Ourcompany.css'
import Card from 'react-bootstrap/Card';
import oc from '../image/OC.png'
import d from '../image/DIRECTOR.png'
import md from '../image/MD.png'

function Ourcompany(props) {
    return (
        <div>
            <SecondNavbar />
            <div className="our-company">

                <div className="our-company-header">
                    <div className="oc-header">
                        <div className="container">
                            {/* <h2>Unleash your Business' potential</h2>
                            <h2>With Our Reliable and High-Speed</h2>
                            <h2>Internet Lease Line Solutions</h2>
                            <h4>Get Connected Today!</h4> */}
                        </div>

                    </div>

                </div>
                <div className="container mt-5">
                    <div className="our-company-content">

                        <div className="director">
                            <div className="row">
                                <div className="col-lg-8">
                                    <h2 className='ldark'>DIRECTOR'S MESSAGE</h2>
                                    <p>As the director of Dominic Networks Pvt. Ltd. , I'm delighted to share some significant updates with you. We've been hard at work to enhance your internet experience. Our network now boasts faster speeds, ensuring smoother streaming, quicker downloads, and improved online gaming. Reliability is a priority, and we've made substantial improvements in this regard. We've introduced new plans and packages to cater to your specific needs, and our customer support is available 24/7 to assist you.</p>
                                </div>
                                <div className="col-lg-4">
                                    <Card style={{ width: '100%' }}>
                                        <Card.Img variant="top" src={d} height="250px" />
                                        <Card.Body>
                                            <Card.Title >Ashok Kumar Gupta</Card.Title>


                                        </Card.Body>
                                    </Card>

                                </div>
                            </div>
                        </div>
                        <div className="managing-director mt-5 mb-5">
                            <div className="row">
                                <div className="col-lg-4">
                                    <Card style={{ width: '100%' }}>
                                        <Card.Img variant="top" src={md} height="250px" />
                                        <Card.Body>
                                            <Card.Title>Ashish Aggarwal</Card.Title>


                                        </Card.Body>
                                    </Card>

                                </div>
                                <div className="col-lg-8">
                                    <h2 className='ldark'>MANAGING DIRECTOR'S MESSAGE</h2>
                                    <p>I want to express my gratitude for your hard work and dedication. We must stay agile, customer-centric, and committed to ethics and sustainability as we navigate the evolving business landscape. Let's foster a culture of collaboration, learning, and open communication, and remember that your well-being and professional growth are important. Together, we will continue building Dominic Networks Pvt. Ltd. into a company we're all proud of.

                                        Best regards,</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ourcompany;