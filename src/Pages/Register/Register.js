import React from 'react';
import './Register.css';
import {
    Alert,
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useForm } from "react-hook-form";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Link from "@mui/material/Link";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import { NavLink } from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import { useHistory } from 'react-router';

const Register = () => {

  const { user, handleEmailSignUp } = useAuth();

  const history = useHistory()

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
     const { register, handleSubmit,reset } = useForm();
    const onSubmit = (data) => {
         handleEmailSignUp(data?.email,data?.password,data?.name,history);
        console.log(data);
        setValues('')
        reset()
     };
    return (
      <Container sx={{ paddingTop: 10 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography
            variant="h4"
            sx={{ textAlign: "left" }}
            component="div"
            gutterBottom
          >
            Registration Form
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Box>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Box>
                    <TextField
                      id="name"
                      label="Name"
                      type="text"
                      autoComplete="current-name"
                      sx={{ width: "100%", mb: 5 }}
                      {...register("name")}
                    />
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
                  <NavLink to="/login">Login Your Account</NavLink>
                  <Box>
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{ marginTop: 5 }}
                    >
                      Register
                    </Button>
                  </Box>
                </form>
              </Box>
              <Box sx={{marginTop:2}}>
                {user?.email && (
                        <Alert severity="success">
                            Registration successfully
                        </Alert>
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
                  <Button type="submit" variant="contained">
                    <GoogleIcon />
                  </Button>
                </Link>
                <Link href="#" underline="none">
                  <Button type="submit" variant="contained">
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

export default Register;