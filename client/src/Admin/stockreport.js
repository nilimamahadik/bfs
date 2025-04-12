


import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { formatDate, getIndianTimestamp } from "../commonfunction/formatDate";
import { DataTable } from "../commonfunction/Datatable";
import { Button, Col, DatePicker, Row, Tooltip, Modal } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import { IoIosArrowDroprightCircle } from "react-icons/io";
const BASEURL = "/api"



const StockReport = () => {
  const params = useParams()
  const [products, setProducts] = useState([]);
  // //console.log(products);
  const [stocks, setStocks] = useState([]);
  //console.log(stocks);
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProductHistory, setSelectedProductHistory] = useState([]);
  //console.log(selectedProductHistory);
  const [selectedProductName, setSelectedProductName] = useState("");

  const [selectedStockOutHistory, setSelectedStockOutHistory] = useState([]);


  //console.log(selectedStockOutHistory);
  // //console.log(stocks);

  const fetchProducts = async () => {
    if (params?.groupId) {

      try {
        const queryParams = new URLSearchParams();
        if (fromDate) queryParams.append("fromDate", fromDate.format("YYYY-MM-DD"));
        if (toDate) queryParams.append("toDate", toDate.format("YYYY-MM-DD"));

        const response = await axios.get(
          `${BASEURL}/getallstock/${params?.groupId}?${queryParams.toString()}`
        );

        // //console.log(response);

        setProducts(response?.data?.products);
        setStocks(response?.data?.stockSummary);
      } catch (error) {
        //console.error("Error fetching products:", error);
      }
    }
  }

  const handleShowProductHistory = (history, productName, stockOutHistory) => {
    setSelectedProductHistory(history || []);
    setSelectedStockOutHistory(stockOutHistory || []);
    setSelectedProductName(productName || "Product Details");
    setModalVisible(true);
  };



  useEffect(() => {
    fetchProducts();
  }, [params]);


  const columns = [
    { field: "id", headerName: "Sr. No.", minWidth: 40, flex: 0.5 },
    { field: "manufacturer", headerName: "Manufacturer", minWidth: 180, flex: 1 },
    { field: "_id", headerName: "Product ", minWidth: 180, flex: 1.5 },
    { field: "vendor_name", headerName: "Stock Inward", minWidth: 200, flex: 1 },
    { field: "address", headerName: "Stock Outward", minWidth: 200, flex: 1 },
    { field: "available_stock", headerName: "Available Stock", minWidth: 200, flex: 1 },
    {
      field: "date",
      headerName: "Created Date",
      minWidth: 40,
      flex: 1,
      renderCell: (params) => (
        <div
          style={{
            padding: "8px", // ✅ Apply padding here
            fontSize: "14px",
            color: "black",
          }}
        >
          {params.value || "NA"}
        </div>
      ),
    },

    {
      field: "productinfo",
      headerName: "",
      minWidth: 50,
      flex: 0.5,
      renderCell: (params) => (
        <Tooltip
          title="View Product "
          color="white"
          overlayInnerStyle={{
            color: "black", // ✅ Set text color to black
            fontSize: "14px",
            padding: "5px 10px",
          }}
        >
          <IoIosArrowDroprightCircle
            size={22}
            style={{ color: "#AA2B1D" }}
            onClick={() => handleShowProductHistory(params.row.productHistory, params.row._id, params.row.stockOutHistory)}
          />
        </Tooltip>
      ),
    },

  ];
  const rows = stocks?.map((item, index) => {
    //console.log(item);

    const manufacturerNames =
      Array.isArray(item?.manufacturer) && item?.manufacturer.length > 0
        ? item.manufacturer[0]?.manufacturer || "NA" // Display only the first manufacturer
        : "NA";

    // Filter product history based on the product name
    const productHistory =
      Array.isArray(products) && products.length > 0
        ? products
          .filter((p) => p.name === item.name)
          .sort((a, b) => new Date(b.date) - new Date(a.date)) // Sort history by date
        : [];



    const stockOutHistory =
      Array.isArray(stocks) && stocks.length > 0
        ? stocks
          .filter((p) => p.name === item.name)
          .flatMap((p) =>
            Array.isArray(p.stockout) && p.stockout.length > 0
              ? Object.values(
                p.stockout.reduce((acc, s) => {
                  const date = getIndianTimestamp(s.createdAt); // Format createdAt to date

                  if (!acc[date]) {
                    acc[date] = {
                      date: date,
                      stockOutCount: 1, // Initialize count for first occurrence
                      name: p.name,
                      availableStock: p.availableStock || "0",
                    };
                  } else {
                    acc[date].stockOutCount += 1; // Increment count if date already exists
                  }

                  return acc;
                }, {})
              )
              : [
                {
                  date: "NA",
                  stockOutCount: "0",
                  name: p.name,
                  availableStock: p.availableStock || "0",
                },
              ]
          )
        : [];


    return {
      id: index + 1,
      manufacturer: manufacturerNames,
      date: getIndianTimestamp(item?.date) || "NA",
      _id: item?.name || "NA",
      vendor_name: item?.quantity || "0",
      address: item.stockoutCount || "0",
      available_stock: item?.availableStock || "0",
      productHistory: productHistory,
      stockOutHistory: stockOutHistory,
    };
  }) || [];



  return (
    <div style={{ padding: "10px", fontWeight: "400" }}>
      {/* Date Filter Inputs using Ant Design */}
      <div style={{ alignContent: "center", justifyContent: "center", display: "flex" }}>
        <Row gutter={30} >
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
              onClick={fetchProducts}
              style={{ marginTop: "21px", padding: "5px 20px", backgroundColor: "rgb(170, 43, 29)" }}
            >
              Filter
            </Button>
          </Col>
        </Row>
      </div>
      {/* Data Table */}
      <div style={{ marginTop: "5px" }}>
        <DataTable rows={rows} columns={columns} />
      </div>
      <Modal
        open={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={null}
        centered // ✅ Centered Modal
        width={700} // ✅ Reduced overall modal width
        style={{ top: 30 }}
      >
        {/* Title Section */}
        <div
          style={{
            textAlign: "center",
            fontSize: "20px",
            fontWeight: "500",
            color: "rgb(170, 43, 29)",
          }}
        >
          {selectedProductName || "Product Details"}
        </div>

        <hr style={{ marginBottom: "10px", borderTop: "2px solid #ccc" }} />

        {/* Table Wrapper */}
        <div
          style={{
            display: "flex",
            justifyContent: "center", // ✅ Center tables
            gap: "15px", // Space between tables
            maxHeight: "400px",
            overflowY: "auto",
          }}
        >
          {/* Stock Inward Table */}
          <div style={{ width: "45%" }}> {/* ✅ Reduced table width */}
            <div
              style={{
                textAlign: "center",
                fontSize: "16px",
                fontWeight: "500",
                marginBottom: "5px",
                color: "#333",
              }}
            >
              Stock Inward
            </div>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
              }}
            >
              <thead>
                <tr
                  style={{
                    backgroundColor: "#f7faf9",
                    textAlign: "left",
                    borderBottom: "2px solid #ccc",
                  }}
                >
                  <th
                    style={{
                      padding: "4px",
                      borderBottom: "1px solid #ddd",
                    }}
                  >
                    Date
                  </th>
                  <th
                    style={{
                      padding: "4px",
                      borderBottom: "1px solid #ddd",
                    }}
                  >
                    Stock Inward
                  </th>
                </tr>
              </thead>
              <tbody>
                {selectedProductHistory.map((history, index) => (
                  <tr
                    key={index}
                    style={{
                      backgroundColor: index % 2 === 0 ? "#fff" : "#f9f9f9",
                    }}
                  >
                    <td
                      style={{
                        padding: "4px",
                        borderBottom: "1px solid #ddd",
                        fontSize: "14px",
                      }}
                    >
                      {getIndianTimestamp(history?.date)}
                    </td>
                    <td
                      style={{
                        padding: "4px",
                        borderBottom: "1px solid #ddd",
                        fontSize: "14px",
                      }}
                    >
                      {history?.quantity || "0"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Stock Outward Table */}
          <div style={{ width: "45%" }}> {/* ✅ Reduced table width */}
            <div
              style={{
                textAlign: "center",
                fontSize: "16px",
                fontWeight: "500",
                marginBottom: "5px",
                color: "#333",
              }}
            >
              Stock Outward
            </div>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
              }}
            >
              <thead>
                <tr
                  style={{
                    backgroundColor: "#f7faf9",
                    textAlign: "left",
                    borderBottom: "2px solid #ccc",
                  }}
                >
                  <th
                    style={{
                      padding: "4px",
                      borderBottom: "1px solid #ddd",
                    }}
                  >
                    Date
                  </th>
                  <th
                    style={{
                      padding: "4px",
                      borderBottom: "1px solid #ddd",
                    }}
                  >
                    Stock Outward
                  </th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(selectedStockOutHistory) && selectedStockOutHistory.length > 0 ? (
                  selectedStockOutHistory.map((history, index) => (
                    <tr
                      key={index}
                      style={{
                        backgroundColor: index % 2 === 0 ? "#fff" : "#f9f9f9",
                      }}
                    >
                      <td
                        style={{
                          padding: "4px",
                          borderBottom: "1px solid #ddd",
                          fontSize: "14px",
                        }}
                      >
                        {history?.date}
                      </td>
                      <td
                        style={{
                          padding: "4px",
                          borderBottom: "1px solid #ddd",
                          fontSize: "14px",
                        }}
                      >
                        {`${history?.stockOutCount}`}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="2" style={{ textAlign: "center", padding: "4px" }}>
                      No stockout data available.
                    </td>
                  </tr>
                )}

              </tbody>
            </table>



          </div>

        </div>
        {Array.isArray(selectedStockOutHistory) && selectedStockOutHistory.length > 0 ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "2px solid #ccc", // ✅ Outer border
              padding: "5px",
              borderRadius: "8px",
              backgroundColor: "#f9f9f9",
              marginBottom: "15px",
              maxWidth: "200px",
              margin: "0 auto", // ✅ Centered horizontally
              marginTop: "10px"
            }}
          >
            <h6
              style={{
                margin: "0",
                fontSize: "16px",
                fontWeight: "500",
                color: "rgb(170, 43, 29)",
                textAlign: "center",
              }}
            >
              <span style={{ color: "black" }}>Available Stock:</span>{" "}
              {selectedStockOutHistory[0]?.availableStock || "NA"}
            </h6>
          </div>
        ) : (
          <p style={{ textAlign: "center", color: "#555" }}>NA</p>
        )}

      </Modal>


    </div>
  );

};

export default StockReport;


