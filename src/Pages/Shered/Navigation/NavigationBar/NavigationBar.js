import * as React from "react";
import './NavigationBar.css';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Container,  ListItemText,  useTheme } from "@mui/material";
import { NavLink,Link } from "react-router-dom";
import title from '../../../../images/car-title-2.png'
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import useAuth from "../../../../hooks/useAuth";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import useMyOrder from "../../../../hooks/useMyOrder";
import { makeStyles } from "@mui/styles";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";


const StyledBadgeD = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const NavigationBar = () => {

  const theme = useTheme()

  const useStyle = makeStyles({
    sliderFont: {
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    navItemContainer: {
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
  });

  const { navIcon, navItemContainer } = useStyle();

  const [myOrder] = useMyOrder();

  const { user, LogOut ,admin} = useAuth();

     const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      sx={{ marginTop: 6 }}
    >
      {user?.email ? (
        <Box style={admin?{display:'none'}:{display:'block'}}>
          <MenuItem onClick={handleMenuClose}>
            <NavLink to="/dashboard" style={{ textDecoration: "none" }}>
              <Button variant="contained">
                <DashboardIcon /> Dashboard
              </Button>
            </NavLink>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <NavLink to="/login" style={{ textDecoration: "none" }}>
              <Button onClick={LogOut} color="error" variant="contained">
                <LogoutIcon /> LogOut
              </Button>
            </NavLink>
          </MenuItem>
        </Box>
      ) : (
        <MenuItem onClick={handleMenuClose}>
          <NavLink to="/login">
            <Button variant="contained">
              <LoginIcon /> Login
            </Button>
          </NavLink>
        </MenuItem>
      )}
      {admin && (
        <Box>
          
          <MenuItem onClick={handleMenuClose}>
            <NavLink to="/login" style={{ textDecoration: "none" }}>
              <Button onClick={LogOut} color="error" variant="contained">
                <LogoutIcon /> LogOut
              </Button>
            </NavLink>
          </MenuItem>
        </Box>)
        }
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
          className={navIcon}
        >
          <AccountCircle />
        </IconButton>
      </MenuItem>
    </Menu>
  );

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "ripple 1.2s infinite ease-in-out",
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  }));

  const [state, setState] = React.useState(false);

  

  const list = (
    <Box
      sx={{ width: 250, height: 5555, backgroundColor: "#1976D2" }}
      role="presentation"
    >
      <List sx={{ color: "white" }}>
        <ListItem button>
          <ListItemText>Advance Car Parts</ListItemText>
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText style={{ display: "flex" }}>
            <IconButton
              aria-label="cart"
              style={admin ? { display: "none" } : { display: "inline-block" }}
            >
              <StyledBadgeD badgeContent={myOrder?.length} color="secondary">
                <ShoppingCartIcon />
              </StyledBadgeD>
            </IconButton>
            <span
              style={{
                marginLeft: "1rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Avatar alt="Rasel Hosain" src={user?.photoURL} />
              <span style={{ marginLeft: ".2rem" }}>{user?.displayName}</span>
            </span>
          </ListItemText>
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText>
            <Link style={{ color: "white", textDecoration: "none" }} to="/home">
              HOME
            </Link>
          </ListItemText>
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText>
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to="/hot-deals-all"
            >
              HOT DEALS ALL
            </Link>
          </ListItemText>
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText>
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to="/populer-catagorie-all"
            >
              POPULAR CATEGORIE
            </Link>
          </ListItemText>
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText>
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to="/about-us"
            >
              ABOUT US
            </Link>
          </ListItemText>
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText>
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to="/contact-us"
            >
              CONTACT US
            </Link>
          </ListItemText>
        </ListItem>
      </List>
      <Divider />
    </Box>
  );

  return (
    <>
      <Container sx={{ backgroundColor: "#1976D2" }} maxWidth="xl">
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
                className={navIcon}
                onClick={() => setState(true)}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                <img src={title} sx={{ width: "100%" }} alt="" />
              </Typography>
              <Toolbar>
                <Box sx={{ flexGrow: 1 }} className={navItemContainer}>
                  <NavLink
                    to="/home"
                    className="navigation-bar"
                    activeClassName="selected"
                  >
                    HOME
                  </NavLink>
                  <NavLink
                    to="/hot-deals-all"
                    className="navigation-bar"
                    activeClassName="selected"
                  >
                    HOT DEALS ALL
                  </NavLink>
                  <NavLink
                    to="/populer-catagorie-all"
                    className="navigation-bar"
                    activeClassName="selected"
                  >
                    POPULAR CATEGORIE
                  </NavLink>
                  <NavLink
                    to="/about-us"
                    className="navigation-bar"
                    activeClassName="selected"
                  >
                    ABOUT US
                  </NavLink>
                  <NavLink
                    to="/contact-us"
                    className="navigation-bar"
                    activeClassName="selected"
                  >
                    CONTACT US
                  </NavLink>

                  {admin && (
                    <NavLink
                      to="/admin"
                      className="navigation-bar"
                      activeClassName="selected"
                    >
                      <Button variant="contained" color="success">
                        <AdminPanelSettingsIcon /> ADMIN
                      </Button>
                    </NavLink>
                  )}

                  <IconButton
                    aria-label="cart"
                    style={
                      admin ? { display: "none" } : { display: "inline-block" }
                    }
                  >
                    <StyledBadgeD
                      badgeContent={myOrder?.length}
                      color="secondary"
                    >
                      <ShoppingCartIcon />
                    </StyledBadgeD>
                  </IconButton>
                </Box>
              </Toolbar>
              <Box sx={{ flexGrow: 1 }} />
              {user?.email ? (
                <Box sx={{ display: { xs: "none", md: "flex" } }}>
                  <IconButton
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                    color="inherit"
                  >
                    <Stack direction="row" spacing={2}>
                      <StyledBadge
                        overlap="circular"
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "right",
                        }}
                        variant="dot"
                      >
                        <Avatar alt="Remy Sharp" src={user?.photoURL} />
                      </StyledBadge>
                    </Stack>
                  </IconButton>
                </Box>
              ) : (
                <NavLink to="/login">
                  <Button variant="contained">
                    <LoginIcon /> Login
                  </Button>
                </NavLink>
              )}
              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </AppBar>
          {renderMobileMenu}
          {renderMenu}
        </Box>
      </Container>
      <div>
        <Drawer open={state} onClose={() => setState(false)}>
          {list}
        </Drawer>
      </div>
    </>
  );
};

export default NavigationBar;
