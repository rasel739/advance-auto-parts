import React from 'react';
import './ReviewContent.css';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";

const ReviewContent = ({review}) => {

   
    
    const {name,rating,userImage,description } = review;

    return (
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Stack direction="row" spacing={2}>
          <Avatar
            alt="Remy Sharp"
            src={userImage}
            sx={{ width: 56, height: 56 }}
          />
        </Stack>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textAlign: "justify" }}
          >
           {description.slice(0,500)}
          </Typography>
        </CardContent>
        <CardActions>
          <Rating name="simple-controlled" value={parseFloat(rating)} />( Review Rating)
        </CardActions>
      </Card>
    );
};

export default ReviewContent;