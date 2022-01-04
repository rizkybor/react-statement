import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import GoogleButton from "react-google-button";
import { emailValidator, passwordValidator } from "../../helpers/index";
import { signInUser, signInError } from "../../store/actions/signin/index";

import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormHelperText from "@mui/material/FormHelperText";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      Rizky Ajie Kurniawan {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();
const initState = {
  email: "",
  password: "",
  showPassword: false,
};

export default function SignIn() {
  const [signInValue, setSignInValue] = useState(initState);
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userActive);
  const navigate = useNavigate();

  const validate = (fieldValues = signInValue) => {
    let temporary = { ...errors };
    if ("email" in fieldValues) {
      temporary.email = fieldValues.email ? "" : "This field is required.";
      if (fieldValues.email) {
        temporary.email = emailValidator(fieldValues.email)
          ? ""
          : "Email invalid Format";
      }
    }
    if ("password" in fieldValues) {
      temporary.password = fieldValues.password
        ? ""
        : "This field is required.";
      if (fieldValues.password) {
        temporary.password = passwordValidator(fieldValues.password)
          ? ""
          : "Password must be at least 8 characters, 1 number, 1 upper and 1 lowercase";
      }
    }
    setErrors({ ...temporary });
    if (fieldValues === signInValue) {
      return Object.values(temporary).every((x) => x === "");
    }
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setSignInValue({ ...signInValue, [name]: value });
    validate({ [name]: value });
    dispatch(signInError(""));
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    if (validate()) {
      dispatch(signInError(""));
      dispatch(signInUser(signInValue, navigate));
    }
  };

  const handleClickShowPassword = () => {
    setSignInValue({
      ...signInValue,
      showPassword: !signInValue.showPassword,
    });
  };

  useEffect(() => {
    return () => {
      dispatch(signInError(""));
    };
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSignIn}
            noValidate
            sx={{ mt: 1 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  onChange={handleOnChange}
                  value={signInValue.email}
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  error={errors.email ? true : false}
                  helperText={errors.email}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel
                    htmlFor="outlined-adornment-password"
                    error={errors.password ? true : false}
                    required
                  >
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    name="password"
                    type={signInValue.showPassword ? "text" : "password"}
                    value={signInValue.password}
                    onChange={handleOnChange}
                    error={errors.password ? true : false}
                    required
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {signInValue.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                  {errors.password && (
                    <FormHelperText error>{errors.password}</FormHelperText>
                  )}
                </FormControl>
              </Grid>
            </Grid>

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />

            {user.errorMessage && (
              <Alert severity="error" sx={{ mt: 3 }}>
                {user.errorMessage}
              </Alert>
            )}
            {user.loading ? (
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{ mt: 3, mb: 2 }}
              >
                <CircularProgress />
              </Grid>
            ) : (
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
            )}

            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              sx={{ mb: 4 }}
            >
              <GoogleButton
                size="small"
                onClick={() => {
                  console.log("Google button clicked");
                }}
              />
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Link to="/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
