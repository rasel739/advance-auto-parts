import React from 'react';
import './MakeAdmin.css';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { useForm } from "react-hook-form";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const MakeAdmin = () => {

     const [open, setOpen] = React.useState(false);
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {

      fetch("https://advance-auto-part.herokuapp.com/makeAdmin", {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      }).then((result) => {

        setOpen(result);
        if (result) {
          return (
            <Button variant="outlined" onClick={handleClickOpen}>
              Open
            </Button>
          );
        }
          reset();
      });
       
      

  }
  
  const handleClickOpen = () => {
    setOpen(open);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
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
                    sx={{ width: "100%", mb: 2, mt: 4 }}
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
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="draggable-dialog-title"
          sx={{ marginTop: -50 }}
        >
          <DialogContent sx={{ margin: 5 }}>
            <DialogContentText>
              <div className="add-parts">
                <span>
                  <CheckCircleOutlineIcon sx={{ fontSize: "5rem" }} />
                </span>
                <span>New Admin Add successfully</span>
              </div>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" onClick={handleClose}>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};

export default MakeAdmin;