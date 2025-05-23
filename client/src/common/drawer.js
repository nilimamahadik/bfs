

import React, { useEffect, useState } from "react";
import {
  Box,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Divider,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Dashboard as DashboardIcon,
  Event as EventIcon,
  Group as GroupIcon,
  ExitToApp as ExitToAppIcon,
  ExpandMore as ExpandMoreIcon,
} from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { RiDeleteBin5Fill } from "react-icons/ri";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import obbb from "../image/obbb.jpg";
import DescriptionIcon from "@mui/icons-material/Description";
import CategoryIcon from "@mui/icons-material/Category";
import { FaHandshake } from "react-icons/fa6";
import { FaWarehouse } from "react-icons/fa";
import { MdTrolley } from "react-icons/md";
import { MdInventory2 } from "react-icons/md";
import { FaRegWindowRestore } from "react-icons/fa";
import { PiStorefrontFill } from "react-icons/pi";
import { BiSolidReport } from "react-icons/bi";
import { MdReport } from "react-icons/md";
import { RiLogoutCircleRFill } from "react-icons/ri";
import { FaTruck } from "react-icons/fa6";
import { FaUserTie } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";
const drawerWidth = 240;


const Sidebar = ({ children }) => {
  const location = useLocation();
  // console.log(location?.pathname);
  const { Title } = Typography;

  const [mobileOpen, setMobileOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(true);
  const [openMaster, setOpenMaster] = useState(false);
  const [openInv, setOpenInv] = useState(false);
  const [openrep, setOpenRep] = useState(false);
  const [value, setValue] = useState({})
  const [opentool,setOpenTool] = useState(false)
  
  const navigate = useNavigate();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const isActive = (path) => decodeURIComponent(location.pathname) === decodeURIComponent(path);
  // const isActive = (path) => location.pathname === path;
  //console.log(isActive);

  const submit = () => {
    navigate(`/csv/${value.id}`);
  }
  const drawer = (
    <div>
      <Toolbar
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={obbb}
          alt="Logo"
          style={{ height: "120px", width: "120px" }}
        />

      </Toolbar>
      <List>
        <ListItem
          button
          component={Link}
          to={`/admindashhh/${value.id}`}
          sx={{
            bgcolor: isActive(`/admindashhh/${value.id}`) ? "#D8E6E1" : "transparent",
          }}
        >
          <ListItemIcon>
            <DashboardIcon sx={{ color: "#AA2B1D" }} />
          </ListItemIcon>
          {drawerOpen && <ListItemText primary="Dashboard" />}
        </ListItem>

        <Divider sx={{ bgcolor: "black", height: "1px" }} />

        <ListItem button onClick={() => setOpenMaster(!openMaster)}>
          <ListItemIcon><CategoryIcon sx={{ color: "#AA2B1D" }} /></ListItemIcon>
          {drawerOpen && <ListItemText primary="Master" />}
          {openMaster ? <ExpandLess sx={{ color: "#AA2B1D" }} /> : <ExpandMore sx={{ color: "#AA2B1D" }} />}
        </ListItem>
        <Collapse in={openMaster} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button component={Link} to={`/productmaster/${value.id}`} sx={{
              pl: 2,
              bgcolor: isActive(`/productmaster/${value.id}`) ? "#D8E6E1" : "transparent",

            }}>
              <ListItemIcon><MdTrolley size={22} style={{ color: "#AA2B1D" }} /></ListItemIcon>
              <ListItemText primary="Product Master" />
            </ListItem>
            <ListItem button component={Link} to={`/consigneemaster/${value.id}`} sx={{
              pl: 2,
              bgcolor: isActive(`/consigneemaster/${value.id}`) ? "#D8E6E1" : "transparent",

            }}>
              <ListItemIcon><FaHandshake size={22} style={{ color: "#AA2B1D" }} /></ListItemIcon>
              <ListItemText primary="Consignee Master" />
            </ListItem>
            <ListItem button component={Link} to={`/warehousemaster/${value.id}`} sx={{
              pl: 2,
              bgcolor: isActive(`/warehousemaster/${value.id}`) ? "#D8E6E1" : "transparent",

            }}>
              <ListItemIcon><FaWarehouse size={22} style={{ color: "#AA2B1D" }} /></ListItemIcon>
              <ListItemText primary="Warehouse Master" />
            </ListItem>
            <ListItem button component={Link} to={`/transportmaster/${value.id}`} sx={{
              pl: 2,
              bgcolor: isActive(`/transportmaster/${value.id}`) ? "#D8E6E1" : "transparent",

            }}>
              <ListItemIcon><FaTruck size={22} style={{ color: "#AA2B1D" }} /></ListItemIcon>
              <ListItemText primary="Transport Master" />
            </ListItem>
            <ListItem button component={Link} to={`/consignormaster/${value.id}`} sx={{
              pl: 2,
              bgcolor: isActive(`/consignormaster/${value.id}`) ? "#D8E6E1" : "transparent",

            }}>
              <ListItemIcon><FaUserTie size={22} style={{ color: "#AA2B1D" }} /></ListItemIcon>
              <ListItemText primary="Consignor Master" />
            </ListItem>
          </List>
        </Collapse>
        <Divider sx={{ bgcolor: "black", height: "1px" }} />
        <ListItem button onClick={() => setOpenInv(!openInv)}>
          <ListItemIcon><MdInventory2 size={22} style={{ color: "#AA2B1D" }} /></ListItemIcon>
          {drawerOpen && <ListItemText primary="Inventory" />}
          {openInv ? <ExpandLess sx={{ color: "#AA2B1D" }} /> : <ExpandMore sx={{ color: "#AA2B1D" }} />}
        </ListItem>
        <Collapse in={openInv} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button component={Link} to={`/stockmanage/${value.id}`} sx={{
              pl: 2,
              bgcolor: isActive(`/stockmanage/${value.id}`) ? "#D8E6E1" : "transparent",

            }}>
              <ListItemIcon><FaRegWindowRestore size={18} style={{ color: "#AA2B1D" }} /></ListItemIcon>
              <ListItemText primary="Stock Management" />
            </ListItem>

          </List>
        </Collapse>
        <Divider sx={{ bgcolor: "black", height: "1px" }} />

        {/* Other Sidebar Items */}
        <ListItem button component={Link} to={`/form/admin/${value.id}`} sx={{ bgcolor: isActive(`/form/admin/${value.id}`) ? "#D8E6E1" : "transparent" }}>
          <ListItemIcon><DescriptionIcon sx={{ color: "#AA2B1D" }} /></ListItemIcon>
          {drawerOpen && <ListItemText primary="Generate LR" />}
        </ListItem>
        <Divider sx={{ bgcolor: "black", height: "1px" }} />


        <ListItem button onClick={() => setOpenTool(!opentool)}>
          <ListItemIcon><FaTools  size={19} style={{ color: "#AA2B1D" }} /></ListItemIcon>
          {drawerOpen && <ListItemText primary="Admin Tools" />}
          {opentool ? <ExpandLess sx={{ color: "#AA2B1D" }} /> : <ExpandMore sx={{ color: "#AA2B1D" }} />}
        </ListItem>

        <Collapse in={opentool} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
          <ListItem button component={Link} to="/userlist" sx={{ bgcolor: isActive(`/userlist`) ? "#D8E6E1" : "transparent" }}>
          <ListItemIcon><ManageAccountsIcon sx={{ color: "#AA2B1D" }} /></ListItemIcon>
          {drawerOpen && <ListItemText primary="User Management" />}
        </ListItem>
        <ListItem button component={Link} to={`/recycle/${value.id}`} sx={{ bgcolor: isActive(`/recycle/${value.id}`) ? "#D8E6E1" : "transparent" }}>
          <ListItemIcon><RiDeleteBin5Fill  size={19} style={{ color: "#AA2B1D" }}/></ListItemIcon>
          {drawerOpen && <ListItemText primary="Recycle Bin" />}
        </ListItem>
            

          </List>
        </Collapse>





       
        <Divider sx={{ bgcolor: "black", height: "1px" }} />

        <ListItem button component={Link} to="/profile" sx={{ bgcolor: isActive(`/profile`) ? "#D8E6E1" : "transparent" }}>
          <ListItemIcon><AccountBoxIcon sx={{ color: "#AA2B1D" }} /></ListItemIcon>
          {drawerOpen && <ListItemText primary="View Profile" />}
        </ListItem>
        <Divider sx={{ bgcolor: "black", height: "1px" }} />

        <ListItem button onClick={() => setOpenRep(!openrep)}>
          <ListItemIcon><BiSolidReport size={22} style={{ color: "#AA2B1D" }} /></ListItemIcon>
          {drawerOpen && <ListItemText primary="Reports" />}
          {openrep ? <ExpandLess sx={{ color: "#AA2B1D" }} /> : <ExpandMore sx={{ color: "#AA2B1D" }} />}
        </ListItem>

        <Collapse in={openrep} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button onClick={submit} sx={{
              pl: 2,
              bgcolor: isActive(`/csv/${value.id}`) ? "#D8E6E1" : "transparent",
            }}>
              <ListItemIcon><MdReport size={18} style={{ color: "#AA2B1D" }} /></ListItemIcon>
              <ListItemText primary="All LR's" />
            </ListItem>
            <ListItem button component={Link} to={`/stockreport/${value.id}`} sx={{
              pl: 2,
              bgcolor: isActive(`/stockreport/${value.id}`) ? "#D8E6E1" : "transparent",

            }}>
              <ListItemIcon><PiStorefrontFill size={18} style={{ color: "#AA2B1D" }} /></ListItemIcon>
              <ListItemText primary="Stock Report" />
            </ListItem>


          </List>
        </Collapse>
        <Divider sx={{ bgcolor: "black", height: "1px" }} />
        <ListItem button component={Link} to="/">
          <ListItemIcon><RiLogoutCircleRFill size={22} style={{ color: "#AA2B1D" }} /></ListItemIcon>
          {drawerOpen && <ListItemText primary="Logout" />}
        </ListItem>
        <Divider sx={{ bgcolor: "black", height: "1px" }} />

      </List>


    </div>
  );

  useEffect(() => {
    const savedInfo = localStorage.getItem("info");
    if (savedInfo) {
      const parsedInfo = JSON.parse(savedInfo);
      setValue(parsedInfo);
    }
    else {
      navigate("/");
    }

  }, []);
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />


      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerOpen ? drawerWidth : 0}px)` },
          ml: { sm: `${drawerOpen ? drawerWidth : 0}px` },
          transition: "width 0.3s, ml 0.3s",
        }}

        style={{ backgroundColor: "white", color: "#353935", height: "60px", fontWeight: "400" }}

      >



        <Typography
          align="center"
          style={{
            marginTop: "5px",
            fontSize: "30px",
            fontWeight: "300",
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', // Fixed fontFamily
          }}
        >
          <b>{value.id}</b>
        </Typography>
        {/* <Typography align="center" style={{ marginTop: "10px", fontSize: "32px", fontWeight: "400", fontFamily: ""Roboto", "Helvetica", "Arial", sans-serif" }}><b>{value.id}</b></Typography> */}



      </AppBar>

      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
          transition: "width 0.3s",
          // backgroundColor: "rgb(249, 250, 252)",
        }}
        aria-label="mailbox folders"
      >

        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              // backgroundColor: "rgb(249, 250, 252)",
            },
          }}

        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerOpen ? drawerWidth : 80,
              // backgroundColor: "rgb(36, 77, 158)",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 1, // Ensure no padding
          width: { sm: `calc(100% - ${drawerOpen ? drawerWidth : 0}px)` },
          transition: "width 0.3s",
          // backgroundColor: "rgb(249, 250, 252)",
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default Sidebar;
