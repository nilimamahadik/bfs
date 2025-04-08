
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Button, Tag, Typography, Card, Space, message, Switch } from "antd";
import { useNavigate } from "react-router-dom";
import { DataTable } from "../commonfunction/Datatable";

const { Title } = Typography;

const UserList = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState({});
  const [amount, setAmount] = useState("");
  const [usercount, setUserCount] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activating, setActivating] = useState(null);
  const [deactivating, setDeactivating] = useState(null);

  const navigate = useNavigate();

  // Base URL
  const BASEURL = "/api";

  // Fetch User Data and Management
  const user_management = async (props) => {
    try {
      const res = await axios.post(`${BASEURL}/user_management`, props);
      //console.log(res);

      setUserCount(res.data.activecount);
      setData(res.data.data);
      fetchUserData();
    } catch (err) {
      //console.error("Error fetching data:", err);
      message.error("Failed to load data.");
    }
  };

  const fetchUserData = () => {
    const savedInfo = localStorage.getItem("info");
    if (savedInfo) {
      const parsedInfo = JSON.parse(savedInfo);
      user_management(parsedInfo);
    } else {
      navigate("/");
    }
    const savedCount = localStorage.getItem("count");
    if (savedCount) {
      const parsedCount = JSON.parse(savedCount);
      setCount(parsedCount);
      const total = parsedCount.data.reduce((acc, doc) => acc + doc.amount, 0);
      setAmount(total);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  // Handle Accept Action
  const handleSubmit = async (id) => {
    setLoading(true);
    try {
      await axios.patch(`${BASEURL}/update/${id}`);
      message.success("User accepted successfully!");
      user_management();
    } catch (err) {
      //console.error("Error updating user:", err);
      message.error("Failed to update user.");
    } finally {
      setLoading(false);
    }
  };



  const handleToggle = async (id, isActive) => {
    if (isActive) {
      setActivating(id); // Show loader for Activate
    } else {
      setDeactivating(id); // Show loader for Deactivate
    }

    try {
      const res = await axios.patch(`${BASEURL}/deactivate/${id}`, {
        isActive: isActive, // Pass true or false
      });

      if (res.status === 200) {
        message.success(
          isActive
            ? "User activated successfully!"
            : "User deactivated successfully!"
        );
        // Fetch updated data after toggle
        fetchUserData();
      } else {
        message.error(res.data.message || "Something went wrong!");
      }
    } catch (error) {
      //console.error("Error toggling user:", error);
      message.error("Error updating user status!");
    } finally {
      setActivating(null);
      setDeactivating(null);
    }
  };

  const columns = [
    { field: "id", headerName: "Sr. No.", minWidth: 40, flex: 0.5 },
    { field: "name", headerName: "Name", minWidth: 100, flex: 1 },
    { field: "status", headerName: "Status", minWidth: 100, flex: 1 },
    {
      field: "action",
      headerName: "Action",
      minWidth: 100,
      flex: 1,
      renderCell: (params) =>
        params.row.status === "success" ? (
          <Button variant="contained" disabled>
            Accepted
          </Button>
        ) : (

          <Button
            variant="contained"
            color="primary"
            loading={loading}
            onClick={() => handleSubmit(params.row.recordId)}
          >
            Accept
          </Button>
        )

    },
    {
      field: "isActive",
      headerName: "Active/Inactive",
      minWidth: 100,
      flex: 1,
      renderCell: (params) => (
        params.row.status === "success" ? (
          <Space>
            <Switch
              checked={params.row.isActive}
              onChange={(checked) => handleToggle(params.row.recordId, checked)}
              checkedChildren={
                <span
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    justifyContent: "center",
                    display: "flex",
                    alignItems: "center",
                    marginTop: "5px",
                  }}
                >
                  Active
                </span>
              }
              unCheckedChildren={
                <span
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    justifyContent: "center",
                    display: "flex",
                    alignItems: "center",

                  }}
                >
                  Inactive
                </span>
              }
              style={{
                backgroundColor: params.row.isActive ? "green" : "red",
                height: "30px",
                minWidth: "85px",
              }}
              loading={activating === params.row.recordId || deactivating === params.row.recordId}
            />
          </Space>
        ) : (
          "NA"
        )
      ),
    },
  ];
  const rows = data.map((item, index) => (
    console.log(item),

    {
      recordId: item._id,
      id: index + 1,
      name: item.name,
      status: item.status,
      isActive: item.isActive,
    }));

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end", // Align content to the right
          alignItems: "center",
          marginBottom: "20px",
          marginTop: "10px",
          marginRight: "20px",
        }}
      >
        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <Title level={4} style={{ color: "#1E88E5", margin: 0 }}>
            Active Users: {usercount}
          </Title>
          <Title level={4} style={{ color: "#43A047", margin: 0 }}>
            Total Generated LR's: {count?.count || 0}
          </Title>
        </div>
      </div>


      <DataTable rows={rows} columns={columns} />
    </>

  );
};

export default UserList;
