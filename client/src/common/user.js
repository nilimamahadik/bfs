




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
import FormDataInfoUser from "./userform";

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
    width: "75%",
    p: 3,
  },
};


const FormExample = (props) => {
  const params = useParams()
  const [data, setData] = useState([])
  const [receipt, setReceipt] = useState([]);
  const { Title } = Typography;
  const [value, setValue] = useState({})
  const navigate = useNavigate();
  const [graceOpen, setGraceOpen] = useState(false)
  const [modalForm] = Form.useForm();
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editingReceipt, setEditingReceipt] = useState(null);
  // // console.log(editingReceipt);
  const [master, setMaster] = useState([]);
  const [selectedId, setSelectedId] = useState(null); // Initialize selectedId
  const [editForm] = Form.useForm(); // Antd Form Hook
  const [productDetails, setProductDetails] = useState([]);
  // console.log("productDetails", productDetails);
  const [check, setCheck] = useState([]);
  const [users, setUsers] = useState({})

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
        setData(res.data.data);
        localStorage.setItem("count", JSON.stringify(res.data));
      })
      .catch((err) => {
      })
  }
  useEffect(() => {
    getallusers();

  }, []);


  useEffect(() => {

    const savedUser = localStorage.getItem("link");
    // console.log(savedUser);

    if (savedUser) {

      const parsedUser = JSON.parse(savedUser);

      setUsers(parsedUser);

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
  }

  const handleEdit = (record) => {

    // console.log("Editing record:", record);
    setSelectedId(record.record_id); // Set the selected ID
    setEditingReceipt(record.record_id); // Set the record ID for editing
    setProductDetails(record.productDetails || []);
    setCheck(record.checkedValues || []);

    modalForm.setFieldsValue({
      vendor_name: record.vendor_name || "",
      address: record.address || "",
      supplier_name: record.supplier_name || "",
      transport_number: record.transport_number || "",
      transport_driver_name: record.transport_driver_name || "",
      mobileNo: record.mobileNo || "",
      ship_to_address1: record.ship_to_address1 || "",
      ship_to_district: record.ship_to_district || "",
      transport_mode: record.transport_mode || "",
      productDetails: record.productDetails || [],
      sum: record.sum || "",
      sc: record.sc || "",
      hamali: record.hamali || "",
      total: record.total || "",
      topayrate: record.topayrate || "",
      topayamt: record.topayamt || "",
      from: record.from || "",
      checkedValues: record.checkedValues || "",
      total_balanceamount: record.total_balanceamount || "",



    });

    setEditModalOpen(true); // Open the modal
  };


  const deleteStock = async (id) => {
    try {
      await axios.delete(`${BASEURL}/lrdelete/${id}`);
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
              {product.total_freight}
            </div>
          ))}
        </div>
      ),
    },
    { field: "checkedValues", headerName: "Delivery Type", minWidth: 150, flex: 1 },
    {
      field: "actions",
      headerName: "Actions",

      renderCell: (params) => (
        // console.log("params", params.row),

        <Space style={{ padding: "7px" }}>
          <EditOutlined onClick={() => handleEdit(params.row)} size={30} />
         
        </Space>
      ),
    },

    // {
    //   field: "regenerate",
    //   headerName: "Regenerate",
    //   renderCell: (params) => (
    //     <BiRefresh
    //       color="#495057"
    //       size={25}
    //       onClick={() => handleGraceMarks(params.row.record_id)}
    //     />
    //   ),
    // },
    {
      field: "share",
      headerName: "Share",
      renderCell: (params) => (
        <RWebShare
          data={{
            text: "BHARAT ONLINE",
            url: `${window.location.protocol}//${window.location.host}/poster/${params.row.record_id}`,
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
          <MdArrowBack />     Lorry Receipt
        </Typography.Title>
        <div style={{ marginRight: "30px" }}>
          <Button variant="contained" type="submit" style={{ marginRight: "10px" }} onClick={handleGraceMarks} startIcon={<IoMdAdd />} >   Generate   </Button>

        </div>
      </div>

      <div >

        <div >

          <DataTable rows={rows} columns={columns} />
        </div>

      </div>
      <FormDataInfoUser
        open={graceOpen}
        handleClose={handleUserClose}
        props={props}
        style={style}
        modalForm={modalForm}
      />
      <Modal
        open={editModalOpen}
        onClose={() => setEditModalOpen(false)} // Close the modal
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Title level={3} className="m-2 text-center" style={{ color: "rgb(170, 43, 29)" }}>
            Edit Lorry Receipt
          </Title>
          <hr />

          <Form
            form={modalForm}
            className="custom-form"
            name="basic"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            autoComplete="off"
            onFinish={handleSaveEdit} // Call handleSaveEdit on form submission
          >
            {/* Add your form fields here */}
            <h6>Transportation Details</h6>
            <div className="custom-container">
              <Row gutter={16} style={{ display: "flex", flexWrap: "nowrap" }}>
                <Col span={5}>
                  <Form.Item name="from" label="From">

                    <Input placeholder="Enter From" />
                  </Form.Item>
                </Col>
                <Col span={5}>
                  <Form.Item name="transport_number" label="Truck No.">
                    <Input placeholder="Enter Truck No." />
                  </Form.Item>
                </Col>
                <Col span={5}>
                  <Form.Item name="transport_driver_name" label="Truck Driver Name">
                    <Input placeholder="Enter Truck Driver Name" />
                  </Form.Item>
                </Col>
                <Col span={5}>
                  <Form.Item name="transport_mode" label="Transport Mode">
                    <Select
                      showSearch
                      placeholder="Select Transport Mode"
                      optionFilterProp="label"
                      size="medium"
                      style={{ width: "100%" }}
                      options={master[0]?.transportmodename?.map((mode) => ({
                        value: mode,
                        label: mode,
                      }))}
                      getPopupContainer={(trigger) => trigger.parentNode}
                    />
                  </Form.Item>
                </Col>
              </Row>
            </div>

            <h6>Consignor Details</h6>
            <div className='custom-container' >
              <Row gutter={16} style={{ display: 'flex', flexWrap: 'nowrap' }}>
                <Col span={5}>
                  <Form.Item style={{ marginBottom: "0px" }} name="vendor_name" label="Name">
                    <Input placeholder="Enter Consignor Name" />
                  </Form.Item>

                </Col>
                <Col span={5}>
                  <Form.Item style={{ marginBottom: "0px" }} name='address' label="Address">
                    <Input placeholder="Enter Address" />
                  </Form.Item>
                </Col>
              </Row>
            </div>
            <h6>Consignee Details</h6>
            <div className='custom-container'>
              <Row gutter={16} style={{ display: 'flex', flexWrap: 'nowrap' }}>
                <Col span={5}>
                  <Form.Item style={{ marginBottom: "0px" }} name="supplier_name" label="Name of Consignee">
                    <Input placeholder="Enter Consignee Name" />
                  </Form.Item>
                </Col>
                <Col span={5}>
                  <Form.Item style={{ marginBottom: "0px" }} name='ship_to_address1' label="Place">
                    <Input placeholder="Enter Place" />
                  </Form.Item>
                </Col>
                <Col span={5}>
                  <Form.Item style={{ marginBottom: "0px" }} name='ship_to_district' label="District">
                    <Input placeholder="Enter District" />
                  </Form.Item>
                </Col>
                <Col span={5}>
                  <Form.Item
                    style={{ marginBottom: "0px" }}
                    name='mobileNo'
                    label="Mobile Number"

                  >
                    <Input placeholder="Enter Mobile Number" />
                  </Form.Item>
                </Col>
              </Row>
            </div>
            <h6>Goods Details</h6>
            <div className="custom-container">
              {productDetails?.map((product, index) => (
                <Row
                  key={index}
                  gutter={16}
                  style={{ display: "flex", flexWrap: "nowrap", marginBottom: "10px" }}
                >
                  <Col span={4}>
                    <Form.Item
                      style={{ marginBottom: "0px" }}
                      label={index === 0 ? "Product Code" : null}
                    >
                      <Input value={product.product_code} readOnly />
                    </Form.Item>
                  </Col>
                  <Col span={4}>
                    <Form.Item
                      style={{ marginBottom: "0px" }}
                      label={index === 0 ? "Product Name" : null}
                    >
                      <Input value={product.product_name} readOnly />
                    </Form.Item>
                  </Col>
                  <Col span={4}>
                    <Form.Item
                      style={{ marginBottom: "0px" }}
                      label={index === 0 ? "No. of Bags" : null}
                    >
                      <Input value={product.weight} readOnly />
                    </Form.Item>
                  </Col>
                  <Col span={4}>
                    <Form.Item
                      style={{ marginBottom: "0px" }}
                      label={index === 0 ? "Weight [MT]" : null}
                    >
                      <Input value={product.mt} readOnly />
                    </Form.Item>
                  </Col>
                  <Col span={4}>
                    <Form.Item
                      style={{ marginBottom: "0px" }}
                      label={index === 0 ? "Rate" : null}
                    >
                      <Input value={product.rate} readOnly />
                    </Form.Item>
                  </Col>
                  <Col span={4}>
                    <Form.Item

                      style={{ marginBottom: "0px" }}
                      label={index === 0 ? "Total Freight" : null}
                    >
                      <Input value={product.total_freight} readOnly />
                    </Form.Item>
                  </Col>
                </Row>
              ))}
            </div>

            <Row gutter={16} style={{ display: 'flex', flexWrap: 'nowrap', marginLeft: "3px" }}>



              <p style={{ fontSize: "15px" }}> <strong>Delivery Type:</strong>  {check}</p>
            </Row>

            <Row gutter={16} style={{ display: 'flex', flexWrap: 'nowrap' }}>
              <Col span={4}>
                <Form.Item
                  style={{ marginBottom: '5px' }}
                  name="sum"
                  label="Total Amount (Rs.)"
                >
                  <Input size="medium" placeholder="Enter Total Amount" />
                </Form.Item>
              </Col>

              <Col span={4}>
                <Form.Item
                  style={{ marginBottom: "0px" }}
                  name='sc'
                  label="Advance Cash (Rs.)"
                >
                  <Input size="medium" placeholder="Enter Advance Cash " />
                </Form.Item>
              </Col>


              <Col span={4}>
                <Form.Item
                  style={{ marginBottom: "0px" }}
                  name='hamali'
                  label="Diesel (Rs.)"
                >
                  <Input size="medium" placeholder="Enter Diesel" />
                </Form.Item>
              </Col>


              {/* Roll Number */}
              <Col span={4}>
                <Form.Item
                  style={{ marginBottom: "0px" }}
                  name='total_balanceamount'
                  label="Total Balance Amount (Rs.)"
                >
                  <Input size="medium" placeholder="Enter Total" />
                </Form.Item>
              </Col>


              <Col span={4}>
                <Form.Item
                  style={{ marginBottom: "0px" }}
                  name="topayrate"
                  label="Rate"
                >
                  <Input
                    size="medium"
                    placeholder="Enter Rate"

                  />
                </Form.Item>
              </Col>
              <Col span={4}>


                <Form.Item
                  name="topayamt"
                  label="To Pay (Rs.)"
                >
                  <Input size="medium" placeholder="Enter To Pay" />
                </Form.Item>

              </Col>


            </Row>
            <Form.Item style={{ marginBottom: "15px" }} wrapperCol={{ offset: 10, span: 12 }}>
              <Button
                type="default"
                htmlType="submit"
                size="medium"
                style={{ backgroundColor: "rgb(170, 43, 29)", marginRight: "10px", color: "white" }}
              >
                Save
              </Button>
            </Form.Item>
          </Form>
        </Box>
      </Modal>


    </>
  );

}
export default FormExample;

