import React from 'react';
import './MyOrder.css';
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import SendIcon from "@mui/icons-material/Send";
import { Link } from 'react-router-dom';
import PaymentIcon from "@mui/icons-material/Payment";


const MyOrder = ({ myorder}) => {

  const [count, setCount] = React.useState(1);

   

     const {
       deletePrice,
       image,
         time,
        Date,
       price,
      status,
       title,
       _id
  } = myorder;
  

  const handleDelete = (Id) => {

     const deleteConfirm = window.confirm('Are you sure you want to delete')

    if (deleteConfirm) {
      
      fetch(`https://advance-auto-part.herokuapp.com/deleteMyOrder/${Id}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      }).then((result) => {
        
        if (result) {
          alert("Delete Successfully");
          window.location.reload();
        }

      });
      
    }
  }
  
    return (
      <>
        <Paper
          variant="outlined"
          square
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 4,
            padding: 1,
          }}
        >
          <Grid item xs={4}>
            <CardMedia
              component="img"
              height="194"
              image={image}
              alt="Paella dish"
            />
          </Grid>
          <Grid item xs={4}>
            <Typography
              variant="h5"
              gutterBottom
              component="div"
              sx={{ borderBottom: 1 }}
            >
              {title}
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              component="div"
              sx={{ borderBottom: 1 }}
            >
              {time}
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              component="div"
              sx={{ borderBottom: 1 }}
            >
              {Date}
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              component="div"
              sx={
                status === "Pending..." ? { color: "red" } : { color: "green" }
              }
            >
              {status}
            </Typography>
            <Button variant="outlined" startIcon={<SendIcon />}>
              <Link to="/review-add" style={{ textDecoration: "none" }}>
                Review
              </Link>
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6" gutterBottom component="div">
              <del style={{ color: "red" }}>${deletePrice}</del> ${price}
            </Typography>
            {status === "Pending..." ? (
              <div>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "space",
                    padding: 3,
                  }}
                >
                  <Button
                    variant="outlined"
                    startIcon={<PaymentIcon />}
                    sx={{ marginBottom: 1 }}
                  >
                    <Link to="/payment" style={{ textDecoration: "none" }}>
                      Payment
                    </Link>
                  </Button>
                  <Button
                    onClick={() => handleDelete(_id)}
                    variant="outlined"
                    color="error"
                    startIcon={<DeleteIcon />}
                  >
                    DELETE
                  </Button>
                </Box>
                <ButtonGroup>
                  <Button
                    aria-label="reduce"
                    onClick={() => {
                      setCount(Math.max(count - 1, 0));
                       
                    }}
                    color="error"
                  >
                    <RemoveIcon fontSize="small" />
                  </Button>
                  <Button aria-label="reduce">{count}</Button>
                  <Button
                    aria-label="increase"
                    onClick={() => {
                      setCount(count + 1);
                       
                    }}
                    color="success"
                  >
                    <AddIcon fontSize="small" />
                  </Button>
                </ButtonGroup>
              </div>
            ) : (
              <Typography
                variant="h6"
                gutterBottom
                component="div"
                sx={{ color: "orange" }}
              >
                Shipping
              </Typography>
            )}
          </Grid>
        </Paper>
      </>
    );
   
};

export default MyOrder;