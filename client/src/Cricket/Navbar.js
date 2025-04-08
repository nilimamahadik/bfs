import React from "react";
import AppBar from "@material-ui/core/AppBar";
import {
  Button,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useNavigate } from "react-router-dom";

const useStyle = makeStyles((theme) => {
  console.log("STYLE", theme);
});

const Navbar = () => {
  const classes = useStyle();
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/")
  }
  return (
    <div>
      <AppBar color="primary" position="static" style={{ flexFlow: 1 }}>
        <Toolbar>
          <IconButton edge="start" color="inherit">
            <MenuIcon />
          </IconButton>

          <Typography variant="h6">Live Score </Typography>

          <span style={{ flexGrow: 1 }}></span>

          <Button onClick={handleClick} color="inherit">Home</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
