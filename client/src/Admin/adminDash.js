
import React, { useEffect, useState } from "react";
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
  Select,
  Menu,
  Dropdown
} from "antd";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { SearchOutlined } from "@ant-design/icons";
import moment from "moment";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { PieChart, Pie, Cell } from "recharts";
import { MoreOutlined, EyeOutlined, DeleteOutlined } from "@ant-design/icons";
import { DataTable } from "../commonfunction/Datatable";


import "./signup.css"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BASEURL = "/api"

const AdminDashboard = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [pendingCount, setPendingCount] = useState(0);
  //console.log(pendingCount);
  const [totalUsers, setTotalUsers] = useState(0); // Store total users

  const { groupId } = useParams(); // Get `groupId` from URL params
  const [dataa, setDataa] = useState([]);
  //console.log(dataa);
  const [count, setCount] = useState({})
  //console.log(count);
  const [filterType, setFilterType] = useState("month"); // Default filter
  const [graphData, setGraphData] = useState([]); // API response data
  ////console.log(graphData);
  const [loading, setLoading] = useState(false); // Loader state

  const [regenerateEnabled, setRegenerateEnabled] = useState(false);
  //console.log(regenerateEnabled);


  const dataSource = [
    {
      key: "1",
      id: 1,
      name: "Regenerate Button",
      // colorCode: "#00FF00",
      description: "LR Regenerate Button",
    },
  ];

  const columns = [

    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Color",
      dataIndex: "colorCode",
      key: "colorCode",
      render: (text) => (
        <Space>
          <span
            style={{
              display: "inline-block",
              width: 30,
              height: 20,
              backgroundColor: regenerateEnabled ? "green" : "grey", // Change color based on state
              borderRadius: "4px",
            }}
          />
          {text}
        </Space>
      ),
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "",
      key: "action",
      render: () => <ActionMenu />,
      width: 50,
      align: 'right',
    },
  ];


  const handleToggle = (props) => {
    //console.log(props);
    const userConfirmed = window.confirm(
      "Are you sure you want to proceed with the action?"
    );
    if (userConfirmed) {
      axios.post(`${BASEURL}/toggle-regenerate`, { status: props })
        .then(() => setRegenerateEnabled(prev => !prev))
        .catch((err) => console.error("Error toggling:", err));
    }
  };


  const ActionMenu = () => {

    const menu = (
      <Menu>
        <Menu.Item key="1" onClick={() => handleToggle(true)}>
          <EyeOutlined style={{ marginRight: 8 }} />
          View
        </Menu.Item>
        <Menu.Item key="2" onClick={() => handleToggle(false)}>
          <DeleteOutlined style={{ marginRight: 8 }} />
          Hide
        </Menu.Item>
      </Menu>
    );

    return (
      <Dropdown overlay={menu} trigger={["click"]}>
        <Button icon={<MoreOutlined />} shape="circle" />
      </Dropdown>
    );
  };
  useEffect(() => {
    axios.get(`${BASEURL}/get-regenerate-status`)
      .then((res) => setRegenerateEnabled(res.data.regenerateEnabled))
      .catch((err) => console.error("Error fetching status:", err));
  }, []);

  const fetchReceiptData = async () => {
    try {
      setLoading(true); // Show loader
      const response = await axios.get(`${BASEURL}/getreceipt/${groupId}/${filterType}`);
      setGraphData(response.data.data); // Update state
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (groupId) {
      fetchReceiptData();
    }
  }, [groupId, filterType]);

  const formattedGraphData = {
    labels: graphData.map((item) => item.label), // X-Axis (Date, Week, Month, Year)
    datasets: [
      {
        label: "Number of LR Receipts",
        data: graphData.map((item) => item.value), // Y-Axis (LR Count)
        backgroundColor: "#BC7FCD",
      },
    ],
  };

  const graphDataSets = {
    today: {
      labels: ["Morning", "Afternoon", "Evening"], // X-Axis
      data: [15, 20, 25, 18, 30, 40, 35], // Y-Axis: LR Receipts Count
    },
    week: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      data: [15, 20, 25, 18, 30, 40, 35],
    },
    month: {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
      data: [80, 90, 100, 120],
    },
    year: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      data: [200, 250, 300, 350, 400, 450, 500, 600, 650, 700, 750, 800],
    },
  };

  const { labels, data } = graphDataSets[filterType];

  const chartData = {
    labels: labels, // X-Axis
    datasets: [
      {
        label: "Number of LR Receipts",
        data: data, // Y-Axis
        backgroundColor: "#A367B1",
      },
    ],
  };
  const now = new Date();
  let startYear = now.getMonth() < 3 ? now.getFullYear() - 1 : now.getFullYear();
  let endYear = startYear + 1;
  const financialYear = `${startYear}-${endYear}`;

  const handleYearChange = (value) => {
    if (value) {
      const year = value.year();
      form.setFieldsValue({
        year: moment(`${year}-04-01`),
        endYear: moment(`${year + 1}-03-31`),
      });
    } else {
      form.resetFields();
    }
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: `LR Receipts - ${filterType.toUpperCase()}`,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text:
            filterType === "today"
              ? "Time of Day"
              : filterType === "week"
                ? "Days of Week"
                : filterType === "month"
                  ? "Weeks of Month"
                  : "Months of Year",
        },
      },
      y: {
        title: {
          display: true,
          text: "Number of LR Receipts",
        },
        beginAtZero: true,
      },
    },
  };
  const handleFilterChange = (value) => {
    setFilterType(value);
    fetchReceiptData(value);
  };

  const user_management = async (props) => {

    const get = axios.post(`${BASEURL}/user_management`, props)
      .then((res) => {
        const pendingData = res.data.data.filter(item => item.status === "pending");
        setDataa(pendingData);
        setPendingCount(pendingData.length);
        setTotalUsers(res.data.data.length);
      })
      .catch((err) => {
      })
  }
  const dataaa = [
    { name: "Pending", value: pendingCount },
    { name: "Approved", value: totalUsers - pendingCount }
  ];

  const COLORS = ["#F24C3D", "#809D3C"];

  const fetchUserData = () => {
    const savedInfo = localStorage.getItem('info');
    if (savedInfo) {
      const parsedInfo = JSON.parse(savedInfo);
      user_management(parsedInfo);
    }
    else {
      navigate("/");
    }
    const savedCount = localStorage.getItem('count');
    if (savedCount) {
      const parsedCount = JSON.parse(savedCount);
      setCount(parsedCount);
      const total = parsedCount.data.reduce((acc, doc) => acc + doc.amount, 0);
      // setAmount(total);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handlePieClick = (data, index) => {
    //console.log("Clicked on:", data); // Debugging - logs clicked data
    navigate("/userlist"); // Change this to your actual User Management route
  };
  return (
    <>
      {/* Header */}

      <Typography.Text
        strong
        style={{ display: "block", textAlign: "center", fontSize: "16px", marginTop: "10px" }}
      >
        Current Financial Year: {financialYear}
      </Typography.Text>

      <br />
      <Row
        gutter={16}
        align="middle"
        style={{
          color: "black",
          marginBottom: "20px",
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        {/* Title on the Left */}
        <Col xs={24} sm={12}>
          <Typography.Title
            level={2}
            style={{
              color: "black",
              margin: 0,
              fontSize: "22px",
              textAlign: "left",
            }}
          >
            Lorry Receipts - {filterType.toUpperCase()}
          </Typography.Title>
        </Col>

        {/* Title on the Right (Responsive) */}
        <Col xs={24} sm={12} style={{ display: "flex", justifyContent: "flex-end" }}>
          <Typography.Title
            level={2}
            style={{
              color: "black",
              margin: 0,
              fontSize: "22px",
              textAlign: "right",
              marginRight: "150px"
            }}
          >
            Users Requests
          </Typography.Title>
        </Col>
      </Row>


      <div style={{ display: "flex", justifyContent: "left" }}>
        <Card
          bordered={true} // Enables border
          style={{
            width: "50%",
            border: "1px solid #ccc", // Adds border
            borderRadius: "8px", // Rounds corners
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)", // Adds subtle shadow
            padding: "20px",
          }}
        >
          {/* Dropdown aligned to the right */}
          <div style={{ textAlign: "right", marginBottom: "10px" }}>
            <Select
              value={filterType}
              onChange={handleFilterChange}
              style={{ width: "120px" }} // Set a fixed width for consistency
            >
              <Select.Option value="today">Today</Select.Option>
              <Select.Option value="week">This Week</Select.Option>
              <Select.Option value="month">This Month</Select.Option>
              <Select.Option value="year">This Year</Select.Option>
            </Select>
          </div>

          {/* Chart */}
          {loading ? <p>Loading...</p> : <Bar data={formattedGraphData} options={chartOptions} />}        </Card>

        <PieChart width={700} height={500}
          bordered={true} // Enables border
          style={{
            width: "50%",
            border: "1px solid #ccc", // Adds border
            borderRadius: "8px", // Rounds corners
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)", // Adds subtle shadow
            padding: "20px",
            marginLeft: "10px"
          }}
        >

          <Pie
            data={dataaa}
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            onClick={(data, index) => handlePieClick(data, index)}
            label={({ name, value }) => `${name}: ${value}`}
          >
            {dataaa.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                cursor="pointer" // Changes cursor on hover to indicate clickability
              />))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>

      </div>
      <br />

      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        bordered={false}
        rowClassName={() => 'custom-row'}
        style={{ marginTop: 24 }}
      />

    </>
  );
};

export default AdminDashboard;
