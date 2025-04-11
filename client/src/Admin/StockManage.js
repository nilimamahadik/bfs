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
    Select,
    DatePicker
} from "antd";
import { PlusOutlined, EditOutlined, DeleteOutlined, UploadOutlined } from "@ant-design/icons";
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
import Papa from "papaparse";
import { DataTable } from "../commonfunction/Datatable";
import { formatDate, getIndianTimestamp } from "../commonfunction/formatDate";
import moment from "moment";
import { MdArrowBack } from "react-icons/md";

const BASEURL = "/api"

const StockManage = () => {
    const navigate = useNavigate();
    const { groupId } = useParams()
    ////console.log(groupId);

    const [stocks, setStocks] = useState([]);
    //console.log(stocks);
    const [currentStock, setCurrentStock] = useState(null);
    //console.log(currentStock);

    const [editOpen, setEditOpen] = useState(false); // Controls Edit Modal State
    const [value, setValue] = useState({})
    //console.log(value);

    const [bulkUploadOpen, setBulkUploadOpen] = useState(false);
    const [fileList, setFileList] = useState([]);
    const [products, setProducts] = useState([]);

    //console.log(value.id);
    const [editForm] = Form.useForm(); // Antd Form Hook
    const [open, setOpen] = useState(false); // Controls Modal State
    const [form] = Form.useForm(); // Antd Form Hook
    const userId = value.id
    const [consignee, setConsignees] = useState([]);
    const [warehouse, setWarehouses] = useState([]);
    //console.log(warehouse);

    //console.log(Stocks);

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
                let records = result.data.slice(1).map(row => ({
                    name: row[0]?.trim() || "",
                    quantity: row[1]?.trim() || "",
                    reorderqty: row[2]?.trim() || "",
                    group_id: value?.id, // ✅ Attach the groupId
                }));

                // ✅ Filter out invalid entries (missing required fields)
                records = records.filter(record => record.name && record.quantity && record.reorderqty && record.group_id);

                if (records.length === 0) {
                    message.error("No valid records found in the CSV file.");
                    return;
                }

                try {
                    const response = await axios.post(`${BASEURL}/uploadstocks`, { stocks: records });
                    // //console.log(response);

                    message.success(response.data.message);
                    setStocks([...stocks, ...records]);
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

    // const handleEditOpen = (stocks) => {
    //    //console.log("Editing Stock:", stocks);
    //     setCurrentStock(stocks);
    //     editForm.setFieldsValue(stocks); // Pre-fill form with selected Stock details
    //     setEditOpen(true);
    // };


    const handleEditOpen = (stocks) => {
        //console.log("Editing Stock:", stocks);

        // Correctly pre-fill form fields with selected stock details
        editForm.setFieldsValue({
            ...stocks, // Spread other fields
            date: stocks.date ? moment(stocks.date) : null, // Correctly format date
        });

        setCurrentStock(stocks);
        setEditOpen(true);
    };

    const handleClose = () => setOpen(false);
    // Add Stock
    const addStock = () => {
        form.validateFields().then(async (values) => {
            ////console.log("values", values);
            //console.log("User ID:", value.id);
            const payload = { ...values, groupId };
            try {
                const response = await axios.post(`${BASEURL}/storemanage`, payload);
                // setStocks([...Stocks, response.data.Stock]); // Update UI
                fetchStocks();
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
                //console.error("Error adding Stock:", error);
                alert("Failed to add Stock!");
            }
        });
    };


    const fetchStocks = async () => {
        try {
            const response = await axios.get(`${BASEURL}/getallstock/${groupId}`);
            setStocks(response?.data?.products);
        } catch (error) {
            //console.error("Error fetching Stocks:", error);
        }
    };


    const editStock = async () => {
        try {
            const values = await editForm.validateFields(); // Validate form inputs
            const response = await axios.patch(`${BASEURL}/updatestock/${currentStock._id}`, values);

            // Update Stock in the UI
            const updatedStocks = stocks.map((p) =>
                p._id === currentStock._id ? { ...p, ...values } : p
            );
            setStocks(updatedStocks);
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
            //console.error("Error updating Stock:", error);
            message.error("Failed to update Stock!");
        }
    };


    useEffect(() => {
        fetchStocks();
    }, []);


    const deleteStock = async (id) => {
        //console.log("Deleting Stock:", id);

        try {
            await axios.delete(`${BASEURL}/deletestock/${id}`);
            setStocks(stocks.filter((Stock) => Stock._id !== id));

            message.success({
                content: "Stock deleted successfully!",
                duration: 2, // Time before it disappears (in seconds)
                style: {
                    marginTop: "25vh", // Moves it to center vertically
                    textAlign: "center", // Ensures text is centered
                    // Moves it to center horizontally
                }
            });

        } catch (error) {
            //console.error("Error deleting Stock:", error);
            message.error("Failed to delete Stock!");
        }
    };


    // Table Columns

    const columns = [
        { field: "id", headerName: "Sr. No.", minWidth: 30, flex: 0.2 },
        { field: "name", headerName: "Product", minWidth: 50, flex: 0.5 },
        { field: "quantity", headerName: " Stock Quantity (Bag) ", minWidth: 50, flex: 0.5 },
        { field: "warehouse", headerName: "Warehouse", minWidth: 50, flex: 0.5 },
        { field: "createdBy", headerName: "Created By", minWidth: 50, flex: 0.5 },

        { field: "date", headerName: "Created Date", minWidth: 50, flex: 0.5 },
        { field: "remark", headerName: "Remark", minWidth: 50, flex: 0.5 },

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





    const rows = stocks?.map((item, index) => {
        //console.log(item);

        return {
            id: index + 1,
            name: item.name || "NA",
            quantity: item.quantity || "NA",
            warehouse: item.warehouse || "NA",
            createdBy: value.name || "NA",
            date: getIndianTimestamp(item.date) || "NA",
            remark: item.remark || "NA",
            _id: item, // ✅ Include _id for delete action
        };
    }) || [];

    const fetchProducts = async () => {
        try {
            const response = await axios.get(`${BASEURL}/products/${groupId}`);
            const activeProducts = response?.data?.products?.filter(product => product.active === true);
            setProducts(activeProducts);
        } catch (error) {
        }
    };
    useEffect(() => {
        fetchProducts();
        fetchWarehouses();
    }, []);

    const fetchWarehouses = async () => {
        try {
            const response = await axios.get(`${BASEURL}/getwarehouse/${groupId}`);
            setWarehouses(response?.data?.products);
        } catch (error) {
            // // console.error("Error fetching products:", error);
        }
    };

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
                    <MdArrowBack />    Stock Management
                </Typography.Title>
                <div style={{ marginRight: "30px" }}>
                    <Button type="default" icon={<PlusOutlined />} onClick={handleOpen} style={{ marginRight: "10px" }}>
                        Add Stock
                    </Button>
                    <Button type="default" icon={<UploadOutlined />} onClick={() => setBulkUploadOpen(true)}>
                        Bulk Upload
                    </Button>
                </div>
            </div>


            {/* 1)         Stock Form Modal */}
            <Modal
                title="➕ Add a New Stock"
                open={open}
                onCancel={handleClose}
                onOk={addStock}
                okText="Save"
                cancelText="Cancel"
                centered
                style={{ top: 30 }}
            >
                <hr />
                <Form form={form} layout="vertical">

                    <Form.Item
                        name="name"
                        label="Product Name"  >
                        <Select
                            showSearch
                            placeholder="Select Product Name"
                            optionFilterProp="label"

                            size="medium"
                            style={{ width: "100%" }}
                            getPopupContainer={(trigger) => trigger.parentNode}

                        >
                            {products.map((product) => (

                                <Select.Option key={product._id} value={product.code} label={product.name}>
                                    {product.code}
                                </Select.Option>
                            ))}
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label=" Stock Quantity (Bag)"
                        name="quantity"
                        rules={[{ required: true, message: "Please enter Quantity" }]}       >
                        <Input placeholder="Enter Quantity" />
                    </Form.Item>

                    <Form.Item
                        label="Select Warehouse"
                        name="warehouse"
                    >
                        <Select
                            showSearch
                            placeholder="Select Warehouse "
                            optionFilterProp="label"
                            size="medium"
                            style={{ width: "100%" }}
                            getPopupContainer={(trigger) => trigger.parentNode}
                        >
                            {warehouse.map((product) => (
                                //console.log(product),

                                <Select.Option key={product._id} value={product.name} label={product.name}>
                                    {product.code}
                                </Select.Option>
                            ))}
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="Create Date"
                        name="date"
                        rules={[{ required: true, message: "Please select a date" }]}
                    >
                        <DatePicker
                            format="DD/MM/YYYY"
                            placeholder="Select Date"
                            style={{ width: "100%" }}
                        />
                    </Form.Item>
                    <Form.Item
                        label="Remark"
                        name="remark"
                        rules={[{ message: "Please enter remark" }]}       >
                        <Input placeholder="Enter remark" />
                    </Form.Item>

                </Form>


            </Modal>


            {/* 2] */}

            <Modal
                title="✏️ Edit Stock"
                open={editOpen} // Ensure this is linked to editOpen state
                onCancel={() => setEditOpen(false)} // Close modal when clicking outside
                onOk={editStock}
                centered
                style={{ top: 30 }}
            >
                <hr />
                <Form form={editForm} layout="vertical">

                    <Form.Item
                        name="name"
                        label="Product Name"  >
                        <Select
                            showSearch
                            placeholder="Select Product Name"
                            optionFilterProp="label"

                            size="medium"
                            style={{ width: "100%" }}
                            getPopupContainer={(trigger) => trigger.parentNode}

                        >
                            {products.map((product) => (

                                <Select.Option key={product._id} value={product.code} label={product.name}>
                                    {product.code}
                                </Select.Option>
                            ))}
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label=" Stock Quantity (Bag)"
                        name="quantity"
                        rules={[{ required: true, message: "Please enter Quantity" }]}       >
                        <Input placeholder="Enter Quantity" />
                    </Form.Item>

                    <Form.Item
                        label="Select Warehouse"
                        name="warehouse"
                    >
                        <Select
                            showSearch
                            placeholder="Select Warehouse "
                            optionFilterProp="label"
                            size="medium"
                            style={{ width: "100%" }}
                            getPopupContainer={(trigger) => trigger.parentNode}
                        >
                            {warehouse.map((ware) => (


                                <Select.Option key={ware._id} value={ware.name} label={ware.name}>
                                    {ware.name}
                                </Select.Option>
                            ))}
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="Create Date"
                        name="date"
                        rules={[{ required: true, message: "Please select a date" }]}
                    >
                        <DatePicker
                            format="DD/MM/YYYY"
                            placeholder="Select Date"
                            style={{ width: "100%" }}
                        />
                    </Form.Item>
                    <Form.Item
                        label="Remark"
                        name="remark"
                        rules={[{ message: "Please enter remark" }]}       >
                        <Input placeholder="Enter remark" />
                    </Form.Item>

                </Form>
            </Modal>
            {/* Stock List */}
            {stocks.length > 0 && (
                ////console.log(Stocks),


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
                <p><b> Product Name, Quantity, Reorder QTY</b></p>

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

export default StockManage;


