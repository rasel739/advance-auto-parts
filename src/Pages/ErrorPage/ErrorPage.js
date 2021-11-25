import { Button, Container } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.css';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";

const ErrorPage = () => {
    document.title = "4O4-Page Not Found";
    
    return (
      <Container maxWidth="xl" className="error-bg">
        <Box>
          <Typography variant="h1" color="error" component="div" gutterBottom>
            4O4
          </Typography>
          <Typography
            variant="h3"
            color="secondary"
            component="div"
            gutterBottom
          >
            Page Not Found
          </Typography>
          <Link to="/home" style={{ textDecoration: "none" }}>
            <Button variant="contained" endIcon={<HomeIcon />}>
              Go To
            </Button>
          </Link>
        </Box>
      </Container>
    );
};

export default ErrorPage;