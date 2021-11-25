import * as React from "react";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import "./CarWheelOffer.css";
import Box from "@mui/material/Box";
import CarWheelOfferItem from "./CarWheelOfferItem/CarWheelOfferItem";


const CarWheelOffer = () => {

    const carWheelOffer = [
      {
        id: 12344,
        title: "Car Wheel ",
        offer: 30,
        shop: "shop now",
        top: 10,
        image:
          "https://template.hasthemes.com/aments/aments/assets/images/banner_images/aments_banner_01.jpg",
      },

      {
        id: 23434,
        title: "Car Valls ",
        offer: 40,
        shop: "shop now",
        top: 10,
        image:
          "https://template.hasthemes.com/aments/aments/assets/images/banner_images/aments_banner_02.jpg",
      },

      {
        id: 343544,
        title: "Car Valls ",
        offer: 50,
        shop: "shop now",
        top: 10,
        image:
          "https://template.hasthemes.com/aments/aments/assets/images/banner_images/aments_banner_03.jpg",
      },
    ];


  return (
    <Container
      sx={{ paddingTop: 5, paddingBottom: 10 }}
      data-aos="fade-left"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-anchor-placement="top-center"
    >
      <Box>
        <Grid container spacing={2} xs={12}>
          {carWheelOffer.map((car) => (
            <Grid item xs={12} md={6} lg={4}>
              <CarWheelOfferItem car={car} key={car.id}></CarWheelOfferItem>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default CarWheelOffer;
