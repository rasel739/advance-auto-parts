import { Container } from '@mui/material';
import * as React from 'react';
import { useForm } from "react-hook-form";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import './AddParts.css';



const AddParts = () => {
    const [open, setOpen] = React.useState(false);
     const { register, handleSubmit,reset } = useForm();
     const onSubmit = (data) => {
       
         fetch("https://advance-auto-part.herokuapp.com/addCarParts", {
           method: "POST",
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
         });
         reset()
    };
    
const handleClickOpen = () => {
  setOpen(open);
};

 const handleClose = () => {
    setOpen(false);
  };
    return (
      <Container sx={{ padding: 5 }} maxWidth="xl">
        <Box sx={{ flexGrow: 1 }}>
          <Typography
            variant="h4"
            sx={{ textAlign: "center" }}
            component="div"
            gutterBottom
          >
            Add Parts
          </Typography>

          <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid
                container
                spacing={2}
                xs={12}
                md={8}
                lg={12}
                sx={{ margin: "auto" }}
              >
                <Grid item xs={6}>
                  <Box>
                    <TextField
                      id="title"
                      label="title"
                      type="text"
                      sx={{ width: "100%", mb: 2 }}
                      {...register("title", { required: true })}
                    />
                  </Box>

                  <Box>
                    <TextField
                      id="price"
                      label="price"
                      type="number"
                      sx={{ width: "100%" }}
                      {...register("price", { required: true })}
                    />
                  </Box>
                  <Box>
                    <TextField
                      id="deletePrice"
                      label="deletePrice"
                      type="number"
                      sx={{ width: "100%", my: 2 }}
                      {...register("deletePrice", { required: true })}
                    />
                  </Box>
                  <Box>
                    <TextField
                      id="Rating"
                      label="Rating"
                      type="number"
                      sx={{ width: "100%", my: 2 }}
                      {...register("rating", { required: true })}
                    />
                  </Box>
                  <Box>
                    <TextField
                      id="image"
                      label="Only Image Link "
                      type="text"
                      sx={{ width: "100%" }}
                      {...register("image", { required: true })}
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
                </Grid>
                <Grid item xs={6}>
                  <Box>
                    <TextField
                      id="warranty"
                      label="warranty"
                      type="text"
                      sx={{ width: "100%" }}
                      {...register("warranty", { required: true })}
                    />
                  </Box>
                  <Box>
                    <TextField
                      id="returnPolicy"
                      label="return Policy"
                      type="text"
                      sx={{ width: "100%", my: 2 }}
                      {...register("returnPolicy", { required: true })}
                    />
                  </Box>
                  <Box>
                    <TextField
                      id="quantitySolid"
                      label="quantity Solid"
                      type="text"
                      sx={{ width: "100%", my: 2 }}
                      {...register("quantitySolid", { required: true })}
                    />
                  </Box>
                  <Box>
                    <TextField
                      id="type"
                      label="type"
                      type="text"
                      sx={{ width: "100%" }}
                      {...register("type", { required: true })}
                    />
                  </Box>
                  <Box>
                    <TextField
                      id="warning"
                      label="warning"
                      type="text"
                      sx={{ width: "100%", my: 2 }}
                      {...register("warning", { required: true })}
                    />
                  </Box>
                  <Box>
                    <TextField
                      id="description"
                      label="description"
                      multiline
                      type="text"
                      rows={3}
                      sx={{ width: "100%", my: 2 }}
                      {...register("description", { required: true })}
                    />
                  </Box>
                  <Box>
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{ marginTop: 0 }}
                    >
                      Add Parts
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </form>
          </Box>
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
                  <span> Add Car Parts successfully</span>
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
      </Container>
    );
};

export default AddParts;