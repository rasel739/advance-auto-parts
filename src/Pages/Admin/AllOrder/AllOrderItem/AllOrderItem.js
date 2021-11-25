import React from 'react';
import './AllOrderItem.css';
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { useForm } from "react-hook-form";
import { TextField } from '@mui/material';
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Liststyle = {
  width: "100%",
  maxWidth: 360,
  bgcolor: "background.paper",
};



const AllOrderItem = ({ allorder }) => {

  const [openStatus, setOpenStatus] = React.useState(false);
  
  const { register, handleSubmit } = useForm();

     const [open, setOpen] = React.useState(false);
     const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  
  
    const {
      
       image,
        time,
        name,
         userPhoto,
        Date,
       price,
       title,
        email,
        type,
      _id,
      status
  } = allorder;
  
   
    
    const handleDeleteOrder = (Id) => {
        
        const deleteConfirm = window.confirm('Are you sure you want to delete')

        if (deleteConfirm) {
          
        fetch(`https://advance-auto-part.herokuapp.com/deleteMyOrder/${Id}`, {
          method: "DELETE",
          headers: { "content-type": "application/json" },
        }).then((result) => {
          if (result) {
            
             alert("Delete Successfully");
        }
        });
      }
    };
   
  
  
   
  const onSubmit = (data) => {
     
    fetch(`https://advance-auto-part.herokuapp.com/updateStatus/${_id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    }).then((result) => {
      setOpenStatus(result);
      if (result) {
        return (
          <Button variant="outlined" onClick={handleClickOpen}>
            Open
          </Button>
        );
      }
    });
  };

    const handleClickOpen = () => {
      setOpenStatus(openStatus);
    };

    const handleCloseStatus = () => {
      setOpenStatus(false);
    };
    
 
  
    return (
      <>
        <TableRow>
          <TableCell align="left">{email}</TableCell>
          <TableCell align="left">{title}</TableCell>
          <TableCell align="left">
            <Button
              variant="contained"
              onClick={handleOpen}
              startIcon={<VisibilityIcon />}
            >
              View
            </Button>
          </TableCell>
          <TableCell align="left">
            <Button
              variant="contained"
              color="error"
              startIcon={<DeleteIcon />}
              onClick={() => handleDeleteOrder(_id)}
            >
              Delete
            </Button>
          </TableCell>
          <TableCell align="left">
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                id="admin"
                defaultValue={status}
                size="small"
                type="text"
                sx={{ width: "50%" }}
                {...register("status", { required: true })}
              />
              <Button
                type="submit"
                color="success"
                variant="contained"
                sx={{ width: "50%", height: "2.5rem" }}
              >
                Update
              </Button>
            </form>
          </TableCell>
        </TableRow>
        <div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  mb: 2,
                }}
              >
                <Stack direction="row" spacing={2}>
                  <Avatar
                    alt="Remy Sharp"
                    src={userPhoto}
                    sx={{ width: 56, height: 56 }}
                  />
                </Stack>
                <Typography
                  id="modal-modal-title"
                  variant="h6"
                  component="h2"
                  sx={{ ml: 2 }}
                >
                  {name}
                </Typography>
              </Box>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {title}
              </Typography>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <CardMedia
                      component="img"
                      height="210"
                      image={image}
                      alt="product-img"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <List
                      sx={Liststyle}
                      component="nav"
                      aria-label="mailbox folders"
                    >
                      <ListItem button>
                        <ListItemText primary="Order Date" />
                        <ListItemText primary={Date} />
                      </ListItem>
                      <Divider />
                      <ListItem button divider>
                        <ListItemText primary="Order Time" />
                        <ListItemText primary={time} />
                      </ListItem>
                      <ListItem button>
                        <ListItemText primary="Type" />
                        <ListItemText primary={type} />
                      </ListItem>
                      <Divider light />
                      <ListItem button>
                        <ListItemText primary="Price" />
                        <ListItemText primary={`$ ${price} USD`} />
                      </ListItem>
                    </List>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Modal>
        </div>
        <div>
          <Dialog
            open={openStatus}
            onClose={handleCloseStatus}
            aria-labelledby="draggable-dialog-title"
            sx={{ marginTop: -50 }}
          >
            <DialogContent sx={{ margin: 5 }}>
              <DialogContentText>
                <div className="add-parts">
                  <span>
                    <CheckCircleOutlineIcon sx={{ fontSize: "5rem" }} />
                  </span>
                  <span> Status Update Successfully</span>
                </div>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button variant="contained" onClick={handleCloseStatus}>
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </>
    );
};

export default AllOrderItem;