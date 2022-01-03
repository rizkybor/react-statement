import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Alert from "@mui/material/Alert";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import CssBaseline from "@mui/material/CssBaseline";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CircularProgress from "@mui/material/CircularProgress";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { emailValidator, passwordValidator } from "../../helpers/index";
import { signUpUser, signUpError } from "../../store/actions/signup/index";

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

// step 1
const theme = createTheme();
const initState = {
  email: "",
  password: "",
  showPassword: false,
};

export default function SignUp() {
  // step 2 >> setState value untuk handle validate
  const [signUpValue, setSignUpValue] = useState(initState);
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  // step 4 >> function validate submit
  const validate = (fieldValues = signUpValue) => {
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
    if (fieldValues === signUpValue) {
      return Object.values(temporary).every((x) => x === "");
    }
  };

  // step 3 >> assign Value Texfield to initState with useState and setState
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setSignUpValue({ ...signUpValue, [name]: value });
    validate({ [name]: value });
    dispatch(signUpError(""));
  };

  const handleClickShowPassword = () => {
    setSignUpValue({
      ...signUpValue,
      showPassword: !signUpValue.showPassword,
    });
  };

  // step 4 >> function validate submit
  const handleSignUp = (e) => {
    e.preventDefault();
    if (validate()) {
      dispatch(signUpError(""));
      dispatch(signUpUser(signUpValue, navigate));
    }
  };

  useEffect(() => {
    return () => {
      dispatch(signUpError(""));
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
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSignUp}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  onChange={handleOnChange}
                  value={signUpValue.email}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
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
                    type={signUpValue.showPassword ? "text" : "password"}
                    value={signUpValue.password}
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
                          {signUpValue.showPassword ? (
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
                Sign Up
              </Button>
            )}
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/login">Already have an account? Sign in</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
