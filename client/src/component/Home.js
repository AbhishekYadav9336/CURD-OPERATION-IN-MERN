// import { blue } from '@mui/material/colors'
import React from 'react'
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";
const Home = () => {
  return (
    <>
     
    <div style={{ backgroundColor:'lightyellow' ,margin:'0'}}>
    <marquee direction="right" behavior="scroll" scrollamount="15"><h1 style={{ height: '10vh',color:'blue', display: 'flex' , alignItems: 'center',justifyContent: 'center'}}>🤷🏻🤷🏻 Welcome To HOME PAGE OF CURD OPERATION 🤷🏻🤷🏻</h1>
    </marquee>
    <marquee direction="left" behavior="slide" scrollamount="30"><h2 style={{display: 'flex' ,alignItems: 'center', justifyContent: 'center'}}>Here you  can perform opertions like:-- </h2></marquee>
    <div style={{ height: '35vh', width:'230vh',display: 'flex' ,alignItems: 'center', justifyContent: 'center'}}>
    <div style={{ backgroundColor:'skyblue',height: '25vh',width:'100vh', display: 'flex' ,alignItems: 'center', justifyContent: 'center', border: 'solid' }}>
    <marquee direction="left" behavior="slide" scrollamount="8">
    <ol>
    <li>Create --------------➕--------<button><a href="http://localhost:3000/add">For Add user</a></button></li>
    <li>Update or Edit ------👨🏻‍💻-------<button><a href="http://localhost:3000/all">For Edit-user detail</a></button></li>
    <li>Read ----------------👀------- <button><a href="http://localhost:3000/all">For read</a></button></li>
    <li>Delete --------------❌--------<button><a href="http://localhost:3000/all">For Delete</a></button></li> 
     </ol>
     </marquee>
     </div>
     </div>
     </div>
     {/* footer is starting from here */}
     <footer>
      <Box
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 1,
      }}
    >
      <Container maxWidth="min">
        <Grid container spacing={5}>
          <Grid item xs={6} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              My name Is Abhishek Yadav,I have made this project just for fun and Gain some hands on experience in MERN Technology.
            </Typography>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: rohitabhishekyadav1609@gmail.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone: +91 9336199680
            </Typography>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Follow Us
            </Typography>
            <Link href="https://www.facebook.com/" color="inherit">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        {/* <Box mt={1}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="">
              my Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box> */}
      </Container>
    </Box>
     </footer>
    </>
  )
}
export default Home;



