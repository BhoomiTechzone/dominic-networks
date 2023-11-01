import * as React from 'react';
import Typography from '@mui/material/Typography';
import img3 from '../image/7.jpg';
import Form from './Form';
import SecondNavbar from '../Components/SecondNavbar';
import img1 from '../image/services1.jpg';
import img2 from '../image/6.jpg';

const Ott = () => {
    return (
        <div>
            <SecondNavbar />
            <div className='ott-container' style={{ marginTop: "88px" }}>
                <Typography sx={{ pt: "10%", pl: "10%" }} color="#c53122" variant='h3' >
                    {/* OTT */}
                </Typography>
            </div>
            <div>
                <div className="container ct-content">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="ct-content-left">
                                <h2>OTT</h2>
                                <p>
                                    Discover DOMINIC, your go-to destination for a wide array of premium OTT Over-The-Top services, all conveniently available in one place. As a leading telecom provider, we understand the increasing demand for personalized entertainment experiences and streaming content. At DOMINIC, we offer a diverse selection of top-tier OTT services, all carefully tailored to your individual preferences.
                                    Through our strategic partnerships with renowned content suppliers, we bring you a universe of entertainment options, ranging from popular streaming platforms to exclusive content. Our seamless device integration ensures that you can enjoy your favorite movies, TV series, sports events, and more, wherever and whenever you desire.
                                    By embracing our state-of-the-art OTT services, you can say goodbye to the limitations of traditional television and welcome a new era of boundless enjoyment. Join us today and immerse yourself in a captivating world of content that caters specifically to your interests.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="iptv-content-left-img">
                                <div>
                                    <div className='first-image'>
                                        <img src={img1} alt="iptv" height="180px" width="300px" />
                                    </div>
                                    <div className='second-image'>
                                        <img src={img3} alt="iptv" height="180px" width="300px" />
                                    </div>
                                </div>
                                <div className='iptv-content-left-imageLast'>
                                    <img src={img2} alt="iptv" height="300px" width="300px" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Form />
        </div>
    )
}

export default Ott;

