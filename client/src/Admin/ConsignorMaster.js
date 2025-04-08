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
    message
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

const ConsignorMaster = () => {
    const navigate = useNavigate();
    const { groupId } = useParams()
    // console.log(groupId);
    const [open, setOpen] = useState(false);
    const [bulkUploadOpen, setBulkUploadOpen] = useState(false);
    const [fileList, setFileList] = useState([]);
    // const [ConsignorList, setConsignors] = useState([]);

    const [products, setConsignors] = useState([]);
    //console.log(products);


    const [currentConsignor, setCurrentConsignor] = useState(null); // Stores Selected Consignor for Editing
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

        //// // console.log("Editing Consignor:", product);
        setCurrentConsignor(product);
        editForm.setFieldsValue(product); // Pre-fill form with selected product details
        setEditOpen(true);
    };

    const handleClose = () => setOpen(false);
    // Add Consignor
    const addConsignor = () => {
        form.validateFields().then(async (values) => {
            // // console.log("values", values);
            // // console.log("User ID:", value.id);
            const payload = { ...values, groupId };
            try {
                const response = await axios.post(`${BASEURL}/Consignormaster`, payload);
                // setConsignors([...products, response.data.product]); // Update UI
                fetchConsignors();
                message.success({
                    content: response.data.message,
                    duration: 2, // Time before it disappears (in seconds)
                    style: {
                        marginTop: "25vh", // Moves it to center vertically
                        textAlign: "center", // Ensures text is centered
                        // Moves it to center horizontally
                    }
                });
                handleClose();
            } catch (error) {
                // // console.error("Error adding product:", error);
                alert("Failed to add product!");
            }
        });
    };


    const fetchConsignors = async () => {
        try {
            const response = await axios.get(`${BASEURL}/consignor/${groupId}`);
            setConsignors(response?.data?.products);
        } catch (error) {
            // // console.error("Error fetching products:", error);
        }
    };


    const editConsignor = async () => {
        try {
            const values = await editForm.validateFields(); // Validate form inputs
            const response = await axios.patch(`${BASEURL}/consignorupdate/${currentConsignor._id}`, values);

            // Update product in the UI
            const updatedConsignors = products.map((p) =>
                p._id === currentConsignor._id ? { ...p, ...values } : p
            );
            setConsignors(updatedConsignors);
            message.success({
                content: response.data.message,
                duration: 2, // Time before it disappears (in seconds)
                style: {
                    marginTop: "25vh", // Moves it to center vertically
                    textAlign: "center", // Ensures text is centered
                    // Moves it to center horizontally
                }
            });
            // message.success(response.data.message);
            setEditOpen(false); // Close modal after successful edit
        } catch (error) {
            // // console.error("Error updating product:", error);
            message.error("Failed to update product!");
        }
    };


    useEffect(() => {
        fetchConsignors();
    }, []);


    const deleteConsignor = async (id) => {
        //// // console.log("Deleting Consignor:", id);

        try {
            await axios.delete(`${BASEURL}/deleteconsignor/${id}`);
            setConsignors(products.filter((product) => product._id !== id));

            message.success({
                content: "Consignor deleted successfully!",
                duration: 2, // Time before it disappears (in seconds)
                style: {
                    marginTop: "25vh", // Moves it to center vertically
                    textAlign: "center", // Ensures text is centered
                    // Moves it to center horizontally
                }
            });

        } catch (error) {
            // // console.error("Error deleting product:", error);
            message.error("Failed to delete product!");
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
                let records = result.data.slice(1).map(row => ({
                    name: row[0]?.trim() || "",
                    place: row[1]?.trim() || "",
                    district: row[2]?.trim() || "",
                    mobileNo: isNaN(row[3]?.trim()) ? 0 : parseInt(row[3]?.trim(), 10),
                    group_id: value?.id,
                }));

                records = records.filter(record => record.name && record.place && record.district && record.group_id);

                if (records.length === 0) {
                    message.error("No valid records found in the CSV file.");
                    return;
                }

                try {
                    const response = await axios.post(`${BASEURL}/uploadConsignor`, { products: records });

                    if (response.status === 201) {
                        message.success(response.data.message || "Bulk upload successful!");
                        setConsignors([...products, ...records]);
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
        { field: "name", headerName: "Name of Consignor", minWidth: 150, flex: 1 },
        { field: "place", headerName: "Address", minWidth: 60, flex: 0.5 },
        { field: "district", headerName: "District", minWidth: 60, flex: 0.5 },
        { field: "mobileNo", headerName: "Mobile No.", minWidth: 40, flex: 0.5 },
        {
            field: "createdDate",
            headerName: "Created Date",
            minWidth: 40,
            flex: 0.5,
        },
        {
            field: "actions",
            headerName: "Actions",
            sortable: false,
            flex: 0.4,
            renderCell: (params) => {
                // console.log(params); // Logs params for debugging

                return (
                    <Space style={{padding: "7px"}}>
                        {/* ✅ Edit Button */}
                        <EditOutlined  onClick={() => handleEditOpen(params.row._id)}/>
                        {/* <Button
                            icon={<EditOutlined />}
                            onClick={() => handleEditOpen(params.row._id)}
                            style={{
                                backgroundColor: "#77B254",
                                color: "white",
                                borderColor: "green",
                            }}
                        >
                            Edit
                        </Button> */}

                        {/* ✅ Delete Button with Confirmation */}
                        <Popconfirm
                            title="Are you sure you want to delete this Consignor?"
                            onConfirm={() => deleteConsignor(params.row._id._id)}
                            okText="Yes"
                            cancelText="No"
                        >
                            <DeleteOutlined />
                            {/* <Button
                                danger
                                icon={<DeleteOutlined />}
                                style={{
                                    backgroundColor: "#C63D2F",
                                    color: "white",
                                    borderColor: "red",
                                }}
                            >
                                Delete
                            </Button> */}
                        </Popconfirm>
                    </Space>
                );
            },
        },
    ];





    const rows = products?.map((item, index) => {
        //console.log(item);

        return {
            id: index + 1,
            name: item.name || "NA",
            place: item.place || "NA",
            district: item.district || "NA",
            mobileNo: item.mobileNo || "NA",
            createdDate: getIndianTimestamp(item.createdAt) || "NA",
            _id: item, // ✅ Include _id for delete action
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
                    <MdArrowBack />    Consignor Master
                </Typography.Title>
                <div style={{ marginRight: "30px" }}>
                    <Button type="default" icon={<PlusOutlined />} onClick={() => setOpen(true)} style={{ marginRight: "10px" }}>
                        Add Consignor
                    </Button>

                    <Button type="default" icon={<UploadOutlined />} onClick={() => setBulkUploadOpen(true)}>
                        Bulk Upload
                    </Button>
                </div>
            </div>






            <Modal
                title="📤 Bulk Upload Consignors"
                open={bulkUploadOpen}
                onCancel={() => setBulkUploadOpen(false)}
                onOk={handleUpload}
                okText="Upload"
                cancelText="Cancel"
                centered
                style={{ top: 30 }}
            >
                <p>Please upload a CSV file with the following format:</p>
                <p><b>Name, Place, District, Mobile No</b></p>

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
                title="➕ Add a New Consignor"
                open={open}
                onCancel={handleClose}
                onOk={addConsignor}
                okText="Save"
                cancelText="Cancel"
                centered
                style={{ top: 30 }}
            >
                <hr />
                <Form form={form} layout="vertical">
                    <Form.Item
                        label="Name of Consignor"
                        name="name"
                        rules={[{ required: true, message: "Please enter Name of Consignor" }]}
                    >
                        <Input placeholder="Enter Name of Consignor" />
                    </Form.Item>
                    <Form.Item
                        label="Address"
                        name="place"
                        rules={[{ required: true, message: "Please enter place" }]}
                    >
                        <Input placeholder="Enter place " />
                    </Form.Item>

                    <Form.Item
                        label="District"
                        name="district"
                        rules={[{ message: "Please enter District" }]}
                    >
                        <Input placeholder="Enter District" />
                    </Form.Item>

                    <Form.Item
                        label="Mobile Number"
                        name="mobileNo"
                        rules={[{ message: "Please enter Mobile Number" }]}
                    >
                        <Input placeholder="Enter Mobile Number" />
                    </Form.Item>
                </Form>
            </Modal>
            <Modal
                title="✏️ Edit Consignor"
                open={editOpen} // Ensure this is linked to editOpen state
                onCancel={() => setEditOpen(false)} // Close modal when clicking outside
                onOk={editConsignor}
                centered
                style={{ top: 30 }}
            >
                <hr />
                <Form form={editForm} layout="vertical">
                    <Form.Item
                        label="Name of Consignor"
                        name="name"
                        rules={[{ required: true, message: "Please enter Name of Consignor" }]}
                    >
                        <Input placeholder="Enter Name of Consignor" />
                    </Form.Item>
                    <Form.Item
                        label="Address"
                        name="place"
                        rules={[{ required: true, message: "Please enter place" }]}
                    >
                        <Input placeholder="Enter place " />
                    </Form.Item>

                    <Form.Item
                        label="District"
                        name="district"
                        rules={[{ message: "Please enter District" }]}
                    >
                        <Input placeholder="Enter District" />
                    </Form.Item>

                    <Form.Item
                        label="Mobile Number"
                        name="mobileNo"
                        rules={[{ message: "Please enter Mobile Number" }]}
                    >
                        <Input placeholder="Enter Mobile Number" />
                    </Form.Item>
                </Form>
            </Modal>
            {/* Consignor List */}
            {products.length > 0 && (
                //// console.log(products),


                <DataTable rows={rows} columns={columns} />



            )}
        </div>
    );
};

export default ConsignorMaster;
