import React from 'react';
import NavigationBar from '../../Shered/Navigation/NavigationBar/NavigationBar';
import './HotDealsAll.css';
import { Container, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import useCarPartsAll from "../../../hooks/useCarPartsAll";
import NewArrivalsItem from '../../Home/NewArrivals/NewArrivalsItem/NewArrivalsItem';
import { makeStyles } from "@mui/styles";
import Footer from '../../Shered/Footer/Footer';
const HotDealsAll = () => {

    document.title = 'Hot Deals All';

  const [carParts] = useCarPartsAll();
  

  const theme = useTheme();

  const useStyle = makeStyles({
    
    footerNav: {
      [theme.breakpoints.down("sm")]: {
        marginBottom:'160rem'
      },
    },
  });

  const { footerNav } = useStyle();
    
    return (
      <>
        <NavigationBar></NavigationBar>
        <Container
          sx={{ paddingTop: 5, paddingBottom: 260, bgcolor: "#f3e5f5" }}
          className={footerNav}
          maxWidth="xl"
        >
          <Typography
            variant="h3"
            gutterBottom
            component="div"
            sx={{ textAlign: "center" }}
          >
            Hot Deals All
            <Box sx={{ borderBottom: 1, width: "100%", marginTop: 1 }} />
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
            <Grid container spacing={2} item xs={12}>
              {carParts.map((carPart) => (
                <Grid item xs={12} md={6} lg={4} key={carPart._id}>
                  <NewArrivalsItem carPart={carPart}></NewArrivalsItem>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
        <Footer></Footer>
      </>
    );
};

export default HotDealsAll;