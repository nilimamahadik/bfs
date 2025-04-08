
import React, { useEffect, useState } from "react";
import { Card, Table, Typography, Space, Button } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { DataTable } from "../commonfunction/Datatable";

const { Title, Text } = Typography;

// for development
// const BASEURL = "http://localhost:5000/api";

// for production
const BASEURL = "/api";

function AssoProfile() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = () => {
    const savedInfo = localStorage.getItem("info");
    if (savedInfo) {
      const parsedInfo = JSON.parse(savedInfo);
      profile_management(parsedInfo);
    } else {
      navigate("/");

    }
  };

  const profile_management = async (props) => {
    try {
      const response = await axios.post(`${BASEURL}/getprofile`, props);
      const data = response.data.data;
      //console.log(response.data.data);

      // Update userData with the API data
      setUserData([
        { key: "1", label: " Company Name", value: data.mandalname },
        { key: "2", label: " Company Code", value: data.code },
        { key: "3", label: " Registration No", value: data.registration },
        { key: "4", label: "Admin Full Name", value: data.name },
        { key: "5", label: "Address", value: data.address },
        { key: "6", label: "Email", value: data.email },
        { key: "7", label: " Phone", value: data.phone },
      ]);
    } catch (error) {
      //console.error("Error fetching user profile data:", error);
    }
  };

  // const columns = [
  //   {
  //     title: "Field",
  //     dataIndex: "label",
  //     key: "label",
  //     width: "40%",
  //     render: (text) => (
  //       <Text strong style={{ fontSize: "14px" }}>
  //         {text}
  //       </Text>
  //     ),
  //   },
  //   {
  //     title: "Details",
  //     dataIndex: "value",
  //     key: "value",
  //     render: (text) => (
  //       <Text style={{ fontSize: "14px", color: "#333" }}>{text}</Text>
  //     ),
  //   },
  // ];

  const rows = userData.map((item) => ({
    id: item.key,
    field: item.label,
    details: item.value,
  }));
  const columns = [
    {
      field: "field",
      headerName: "Field",
      minWidth: 200,
      flex: 2,
      renderCell: (params) => (
        <div style={{ padding: "6px", fontWeight: "bold", fontSize: "14px" }}>
          {params.value}
        </div>
      ),
    },
    {
      field: "details",
      headerName: "Details",
      minWidth: 200,
      flex: 2,
      renderCell: (params) => (
        <div style={{ padding: "6px", fontSize: "14px", color: "#555" }}>
          {params.value}
        </div>
      ),
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
       
        padding: 20,
      }}
    >
      <Card

        bordered={false}
        style={{
          width: 900,
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          borderRadius: 12,

        }}
      >

        <DataTable rows={rows} columns={columns} />
      </Card>
    </div>
  );
}

export default AssoProfile;
