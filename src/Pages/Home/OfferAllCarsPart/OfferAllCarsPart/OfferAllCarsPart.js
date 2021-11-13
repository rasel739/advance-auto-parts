import * as React from "react";
import "./OfferAllCarsPart.css";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";


const OfferAllCarsPart = () => {
    const populerCatagory = [
      {
        title: "2021 Latest Collection ",
        offer: 30,
        shop: "shop now",
        top: 10,
        image:
          "https://template.hasthemes.com/aments/aments/assets/images/banner_images/aments_big-banner.jpg",
      },
    ];
  return (
    <Container sx={{ paddingTop: 30, paddingBottom: 15 }}>
      <Box>
        <Grid container spacing={2} xs={12}>
          {populerCatagory.map((populer) => (
            <Grid item xs={12}>
              <Paper
                variant="outlined"
                square
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: "5rem",
                  backgroundImage: `url(${populer.image})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  overflow: "hidden",
                }}
              >
                <Grid item xs={6}>
                  <Typography variant="h6" gutterBottom component="div">
                    {populer.title}
                  </Typography>
                  <Typography variant="h6" gutterBottom component="div">
                    -{populer.offer}% Offer All Cars Parts
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

export default OfferAllCarsPart;
