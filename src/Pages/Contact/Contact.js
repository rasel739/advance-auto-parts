import React from 'react';
import './Contact.css';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Footer from "../Shered/Footer/Footer";
import { Typography } from '@mui/material';
import CardMedia from "@mui/material/CardMedia";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import NavigationBar from '../Shered/Navigation/NavigationBar/NavigationBar';

const Contact = () => {

    const { register, handleSubmit,reset } = useForm();
    const onSubmit = (data) => {
        
        console.log(data)

        reset()
    }

    return (
        <>
        <NavigationBar></NavigationBar>
        <Container>
          <Typography variant="h2" component="div" gutterBottom>
            Contact Us
          </Typography>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <CardMedia
                  component="iframe"
                  height="500"
                  image="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.275318982402!2d90.43022631464198!3d23.808806892460204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7caf2cbcc2b%3A0x168c393b1af9714a!2sAdvance%20Auto%20Care!5e0!3m2!1sen!2sbd!4v1636900857218!5m2!1sen!2sbd"
                  alt="about-car-img"
                  sx={{ width: "100%" }}
                  width="800"
                  allowfullscreen=""
                  loading="lazy"
                />
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="h4"
                  sx={{ textAlign: "center" }}
                  component="div"
                  gutterBottom
                >
                  Get In Tuch
                </Typography>

                <Box>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid
                      container
                      spacing={2}
                      xs={12}
                      md={8}
                      lg={12}
                      sx={{ margin: "auto" }}
                    >
                      <Grid item xs={12}>
                        <Box>
                          <TextField
                            id="Name"
                            label="Name"
                            type="text"
                            sx={{ width: "100%" }}
                            {...register("name", { required: true })}
                          />
                        </Box>
                        <Box>
                          <TextField
                            id="email"
                            label="Email"
                            type="text"
                            sx={{ width: "100%", my: 2 }}
                            {...register("email", { required: true })}
                          />
                        </Box>
                        <Box>
                          <TextField
                            id="Subject"
                            label="Subject"
                            type="text"
                            sx={{ width: "100%", my: 2 }}
                            {...register("subject", { required: true })}
                          />
                        </Box>

                        <Box>
                          <TextField
                            id="Your Message"
                            label="Your Message"
                            multiline
                            type="text"
                            rows={3}
                            sx={{ width: "100%", my: 2 }}
                            {...register("yourMessage", { required: true })}
                          />
                        </Box>
                        <Box>
                          <Button variant="contained" endIcon={<SendIcon />}>
                            Send
                          </Button>
                        </Box>
                      </Grid>
                    </Grid>
                  </form>
                </Box>
              </Grid>
              <Grid item xs={12} sx={{ pb: 10 }}></Grid>
            </Grid>
          </Box>
        </Container>
        <Footer></Footer>
      </>
    );
};

export default Contact;