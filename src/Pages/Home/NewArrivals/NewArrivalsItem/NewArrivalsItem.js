import * as React from 'react';
import Paper from "@mui/material/Paper";
import SpeedDial from "@mui/material/SpeedDial";
import KeyboardArrowUpSharpIcon from "@mui/icons-material/KeyboardArrowUpSharp";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import CardMedia from "@mui/material/CardMedia";
import VisibilitySharpIcon from "@mui/icons-material/VisibilitySharp";
import FavoriteBorderSharpIcon from "@mui/icons-material/FavoriteBorderSharp";
import AddShoppingCartSharpIcon from "@mui/icons-material/AddShoppingCartSharp";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useHistory } from 'react-router';
import useAuth from '../../../../hooks/useAuth';
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import PlaceOrder from '../../../PlaceOrder/PlaceOrder';

const NewArrivalsItem = ({ carPart }) => {
  
const [modalOpen, setModalOpen] = React.useState(false);
const handleModalOpen = () => setModalOpen(true);
const handleModalClose = () => setModalOpen(false);

    const {user, admin} = useAuth()
    const history = useHistory()
     const [open, setOpen] = React.useState(false);

 const actions = [
   {
     icon: <VisibilitySharpIcon onClick={() => handleDetails(carPart._id)} />,
     name: "Parts Details",
   },
   { icon: <FavoriteBorderSharpIcon />, name: "Favorite Parts" },
   {
     icon: admin
       ? ""
       : user?.email && <AddShoppingCartSharpIcon onClick={() => handleModalOpen()} />
         ,
     name: user?.email ? "Add To Cart" : "Please Login",
   },
 ];
   
    const handleDetails = (id) => {

       history.push(`/car-parts-all/${id}`);
    }

    

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };
    return (
      <>
        <Paper
          variant="outlined"
          square
          sx={{
            padding: "1rem",
          }}
        >
          <Grid item xs={9}>
            <CardMedia
              component="img"
              height="194"
              image={carPart.image}
              alt="Paella dish"
            />
            <Typography variant="h5" gutterBottom component="div">
              {carPart.title}
            </Typography>
            <Typography paragraph>
              {carPart.description.slice(0, 60)}
            </Typography>
            <Typography variant="h6" gutterBottom component="div">
              <del style={{ color: "red" }}>${carPart.deletePrice}</del> $
              {carPart.price}
            </Typography>
          </Grid>
          <Box
            sx={{
              height: 5,
              transform: "translateZ(0px)",
              flexGrow: 2,
              marginLeft: 30,
              marginTop: 7,
            }}
          >
            <SpeedDial
              ariaLabel="SpeedDial basic example"
              sx={{ position: "absolute", bottom: 16, right: 16 }}
              icon={<KeyboardArrowUpSharpIcon />}
            >
              {actions.map((action) => (
                <SpeedDialAction
                  key={action.name}
                  icon={action.icon}
                  tooltipTitle={action.name}
                  handle={action.handle}
                  sx={{ backgroundColor: "gray", color: "blue" }}
                />
              ))}
            </SpeedDial>
          </Box>
        </Paper>
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
                  <span> Add To Cart successfully</span>
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
        <PlaceOrder
          modalOpen={modalOpen}
          handleModalClose={handleModalClose}
          handleClickOpen={handleClickOpen}
          setOpen={setOpen}
          carPart={carPart}
        ></PlaceOrder>
      </>
    );
};

export default NewArrivalsItem;


 