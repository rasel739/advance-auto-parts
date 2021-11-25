import React from 'react';
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import useAuth from '../../hooks/useAuth';
import { Button } from '@mui/material';
import { useForm } from "react-hook-form";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

const PlaceOrder = ({
  modalOpen,
  handleModalClose,
  carPart,
  handleClickOpen,
  
}) => {

   

    const { user } = useAuth();
    
const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        
     
      
      handleAddToCart(data)
     
    }

 

    const handleAddToCart = (placeData) => {
      const date = new Date();

      const randomId = parseInt(Math.random() * 55);

      const { name, email, address, phone } = placeData;

      const productData = {
        ...carPart,
        name: name,
        email: email,
        address: address,
        phone: phone,
      };

      productData.userPhoto = user?.photoURL;
      productData.status = "Pending...";
      productData.Date = date.toLocaleDateString();
      productData.time = date.toLocaleTimeString();
      productData._id = productData._id + randomId;

      

      if (user?.email === productData.email) {
        fetch("https://advance-auto-part.herokuapp.com/carPartsAddToCart", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(productData),
        }).then((result) => {
          if (result) {
            handleModalClose();
            handleClickOpen();
          }
        });
      }
    };
    
    
    

  return (
    <div>
      <Modal
        open={modalOpen}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ width: "50%", margin: "auto" }}
      >
        <Box
          sx={{
            backgroundColor: "white",
            m: 0,
            p: 5,
            width: "80%",
            borderRadius: "1rem",
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2} xs={12}>
              <Grid item xs={12}>
                <Box>
                  <TextField
                    id="name"
                    label="name"
                    defaultValue={user?.displayName}
                    type="text"
                    sx={{ width: "100%", mb: 2 }}
                    {...register("name", { required: true })}
                  />
                </Box>

                <Box>
                  <TextField
                    id="email"
                    label="email"
                    defaultValue={user?.email}
                    type="email"
                    sx={{ width: "100%" }}
                    {...register("email", { required: true })}
                  />
                </Box>
                <Box>
                  <TextField
                    id="phone"
                    label="phone"
                    type="number"
                    sx={{ width: "100%", my: 2 }}
                    {...register("phone", { required: true })}
                  />
                </Box>
                <Box>
                  <TextField
                    id="location"
                    label="location"
                    type="text"
                    sx={{ width: "100%", my: 2 }}
                    {...register("location", { required: true })}
                  />
                </Box>
                <Box>
                  <TextField
                    id="address"
                    label="address"
                    multiline
                    type="text"
                    rows={3}
                    sx={{ width: "100%", my: 2 }}
                    {...register("address", { required: true })}
                  />
                </Box>

                <Box>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ marginTop: 0 }}
                   
                  >
                    Place Order
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    color="error"
                    sx={{ marginTop: 0,ml:5 }}
                    onClick={ handleModalClose}
                  >
                    Cancel
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default PlaceOrder;