import React from 'react';
import Faq from "react-faq-component";
import { BsFillChatDotsFill } from 'react-icons/bs';
import './Contact.css'
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import AddLocationRoundedIcon from '@mui/icons-material/AddLocationRounded';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import SecondNavbar from '../Components/SecondNavbar';
import { Link } from 'react-router-dom';
import c1 from '../image/contact1.PNG'
import c2 from '../image/contact2.PNG'
import c3 from '../image/contact3.png'
import c4 from '../image/contact4.png'
import Form from './Form';
import { BiPhoneCall } from 'react-icons/bi';
import { AiOutlineMail} from 'react-icons/ai';

const Contact = () => {
    const data = {
        title: "Quick Help... ",
        rows: [
            {
                title: "Broadband And OTT",
                content: `Experience lightning-fast broadband speeds seamlessly integrated with premium OTT content. Enjoy high-quality streaming, gaming, and entertainment in one immersive digital package.`,
            },
            {
                title: "IPTV",
                content:
                    "IPTV delivers live TV and on-demand content over the internet, offering a vast array of channels and personalized viewing experiences for modern television enthusiasts.",
            },
            {
                title: "Cable Tv",
                content: `Cable TV provides a wide range of television channels and services via a physical cable connection, delivering entertainment, news, and more to your home. `,
            },
            {
                title: "Fiber on lease",
                content: <p>Fiber on lease refers to renting a high-speed fiber-optic internet connection, offering businesses fast and reliable internet access without the need for infrastructure ownership.</p>,
            },
        ],
    };

    const styles = {
        // bgColor: 'white',
        titleTextColor: "white",
        rowTitleColor: "black",
        titleTextAlign: "center"
        // rowContentColor: 'grey',
        // arrowColor: "red",
    };

    const config = {
        animate: true,
        // arrowIcon: "V",
        tabFocus: true
    };
    return (
        <>
            <SecondNavbar />
            <div className='contact-body' style={{ marginTop: "6rem" }}>
                {/* <div className="container-fluid contact-page">
                    <div className="row contact-faq-row">
                        <div className="col-lg-9 contact-faq">
                            <Faq
                                data={data}
                                styles={styles}
                                config={config}
                            />
                        </div>
                        <div className="col-lg-3">
                            <div className="contact-side">
                                <h2>Get</h2>
                                <h1>Instant </h1>
                                <h1> Solution</h1>
                                <h2>to your queries</h2>
                                <h3><BsFillChatDotsFill />Chat with us</h3>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* <div className="container-fluid"> */}

                {/* <div className="section-title contact-heading">
                    <h2><span>Contact</span> Us</h2>
                    <p>Connect with us today. Your questions matter. We're here to assist you. Reach out for personalized support and timely solutions. Let's talk</p>
                </div> */}
                {/* </div> */}
                {/* <div className="container-fluid contact-form">
                    <div className="row ">
                        <div className="col-lg-6">
                            <section id="contact" className="contact">

                                <div className="container">

                                    <div className="section-title">
                                        <h2><span>Send us a mail</span></h2>
                                    </div>
                                </div>
                                <div className="container ">
                                    <form action="" method="post" role="form" className="php-email-form">
                                        <div className="row">
                                            <div className="col-md-6 form-group">
                                                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                                            </div>
                                            <div className="col-md-6 form-group mt-3 mt-md-0">
                                                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                                            </div>
                                        </div>
                                        <div className="form-group mt-3">
                                            <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                                        </div>
                                        <div className="form-group mt-3">
                                            <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                                        </div>
                                        <div className="my-3">
                                            <div className="loading">Loading</div>
                                            <div className="error-message"></div>
                                            <div className="sent-message">Your message has been sent. Thank you!</div>
                                        </div>
                                        <div className="text-center"><button type="submit">Send Message</button></div>
                                    </form>

                                </div>
                            </section>
                        </div>
                        <div className="col-lg-6">
                            <div className="contact-details">
                                <h2>Contact Details</h2>
                                <div className="row contact-details-content">
                                    <div className="col-lg-6">
                                        <div className="row">
                                            <div className="col-lg-3">
                                                <Link to="tel: 9838022833"> 
                                                  <CallRoundedIcon sx={{ color: "white", fontSize: '50px' }} />
                                                </Link>
                                            </div>
                                            <div className="col-lg-9">
                                                <p> <strong>Phone:</strong>+91-9838022833</p>
                                                <p>(monday-saturday ,9 AM- 6PM)</p>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-lg-6">
                                        <div className="row">
                                            <div className="col-lg-3">
                                                <Link to="https://maps.app.goo.gl/HkBS4z7s553gJfwS7">
                                                  <AddLocationRoundedIcon sx={{ color: "white", fontSize: '50px' }} />
                                                </Link>
                                            </div>
                                            <div className="col-lg-9">
                                                <p> <strong>Address:</strong>H.N. 502 , Tulsi Park ,Near Lions
                                                    Eye Hospital, Balrampur-271201 U.P. India
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <h2>Follow us on social networks</h2>
                                    <div className="contact-social-icon-box">
                                        <a href='https://www.facebook.com/dnpl.wani' target="_blank" rel="noreferrer">
                                            <FacebookIcon fontSize='large' sx={{ color: "white", width: "20%", cursor: "pointer" }} />
                                        </a>
                                        <a href='https://www.instagram.com/dnpl.wani/' target="_blank" rel="noreferrer">
                                            <InstagramIcon fontSize='large' sx={{ color: "white", width: "20%", cursor: "pointer" }} />
                                        </a>
                                        <a>
                                            <LinkedInIcon fontSize='large' sx={{ color: "white", width: "20%", cursor: "pointer" }} />
                                        </a>
                                        <a href='https://www.youtube.com/@DominicNetworks' target="_blank" rel="noreferrer">
                                            <YouTubeIcon fontSize='large' sx={{ color: "white", width: "20%", cursor: "pointer" }} />
                                        </a>
                                        <a>
                                            <TwitterIcon fontSize='large' sx={{ color: "white", width: "20%", cursor: "pointer" }} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

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
                                    <button className='sb-btn'>Read More</button>
                                </div>
                            </div>
                            <div className="sidebox">
                                <div className="sb-img">
                                <img src={c2} alt="" width="100%" />
                                </div>
                                <div className="sb-img-content">
                                    <p className="ldark"> <b> Check Your Utilization</b></p>
                                    <button className='sb-btn'>Read More</button>
                                </div>
                            </div>
                            <div className="sidebox">
                                <div className="sb-img">
                                    <img src={c3} alt="" width="100%" />
                                </div>
                                <div className="sb-img-content">
                                    <p className="ldark"> <b> Check Email</b></p>
                                    <button className='sb-btn'>Read More</button>
                                </div>
                            </div>
                            <div className="sidebox">
                                <div className="sb-img">
                                <img src={c4} alt="" width="100%" />
                                </div>
                                <div className="sb-img-content">
                                    <p className="ldark"> <b> Explore Partnership</b></p>
                                    <button className='sb-btn'>Read More</button>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-8">
                            <h4 className="ldark">Some of our offices are as under</h4>
                            <div className="addresses">
                                <div className="add1">
                                    <h5>Head Office : </h5>
                                    <p>H.N. 502 , Tulsi Park ,Near Lions
                                        Eye Hospital, Balrampur-271201 U.P. (India)</p>
                                   
                                    
                                    <p> <b><BiPhoneCall/> </b>  +91-9838022833</p>
                                    <p> <b><AiOutlineMail/></b>  support@dominicnetworks.com</p>
                                </div>
                                <div className="add2">
                                    <h5>Corporate Office : </h5>
                                    <p>A-36, Sector-63 <br /> Noida Uttar Pradesh</p>
                                    
                                    <p> <b><BiPhoneCall/></b>  +91-9838022833</p>
                                    <p> <b><AiOutlineMail/></b>  support@dominicnetworks.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
<Form/>
            </div>
        </>
    );
};

export default Contact;