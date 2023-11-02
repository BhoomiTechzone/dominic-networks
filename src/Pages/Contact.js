import React from 'react';
import './Contact.css'
import SecondNavbar from '../Components/SecondNavbar';
import { Link } from 'react-router-dom';
import c1 from '../image/contact1.PNG'
import c2 from '../image/contact2.PNG'
import c3 from '../image/contact3.png'
import c4 from '../image/contact4.png'
import Form from './Form';
import { BiPhoneCall } from 'react-icons/bi';
import { AiOutlineMail } from 'react-icons/ai';

const Contact = () => {

    return (
        <>
            <SecondNavbar />
            <div className='contact-body' style={{ marginTop: "6rem" }}>
                <div className="container">
                    <div className="contact-image">
                        <img src="" alt="" />
                    </div>
                    <div className="contact-content"></div>
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="contact-content-left">
                                <h2 >Contact us</h2>
                                <p>We are eager for you to contact us and look forward to responding to you.</p>
                                <h5>Quick contact</h5>
                                <p>Please find below a list of quick email contacts for specific requirements which you may have. We are also listing below a list of our Key POP’s across the country and we hope we are near you somewhere so that we can service your requirements. We encourage you to contact us via Phone , Email, Social media or our website. We keenly look forward to responding to your needs and queries.</p>
                                <div className="list-items">
                                    <ul>
                                        <li>Sales</li>
                                        <li>Technical Issues / Complaint</li>
                                        <li>Media</li>
                                        <li>Customer Suppor</li>
                                        <li>Partnership’s</li>
                                        <li>Feedback</li>
                                        <li>SPAM reporting</li>
                                    </ul>
                                </div>

                            </div>

                        </div>
                        <div className="col-lg-4">
                            <div className="sidebox">
                                <div className="sb-img">
                                    <img src={c1} alt="" width="100%" />
                                </div>
                                <div className="sb-img-content">
                                    <p className="ldark"> <b> Log a Complaint</b></p>
                                    <button className='sb-btn'><Link to='/privacy'>Read More</Link></button>
                                </div>
                            </div>
                            <div className="sidebox">
                                <div className="sb-img">
                                    <img src={c2} alt="" width="100%" />
                                </div>
                                <div className="sb-img-content">
                                    <p className="ldark"> <b> Check Your Utilization</b></p>
                                    <button className='sb-btn'><Link to='/privacy'>Read More</Link></button>
                                </div>
                            </div>
                            <div className="sidebox">
                                <div className="sb-img">
                                    <img src={c3} alt="" width="100%" />
                                </div>
                                <div className="sb-img-content">
                                    <p className="ldark"> <b> Check Email</b></p>
                                    <button className='sb-btn'><Link to='/privacy'>Read More</Link></button>
                                </div>
                            </div>
                            <div className="sidebox">
                                <div className="sb-img">
                                    <img src={c4} alt="" width="100%" />
                                </div>
                                <div className="sb-img-content">
                                    <p className="ldark"> <b> Explore Partnership</b></p>
                                    <button className='sb-btn'><Link to='/privacy'>Read More</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="ldark">
                            Some of our offices are as under
                        </h4>
                        <div className="address-contact">
                            <div className="">
                                <h5>Head Office : </h5>
                                <p>H.N. 502 , Tulsi Park ,Near Lions Eye Hospital, <br /> Balrampur-271201 (U.P.)</p>

                                <p> <b><BiPhoneCall /> </b>  +91-9838022833</p>
                                <p> <b><AiOutlineMail /></b>  info@dominicnetworks.com</p>
                            </div>
                            <div className="">
                                <h5>Corporate Office : </h5>
                                <p>A-36, Ground Floor, G-8, Sector-63 <br /> Noida-201301 (U.P.)</p>

                                <p> <b><BiPhoneCall /></b>  +91-9838022833</p>
                                <p> <b><AiOutlineMail /></b>  info@dominicnetworks.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Form />
            </div>
        </>
    );
};

export default Contact;