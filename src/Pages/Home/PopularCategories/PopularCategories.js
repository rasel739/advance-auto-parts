import * as React from "react";
import "./PopularCategories.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import PopularCategoriesItem from "./PopularCategoriesItem/PopularCategoriesItem";
import usePopularCatagory from "../../../hooks/usePopularCatagory";



const PopularCategories = () => {

  const [popularCatagory] = usePopularCatagory()

    

  return (
    <Container
      sx={{ paddingTop: 5, paddingBottom: 15 }}
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-anchor-placement="top-center"
    >
      <Typography
        variant="h3"
        gutterBottom
        component="div"
        sx={{ textAlign: "left" }}
      >
        Popular Categories
        <Box sx={{ borderBottom: 1, width: "10rem", marginTop: 1 }} />
      </Typography>
      <Box
        sx={{
          display: "flex",
          "& > :not(style)": {
            m: 1,
          },
        }}
      >
        <Grid container spacing={2}>
          {popularCatagory.slice(0, 4).map((populer) => (
            <Grid item xs={6} md={6} lg={3}>
              <PopularCategoriesItem
                key={populer._id}
                populer={populer}
              ></PopularCategoriesItem>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default PopularCategories;
