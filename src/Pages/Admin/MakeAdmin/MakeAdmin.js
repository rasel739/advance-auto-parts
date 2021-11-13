import React from 'react';
import './MakeAdmin.css';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { useForm } from "react-hook-form";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";


const MakeAdmin = () => {


    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {

      fetch("http://localhost:5000/makeAdmin", {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data)
      }).then(result => {
          
        
        })
       
        reset();

    }
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box sx={{ backgroundColor: "black", color: "white" }}>
              <Typography
                variant="h4"
                sx={{ textAlign: "center" }}
                component="div"
                gutterBottom
              >
                MAKE ADMIN
              </Typography>
              <Paper variant="outlined" square>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <TextField
                    id="admin"
                    label="Admin Create a New Admin Enter Email"
                    type="text"
                    sx={{ width: "100%", mb: 2,mt:4 }}
                    {...register("email", { required: true })}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ marginTop: 0 }}
                  >
                    MAKE ADMIN
                  </Button>
                </form>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Box>
    );
};

export default MakeAdmin;