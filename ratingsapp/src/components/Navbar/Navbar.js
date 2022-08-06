import { AppBar, Button, Tab, Tabs, Toolbar } from "@mui/material";
import React from "react";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
const Navbar = () => {
  return (
    <>
      <AppBar sx={{ background: "rgb(20, 20, 20)" }}>
        <Toolbar>
          <MovieOutlinedIcon />

          <Tabs textColor="inherit">
            <Tab label="Home" />
            <Tab label="Latest Movies" />
            <Tab label="Watchlist" />
          </Tabs>
          <Button sx={{ marginLeft: "auto" }} variant="contained">
            Login
          </Button>
          <Button sx={{ marginLeft: "10px" }} variant="contained">
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
