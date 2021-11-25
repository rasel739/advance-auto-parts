import React from 'react';
import Paper from "@mui/material/Paper";
import Badge from "@mui/material/Badge";
import Grid from "@mui/material/Grid";


const PopularCategoriesItem = ({ populer }) => {
  return (
    <Badge badgeContent={populer.top} color="primary">
      <Paper
        variant="outlined"
        square
        sx={{
          display: "flex",
          alignItems: "center",
          padding: ".5rem",
          width: "100%",
        }}
      >
        <Grid item xs={6}>
          <img src={populer.image} alt="" />
        </Grid>
        <Grid item xs={6}>
          <h4>{populer.title}</h4>
        </Grid>
      </Paper>
    </Badge>
  );
};

export default PopularCategoriesItem;