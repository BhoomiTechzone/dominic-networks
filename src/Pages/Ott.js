import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import coupleImg from '../image/couple.jpeg'

const itemData = [
    {
        img: 'https://m.media-amazon.com/images/M/MV5BN2RjZDJhYzUtOTQ5Yy00OWM3LWE5OTctM2Y0YWVmNzAzODllXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_SX300.jpg',
        title: 'movie1',
    },
    {
        img: 'https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg',
        title: 'movie2',
    },
    {
        img: 'https://m.media-amazon.com/images/M/MV5BNmQ3MThkOWEtNTA0NC00YzI2LWIxZjEtZjdlZTVmNzQ2ZGViXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg',
        title: 'movie3',
    },
    {
        img: 'https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg',
        title: 'movie4',
    },
    {
        img: 'https://m.media-amazon.com/images/M/MV5BNTcwMjUwYTQtYTRiYy00ZmNmLWFmNDQtYzQwZTExYjMzZTRiXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg',
        title: 'movie5',
    },
    {
        img: 'https://m.media-amazon.com/images/M/MV5BYjQ0YTdhZDctYzg5YS00NTNkLThiOWYtNDI5OTYzMGRkYWUyXkEyXkFqcGdeQXVyOTIxMzQ0NzU@._V1_SX300.jpg',
        title: 'movie6',
    },
];


const Ott = () => {
    return (
        <div>
            <div className='ott-container'>
                <Typography sx={{ pt: "10%", pl: "10%" }} color="#c53122" variant='h3' >OTT</Typography>
            </div>
            <div>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: "2rem" }}>
                    <Box >
                        <Typography color="" textAlign="left" fontSize="18px" lineHeight="35px"  >
                          Discover DOMINIC, your go-to destination for a wide array of premium OTT Over-The-Top services, all conveniently available in one place. As a leading telecom provider, we understand the increasing demand for personalized entertainment experiences and streaming content. At DOMINIC, we offer a diverse selection of top-tier OTT services, all carefully tailored to your individual preferences.
                          Through our strategic partnerships with renowned content suppliers, we bring you a universe of entertainment options, ranging from popular streaming platforms to exclusive content. Our seamless device integration ensures that you can enjoy your favorite movies, TV series, sports events, and more, wherever and whenever you desire.
                          By embracing our state-of-the-art OTT services, you can say goodbye to the limitations of traditional television and welcome a new era of boundless enjoyment. Join us today and immerse yourself in a captivating world of content that caters specifically to your interests.
                        </Typography>
                    </Box>
                    <Box className="happyboy_Image_Container" sx={{ width: "50%" }}>
                        <img src={coupleImg} alt='' width="400px" height="400px"/>
                    </Box>
                </Box>
                <Box sx={{ backgroundColor: "#c53122", display:"flex", flexWrap:'wrap', justifyContent:"center", gap:"15px", padding:"3rem 0px", cursor:"pointer"}}>
                    {itemData.map((ele, key) => {
                        return (
                            <div key={key} style={{padding:""}}>
                                <img src={ele.img} alt={ele.title} width="200px" height="300px"/>
                            </div>
                        )
                    })}
                </Box>
            </div>
        </div>
    )
}

export default Ott;
