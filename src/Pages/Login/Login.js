import { Container, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import React from 'react';
import './Login.css';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useForm } from "react-hook-form";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Link from "@mui/material/Link";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import {
  NavLink,
} from 'react-router-dom';
import {Alert} from "@mui/material";
import useAuth from '../../hooks/useAuth';
import { useLocation,useHistory } from "react-router";


const Login = () => {

  const location = useLocation();

  const history = useHistory();
  
  const { user, handleEmailSignIn, handleGoogleSignIn, handleGithubSignIn } =
    useAuth();

  
 

    const [values, setValues] = React.useState({
      amount: "",
      password: "",
      weight: "",
      weightRange: "",
      showPassword: false,
    });

    const handleClickShowPassword = () => {
      setValues({
        ...values,
        showPassword: !values.showPassword,
      });
    };
    const handleChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
    };
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
    const {
      register,
      handleSubmit,
    } = useForm();
    const onSubmit = (data) => {
         handleEmailSignIn(data?.email, data?.password,location,history);
        console.log(data);
  };
  
  const handleGoogleLogin = () => {
    
      handleGoogleSignIn(location,history)
  }

  const handleGithubLogin = () => {

    handleGithubSignIn(location,history)
  }

    return (
      <Container sx={{ paddingTop: 10 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography
            variant="h4"
            sx={{ textAlign: "left" }}
            component="div"
            gutterBottom
          >
            Login Form
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Box>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Box>
                    <TextField
                      id="email"
                      label="Email"
                      type="email"
                      autoComplete="current-email"
                      sx={{ width: "100%" }}
                      {...register("email", { required: true })}
                    />
                  </Box>
                  <Box>
                    <FormControl
                      sx={{ width: "100%", my: 5 }}
                      variant="outlined"
                    >
                      <InputLabel htmlFor="outlined-adornment-password">
                        Password
                      </InputLabel>
                      <OutlinedInput
                        {...register("password")}
                        id="outlined-adornment-password"
                        type={values.showPassword ? "text" : "password"}
                        value={values.password}
                        onChange={handleChange("password")}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {values.showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                        label="Password"
                      />
                    </FormControl>
                  </Box>
                  <NavLink to="/register">Create a new account</NavLink>
                  <Box>
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{ marginTop: 5 }}
                    >
                      Login
                    </Button>
                  </Box>
                </form>
              </Box>
              <Box sx={{ marginTop: 2 }}>
                {user?.email && (
                  <Alert severity="success">Login successfully</Alert>
                )}
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Typography
                variant="body1"
                sx={{ marginBottom: "5rem" }}
                component="div"
                gutterBottom
              >
                Or use one of these options
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  typography: "body1",
                  "& > :not(style) + :not(style)": {
                    ml: 2,
                  },
                }}
              >
                <Link href="#" underline="none">
                  <Button
                    onClick={handleGoogleLogin}
                    type="submit"
                    variant="contained"
                  >
                    <GoogleIcon />
                  </Button>
                </Link>
                <Link href="#" underline="none">
                  <Button
                    onClick={handleGithubLogin}
                    type="submit"
                    variant="contained"
                  >
                    <GitHubIcon />
                  </Button>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    );
};

export default Login;