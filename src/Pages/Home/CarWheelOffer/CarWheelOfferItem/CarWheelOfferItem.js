import React from 'react';
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const CarWheelOfferItem = ({car}) => {
    return (
      <Paper
        variant="outlined"
        square
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "3.5rem",
          backgroundImage: `url(${car.image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          overflow: "hidden",
        }}
      >
        <Grid item xs={6}>
          <Typography variant="h6" gutterBottom component="div">
            {car.title}
          </Typography>
          <Typography variant="h6" gutterBottom component="div">
            {car.offer}% off
          </Typography>
          <Typography variant="h6" gutterBottom component="div">
            {car.shop}
          </Typography>
        </Grid>
      </Paper>
    );
};

export default CarWheelOfferItem;