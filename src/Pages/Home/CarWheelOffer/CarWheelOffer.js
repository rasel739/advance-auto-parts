import * as React from "react";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import "./CarWheelOffer.css";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const CarWheelOffer = () => {

    const populerCatagory = [
      {
        title: "Car Wheel ",
        offer: 30,
        shop: "shop now",
        top: 10,
        image:
          "https://template.hasthemes.com/aments/aments/assets/images/banner_images/aments_banner_01.jpg",
      },

      {
        title: "Car Valls ",
        offer: 40,
        shop: "shop now",
        top: 10,
        image:
          "https://template.hasthemes.com/aments/aments/assets/images/banner_images/aments_banner_02.jpg",
      },

      {
        title: "Car Valls ",
        offer: 50,
        shop: "shop now",
        top: 10,
        image:
          "https://template.hasthemes.com/aments/aments/assets/images/banner_images/aments_banner_03.jpg",
      },
    ];


  return (
    <Container sx={{ paddingTop: 5, paddingBottom: 10 }}>
      <Box>
        <Grid container spacing={2} xs={12}>
          {populerCatagory.map((populer) => (
            <Grid item xs={12} md={6} lg={4}>
              <Paper
                variant="outlined"
                square
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: "3.5rem",
                  backgroundImage: `url(${populer.image})`,
                  backgroundRepeat: "no-repeat",
                   backgroundSize: "cover",
                  overflow: "hidden"
                }}
              >
                <Grid item xs={6}>
                  <Typography variant="h6" gutterBottom component="div">
                    {populer.title}
                  </Typography>
                  <Typography variant="h6" gutterBottom component="div">
                    {populer.offer}% off
                  </Typography>
                  <Typography variant="h6" gutterBottom component="div">
                    {populer.shop}
                  </Typography>
                </Grid>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default CarWheelOffer;
