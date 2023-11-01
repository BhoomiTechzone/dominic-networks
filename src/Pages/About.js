import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SecondNavbar from '../Components/SecondNavbar';
import founder from '../image/founder.jpeg';
import d from '../image/DIRECTOR.png';
import md from '../image/MD.png';
import hello from '../image/contact4.png'


const About = () => {
    return (
        <>
            <SecondNavbar />
            <Box className="Footer-Header-Container">
                <Box sx={{ textAlign: "center", marginTop: "5.5rem" }}>
                    <Box sx={{ textAlign: "center", backgroundColor: "white" }}>
                        <Typography p="1rem" color="" variant='h4'>We won't stop till we answer all your questions!</Typography>
                    </Box>
                    <Typography sx={{ color: "#c53122" }} variant='h4'>Dominic Networks</Typography>
                    <Typography variant='h6'>The best internet service Provider in Noida</Typography>
                </Box>
            </Box>

            <div>
                <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", p: "4rem 0px 2rem", m: "0 auto" }} >
                    <div className="container">
                        <div className="founder-img">
                            <div className="row">
                                <div className="col-lg-4">
                                    <img src={d} alt="founder" width="200px" height="200px" />
                                    <h5>Chairman</h5>
                                    <h5>Shri Ashok Kumar Gupta </h5>
                                </div>
                                <div className="col-lg-4">
                                    <img src={md} alt="founder" width="200px" height="200px" />
                                    <h5>Managing Director</h5>
                                    <h5>Shri Ashish Agrawal</h5>
                                </div>
                                <div className="col-lg-4">
                                    <img src={founder} alt="founder" width="200px" height="200px" />
                                    <h5>In Fond Memories Of</h5>
                                    <h5>Our Founder Director</h5>
                                    <h5>Master Prakhar Agarwal</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </Box>
                <Box sx={{ padding: "0rem 12rem 2rem" }} className="PaddingInText">
                    <Typography color="" textAlign="left" fontSize="18px" mt="5px" >
                        With over 2 years of telecommunications expertise, "Ashok Kumar Gupta" is a visionary leader in the industry. In 2022, he founded DOMINIC NETWORKING PVT. LTD. to provide top-quality communication solutions that adapt to the evolving needs of businesses and consumers.
                        Under "Ashish Agarwal" leadership, Dominic has earned a reputation for delivering reliable phone, data, and messaging solutions, prioritizing an excellent client experience. His passion for technology and innovation has driven the creation of cutting-edge products and services, keeping DOMINIC at the forefront of the rapidly evolving telecom sector.
                        "Ashish Agarwal" vision is to revolutionize interpersonal connections and communication, believing that technology can enhance accessibility, reliability, and convenience. As the Managing Director of DOMINIC NETWORKING Pvt. Ltd., he remains dedicated to offering advanced communication solutions that meet the demands of businesses and consumers, envisioning a world where seamless, fast, and efficient communication connects people anytime, anywhere.
                    </Typography>
                </Box>
            </div>

            <div className='footer-vision-mission'>
                <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", p: "25px", maxWidth: "800px", m: "0 auto" }}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Typography color="#FFDE59" component="div" variant="h4">
                            Our
                        </Typography>
                        <Typography color="#FFDE59" component="div" variant="h4" marginLeft="10px">
                            Vision
                        </Typography>
                    </Box>
                    <Typography color="white" textAlign="center" fontSize="18px" lineHeight="28px" >
                        Our vision is to build a connected world where everyone can be reached at any time. We push hard towards becoming the top A-class ISP in the country, providing cutting-edge technology and top-notch customer support to allow seamless access for both consumers and enterprises.
                    </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", p: "20px", maxWidth: "800px", m: "0 auto" }}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Typography color="#FFDE59" component="div" variant="h4" sx={{}}>
                            Our
                        </Typography>
                        <Typography color="#FFDE59" component="div" variant="h4" marginLeft="10px">
                            Mission
                        </Typography>
                    </Box>
                    <Typography color="white" textAlign="center" fontSize="18px" lineHeight="28px" >
                        Our mission is to provide top-notch telecom services and products that make it simple for our clients to connect, communicate, and work together. We are dedicated to using cutting-edge technology, upholding the highest standards of quality and dependability, and offering exceptional customer service. By doing this, we want to improve the quality of life for our clients and help the communities we serve thrive and prosper while continuing to uphold our dedication to innovation and sustainability.
                    </Typography>
                </Box>
            </div>

            <div className="container about-content">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="about">
                            <img src={hello} alt="hello" height="460px" width="90%" />
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="">
                            <h2>About Us</h2>
                            <p>
                                Welcome to Dominic, an internet service provider that is deeply committed to delivering dependable and top-tier services. We firmly believe that access to swift, secure, and cost-effective internet services should be universal, irrespective of one's geographical location or financial means. Our core focus centers on providing exceptional support and tailored solutions to our clients. We place great importance on cultivating strong and enduring relationships with every customer, recognizing that effective communication is the cornerstone of any successful partnership. Our dedication extends to all clients, whether they are major organizations or individual customers. We are dedicated to understanding your unique needs, promptly addressing your inquiries, and offering solutions that are most appropriate for your specific requirements.
                                Our comprehensive range of internet services encompasses managed services, cloud-based solutions, voice and data services, and more. What sets us apart is our ability to customize our services to seamlessly align with the evolving demands of your organization, making them both adaptable and expandable. We take pride in being at the forefront of the digital revolution, continually exploring novel ways to leverage technology to enhance client satisfaction and improve the overall quality of our services.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default About;