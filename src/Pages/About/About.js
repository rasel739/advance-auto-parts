import React from 'react';
import './About.css';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { CardMedia, Typography } from '@mui/material';
import Review from '../Home/Review/Review/Review';
import Footer from '../Shered/Footer/Footer';
import NavigationBar from '../Shered/Navigation/NavigationBar/NavigationBar';


const About = () => {

    const aboutImg =
      "https://media.istockphoto.com/photos/generic-modern-suv-car-in-concrete-garage-picture-id1307086567?b=1&k=20&m=1307086567&s=170667a&w=0&h=NjcM6LIOkmfhyqH-zrbFU7pHCPxIABvNhWaOElm_P-E=";

    return (
        <>
     <NavigationBar></NavigationBar>
      <Container>
        <Typography variant="h2" component="div" gutterBottom>
          About Us
        </Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Paper variant="outlined" square>
                <CardMedia
                  component="img"
                  height="394"
                  image={aboutImg}
                  alt="about-car-img"
                  sx={{ width: "100%" }}
                />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Typography paragraph sx={{ textAlign: "justify" }}>
                Advance Auto Parts has been making cars since 1898, sold 3.76
                million vehicles in 2017, and operates in 134 countries today.
                To meet the major technological challenges of the future while
                continuing to pursue profitable growth, the company is focusing
                on international expansion and brand synergy.Nooteboom Trailers
                B.V. is a leading international company offering innovative and
                complete solutions for abnormal transport. It builds trailers of
                the highest quality and with payloads of up to 200 tons.
                Noteboom’s product range includes semi-trailers, low-loaders,
                drawbar trailers, and semi low-loaders.
              </Typography>
            </Grid>
            <Grid item xs={12} sx={{pb:10}}>
                <Review></Review>        
            </Grid>
          </Grid>
        </Box>
            </Container>
    <Footer></Footer>
</>
    );
};

export default About;