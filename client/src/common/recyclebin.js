
import { Typography, Tabs } from "antd";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { getIndianTimestamp } from "../commonfunction/formatDate";
import { DataTable } from "../commonfunction/Datatable";
import { MdArrowBack } from "react-icons/md";

const BASEURL = "/api"

const Recycle = () => {
    const params = useParams()

    const [data, setData] = useState([])
    // console.log(data);
    const navigate = useNavigate();
    const [value, setValue] = useState([])
    const [product, setProduct] = useState([])
    const [consignee, setConsignee] = useState([])
    // // console.log(consignee);

    const [warehouse, setWareHouse] = useState([])
    // console.log(warehouse);

    const [transport, setTransport] = useState([])
    const [consignor, setConsignor] = useState([])

    const id = params?.groupId

    const getallusers = async () => {
        const get = axios.get(`${BASEURL}/getallusers/${params.groupId}`)
            .then((res) => {
                const filteredData = res.data.data.filter(user => user.deleted);
                setData(filteredData);
                localStorage.setItem("count", JSON.stringify(res.data));
            })
            .catch((err) => {
            })
    }

    const fetchProducts = async () => {
        try {
            const response = await axios.get(`${BASEURL}/products/${params.groupId}`);
            // console.log("response", response);

            const activeProducts = response?.data?.products?.filter(product => product.active === false);
            // console.log("product", activeProducts);

            setProduct(activeProducts);
        } catch (error) {
            //// console.error("Error fetching products:", error);
        }
    };
    const fetchConsignees = async () => {
        try {
            const response = await axios.get(`${BASEURL}/consignee/${params.groupId}`);
            // console.log(response);
            const activeProducts = response?.data?.products?.filter(product => product.active === false);
            // console.log("consignee", activeProducts);

            setConsignee(activeProducts);
        } catch (error) {
            // // // console.error("Error fetching products:", error);
        }
    };

    const fetchWarehouses = async () => {
        try {
            const response = await axios.get(`${BASEURL}/getwarehouse/${params.groupId}`);
            const activeProducts = response?.data?.products?.filter(product => product.active === false);

            setWareHouse(activeProducts);
        } catch (error) {
            // // // console.error("Error fetching products:", error);
        }
    };
    const fetchtransports = async () => {
        try {
            const response = await axios.get(`${BASEURL}/gettransportdetails/${params.groupId}`);
            // console.log(response);
            const activeProducts = response?.data?.transportdetails?.filter(product => product.active === false);

            setTransport(activeProducts);
        } catch (error) {
            // // // console.error("Error fetching products:", error);
        }
    };
    const fetchConsignors = async () => {
        try {
            const response = await axios.get(`${BASEURL}/consignor/${params.groupId}`);
            const activeProducts = response?.data?.products?.filter(product => product.active === false);

            setConsignor(activeProducts);
        } catch (error) {
            // // console.error("Error fetching products:", error);
        }
    };

    useEffect(() => {
        if (id) {
            getallusers();
            fetchProducts();
            fetchConsignees();
            fetchWarehouses();
            fetchtransports();
            fetchConsignors();
        }
    }, [id]);


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

    const productColumns = [
        { field: "id", headerName: "Sr. No.", minWidth: 30, flex: 0.5 },
        { field: "manufacturer", headerName: "Manufacturer Name", minWidth: 50, flex: 0.8 },
        { field: "name", headerName: "Product Name", minWidth: 60, flex: 1 },
        { field: "code", headerName: "Product Code", minWidth: 80, flex: 1 },
        { field: "uom", headerName: "Unit of Measurement", minWidth: 60, flex: 0.5 },
        { field: "rate", headerName: "Weight (kg)", minWidth: 40, flex: 0.5 },
        { field: "createdAt", headerName: "created Date", minWidth: 40, flex: 0.7 },
    ];

    const transportColumns = [
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
        },];

    const consignorColumns = [
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
       ];


    const consigneeColumns = [
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
    ];

    const lrColumns = [
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

    const warehouseColumns = [
        { field: "id", headerName: "Sr. No.", minWidth: 30, flex: 0.5 },
        { field: "name", headerName: "Name of Warehouse", minWidth: 150, flex: 1 },
        { field: "place", headerName: "Place", minWidth: 60, flex: 0.5 },
        { field: "capacity", headerName: "Capacity", minWidth: 60, flex: 0.5 },
        { field: "manager", headerName: "Name of Manager ", minWidth: 80, flex: 1 },
        { field: "mobileNo", headerName: "Mobile No.", minWidth: 40, flex: 1 },
        { field: "createdAt", headerName: "Created At", minWidth: 40, flex: 1 },
    ];


    const rows = data?.map((item, index) => {
        // console.log(item);

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
    const findstatus = (status) => {
        return status ? 'ACTIVE' : "INACTIVE"
    }

    const rowProducts = product?.map((item, index) => {
        // console.log(item);
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


    const rowsConsignees = consignee?.map((item, index) => {
        // console.log(item);

        return {
            id: index + 1,
            name: item.name || "NA",
            place: item.place || "NA",
            district: item.district || "NA",
            mobileNo: item.mobileNo || "NA",
            createdDate: getIndianTimestamp(item.createdAt) || "NA",
            _id: item,
            active: findstatus(item.active) || "NA"
        };
    }) || [];

    const rowsWarehouse = warehouse?.map((item, index) => {
        return {
            id: index + 1,
            name: item.name || "NA",
            place: item.place || "NA",
            capacity: item.capacity || "NA",
            manager: item.manager || "NA",
            mobileNo: item.mobileNo || "NA",
            _id: item, // ✅ Include _id for delete action
            createdAt: getIndianTimestamp(item.createdAt) || "NA",
            active: findstatus(item.active) || "NA"

        };
    }) || [];

    const rowsTransport = transport?.map((item, index) => {
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

    const rowsConsignor = consignor?.map((item, index) => {
            //console.log(item);
    
            return {
                id: index + 1,
                name: item.name || "NA",
                place: item.place || "NA",
                district: item.district || "NA",
                mobileNo: item.mobileNo || "NA",
                createdDate: getIndianTimestamp(item.createdAt) || "NA",
                _id: item, // ✅ Include _id for delete action
                active: findstatus(item.active) || "NA"
    
            };
        }) || [];

    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px", marginTop: "5px" }}>
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

            <Tabs
                defaultActiveKey="1"
                style={{
                    fontSize: "20px", // Increase font size for tabs
                    padding: "10px", // Add padding around the tabs
                }}
                tabBarStyle={{
                    fontSize: "20px", // Increase font size for tab headers
                }}
            >
                <Tabs.TabPane
                    tab="Lorry Receipts"
                    key="1"
                    style={{
                        padding: "20px", // Add padding inside the TabPane
                        minHeight: "400px", // Set a minimum height for the TabPane
                    }}
                >
                    <DataTable rows={rows} columns={lrColumns} />
                </Tabs.TabPane>
                <Tabs.TabPane
                    tab="Product Master"
                    key="2"
                    style={{
                        padding: "20px",
                        minHeight: "400px",
                    }}
                >
                    <DataTable rows={rowProducts} columns={productColumns} />
                </Tabs.TabPane>
                <Tabs.TabPane
                    tab="Consignee Master"
                    key="3"
                    style={{
                        padding: "20px",
                        minHeight: "400px",
                    }}
                >
                    <DataTable rows={rowsConsignees} columns={consigneeColumns} />
                </Tabs.TabPane>
                <Tabs.TabPane
                    tab="Warehouse Master"
                    key="4"
                    style={{
                        padding: "20px",
                        minHeight: "400px",
                    }}
                >
                    <DataTable rows={rowsWarehouse} columns={warehouseColumns} />
                </Tabs.TabPane>
                <Tabs.TabPane
                    tab="Transport Master"
                    key="5"
                    style={{
                        padding: "20px",
                        minHeight: "400px",
                    }}
                >
                    <DataTable rows={rowsTransport} columns={transportColumns} />
                </Tabs.TabPane>
                
           
               
                <Tabs.TabPane
                    tab="Consignor Master"
                    key="6"
                    style={{
                        padding: "20px",
                        minHeight: "400px",
                    }}
                >
                    <DataTable rows={rowsConsignor} columns={consignorColumns} />
                </Tabs.TabPane>
            </Tabs>

        </>
    );

}
export default Recycle;

