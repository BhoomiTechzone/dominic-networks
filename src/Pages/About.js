import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'

const About = () => {
    return (
        <>
            <div className='footer-vision-mission'>
                <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", p: "20px", maxWidth: "800px", m: "0 auto" }}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Typography color="white" component="div" variant="h4">
                            Our
                        </Typography>
                        <Typography color="orange" component="div" variant="h4" marginLeft="10px">
                            Vision
                        </Typography>
                    </Box>
                    <Typography color="white" textAlign="center" fontSize="18px" lineHeight="28px" >
                        Our vision is to build a connected world where everyone can be reached at any time. We push hard towards becoming the top A-class ISP in the country, providing cutting-edge technology and top-notch customer support to allow seamless access for both consumers and enterprises.
                    </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", p: "20px", maxWidth: "800px", m: "0 auto" }}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Typography color="white" component="div" variant="h4">
                            Our
                        </Typography>
                        <Typography color="orange" component="div" variant="h4" marginLeft="10px">
                            Mission
                        </Typography>
                    </Box>
                    <Typography color="white" textAlign="center" fontSize="18px" lineHeight="28px" >
                        Our mission is to provide top-notch telecom services and products that make it simple for our clients to connect, communicate, and work together. We are dedicated to using cutting-edge technology, upholding the highest standards of quality and dependability, and offering exceptional customer service. By doing this, we want to improve the quality of life for our clients and help the communities we serve thrive and prosper while continuing to uphold our dedication to innovation and sustainability.
                    </Typography>
                </Box>
            </div>
            <div>
                <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", p: "4rem", m: "0 auto" }}>
                    <Box sx={{ display: "flex", alignItems: "center", mb:"1rem" }}>
                        <Typography component="div" variant="h4">
                            Our
                        </Typography>
                        <Typography color="orange" component="div" variant="h4" marginLeft="10px">
                            Founder
                        </Typography>
                    </Box>
                    <Typography color="" textAlign="left" fontSize="18px" lineHeight="35px" >
                      With over 20 years of telecommunications expertise, "Owner Name" is a visionary leader in the industry. In 2008, he founded DOMINIC NETWORKING PVT. LTD. to provide top-quality communication solutions that adapt to the evolving needs of businesses and consumers.
                      Under "CEO name" leadership, Dominic has earned a reputation for delivering reliable phone, data, and messaging solutions, prioritizing an excellent client experience. His passion for technology and innovation has driven the creation of cutting-edge products and services, keeping DOMINIC at the forefront of the rapidly evolving telecom sector.
                      "CEO NAME" vision is to revolutionize interpersonal connections and communication, believing that technology can enhance accessibility, reliability, and convenience. As the CEO of DOMINIC NETWORKING Pvt. Ltd., he remains dedicated to offering advanced communication solutions that meet the demands of businesses and consumers, envisioning a world where seamless, fast, and efficient communication connects people anytime, anywhere.
                    </Typography>
                </Box>
            </div>
        </>

    )
}

export default About;