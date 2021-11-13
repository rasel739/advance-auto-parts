import * as React from "react";
import "./PopularCategories.css";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
const PopularCategories = () => {

    const populerCatagory = [
      {
        title: "Popular Item ",
        top: 10,
        image:
          "https://template.hasthemes.com/aments/aments/assets/images/categories_images/aments_categories_01.jpg",
      },
      {
        title: "Populer Toyota",
        top: 8,
        image:
          "https://template.hasthemes.com/aments/aments/assets/images/categories_images/aments_categories_02.jpg",
      },
      {
        title: "Populer Toyota",
        top: 6,
        image:
          "https://template.hasthemes.com/aments/aments/assets/images/categories_images/aments_categories_03.jpg",
      },
      {
        title: "Populer Toyota",
        top: 1,
        image:
          "https://template.hasthemes.com/aments/aments/assets/images/categories_images/aments_categories_05.jpg",
      },
    ];

  return (
    <Container sx={{ paddingTop: 5, paddingBottom: 15 }}>
      <Typography
        variant="h3"
        gutterBottom
        component="div"
        sx={{ textAlign: "left", }}
      >
              Popular Categories
            <Box sx={{ borderBottom: 1,width:'10rem',marginTop:1 }}/>
      </Typography>
      <Box
        sx={{
          display: "flex",
          "& > :not(style)": {
            m: 1,
            width: 128,
            height: 128,
          },
        }}
      >
        <Grid container spacing={2} xs={12}>
          {populerCatagory.map((populer) => (
            <Grid item xs={12} md={6} lg={3}>
              <Badge badgeContent={populer.top} color="primary">
                <Paper
                  variant="outlined"
                  square
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: ".5rem",
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
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default PopularCategories;
