import React from 'react';
import NavigationBar from '../../Shered/Navigation/NavigationBar/NavigationBar';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import useAuth from '../../../hooks/useAuth';
import Typography from "@mui/material/Typography";
import MyOrder from '../MyOrder/MyOrder';
import useMyOrder from '../../../hooks/useMyOrder';
import Checkout from '../Checkout/Checkout';



const Dashboard = () => {
    document.title = "Dashboard";
    
    const { user } = useAuth()

  const [myOrder] = useMyOrder();

  

    
    return (
     <>
        <NavigationBar></NavigationBar>
        <Container sx={{ paddingTop: 2 }}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={12} lg={3}>
                <Typography variant="h5" component="div" gutterBottom>
                  <span style={{ color: "green" }}> Welcome</span>{" "}
                  {user?.displayName}
                </Typography>
                <Box>
                  <Paper
                    variant="outlined"
                    square
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: 3,
                    }}
                  >
                    <Stack direction="row" spacing={2}>
                      <Avatar
                        alt="Remy Sharp"
                        src={user?.photoURL}
                        sx={{ width: 200, height: 200 }}
                      />
                    </Stack>
                    <Typography variant="h5" component="div" gutterBottom>
                      Name : {user?.displayName}
                    </Typography>
                    <Typography variant="h6" component="div" gutterBottom>
                      Email :{user?.email}
                    </Typography>
                  </Paper>
                </Box>
              </Grid>
              <Grid item xs={12} md={12} lg={6}>
                <Typography variant="h4" component="div" gutterBottom>
                  My Order({myOrder?.length})
                </Typography>

                <Box>
                  {myOrder.map((myorder) => (
                    <MyOrder
                      key={myorder._id}
                      myorder={myorder}
                    ></MyOrder>
                  ))}
                </Box>
              </Grid>
              <Grid item xs={12} md={12} lg={3}>
                <Checkout myOrder={myOrder}></Checkout>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </>
    );
};

export default Dashboard;