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
import UpdateIcon from "@mui/icons-material/Update";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

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
        _id
    } = allorder;
    
    const handleDeleteOrder = (Id) => {
        
        const deleteConfirm = window.confirm('Are you sure you want to delete')

        if (deleteConfirm) {
          
        fetch(`https://advance-auto-part.herokuapp.com/deleteMyOrder/${Id}`, {
          method: "DELETE",
          headers: { "content-type": "application/json" },
        }).then((result) => {
          console.log(result);
        });
      }
    };
   
    return (
      <>
        <TableRow>
          <TableCell component="th" scope="row">
            {name}
          </TableCell>
          <TableCell align="left">
            <Stack direction="row" spacing={2}>
              <Avatar
                alt="Remy Sharp"
                src={userPhoto}
                sx={{ width: 56, height: 56 }}
              />
            </Stack>
          </TableCell>
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
            <Button
              variant="contained"
              color="success"
              startIcon={<UpdateIcon />}
            >
              Update
            </Button>
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
      </>
    );
};

export default AllOrderItem;