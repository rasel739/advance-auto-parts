import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from "@mui/material/Typography";
import NavigationBar from '../Shered/Navigation/NavigationBar/NavigationBar';



const Payment = () => {
    return (
        <>
        <NavigationBar></NavigationBar>
        <Container sx={{my:8}}>
          <Box>
            <Typography variant="h3" color="secondary">
              Payment Coming Soon
            </Typography>
          </Box>
            </Container>
    
      </>
    );
};

export default Payment;