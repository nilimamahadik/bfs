


import { Dropdown, Menu, message, Popconfirm, Space, Table, Typography } from "antd";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { EditOutlined } from "@ant-design/icons";
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button'
import Drawer from "./drawer";
import { RWebShare } from "react-web-share";
import { Alert, Box, CardContent, Grid, IconButton, Modal, Toolbar } from "@mui/material";
import { formatDate, getIndianTimestamp } from "../commonfunction/formatDate";
import FormData from "./form";
import { Col, Form, Select, Row, Checkbox, Input, } from "antd";
import FormDataInfo from "./form";
import { LuEye } from "react-icons/lu";
import { IoMdAdd } from "react-icons/io";
import { GiRegeneration } from "react-icons/gi";
import { DataTable } from "../commonfunction/Datatable";
import { DeleteOutlined, UploadOutlined } from "@ant-design/icons";
import { FaRegShareSquare } from "react-icons/fa";
import { BiRefresh } from "react-icons/bi";
import { PiShareFatThin } from "react-icons/pi";
import { MdArrowBack } from "react-icons/md";
import { DataGrid } from "@mui/x-data-grid";

const BASEURL = "/api"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto", // Default for mobile
  maxHeight: "98vh", // Set maximum height to 90% of the viewport height
  overflowY: "auto", // Enable vertical scrolling if content exceeds the height
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 1,
  "@media (min-width: 600px)": { // For larger screens (web)
    width: "78%",
    p: 3,
  },
};


