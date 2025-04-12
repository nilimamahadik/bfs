


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



const Recycle = (props) => {
    const params = useParams()
    //console.log(params);

    const [data, setData] = useState([])
    //console.log(data);

    const [receipt, setReceipt] = useState([]);
    const { Title } = Typography;
    const [value, setValue] = useState({})
    const navigate = useNavigate();
    const [graceOpen, setGraceOpen] = useState(false)
    const [modalForm] = Form.useForm();
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [editingReceipt, setEditingReceipt] = useState(null);
    const [consignee, setConsignees] = useState([]);
    const [editForm] = Form.useForm(); // Antd Form Hook
    const [check, setCheck] = useState([]);
    const [consignor, setConsignors] = useState([]);
    const [record, setRecord] = useState(null)


    const getallusers = async () => {

        const get = axios.get(`${BASEURL}/getallusers/${params.groupId}`)
            .then((res) => {
                //console.log("res", res?.data);
                const filteredData = res.data.data.filter(user => user.deleted);
                //console.log("filteredData", filteredData);

                setData(filteredData);
                localStorage.setItem("count", JSON.stringify(res.data));
            })
            .catch((err) => {
            })
    }
    useEffect(() => {
        getallusers();

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


    const columns = [
        { field: "id", headerName: "S.N.", minWidth: 50, flex: 1, pinned: "left" },
        { field: "receipt_number", headerName: "LR No.", minWidth: 150, flex: 1 },
        { field: "deletedAt", headerName: "Deleted At", minWidth: 200, flex: 1 },
        { field: "deleted_By", headerName: "Deleted By", minWidth: 200, flex: 1 },
        { field: "checkedValues", headerName: "Delivery Type", minWidth: 150, flex: 1 },
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




    ];

    const rows = data?.map((item, index) => {

        //console.log(item);


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
            doc: item,
            deletedAt: getIndianTimestamp(item.deletedAt) || "NA",
            deleted_By: item.deleted_By
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
                    <MdArrowBack /> Recycle Bin
                </Typography.Title>
            </div>
            <div >

                <div >
                    <DataTable rows={rows} columns={columns} />
                </div>

            </div>



        </>
    );

}
export default Recycle;

