import React from 'react';
import NavigationBar from '../Shered/Navigation/NavigationBar/NavigationBar';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import './PopulerCatagorieAll.css';
import PopularCategoriesItem from '../Home/PopularCategories/PopularCategoriesItem/PopularCategoriesItem';
import usePopularCatagory from '../../hooks/usePopularCatagory';
import Footer from '../Shered/Footer/Footer';

const PopulerCatagorieAll = () => {

    document.title = "Populer Catagorie All";
    
   const [popularCatagory] = usePopularCatagory()

   

    return (
        <>
            <NavigationBar></NavigationBar>
            <Container sx={{ paddingTop: 5, paddingBottom: 15 }}>
      <Typography
        variant="h3"
        gutterBottom
        component="div"
        sx={{ textAlign: "center" }}
      >
        Popular Categories All
        <Box sx={{ borderBottom: 1, width: "100%", marginTop: 1 }} />
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
          {popularCatagory.map((populer) => (
            <Grid item xs={6} md={6} lg={3}>
              <PopularCategoriesItem key={populer._id} populer={populer}></PopularCategoriesItem>
            </Grid>
          ))}
        </Grid>
      </Box>
        </Container>
        <Footer></Footer>
    </>
    );

};

export default PopulerCatagorieAll