const FormExampleAdmin = (props) => {
  const params = useParams()
  const [data, setData] = useState([])
  const [receipt, setReceipt] = useState([]);
  const { Title } = Typography;
  const [value, setValue] = useState({})
  console.log(value);

  const navigate = useNavigate();
  const [graceOpen, setGraceOpen] = useState(false)
  const [modalForm] = Form.useForm();
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editingReceipt, setEditingReceipt] = useState(null);
  const [consignee, setConsignees] = useState([]);

  // // console.log(editingReceipt);
  const [master, setMaster] = useState([]);
  const [selectedId, setSelectedId] = useState(null); // Initialize selectedId
  const [editForm] = Form.useForm(); // Antd Form Hook
  const [productDetails, setProductDetails] = useState([]);
  // console.log("productDetails", productDetails);
  const [check, setCheck] = useState([]);
  const [consignor, setConsignors] = useState([]);
  const [selectedConsignor, setSelectedConsignor] = useState(null);
  const [selectedConsignee, setSelectedConsignee] = useState(null);
  const [record, setRecord] = useState(null)

  const [formData, setFormData] = useState({
    vendor_name: "",
    address: "",
    supplier_name: "",
    ship_to_address1: "",
    ship_to_district: "",
    transport_mode: "",
    transport_number: "",
    transport_driver_name: "",
    product_name: "",
    product_code: "",
    total_freight: "",
    advance_paid: "",
    to_pay: "",
  })

  const getallusers = async () => {

    const get = axios.get(`${BASEURL}/getallusers/${params.id}`)
      .then((res) => {
        console.log(res);
        const filteredData = res.data.data.filter(user => !user.deleted);
        setData(filteredData);
        localStorage.setItem("count", JSON.stringify(res.data));
      })
      .catch((err) => {
      })
  }
  useEffect(() => {
    getallusers();

  }, []);

  const fetchConsignees = async () => {
    try {
      const response = await axios.get(`${BASEURL}/consignee/${params.id}`);

      setConsignees(response?.data?.products);
    } catch (error) {
    }
  };
  const fetchConsignors = async () => {
    try {
      const response = await axios.get(`${BASEURL}/consignor/${params.id}`);
      setConsignors(response?.data?.products);
    } catch (error) {
      // // console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchConsignees();
    fetchConsignors();

  }, []);

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

  const handleSaveEdit = async () => {
    try {
      const values = await modalForm.validateFields(); // Validate the form fields

      // Send the updated data to the server
      await axios.patch(`${BASEURL}/update_receipt/${editingReceipt}`, values);

      alert("Lorry Receipt updated successfully!");
      setEditModalOpen(false); // Close the modal
      getallusers(); // Refresh the data
      setData((prevData) =>
        prevData.map((item) =>
          item.record_id === editingReceipt ? { ...item, ...values } : item
        )
      );
    } catch (error) {
      message.error("Failed to update receipt.");
    }
  };

  const handleGraceMarks = () => {
    setGraceOpen(true)
  }


  const handleUserClose = () => {
    setGraceOpen(false)
    modalForm.resetFields()
    setRecord(null)
  }

  const handleEdit = (record) => {
    setGraceOpen(true)
    setRecord(record)


  };


  const deleteStock = async (id) => {
  
    try {
      await axios.patch(`${BASEURL}/lrdelete/${id}/${value.status}` );
      setReceipt(receipt.filter((Stock) => Stock._id !== id));

      message.success({
        content: "Lorry receipt deleted successfully!",
        duration: 2, // Time before it disappears (in seconds)
        style: {
          marginTop: "23vh", // Moves it to center vertically
          textAlign: "center", // Ensures text is centered
          // Moves it to center horizontally
        }
      });
      getallusers()
    } catch (error) {
      //// // // // console.error("Error deleting Stock:", error);
      message.error("Failed to delete Lorry receipt!");
    }
  };

  const columns = [
    { field: "id", headerName: "S.N.", minWidth: 50, flex: 1, pinned: "left" },
    { field: "receipt_number", headerName: "LR No.", minWidth: 150, flex: 1 },

    { field: "Date", headerName: "Date", minWidth: 200, flex: 1 },
    { field: "checkedValues", headerName: "Delivery Type", minWidth: 150, flex: 1 },

    {
      field: "receipt",
      headerName: "View LR",
      renderCell: (params) => (
        <Link to={`/poster/${params.row.record_id}`}>
          <LuEye size={20} color="gray" />
        </Link>
      ),
    },
    { field: "vendor_name", headerName: "Name of Consignor", minWidth: 200, flex: 1 },
    { field: "address", headerName: "Address", minWidth: 200, flex: 2 },
    { field: "supplier_name", headerName: "Consignee Name", minWidth: 200, flex: 1 },
    { field: "ship_to_address1", headerName: "Place", minWidth: 150, flex: 1 },
    { field: "ship_to_district", headerName: "District", minWidth: 120, flex: 1 },
    { field: "from", headerName: "From", minWidth: 120, flex: 1 },
    { field: "transport_driver_name", headerName: "Driver Name", minWidth: 150, flex: 1 },
    { field: "transport_number", headerName: "Transport No.", minWidth: 150, flex: 1 },
    {
      field: "products",
      headerName: "Product Name",
      minWidth: 200,
      flex: 1,
      renderCell: (params) => (
        <div>
          {params.row.productDetails?.map((product, index) => (
            <div
              key={index}
              style={{
                borderBottom: "1px solid #ddd",
                paddingBottom: "5px",
                marginBottom: "5px",
              }}
            >
              {product.product_name}
            </div>
          ))}
        </div>
      ),
    },
    {
      field: "Code",
      headerName: "Code",
      minWidth: 200,
      flex: 1,
      renderCell: (params) => (
        <div>
          {params.row.productDetails?.map((product, index) => (
            <div
              key={index}
              style={{
                borderBottom: "1px solid #ddd",
                paddingBottom: "5px",
                marginBottom: "5px",
              }}
            >
              {product.product_code}
            </div>
          ))}
        </div>
      ),
    },
    {
      field: "total",
      headerName: "Total Freight",
      minWidth: 150,
      flex: 1,
      renderCell: (params) => (
        <div>
          {params.row.productDetails?.map((product, index) => (
            <div
              key={index}
              style={{
                borderBottom: "1px solid #ddd",
                paddingBottom: "5px",
                marginBottom: "5px",
              }}
            >
              {product.total_freight}
            </div>
          ))}
        </div>
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
      minWidth: 150,
      flex: 1,
      renderCell: (params) => (
        // console.log("params", params.row),

        <Space style={{ padding: "7px" }}>
          {/* Edit Action */}
          <Popconfirm
            title={
              <span>
                Are you sure you want to edit this{" "}
                <b style={{ color: "blue" }}>{params.row.receipt_number}</b> Lorry Receipt?
              </span>
            }
            onConfirm={() => handleEdit(params.row.doc)}
            okText="Yes"
            cancelText="No"
          >
            <EditOutlined
              style={{
                fontSize: "20px", // Increased size
                color: "#1890ff", // Blue color for edit icon
                cursor: "pointer", // Pointer cursor for better UX
              }}
            />
          </Popconfirm>

          {/* Delete Action */}
          <Popconfirm
            title={
              <span>
                Are you sure you want to delete this{" "}
                <b style={{ color: "red" }}>{params.row.receipt_number}</b> Lorry Receipt?
              </span>
            }
            onConfirm={() => deleteStock(params.row.record_id)}
            okText="Yes"
            cancelText="No"
          >
            <DeleteOutlined
              style={{
                fontSize: "20px", // Increased size
                color: "red", // Red color for delete icon
                cursor: "pointer", // Pointer cursor for better UX
                marginLeft: "15px"
              }}
            />
          </Popconfirm>
        </Space>
      ),
    },

    {
      field: "regenerate",
      headerName: "Regenerate",
      renderCell: (params) => (
        <BiRefresh
          color="#495057"
          size={25}
          onClick={() => handleGraceMarks(params.row.record_id)}
        />
      ),
    },
    {
      field: "share",
      headerName: "Share",
      renderCell: (params) => (
        <RWebShare
          data={{
            text: "BHARAT ONLINE",
            url: `${window.location.protocol}/${window.location.host}/poster/${params.row.record_id}`,
            title: "BHARAT ONLINE",
          }}
        >
          <PiShareFatThin size={20} color="#495057" />
        </RWebShare>
      ),
    },
  ];

  const rows = data?.map((item, index) => {

    return {
      id: index + 1,
      Date: getIndianTimestamp(item.createdAt) || "NA",
      receipt_number: item.receipt_number || "NA",
      supplier_name: item.supplier_name || "NA",
      vendor_name: item.vendor_name || "NA",
      address: item.address || "NA",
      ship_to_address1: item.ship_to_address1 || "NA",
      ship_to_district: item.ship_to_district || "NA",
      transport_driver_name: item.transport_driver_name || "NA",
      transport_number: item.transport_number || "NA",
      productDetails: item.productDetails || [],
      checkedValues: item.checkedValues || "NA",
      from: item.from || "NA",
      record_id: item._id || "NA",
      transport_mode: item.transport_mode || "NA",
      sum: item.total_amount || "0",
      sc: item.sc || "0",
      hamali: item.sch || "0",
      total_balanceamount: item.total_balanceamount || "0",
      mobileNo: item.mobileNo || "NA",
      total: item.total || "0",
      topayrate: item.topayrate || "0",
      topayamt: item.topayamt || "0",
      doc: item
    };
  }) || [];


  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", marginTop: "5px" }}>
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
          <MdArrowBack />     Generate Lorry Receipt
        </Typography.Title>
        <div style={{ marginRight: "30px" }}>
          <Button variant="contained" type="submit" style={{ marginRight: "10px", backgroundColor: "rgb(170, 43, 29)", padding: "4px 8px" }} onClick={handleGraceMarks} startIcon={<IoMdAdd />} >   Generate   </Button>

        </div>
      </div>
      <div >

        <div >
          <DataTable rows={rows} columns={columns} />
        </div>

      </div>
      <FormDataInfo
        open={graceOpen}
        handleClose={handleUserClose}
        props={props}
        style={style}
        modalForm={modalForm}
        record={record}
      />


    </>
  );

}
export default FormExampleAdmin;

