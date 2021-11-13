import React, { useState } from 'react';
import './MyOrder.css';
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const MyOrder = ({ myorder }) => {

   const [deleteConfirm, setDeleteConfirm] = useState(false);
   const [open, setOpen] = React.useState(false);
  const [count, setCount] = React.useState(1);

 

  
// acknowledged: true, deletedCount: 1 

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
  
  const handleClickOpen = () => {
    setOpen(true);
     handleDeleteConfirm()
  };

  const handleClose = () => {
    setOpen(false);
  };

 
  const handleDeleteConfirm = () => {

    setDeleteConfirm(true);

    if (deleteConfirm) {
      
       handleClose()
    }

    console.log(deleteConfirm)
    
  }


  const handleDelete = (Id) => {

      handleClickOpen();

    if (deleteConfirm) {
      
      fetch(`https://advance-auto-part.herokuapp.com/deleteMyOrder/${Id}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      }).then((result) => {
        console.log(result);
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
            <Typography variant="h6" gutterBottom component="div">
              {status}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6" gutterBottom component="div">
              <del style={{ color: "red" }}>${deletePrice}</del> ${price}
            </Typography>
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
                startIcon={<ShoppingCartIcon />}
                sx={{ marginBottom: 1 }}
              >
                Buy Now
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
          </Grid>
        </Paper>
        <div>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="draggable-dialog-title"
            sx={{ marginTop: -50 }}
          >
            <DialogContent sx={{ margin: 1 }}>
              <DialogContentText>
                <div className="deletePopUp">
                  <span>
                    <DeleteForeverIcon sx={{ fontSize: "5rem" }} />
                  </span>
                  <span>Do you want to delete it?</span>
                </div>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button variant="contained" onClick={handleClose} color="error">
                Cancel
              </Button>
              <Button variant="contained" onClick={handleDeleteConfirm}>
                Confirm
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </>
    );
};

export default MyOrder;