import React, { useEffect, useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import axios from "axios";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  requestAdminEditCareer,
  requestAdminMonthAppliedJob,
} from "../../Redux/actions";
import Layout from "../Layout";

const Adminaction = (props) => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    let loginData = props.data.loginData;
    if (loginData !== undefined) {
      if (loginData?.data?.status === "success") {
        setUser(loginData.data.data);
      }
    }
  }, [props.data.loginData]);

  const handleAccept = (id) => {
    props.requestAdminEditCareer({
      id: id,
    });
  };
  useEffect(() => {
    props.requestAdminMonthAppliedJob();
  }, [props.data.editCareerData]);

  useEffect(() => {
    let monthWiseAppliedjobData = props.data.monthWiseAppliedjobData;
    if (monthWiseAppliedjobData !== undefined) {
      if (monthWiseAppliedjobData?.data?.status === "success") {
        setData(monthWiseAppliedjobData.data.data);
      }
    }
  }, [props.data.monthWiseAppliedjobData]);

  // useEffect(() => {
  //   let editCareerData = props.data.editCareerData;
  //   // console.log(editCareerData);
  //   if (editCareerData !== undefined) {
  //     if (editCareerData?.data?.status === "success") {
  //       // admin_action();
  //     }
  //   }
  // }, [props.data.editCareerData]);

  const columns = [
    { field: "id", headerName: "Sr.No.", width: 100 },
    { field: "name", headerName: "Name", flex: 1 },
    { field: "role", headerName: "Role", flex: 1 },
    {
      field: "active",
      headerName: "Status",
      flex: 1,
      renderCell: (params) => (
        <span
          style={{ color: params.row.active === "success" ? "green" : "red" }}
        >
          {params.value}
        </span>
      ),
    },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      renderCell: (params) => (
        <Button
          variant="contained"
          onClick={() => handleAccept(params.row._id)}
          disabled={params.row.active === "success"}
        >
          Accept
        </Button>
      ),
    },
  ];

  const rows = data.map((item, index) => ({
    id: index + 1,
    name: item.name.toUpperCase(),
    role: item.role.toUpperCase(),
    active: item.active,
    status: item.status,
    _id: item._id,
  }));

  return (
    <Layout>
      <div style={{ height: "100%", width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          components={{
            Toolbar: GridToolbar,
          }}
        />
      </div>
    </Layout>
  );
};

// export default Adminaction;
const mapStateToProps = (state) => {
  return { data: state.data };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    { requestAdminEditCareer, requestAdminMonthAppliedJob },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Adminaction);
