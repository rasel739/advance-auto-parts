import React from 'react';
import './HotDealsDetails.css';
import NavigationBar from '../../Shered/Navigation/NavigationBar/NavigationBar';
import useCarSingleDetails from '../../../hooks/useCarSingleDetails';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";






const HotDealsDetails = () => {
    document.title = 'Hot Deals Details';
    const [carDetails] = useCarSingleDetails()
    const {
      deletePrice,
      description,
      image,
      location,
      price,
      quantitySolid,
      rating,
      returnPolicy,
      title,
      type,
      warning,
      warranty,
    } = carDetails;

function createData(name, calories) {
  return { name, calories };
}

const rows = [
  createData("Location", location),
  createData("Quantity Solid", quantitySolid),
  createData("Type", type),
  createData("Return Policy", returnPolicy),
  createData("Warranty", warranty),
];
    
    
   

    return (
      <React.Fragment>
        <NavigationBar></NavigationBar>
        <Container maxWidth="lg" sx={{ paddingTop: 1 }}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Box sx={{}}>
                  <CardMedia
                    component="img"
                    image={image}
                    alt="Paella dish"
                    sx={{ width: "100%", height: "100%" }}
                  />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box>
                  <Typography variant="h3" component="div" gutterBottom>
                    {title}
                  </Typography>
                  <Typography component="legend">(customer review )</Typography>
                  <Rating
                    name="read-only"
                    value={parseFloat(rating)}
                    readOnly
                  />
                  <Typography variant="h3" component="div">
                    <span>
                      <del>${deletePrice}</del>
                    </span>{" "}
                    <span style={{ color: "red" }}>${price}</span>
                  </Typography>
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: "100%" }} aria-label="caption table">
                      <caption>
                        <span style={{color:'orange'}}>Warning</span>: {warning}
                      </caption>
                      <TableHead>
                        <TableRow>
                          <TableCell>
                            {" "}
                            <Typography variant="h6" component="div">
                              Product Details
                            </Typography>
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row) => (
                          <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                              {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="h3"
                  component="div"
                  sx={{ textAlign: "left" }}
                >
                  Product Information
                </Typography>
                <Typography paragraph sx={{ textAlign: "left" }}>
                  {description}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </React.Fragment>
    );
};

export default HotDealsDetails;


