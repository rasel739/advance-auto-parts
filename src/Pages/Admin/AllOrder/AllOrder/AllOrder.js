import React from 'react';
import './AllOrder.css';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import useAllOrder from '../../../../hooks/useAllOrder'
import AllOrderItem from '../AllOrderItem/AllOrderItem';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const AllOrder = () => {

    const [allOrder] = useAllOrder()

    
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">Name</TableCell>
                  <TableCell align="left">User Photo</TableCell>
                  <TableCell align="left">Email</TableCell>
                  <TableCell align="left">Title</TableCell>
                  <TableCell align="left">View</TableCell>
                  <TableCell align="left">Delete</TableCell>
                  <TableCell align="left">Update</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {allOrder.map((allorder) => (
                  <AllOrderItem
                    key={allOrder._id}
                    allorder={allorder}
                  ></AllOrderItem>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Box>
    );
};

export default AllOrder;