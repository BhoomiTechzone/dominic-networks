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
        titleTextColor: "#0D6EFD",
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
                <div className="container-fluid contact-page">
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
                </div>
                {/* <div className="container-fluid"> */}

                <div className="section-title contact-heading">
                    <h2><span>Contact</span> Us</h2>
                    <p>Connect with us today. Your questions matter. We're here to assist you. Reach out for personalized support and timely solutions. Let's talk</p>
                </div>
                {/* </div> */}
                <div className="container-fluid contact-form">
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
                                                  <CallRoundedIcon sx={{ color: "#0D6EFD", fontSize: '50px' }} />
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
                                                  <AddLocationRoundedIcon sx={{ color: "#0D6EFD", fontSize: '50px' }} />
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
                                            <FacebookIcon fontSize='large' sx={{ color: "#0D6EFD", width: "20%", cursor: "pointer" }} />
                                        </a>
                                        <a href='https://www.instagram.com/dnpl.wani/' target="_blank" rel="noreferrer">
                                            <InstagramIcon fontSize='large' sx={{ color: "#0D6EFD", width: "20%", cursor: "pointer" }} />
                                        </a>
                                        <a>
                                            <LinkedInIcon fontSize='large' sx={{ color: "#0D6EFD", width: "20%", cursor: "pointer" }} />
                                        </a>
                                        <a href='https://www.youtube.com/@DominicNetworks' target="_blank" rel="noreferrer">
                                            <YouTubeIcon fontSize='large' sx={{ color: "#0D6EFD", width: "20%", cursor: "pointer" }} />
                                        </a>
                                        <a>
                                            <TwitterIcon fontSize='large' sx={{ color: "#0D6EFD", width: "20%", cursor: "pointer" }} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Contact;