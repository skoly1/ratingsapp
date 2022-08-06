import { AppBar, Button, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import React from "react";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import { useState } from "react";
import SideMenu from "./SideMenu";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { PAGES } from "../../utils/NavPages";

const Navbar = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <AppBar sx={{ background: "rgb(20, 20, 20)" }}>
        <Toolbar>
          <MovieOutlinedIcon />

          {isMatch ? (
            <>
              <SideMenu />
            </>
          ) : (
            <>
              <Tabs
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
                indicatorColor="secondary"
              >
                {PAGES.map((page, index) => (
                  <Tab key={index} label={page} />
                ))}
              </Tabs>
              <Button sx={{ marginLeft: "auto" }} variant="contained">
                Login
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
