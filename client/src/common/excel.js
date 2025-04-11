import React, { useState, useEffect } from "react";
import { CSVLink } from 'react-csv';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from "react-router-dom";
import { LuEye } from "react-icons/lu";
import { formatDate, getIndianTimestamp } from "../commonfunction/formatDate";
import { Button, Col, DatePicker, Dropdown, Menu, Row, Table } from "antd";
// import Button from '@mui/material/Button'
import { Box, CardContent, Grid, IconButton, Toolbar } from "@mui/material";
import { DataTable } from "../commonfunction/Datatable";
import { PropaneRounded } from "@mui/icons-material";
import ExportCSV from "./ecportcsv";

//for developement
// const BASEURL = "http://localhost:5000/api"

//for production

const BASEURL = "/api"



const Sheet = () => {
  const params = useParams()
  //console.log(params);
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  const [data, setData] = useState([])
  console.log("data", data);

  const [products, setProducts] = useState([]);
  console.log(products);

  const fetchProducts = async () => {
    if (params?.id) {

      try {
        const response = await axios.get(`${BASEURL}/products/${params?.id}`);
        const activeProducts = response?.data?.products?.filter(product => product.active === true);

        setProducts(activeProducts);
      } catch (error) {
        ////console.error("Error fetching products:", error);
      }
    }

  }
  useEffect(() => {
    fetchProducts();
  }, [params]);

  const getallusers = async () => {
    try {
      // Build query params with dates if available
      const queryParams = new URLSearchParams();
      if (fromDate) queryParams.append("fromDate", fromDate.format("YYYY-MM-DD"));
      if (toDate) queryParams.append("toDate", toDate.format("YYYY-MM-DD"));

      const response = await axios.get(
        `${BASEURL}/getallusers/${params.id}?${queryParams.toString()}`
      );

      // setData(response.data.data);
      const filteredData = response.data.data.filter(user => !user.deleted);

      setData(filteredData);
      localStorage.setItem("count", JSON.stringify(response.data));
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  };

  useEffect(() => {
    getallusers();
  }, [params]);


  const finduom = (value) => {
    return products && products?.length > 0 && products?.find(item => item.name === value)?.uom
  }

  const columns = [
    { field: "id", headerName: "S.N.", minWidth: 50, flex: 1 },
    { field: "Date", headerName: "Date", minWidth: 100, flex: 0.5 },
    { field: "receipt_number", headerName: "LR No.", minWidth: 100, flex: 1 },
    { field: "vendor_name", headerName: "Name of Consignor", minWidth: 200, flex: 2 },
    { field: "address", headerName: "Address", minWidth: 150, flex: 2 },
    { field: "supplier_name", headerName: "Consignee Name", minWidth: 200, flex: 2 },
    { field: "ship_to_address1", headerName: "Place", minWidth: 150, flex: 1 },
    { field: "ship_to_district", headerName: "District", minWidth: 120, flex: 1 },
    { field: "mobileNo", headerName: "Mobile No.", minWidth: 150, flex: 1 },

    { field: "from", headerName: "From", minWidth: 200, flex: 2 },

    { field: "transport_driver_name", headerName: "Driver Name", minWidth: 150, flex: 1 },
    { field: "transport_number", headerName: "Transport Number", minWidth: 150, flex: 1 },
    { field: "transport_mode", headerName: "Transport Mode", minWidth: 150, flex: 1 },
    {
      field: "products",
      headerName: "Product Name",
      minWidth: 250, flex: 1,
      renderCell: (params) => {
        // //console.log("params", params); 
        return (
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
        );
      },
    },
    {
      field: "Code", headerName: "Code", minWidth: 250, flex: 1,
      renderCell: (params) => {
        //console.log("params", params);

        return (
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
        );
      },
    },
    {
      field: "UOM", headerName: "UOM", width: 100,
      renderCell: (params) => {
        //console.log("params", params);

        return (
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
                {finduom(product.product_name) || "NA"}

              </div>
            ))}

          </div>
        );
      },
    },
    {
      field: "articles", headerName: "No. of Bags", width: 100,
      renderCell: (params) => {
        //console.log("params", params);

        return (
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

                {product.weight}
              </div>
            ))}
          </div>
        );
      },
    },
    {
      field: "rate", headerName: "Rate", width: 100,
      renderCell: (params) => {
        //console.log("params", params);

        return (
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
                {product.rate}
              </div>
            ))}
          </div>
        );
      },
    },
    {
      field: "mt", headerName: "MT", width: 60,
      renderCell: (params) => {
        //console.log("params", params);

        return (
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
                {product.mt}
              </div>
            ))}
          </div>
        );
      },
    },
    {
      field: "total", headerName: "Total Freight", width: 200,
      renderCell: (params) => {

        return (
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
        );
      },
    },
    { field: "checkedValues", headerName: "Delivery Type", minWidth: 150, flex: 1 },


    { field: "total_balanceamount", headerName: "Total Balance Amount", minWidth: 200, flex: 1 },
    { field: "sc", headerName: "Advance Cash (Rs.)", minWidth: 180, flex: 1.5 },
    { field: "hamali", headerName: "Diesel (Rs.)", minWidth: 150, flex: 1 },
    { field: "topayamt", headerName: "To Pay ", minWidth: 150, flex: 1 },
    { field: "total_amount", headerName: "Total Amount", minWidth: 150, flex: 1 },
    { field: "topayrate", headerName: "Rate", minWidth: 150, flex: 1 },



  ];

  const rows = data?.map((item, index) => {
    //console.log("item", item);

    return {
      id: index + 1,
      Date: formatDate(item.createdAt) || "NA",
      receipt_number: item.receipt_number || "NA",
      supplier_name: item.supplier_name || "NA",
      vendor_name: item.vendor_name || "NA",
      address: item.address || "NA",
      ship_to_address1: item.ship_to_address1 || "NA",
      ship_to_district: item.ship_to_district || "NA",
      transport_driver_name: item.transport_driver_name || "NA",
      transport_number: item.transport_number || "NA",
      transport_mode: item.transport_mode || "NA",
      productDetails: item.productDetails || [],
      checkedValues: item.checkedValues || "NA",
      from: item.from || "NA",
      total_freight: item.total_freight || "0",
      total_balanceamount: item.total_balanceamount || "0",
      hamali: item.hamali || "0",
      mobileNo: item.mobileNo || "NA",
      topayamt: item.topayamt || "0",
      total_amount: item.total_amount || "0",
      topayrate: item.topayrate || "0",
      sc: item?.sc || "0"

    };
  }) || [];


  return (
    <div style={{ padding: "10px", fontWeight: "400" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "5px" }}>
        <div style={{ marginRight: "30px" }}>
          <Row gutter={30} style={{ marginBottom: "15px" }}>
            <Col span={8}>
              <label style={{ marginRight: "10px" }}>From Date:</label>
              <DatePicker
                value={fromDate}
                onChange={(date) => setFromDate(date)}
                format="YYYY-MM-DD"
                style={{ width: "100%" }}
              />
            </Col>
            <Col span={8}>
              <label style={{ marginRight: "10px" }}>To Date:</label>
              <DatePicker
                value={toDate}
                onChange={(date) => setToDate(date)}
                format="YYYY-MM-DD"
                style={{ width: "100%" }}
              />
            </Col>
            <Col span={6}>
              <Button
                type="primary"
                onClick={getallusers}
                style={{ marginTop: "23px", padding: "5px 20px", backgroundColor: "rgb(170, 43, 29)" }}
              >
                Filter
              </Button>
            </Col>
          </Row>
        </div>
        <ExportCSV data={rows} products={products} />

      </div>
      {/* <ExportCSV data={rows} products={products} />
      <div style={{ alignContent: "center", justifyContent: "center", display: "flex" }}>
        <Row gutter={30} style={{ marginBottom: "15px" }}>
          <Col span={8}>
            <label style={{ marginRight: "10px" }}>From Date:</label>
            <DatePicker
              value={fromDate}
              onChange={(date) => setFromDate(date)}
              format="YYYY-MM-DD"
              style={{ width: "100%" }}
            />
          </Col>
          <Col span={8}>
            <label style={{ marginRight: "10px" }}>To Date:</label>
            <DatePicker
              value={toDate}
              onChange={(date) => setToDate(date)}
              format="YYYY-MM-DD"
              style={{ width: "100%" }}
            />
          </Col>
          <Col span={6}>
            <Button
              type="primary"
              onClick={getallusers}
              style={{ marginTop: "23px", padding: "5px 20px", backgroundColor: "rgb(170, 43, 29)" }}
            >
              Filter
            </Button>
          </Col>
        </Row>
      </div> */}
      <div style={{ marginTop: "3px" }}>
        <DataTable rows={rows} columns={columns} />
      </div>
    </div>
  );
};

export default Sheet;
