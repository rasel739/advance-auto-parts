import * as React from "react";
import './Admin.css';
import {
  Switch,
  Route,
  NavLink,
  useRouteMatch,
} from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import AdminPanelSettingsRoundedIcon from "@mui/icons-material/AdminPanelSettingsRounded";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import AddBoxIcon from "@mui/icons-material/AddBox";
import AddParts from "../../AddParts/AddParts";
import AllOrder from "../AllOrder/AllOrder/AllOrder";


const Admin = () => {
    document.title = "Admin";

    let { path, url } = useRouteMatch();
    
    const drawerWidth = 240;

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              <AdminPanelSettingsRoundedIcon /> Admin Panel
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <Toolbar />
          <Box
            sx={{ overflow: "auto", backgroundColor: "black", height: "100%" }}
          >
            <List sx={{ width: "100%", textAlign: "left" }}>
              <Box sx={{ borderBottom: 1, color: "white", marginBottom: 2 }}>
                <NavLink
                  activeClassName="admin-selected"
                  className="admin-custom"
                  to={`${url}/allOrder`}
                >
                  <ShoppingBasketIcon /> ALL ORDER
                </NavLink>
              </Box>

              <Box sx={{ borderBottom: 1, color: "white", marginBottom: 2 }}>
                <NavLink
                  activeClassName="admin-selected"
                  className="admin-custom"
                  to={`${url}/login`}
                >
                  <SupervisorAccountIcon /> MAKE ADMIN
                </NavLink>
              </Box>
              <Box sx={{ borderBottom: 1, color: "white", marginBottom: 2 }}>
                <NavLink
                  activeClassName="admin-selected"
                  className="admin-custom"
                  to={`${url}/add-car-parts`}
                >
                  <AddBoxIcon /> ADD CAR PART
                </NavLink>
              </Box>
            </List>
          </Box>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Switch>
            <Route path={`${path}/allOrder`}>
                <AllOrder></AllOrder>
            </Route>
            <Route path={`${path}/add-car-parts`}>
              <AddParts></AddParts>
            </Route>
          </Switch>
        </Box>
      </Box>
    </>
  );
};

export default Admin;
