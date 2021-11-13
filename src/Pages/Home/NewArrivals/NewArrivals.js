import { Container } from '@mui/material';
import  React from "react";
import Box from "@mui/material/Box";
import './NewArrivals.css';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import useCarPartsAll from '../../../hooks/useCarPartsAll';
import NewArrivalsItem from './NewArrivalsItem/NewArrivalsItem';

const NewArrivals = () => {

  const [carParts] = useCarPartsAll()
  
    

    return (
      <Container sx={{ paddingTop: 5, paddingBottom: 80 }}>
        <Typography
          variant="h3"
          gutterBottom
          component="div"
          sx={{ textAlign: "left" }}
        >
          New Arrivals
          <Box sx={{ borderBottom: 1, width: "10rem", marginTop: 1 }} />
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
            {carParts.slice(0, 6).map((carPart) => (
              <Grid item xs={12} md={6} lg={4}>
                  <NewArrivalsItem carPart={carPart} key={carPart._id}></NewArrivalsItem>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    );
};

export default NewArrivals;