import React from 'react';
import './ReviewAdd.css';
import { Container } from "@mui/material";
import { useForm } from "react-hook-form";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import useAuth from '../../../../hooks/useAuth';

const ReviewAdd = () => {
const {user} = useAuth()
const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        
        const reviewData = data;

        reviewData.name = user?.displayName;
        reviewData.userImage = user?.photoURL;
        reviewData.email = user?.email;

    fetch("http://localhost:5000/addReview", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(reviewData),
    }).then((result) => {
      
        console.log(result)
  });
  reset();
};

    return (
       <Container sx={{padding: 5,}} maxWidth="xl">
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={2}
            xs={12}
            md={8}
            lg={8}
            sx={{ margin: "auto" }}
          >
            <Grid item xs={12}>
              <Box>
                <form onSubmit={handleSubmit(onSubmit)}>
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
                     Review
                    </Button>
                  </Box>
                </form>
              </Box>
            </Grid>
          </Grid>
            </Box>
     </Container>
    );
};

export default ReviewAdd;   