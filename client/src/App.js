import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AdminLogin from "./Admin/signin";
import AdminSignUp from "./Admin/signup";
import HomePage from "./Homepage";
import UserLogin from "./User/signin";
import UserSignUp from "./User/signup";
import UserList from "./Admin/alluser";
import FormExample from "./common/user";
import Poster from "./common/poster";
import App from "./Homepage";
import FormExampleAdmin from "./common/admin";
import Drawer from "./common/drawer";
// import { ExportToExcel } from './Admin/csv';
import Sheet from "./common/excel";
import Forget from "./Admin/forget";
import UserForget from "./User/forget";
import AssoProfile from "./Admin/profile";
import Information from "./Trains/homepage";
import Weather from "./Weather/page";
import Cricket from "./Cricket/Cricket";
import UploadData from "./Partner/UploadData";
import Sidebar from "./Partner/Sidebar";
// import Home, { AllData } from "./Partner/AllData";
import PartnerLogin from "./Partner/signin";
// import Main from "./Partner/Main"

import PartnerSignUp from "./Partner/signup";
import PartnerForget from "./Partner/forget";
import ColumnSelectorGrid from "./Partner/Admin/adminaction";
import TableData from "./Partner/table";
import Adminaction from "./Partner/Admin/adminaction";
import PartnerAdminLogin from "./Partner/Admin/Login";
import DemoBar from "./Partner/calender";
import Dashboard from "./Partner/dashboard";
import QuickLinks from "./Partner/quick";
import Page404 from "./Partner/404/404Page";
import Account from "./Partner/account";
import Report from "./Partner/report";
import Setting from "./Partner/setting";
import Header from "./Partner/Header";
import Logout from "./Partner/Logout";
import Pie from "./Partner/pie";
import AdminDashboard from "./Admin/adminDash";
import ProductMaster from "./Admin/productMaster";
import {
  Button,
  Card,
  DatePicker,
  Form,
  Input,
  Table,
  Typography,
  Space,
  Row,
  Col,
  message,
} from "antd";
import DrawerUser from "./common/draweruser";
import { Box } from "@mui/material";
import ConsigneeMaster from "./Admin/ConsigneeMaster";
import WarehouseMaster from "./Admin/warehouseMaster";
import StockManage from "./Admin/StockManage";
import StockReport from "./Admin/stockreport";
import TransportMaster from "./Admin/TransportMaster";
import ConsignorMaster from "./Admin/ConsignorMaster";
import { MdArrowBack } from "react-icons/md";
import Recycle from "./common/recyclebin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/userlogin",
    element: <UserLogin />,
  },
  {
    path: "/adminlogin",
    element: <AdminLogin />,
  },
  {
    path: "/adminsignup",
    element: <AdminSignUp />,
  },
  {
    path: "/form/:id",
    element: (
      <DrawerUser>
        <div className="App" >


          <FormExample />,
        </div>
      </DrawerUser>
    )

  },
  {
    path: "/consignormaster/:groupId",
    element: (
      <Drawer>
        <div className="App" >
          <ConsignorMaster />
        </div>
      </Drawer>
    )
  },
  {
    path: "/transportmaster/:groupId",
    element: (
      <Drawer>
        <div className="App" >
          <TransportMaster />
        </div>
      </Drawer>
    )
  },
  {
    path: "/recycle/:groupId",
    element: (
      <Drawer>
        <div className="App" >
          <Recycle />
        </div>
      </Drawer>
    )
  },
  
  {
    path: "/consigneemaster/:groupId",
    element: (
      <Drawer>
        <div className="App" style={{ marginTop: "5px" }}>
          <ConsigneeMaster />
        </div>
      </Drawer>
    )
  },
  {
    path: "/warehousemaster/:groupId",
    element: (
      <Drawer>
        <div className="App" >
          <WarehouseMaster />
        </div>
      </Drawer>
    )
  },
  {
    path: "/stockmanage/:groupId",
    element: (
      <Drawer>
        <div className="App" >
          <StockManage />
        </div>
      </Drawer>
    )
  },
  {
    path: "/stockreport/:groupId",
    element: (
      <Drawer>
        <div className="App">

          <Typography.Title
            level={3}
            style={{
              color: "black",
              fontSize: "20px",
              margin: 0,
              marginLeft: "5px",
              fontWeight: "400"
            }}
          >
            <MdArrowBack />   Stock Report
          </Typography.Title>
          <br />
          <StockReport />
        </div>
      </Drawer>
    )
  },
  {
    path: "/productmaster/:groupId",
    element: (
      <Drawer>
        <div className="App" >
          <ProductMaster />
        </div>
      </Drawer>
    )
  },
  {
    path: "/admindashhh/:groupId",
    element: (
      <Drawer>

        <div className="App">
          <Typography.Title
            level={3}
            style={{
              color: "black",
              height: "10px",
              margin: 0,
              marginLeft: "5px",
              fontSize: "20px",
              fontWeight: "400"
            }}
          >
            <MdArrowBack /> Dashboard
          </Typography.Title>
          <AdminDashboard />
        </div>
      </Drawer>


    ),

  },

  {

    path: "/userlist",


    element: (
      <Drawer>
        <div className="App" >
          <Typography.Title
            level={3}
            style={{
              color: "black",
              fontSize: "20px",
              margin: 0,
              marginLeft: "5px",
              fontWeight: "400"
            }}
          >
            <MdArrowBack />   User Management
          </Typography.Title>


          <UserList />
        </div>
      </Drawer>


    ),

  },
  {
    path: "/usersignup",
    element: <UserSignUp />,
  },

  {
    path: "/poster/:id",
    element:
      <>
        <Poster />

        {/* 🔹 Google Translate Hidden Element */}
        <Box display="none">
          <div id="google_translate_element"></div>
        </Box>
      </>
    ,
  },
  {
    path: "/form/admin/:id",
    element: (
      <Drawer>
        <div className="App" >


          <FormExampleAdmin />
        </div>
      </Drawer>


    ),

  },
  {
    path: "/csv/:id",
    element:

      (
        <Drawer>
          <div className="App" >
            <Typography.Title
              level={3}
              style={{
                color: "black",
                fontSize: "20px",
                margin: 0,
                marginLeft: "5px",
                fontWeight: "400"
              }}
            >
              <MdArrowBack />  Download LR's
            </Typography.Title>

            <Sheet />
          </div>
        </Drawer>
      ),
  },
  {
    path: "/Admin/forget",
    element: <Forget />,
  },
  {
    path: "/User/forget",
    element: <UserForget />,
  },
  {
    path: "/profile",
    element: (
      <Drawer>
        <div className="App" >

          <Typography.Title
             level={3}
             style={{
                 color: "black",
                 fontSize: "20px",
                 margin: 0,
                 marginLeft: "5px",
                 fontWeight: "400"
             }}
          >
           <MdArrowBack />   Profile
          </Typography.Title>
          <br />
          <AssoProfile />
        </div>
      </Drawer>

    ),
  },

]);

export default router;
