import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "@material-ui/core";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LogoutIcon from '@mui/icons-material/Logout';
import AddIcon from "@mui/icons-material/Add";
import HomeIcon from '@mui/icons-material/Home';
import { Typography } from "antd";
import "./sidebar.css";
import ob from "./image/ob.jpg";
import { bindActionCreators } from "redux";
import { requestAddResume, requestApplyJob } from "../Redux/actions";
import { connect } from "react-redux";
import {
	CheckOutlined,
	CodeSandboxOutlined,
	FileDoneOutlined,
	FileOutlined,
	FileSyncOutlined,
	FlagOutlined,
	HomeOutlined,
	MinusSquareOutlined,
	ShoppingCartOutlined,
	SettingOutlined,
	ShoppingOutlined,
	UnorderedListOutlined,
	UsergroupAddOutlined,
	UserOutlined,
	UserSwitchOutlined,
	WalletOutlined,
} from "@ant-design/icons";

const Sidebar = ({handleDrawerToggle, ...props}) => {
  const [user, setUser] = useState({})

  useEffect(() => {
    let loginData = props.candidate.loginData;
    if (loginData !== undefined) {
      if (loginData?.data?.status === "success") {
        setUser(loginData.data.data);
      } else {
        // localStorage.setItem("link", "/addResumeForm");
        // navigate("/login");
      }
    } else {
      // localStorage.setItem("link", "/addResumeForm");
      // navigate("/login");
    }
  }, [props.candidate.loginData]);

  useEffect(() => {
    let loginData = props.data.loginData;
    // console.log(loginData);
    if (loginData !== undefined) {
      if (loginData?.data?.status == "success") {
        setUser(loginData.data.data);
          // Swal.fire("Good job!", "Login successfully.", "success");
          //  navigate("/upload");
      } else {
        // Swal.fire("Sorry!", loginData.data.error , "error");
        // seterrorpassword("Invalid Credentials");
        // setError(true);
      }
    }
  }, [props.data.loginData]);
  
  return (
    <div
      style={{ backgroundColor: "#2c3e50", height: "100vh", paddingTop: "20px" }}
    >
      {/* <Toolbar /> */}
      <div
        className="style"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

        }}
      >

       
        <strong style={{ color: "gold", fontWeight: "bold",fontSize:"20px" }}>Bharat</strong>

        <img src={ob} alt="ob" style={{ height: "90%", width: "70px" }} />

        <strong style={{ color: "gold	", fontWeight: "bold",fontSize:"20px"  }}>Online</strong>
      
       
      </div>

      <Divider />
      <List>
      <ListItem key="dashboard" disablePadding>
          <ListItemButton to="/dashboard">
            <ListItemIcon>
              <HomeIcon style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" style={{ color: "white" }} />
          </ListItemButton>
        </ListItem>
        <ListItem key="upload" disablePadding>
          <ListItemButton to="/upload">
            <ListItemIcon>
              <AddIcon style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Upload Data" style={{ color: "white" }} />
          </ListItemButton>
        </ListItem>
        <ListItem key="allData" disablePadding>
          <ListItemButton to="/all-data">
            <ListItemIcon>
              <PeopleAltIcon style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="All Data" style={{ color: "white" }} />
          </ListItemButton>
        </ListItem>
        {user.role === "admin" ? (
           <ListItem key="users" disablePadding>
           <ListItemButton to="/adminaction">
             <ListItemIcon>
               <ManageAccountsIcon style={{ color: "white" }} />
             </ListItemIcon>
             <ListItemText primary="Manage Users" style={{ color: "white" }} />
           </ListItemButton>
         </ListItem>
         ) : (null)}
         <ListItem key="account" disablePadding>
          <ListItemButton to="*">
            <ListItemIcon>
              <WalletOutlined style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Account" style={{ color: "white" }} />
          </ListItemButton>
        </ListItem>
        <ListItem key="report" disablePadding>
          <ListItemButton to="*">
            <ListItemIcon>
              <FlagOutlined style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Report" style={{ color: "white" }} />
          </ListItemButton>
        </ListItem>
        <ListItem key="setting" disablePadding>
          <ListItemButton to="*">
            <ListItemIcon>
              <SettingOutlined style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Setting" style={{ color: "white" }} />
          </ListItemButton>
        </ListItem>
        <ListItem key="LogOut" disablePadding>
          <ListItemButton to="/logout">
            <ListItemIcon>
              <LogoutIcon style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="LogOut" style={{ color: "white" }} />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
    </div>
  );
};

Sidebar.propTypes = {
  handleDrawerToggle: PropTypes.func.isRequired,
};

// export default Sidebar;
const mapStateToProps = (state) => {
  return { candidate: state.candidate, employee: state.employee,data: state.data };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ requestAddResume, requestApplyJob }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
