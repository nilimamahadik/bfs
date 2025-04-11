import React, { useEffect, useState } from "react";
import {
    Button,
    Modal,
    Form,
    Input,
    Table,
    Typography,
    Space,
    Card,
    Upload,
    Popconfirm,
    message,
    Radio
} from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
import Papa from "papaparse";
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
import { DataTable } from "../commonfunction/Datatable";
import { getIndianTimestamp } from "../commonfunction/formatDate";
import { MdArrowBack } from "react-icons/md";

const BASEURL = "/api"

const TransportMaster = () => {
    const navigate = useNavigate();
    const { groupId } = useParams()
    // console.log(groupId);
    const [open, setOpen] = useState(false);
    const [bulkUploadOpen, setBulkUploadOpen] = useState(false);
    const [fileList, setFileList] = useState([]);
    // const [transportList, settransports] = useState([]);

    const [products, settransports] = useState([]);
    console.log(products);


    const [currenttransport, setCurrenttransport] = useState(null); // Stores Selected transport for Editing
    const [editOpen, setEditOpen] = useState(false); // Controls Edit Modal State
    const [value, setValue] = useState({})
    // console.log(value.id);
    const [editForm] = Form.useForm(); // Antd Form Hook
    const [form] = Form.useForm(); // Antd Form Hook
    const userId = value.id

    const handleOpen = () => {
        form.resetFields();
        setOpen(true);
    };

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

    const handleEditOpen = (product) => {
        //console.log(product);

        //// // console.log("Editing transport:", product);
        setCurrenttransport(product);
        editForm.setFieldsValue(product); // Pre-fill form with selected product details
        setEditOpen(true);
    };

    const handleClose = () => setOpen(false);
    // Add transport
    const addtransport = () => {
        form.validateFields().then(async (values) => {
            // // console.log("values", values);
            // // console.log("User ID:", value.id);
            const payload = { ...values, groupId };
            try {
                const response = await axios.post(`${BASEURL}/transportmaster`, payload);

                message.success({
                    content: response.data.message,
                    duration: 2, // Time before it disappears (in seconds)
                    style: {
                        marginTop: "25vh", // Moves it to center vertically
                        textAlign: "center", // Ensures text is centered
                        // Moves it to center horizontally
                    }
                });
                fetchtransports()
                handleClose();
            } catch (error) {
                // // console.error("Error adding product:", error);
                alert("Failed to add Transport Details !");
            }
        });
    };


    const fetchtransports = async () => {
        try {
            const response = await axios.get(`${BASEURL}/gettransportdetails/${groupId}`);
            //console.log(response);

            settransports(response?.data?.transportdetails);
        } catch (error) {
            // // console.error("Error fetching products:", error);
        }
    };


    const edittransport = async () => {
        try {
            const values = await editForm.validateFields(); // Validate form inputs
            const response = await axios.patch(`${BASEURL}/updatetransport/${currenttransport._id}`, values);

            const updatedtransports = products.map((p) =>
                p._id === currenttransport._id ? { ...p, ...values } : p
            );
            settransports(updatedtransports);
            message.success({
                content: response.data.message,
                duration: 2, // Time before it disappears (in seconds)
                style: {
                    marginTop: "25vh", // Moves it to center vertically
                    textAlign: "center", // Ensures text is centered
                }
            });
            // message.success(response.data.message);
            setEditOpen(false); // Close modal after successful edit
        } catch (error) {
            // // console.error("Error updating product:", error);
            message.error("Failed to update Transport Details!");
        }
    };


    useEffect(() => {
        fetchtransports();
    }, []);


    const deletetransport = async (id) => {
        //// // console.log("Deleting transport:", id);

        try {
            await axios.delete(`${BASEURL}/deletetransport/${id}`);
            settransports(products.filter((product) => product._id !== id));

            message.success({
                content: "Transport Details deleted successfully!",
                duration: 2, // Time before it disappears (in seconds)
                style: {
                    marginTop: "25vh", // Moves it to center vertically
                    textAlign: "center", // Ensures text is centered
                    // Moves it to center horizontally
                }
            });

        } catch (error) {
            // // console.error("Error deleting product:", error);
            message.error("Failed to delete Transport Details!");
        }
    };


    const handleUpload = async () => {
        if (fileList.length === 0) {
            message.error("Please select a CSV file to upload.");
            return;
        }

        const file = fileList[0];

        Papa.parse(file.originFileObj, {
            complete: async (result) => {
                let records = result.data.slice(1).map(row => (

                    {
                        from: row[0]?.trim() || "",
                        truckNo: row[1]?.trim() || "",
                        truckDriverName: row[2]?.trim() || "",
                        transportMode: row[3]?.trim() || "",
                        mobileNo: isNaN(row[4]?.trim()) ? 0 : parseInt(row[4]?.trim(), 10), // ✅ Handle invalid mobileNo
                        group_id: value?.id, // ✅ Attach the groupId
                    }));

                // ✅ Filter valid entries
                records = records.filter(record => record.from && record.truckNo && record.truckDriverName && record.group_id);

                if (records.length === 0) {
                    message.error("No valid records found in the CSV file.");
                    return;
                }

                try {
                    const response = await axios.post(`${BASEURL}/uploadtransport`, { products: records });

                    if (response.status === 201) {
                        message.success(response.data.message || "Bulk upload successful!");
                        settransports([...products, ...records]);
                        setBulkUploadOpen(false);
                        setFileList([]);
                    } else {
                        message.error("Failed to upload CSV. Please check the file format.");
                    }
                } catch (error) {
                    message.error("Failed to upload CSV. Server error!");
                }
            },
            header: false,
        });
    };

    // Table Columns
    const columns = [
        { field: "id", headerName: "Sr. No.", minWidth: 30, flex: 0.2 },
        { field: "name", headerName: "From", minWidth: 100, flex: 0.5 },
        { field: "place", headerName: "Truck No.", minWidth: 100, flex: 0.5 },
        { field: "district", headerName: "Truck Driver Name", minWidth: 100, flex: 0.5 },
        { field: "mobileNo", headerName: "Driver Mobile No.", minWidth: 80, flex: 0.5 },
        {
            field: "createdDate",
            headerName: "Created Date",
            minWidth: 40,
            flex: 0.5,
        },
        {
            field: "active",
            headerName: "Status",
            sortable: false,
            flex: 0.4,
            renderCell: (params) => {
                return (
                    <div
                        style={{
                            color: params.value === "ACTIVE" ? "green" : "red", // Conditional text color

                        }}
                    >
                        {params.value}
                    </div>
                );
            },
        },
        {
            field: "actions",
            headerName: "Actions",
            sortable: false,
            flex: 0.4,
            renderCell: (params) => {
                // console.log(params); // Logs params for debugging

                return (
                    <Space style={{ padding: "7px" }}>
                        {/* <EditOutlined onClick={() => handleEditOpen(params.row._id)} /> */}
                        <Button
                            type="primary"
                            style={{
                                backgroundColor: "#AA2B1D", // Maroon background color
                                borderColor: "#AA2B1D", // Match border color with background
                                color: "white", // White icon color
                            }}
                            icon={<EditOutlined />}
                            onClick={() => handleEditOpen(params.row._id)}
                        />
                    </Space>
                );
            },
        },
    ];



    const findstatus = (status) => {
        return status ? 'ACTIVE' : "INACTIVE"
    }

    const rows = products?.map((item, index) => {
        return {
            id: index + 1,
            name: item.from || "NA",
            place: item.truckNo || "NA",
            district: item.truckDriverName || "NA",
            mobileNo: item.mobileNo || "NA",
            createdDate: getIndianTimestamp(item.createdAt) || "NA",
            _id: item,
            active: findstatus(item.active) || "NA"
        };
    }) || [];


    return (
        <div >
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
                    <MdArrowBack />    Transport Master
                </Typography.Title>
                <div style={{ marginRight: "30px" }}>
                    <Button type="default" icon={<PlusOutlined />} onClick={() => setOpen(true)} style={{ marginRight: "10px" }}>
                        Add Transport details
                    </Button>

                    <Button type="default" icon={<UploadOutlined />} onClick={() => setBulkUploadOpen(true)}>
                        Bulk Upload
                    </Button>
                </div>
            </div>


            <Modal
                title="📤 Bulk Upload transports"
                open={bulkUploadOpen}
                onCancel={() => setBulkUploadOpen(false)}
                onOk={handleUpload}
                okText="Upload"
                cancelText="Cancel"
                centered
                style={{ top: 30 }}
            >
                <p>Please upload a CSV file with the following format:</p>
                <p><b>From, Truck No., Truck Driver Name, Mobile No</b></p>

                <Upload
                    beforeUpload={() => false}
                    onChange={({ fileList }) => setFileList(fileList)}
                    fileList={fileList}
                    accept=".csv"
                >
                    <Button icon={<UploadOutlined />}>Select CSV File</Button>
                </Upload>
            </Modal>

            <Modal
                title="Add Transport Details"
                open={open}
                onCancel={handleClose}
                onOk={addtransport}
                okText="Save"
                cancelText="Cancel"
                centered
                style={{ top: 30 }}
            >
                <hr />
                <Form form={form} layout="vertical">

                    <Form.Item
                        label="From"
                        name="from"
                        rules={[{ required: true, message: "Please enter the 'From' location" }]}
                    >
                        <Input placeholder="Enter 'From' location" />
                    </Form.Item>
                    <Form.Item
                        label="Truck No"
                        name="truckNo"
                        rules={[{ required: true, message: "Please enter the Truck No" }]}
                    >
                        <Input placeholder="Enter Truck No" />
                    </Form.Item>
                    <Form.Item
                        label="Truck Driver Name"
                        name="truckDriverName"
                        rules={[{ required: true, message: "Please enter the Truck Driver Name" }]}
                    >
                        <Input placeholder="Enter Truck Driver Name" />
                    </Form.Item>
                    <Form.Item
                        label="Mobile Number"
                        name="mobileNo"
                        rules={[{ message: "Please enter Mobile Number" }]}
                    >
                        <Input placeholder="Enter Mobile Number" />
                    </Form.Item>
                    <Form.Item
                        label="Transport Mode"
                        name="transportMode"
                        rules={[{ required: true, message: "Please select the Transport Mode" }]}
                    >
                        <Input placeholder="Enter Transport Mode (e.g., Road, Rail, Air)" />
                    </Form.Item>

                </Form>
            </Modal>
            <Modal
                title="✏️ Edit transport"
                open={editOpen} // Ensure this is linked to editOpen state
                onCancel={() => setEditOpen(false)} // Close modal when clicking outside
                onOk={edittransport}
                centered
                style={{ top: 30 }}
            >
                <hr />
                <Form form={editForm} layout="vertical">

                    <Form.Item
                        label="From"
                        name="from"
                        rules={[{ required: true, message: "Please enter the 'From' location" }]}
                    >
                        <Input placeholder="Enter 'From' location" />
                    </Form.Item>
                    <Form.Item
                        label="Truck No"
                        name="truckNo"
                        rules={[{ required: true, message: "Please enter the Truck No" }]}
                    >
                        <Input placeholder="Enter Truck No" />
                    </Form.Item>
                    <Form.Item
                        label="Truck Driver Name"
                        name="truckDriverName"
                        rules={[{ required: true, message: "Please enter the Truck Driver Name" }]}
                    >
                        <Input placeholder="Enter Truck Driver Name" />
                    </Form.Item>
                    <Form.Item
                        label="Mobile Number"
                        name="mobileNo"
                        rules={[{ message: "Please enter Mobile Number" }]}
                    >
                        <Input placeholder="Enter Mobile Number" />
                    </Form.Item>
                    <Form.Item
                        label="Transport Mode"
                        name="transportMode"
                        rules={[{ required: true, message: "Please select the Transport Mode" }]}
                    >
                        <Input placeholder="Enter Transport Mode (e.g., Road, Rail, Air)" />
                    </Form.Item>
                    <Form.Item
                        name='active'
                        label="Status"
                        rules={[{ required: true, message: 'Please select a status!' }]}
                    >
                        <Radio.Group>
                            <Radio value={true}>Active</Radio>
                            <Radio value={false}>Inactive</Radio>
                        </Radio.Group>
                    </Form.Item>
                </Form>
            </Modal>
            {/* transport List */}
            {products.length > 0 && (


                <DataTable rows={rows} columns={columns} />




            )}
        </div>
    );
};

export default TransportMaster;
