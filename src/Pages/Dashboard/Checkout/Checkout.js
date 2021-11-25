import React from 'react';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Checkout = () => {

  
  const style = {
    width: "100%",
    maxWidth: 360,
    bgcolor: "background.paper",
    };

    
   

  return (
    <>
      <Typography variant="h5" component="div" gutterBottom>
        Checkout Summary
      </Typography>
      <Box>
        <List sx={style} component="nav" aria-label="mailbox folders">
          <ListItem button>
            <ListItemText primary="Subtotal :" />
            <ListItemText primary="0 Tk" />
          </ListItem>
          <Divider />
          <ListItem button divider>
            <ListItemText primary="Shipping :" />
            <ListItemText primary="0 Tk" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Total :" />
            <ListItemText primary="0 Tk" />
          </ListItem>
          <Divider light />
        </List>
      </Box>
    </>
  );
};

export default Checkout;