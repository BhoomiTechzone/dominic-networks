import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SecondNavbar from '../Components/SecondNavbar';


const Termandconditions = () => {
    return (
        <div>
            <SecondNavbar />
            <Box className="">
                <Box sx={{ textAlign: "center", marginTop: "7rem" }}>
                    <Typography sx={{ color: "#c53122", mt: "2rem" }} variant='h4'>Term and Conditions</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", p: "2rem 14rem", m: "10px auto 0px" }} className="PaddingInText">
                    <Typography  textAlign="left" fontSize="18px" lineHeight="30px" >
                        <Typography fontSize="18px">
                          Welcome to dominicnetworks.com. If you continue to browse and use this website you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern Dominic Networks’ relationship with you in relation to this website.
                          <br />
                        </Typography>
                        <Typography fontSize="18px">
                          The term ‘Dominic Networks’ or ‘us’ or ‘we’ refers to the owner of the website. The term ‘you’ refers to the user or viewer of our website.
                          <br />
                          <br />
                        </Typography>
                        The use of this website is subject to the following terms of use:
                        <ul>
                          <li>The content of the pages of this website is for your general information and use only. It is subject to change without notice.</li>
                          <li>Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose.</li>
                          <li>You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.</li>
                          <li>Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable.</li>
                          <li>It shall be your own responsibility to ensure that any products, services or information available through this website meet your specific requirements.</li>
                          <li>This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance and graphics.</li>
                          <li>Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.</li>
                          <li>All trademarks reproduced in this website which is not the property of, or licensed to, the operator is acknowledged on the website.</li>
                          <li>Unauthorized use of this website by you may give rise to a claim for damages and/or be a criminal offense. From time to time this website may also include links to other websites.</li>
                          <li>These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We take no responsibility for the content of the linked website(s).</li>
                          <li>You may not create a link to this website from another website or document without Dominic Networks’ prior consent. Your use of this website and any dispute arising out of such use of the website is subject to the laws of India or other regulatory authorities.</li>
                        </ul>
                    </Typography>
                </Box>
            </Box>
        </div>
    )
}

export default Termandconditions;
