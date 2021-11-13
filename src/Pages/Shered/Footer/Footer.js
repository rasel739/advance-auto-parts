import { Container,Box } from '@mui/material';
import React from 'react';
import './Footer.css';
import Grid from "@mui/material/Grid";
import footerImg from '../../../images/car-title-2.png'
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import paymentIcon from '../../../images/payment-icon.webp'
const Footer = () => {

    return (
      <Container sx={{ paddingTop: 10}}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Box>
                <img src={footerImg} alt="" />
              </Box>
              <Typography
                variant="body1"
                sx={{ textAlign: "justify" }}
                gutterBottom
              >
                Superior quality tested and performance-ready, TrueDrive loaded
                struts surpass rigid suspension technology standards to ensure a
                smooth trip—no matter where the road takes you.Superior quality
                tested and performance-ready.
              </Typography>
              <Typography variant="h6" gutterBottom>
                Customer Support
              </Typography>
              <Typography variant="h4" gutterBottom>
                01356457645
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Box>
                <Typography variant="h6" gutterBottom>
                  Subscribe Newsletter To Get Updated
                </Typography>
                <div>
                  <TextField
                    id="standard-basic"
                    label="Enter your Email Address"
                  ></TextField>
                  <Button variant="contained" sx={{ padding: "1rem", mb: 2 }}>
                    Subscribe Now
                  </Button>
                </div>
                <Typography variant="body1" gutterBottom>
                  We’ll never share your email address with a third-party.
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  typography: "body1",
                  "& > :not(style) + :not(style)": {
                    ml: 2,
                  },
                }}
              >
                <Link href="#" underline="none">
                  <FacebookIcon />
                </Link>
                <Link href="#" underline="hover">
                  <GitHubIcon />
                </Link>
                <Link href="#" underline="always">
                  <InstagramIcon />
                </Link>
                <Link href="#" underline="always">
                  <YouTubeIcon />
                </Link>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="h6" sx={{ textAlign: "left" }} gutterBottom>
                Information
              </Typography>
              <Typography
                variant="body1"
                sx={{ textAlign: "justify" }}
                gutterBottom
              >
                matter where the road takes you.Superior quality tested and
                performance-ready, TrueDrive loaded struts surpass rigid
                suspension technology standards to ensure a smooth trip—no
                matter where the road takes you.
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Typography variant="h6" sx={{ textAlign: "left" }} gutterBottom>
                Copyright © 2021 Advance Auto Parts
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <img src={paymentIcon} alt="" />
            </Grid>
          </Grid>
        </Box>
      </Container>
    );
};

export default Footer;