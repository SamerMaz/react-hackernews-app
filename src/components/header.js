import { AppBar, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";
import Typography from "@mui/material/Typography";

const Navbar = () => {
  let activeStyle = {
    textDecoration: "none",
    textDecorationColor: 'red'
  };
  let underline={
    textDecorationColor: 'white'
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "#ff6600" }}>
        <Toolbar>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? underline :activeStyle )}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, mr: 2 }}
              color="white"
            >
              Home
            </Typography>
          </NavLink>
          <NavLink
            to="/news"
            style={({ isActive }) => (isActive ? underline :activeStyle )}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, mr: 4 }}
              color="white"
            >
              News
            </Typography>
          </NavLink>
          <NavLink
            to="/jobs"
            style={({ isActive }) => (isActive ? underline :activeStyle )}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, mr: 4 }}
              color="white"
            >
              Jobs
            </Typography>
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
