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
    Popconfirm,
    message,
    Upload,
    Radio,
} from "antd";
import { PlusOutlined, EditOutlined, DeleteOutlined, UploadOutlined } from "@ant-design/icons";
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
import Papa from "papaparse";
import { DataTable } from "../commonfunction/Datatable";
import { getIndianTimestamp } from "../commonfunction/formatDate";
import { MdArrowBack } from "react-icons/md";

const BASEURL = "/api"

const ProductMaster = () => {
    const navigate = useNavigate();
    const { groupId } = useParams()
    //////console.log(groupId);

    const [products, setProducts] = useState([]);
    // console.log(products);
    const [currentProduct, setCurrentProduct] = useState(null); // Stores Selected Product for Editing
    const [editOpen, setEditOpen] = useState(false); // Controls Edit Modal State
    const [value, setValue] = useState({})
    const [bulkUploadOpen, setBulkUploadOpen] = useState(false);
    const [fileList, setFileList] = useState([]);

    //console.log(value.id);
    const [editForm] = Form.useForm(); // Antd Form Hook
    const [open, setOpen] = useState(false); // Controls Modal State
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


    const handleUpload = async () => {
        if (fileList.length === 0) {
            message.error("Please select a CSV file to upload.");
            return;
        }

        const file = fileList[0];

        Papa.parse(file.originFileObj, {
            complete: async (result) => {
                //console.log(result)

                let records = result.data.slice(1).map(row => (
                    //console.log(row),


                    {

                        manufacturer: row[1]?.trim() || "",
                        name: row[2]?.trim() || "",
                        code: row[3]?.trim() || "",
                        uom: row[4]?.trim() || "",
                        rate: row[5]?.trim() || "",
                        group_id: value?.id,
                    }));

                records = records.filter(record => record.name && record.code && record.uom && record.group_id);

                if (records.length === 0) {
                    message.error("No valid records found in the CSV file.");
                    return;
                }

                try {
                    const response = await axios.post(`${BASEURL}/uploadproducts`, { products: records });
                    // //console.log(response);

                    message.success(response.data.message);
                    setProducts([...products, ...records]);
                    setBulkUploadOpen(false);
                    setFileList([]);
                } catch (error) {
                    // //console.error("Error uploading CSV:", error);
                    message.error("Failed to upload CSV.");
                }
            },
            header: false
        });
    };

    const handleEditOpen = (product) => {
        //console.log("Editing Product:", product);
        setCurrentProduct(product);
        editForm.setFieldsValue(product); // Pre-fill form with selected product details
        setEditOpen(true);
    };

    const handleClose = () => setOpen(false);
    // Add Product
    const addProduct = () => {
        form.validateFields().then(async (values) => {
            //console.log("values", values);

            ////console.log("User ID:", value.id);
            const payload = { ...values, groupId };
            try {
                const response = await axios.post(`${BASEURL}/productmaster`, payload);
                // setProducts([...products, response.data.product]); // Update UI
                fetchProducts();
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
                //console.error("Error adding product:", error);
                alert("Failed to add product!");
            }
        });
    };


    const fetchProducts = async () => {
        try {
            const response = await axios.get(`${BASEURL}/products/${groupId}`);
            console.log("response", response);
            
            const activeProducts = response?.data?.products?.filter(product => product.active === true);

            setProducts(activeProducts);
        } catch (error) {
            //console.error("Error fetching products:", error);
        }
    };


    const editProduct = async () => {
        try {
            const values = await editForm.validateFields(); // Validate form inputs
            const response = await axios.patch(`${BASEURL}/productupdate/${currentProduct._id}`, values);

            // Update product in the UI
            const updatedProducts = products.map((p) =>
                p._id === currentProduct._id ? { ...p, ...values } : p
            );
            setProducts(updatedProducts);
           
            message.success({
                content: response.data.message,
                duration: 2, // Time before it disappears (in seconds)
                style: {
                    marginTop: "25vh", // Moves it to center vertically
                    textAlign: "center", // Ensures text is centered
                    // Moves it to center horizontally
                }
            });
            fetchProducts();
            // message.success(response.data.message);
            setEditOpen(false); // Close modal after successful edit
        } catch (error) {
            //console.error("Error updating product:", error);
            message.error("Failed to update product!");
        }
    };


    useEffect(() => {
        fetchProducts();
    }, []);


  


    // Table Columns

    const columns = [
        { field: "id", headerName: "Sr. No.", minWidth: 30, flex: 0.5 },
        { field: "manufacturer", headerName: "Manufacturer Name", minWidth: 50, flex: 0.8 },
        { field: "name", headerName: "Product Name", minWidth: 60, flex: 1 },
        { field: "code", headerName: "Product Code", minWidth: 80, flex: 1 },
        { field: "uom", headerName: "Unit of Measurement", minWidth: 60, flex: 0.5 },
        { field: "rate", headerName: "Weight (kg)", minWidth: 40, flex: 0.5 },
        { field: "createdAt", headerName: "created Date", minWidth: 40, flex: 0.7 },
        // {
        //     field: "active",
        //     headerName: "Status",
        //     sortable: false,
        //     flex: 0.4,
        //     renderCell: (params) => {
        //         return (
        //             <div
        //                 style={{
        //                     color: params.value === "ACTIVE" ? "green" : "red", // Conditional text color

        //                 }}
        //             >
        //                 {params.value}
        //             </div>
        //         );
        //     },
        // },
        {
            field: "actions",
            headerName: "Actions",
            sortable: false,
            flex: 0.4,
            renderCell: (params) => {
                //console.log(params.row._id._id); // Logs params for debugging

                return (
                    <Space style={{ padding: "7px" }}>
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
            name: item.name || "NA",
            code: item.code || "NA",
            uom: item.uom || "NA",
            rate: item.rate || "NA",
            _id: item,
            createdAt: getIndianTimestamp(item.createdAt) || "NA",
            manufacturer: item.manufacturer || "NA",
            active: findstatus(item.active) || "NA"

        };
    }) || [];
    // "Inter", "Source Sans Pro", Helvetica, Arial, sans-serif;
    return (
        <div >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", marginTop: "5px" }}>
                <Typography.Title
                    level={3}
                    style={{
                        color: "black",
                        height: "10px",
                        margin: 0,
                        marginLeft: "5px",
                        fontWeight: "400",
                        fontSize: "20px",
                    }}
                >
                    <MdArrowBack />   Product Master
                </Typography.Title>
                <div style={{ marginRight: "30px" }}>
                    <Button type="default" icon={<PlusOutlined />} onClick={handleOpen} style={{ marginRight: "10px" }}>
                        Add Product
                    </Button>
                    <Button type="default" icon={<UploadOutlined />} onClick={() => setBulkUploadOpen(true)}>
                        Bulk Upload
                    </Button>
                </div>
            </div>

            <Modal
                title=" Add a New Product"
                open={open}
                onCancel={handleClose}
                onOk={addProduct}
                okText="Save"
                cancelText="Cancel"
                centered
                style={{ top: 30 }}
            >
                <hr />
                <Form form={form} layout="vertical">
                    <Form.Item
                        label="Manufacturer Name"
                        name="manufacturer"
                        rules={[{ message: "Please enter Manufacturer Name" }]}
                    >
                        <Input placeholder="Enter Manufacturer Name" />
                    </Form.Item>

                    <Form.Item
                        label="Product Name"
                        name="name"
                        rules={[{ required: true, message: "Please enter product name" }]}
                    >
                        <Input placeholder="Enter product name" />
                    </Form.Item>
                    <Form.Item
                        label="Product Code"
                        name="code"
                        rules={[{ required: true, message: "Please enter product code" }]}
                    >
                        <Input placeholder="Enter product code" />
                    </Form.Item>

                    <Form.Item
                        label="Unit of Measurement (UM)"
                        name="uom"
                        rules={[{ required: true, message: "Please enter unit of measurement" }]}
                    >
                        <Input placeholder="Enter unit of measurement" />
                    </Form.Item>

                    <Form.Item
                        label="Product Weight"
                        name="rate"
                        rules={[{ required: true, message: "Please enter Product Weight" }]}
                    >
                        <Input placeholder="Enter Product Weight" />
                    </Form.Item>
                </Form>
            </Modal>
            <Modal
                title="Edit Product"
                open={editOpen} // Ensure this is linked to editOpen state
                onCancel={() => setEditOpen(false)} // Close modal when clicking outside
                onOk={editProduct}
                centered
                style={{ top: 30 }}
            >
                <hr />

                <Form form={editForm} layout="vertical">
                    <Form.Item
                        label="Manufacturer Name"
                        name="manufacturer"
                        rules={[{ required: true, message: "Please enter Manufacturer Name" }]}
                    >
                        <Input placeholder="Enter Manufacturer Name" />
                    </Form.Item>

                    <Form.Item
                        label="Product Name"
                        name="name"
                        rules={[{ required: true, message: "Please enter product name" }]}
                    >
                        <Input placeholder="Enter product name" />
                    </Form.Item>
                    <Form.Item
                        label="Product Code"
                        name="code"
                        rules={[{ required: true, message: "Please enter product code" }]}
                    >
                        <Input placeholder="Enter product code" />
                    </Form.Item>
                    <Form.Item
                        label="Unit of Measurement (UM)"
                        name="uom"
                        rules={[{ required: true, message: "Please enter unit of measurement" }]}
                    >
                        <Input placeholder="Enter unit of measurement" />
                    </Form.Item>

                    <Form.Item
                        label="Product Weight"
                        name="rate"
                        rules={[{ required: true, message: "Please enter Product Weight" }]}
                    >
                        <Input placeholder="Enter Product Weight" />
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
            {/* Product List */}
            {products.length > 0 && (
                ////console.log(products),


                <DataTable rows={rows} columns={columns} />



            )}

            <Modal
                title="📤 Bulk Upload "
                open={bulkUploadOpen}
                onCancel={() => setBulkUploadOpen(false)}
                onOk={handleUpload}
                okText="Upload"
                cancelText="Cancel"
                centered
                style={{ top: 30 }}
            >
                <p>Please upload a CSV file with the following format:</p>
                <p><b> Product Name, Product Code, Unit of Measurement, Weight</b></p>

                <Upload
                    beforeUpload={() => false}
                    onChange={({ fileList }) => setFileList(fileList)}
                    fileList={fileList}
                    accept=".csv"
                >
                    <Button icon={<UploadOutlined />}>Select CSV File</Button>
                </Upload>
            </Modal>
        </div>
    );
};

export default ProductMaster;


