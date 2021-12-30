import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }} marginBottom={5}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Ordent Article
          </Typography>
          <Button href="/" color="inherit">
            Home
          </Button>
          <Button href="/news" color="inherit">
            News
          </Button>
          <Button
            onClick={() => localStorage.clear()}
            href="/login"
            color="inherit"
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
