


import React, { useRef, useImperativeHandle, forwardRef, useState, useEffect } from "react";
import { toPng } from "html-to-image";
import { jsPDF } from "jspdf";
import { useNavigate, useParams } from 'react-router-dom';
// import { CommanTitle } from "../../Partner/Comman";
import { useReactToPrint } from 'react-to-print';
import numberToWords from "number-to-words";
import axios from 'axios';
import TranslateButton from './translationButton';

import { formatDate, formatIndianCurrency } from '../commonfunction/formatDate';
import {
  Box,
  Typography,
  Divider,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  FormControlLabel,
  Checkbox,
  Card,
  CardContent,
  Modal,
  Fade,
  Backdrop,
} from "@mui/material";

const BASEURL = "/api"
const Poster = forwardRef((props, ref) => {
  const receiptRef = useRef();
  const param = useParams()
  //console.log(param);
  const componentsPDF = useRef();
  const [data, setData] = useState({});
  //console.log(data);
  const [open, setOpen] = useState(false); // Modal state
  const [products, setProducts] = useState([]);
  //console.log(products);
  const [value, setValue] = useState({});
  //console.log(value);
  const [columns, setColumns] = useState({
    description: true,
    articles: true,
    weight: true,
    rate: true,
    totalFreight: true,
    mt: true,

  });
  const navigate = useNavigate();
  const componentRef = React.useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  useEffect(() => {
    const googleTranslateScript = document.createElement("script");
    googleTranslateScript.type = "text/javascript";
    googleTranslateScript.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(googleTranslateScript);
  }, []);

  const params = value
  //console.log(params?.id);


  const fetchProducts = async () => {
    if (params?.id) {

      try {
        const response = await axios.get(`${BASEURL}/products/${params?.id}`);
        //console.log(response);
        const activeProducts = response?.data?.products?.filter(product => product.active === true);
        setProducts(activeProducts);
      } catch (error) {
        //////console.error("Error fetching products:", error);
      }
    }

  }
  useEffect(() => {
    fetchProducts();
  }, [params]);

  useEffect(() => {
    const getsingleusers = async () => {
      const get = axios.get(`${BASEURL}/getsingleusers/${param.id}`)
        .then((res) => {

          // ////console.log(res);
          setData(res.data.data);
        })
        .catch((err) => {
          ////console.log(err);
        })
    }
    getsingleusers();
  }, [])

  useEffect(() => {
    const savedUser = localStorage.getItem("link");
    //console.log(savedUser);

    if (savedUser) {
      const parsedUser = JSON.parse(savedUser);
      //console.log(parsedUser);

      setValue(parsedUser);
    }
    const savedInfo = localStorage.getItem("info");
    if (savedInfo) {
      const parsedInfo = JSON.parse(savedInfo);
      setValue(parsedInfo);
    }
  }, []);


  const totalInWords = data.total
    ? numberToWords.toWords(data.total).replace(/\b\w/g, (c) => c.toUpperCase()) + " Rupees Only"
    : "Zero Rupees Only";



  const findrate = (value) => {
    return products && products?.length > 0 && products?.find(item => item.name === value)?.rate
  }



  const handleDownload = async () => {
    if (receiptRef.current) {
      try {
        // Generate a high-resolution image
        const dataUrl = await toPng(receiptRef.current, { cacheBust: true, pixelRatio: 2 });

        const pdf = new jsPDF("l", "mm", "a4"); // 'l' for landscape
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();

        const img = new Image();
        img.src = dataUrl;

        img.onload = () => {
          const aspectRatio = img.height / img.width;
          let imgWidth = (pdfWidth / 2) - 10; // Half of the width minus margin for both copies
          let imgHeight = imgWidth * aspectRatio;

          if (imgHeight > pdfHeight - 20) {
            const scaleFactor = (pdfHeight - 20) / imgHeight;
            imgWidth *= scaleFactor;
            imgHeight = pdfHeight - 20;
          }

          // Left side (first copy)
          pdf.addImage(dataUrl, "PNG", 5, 10, imgWidth, imgHeight);

          // Draw a dashed line between the two copies
          pdf.setLineDash([3, 3]); // Dotted line
          pdf.line(pdfWidth / 2, 0, pdfWidth / 2, pdfHeight);

          // Right side (second copy)
          pdf.addImage(dataUrl, "PNG", (pdfWidth / 2) + 5, 10, imgWidth, imgHeight);

          pdf.save("Receipt.pdf");
        };
      } catch (error) {
        //console.error("Error generating PDF:", error);
      }
    } else {
      //console.error("receiptRef is not set");
    }
  };

  // Expose the handleDownload function to parent component
  useImperativeHandle(ref, () => ({
    downloadReceipt: handleDownload,
  }));

  return (
    <div ref={componentRef}>
      <div
        style={{
          width: "650px",
          marginTop: "70px",
          margin: "5px auto",
          fontFamily: "'Times New Roman', Times, serif",
          backgroundColor: "white",
          padding: "15px",
          borderRadius: "5px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div style={{ textAlign: "center" }}>

          <div variant="h6" align="center" fontWeight="bold" style={{
            marginTop: "0", marginBottom: "0",
            lineHeight: "1.1",
            whiteSpace: "nowrap",
            letterSpacing: "-1.5px",
            color: "#d84922",
            fontSize: "33px",
            fontWeight: "bold", color: "#AA2B1D", fontWeight: "bold"
          }}>
            {value.id?.toUpperCase()}
          </div>
          <p className="subtitle-clg" style={{
            marginTop: "1", marginBottom: "0", fontSize: "22px", color: "#0a476d", fontWeight: "bold",
            lineHeight: "1.0",
            whiteSpace: "nowrap",
            letterSpacing: "-1.1px",


          }}>
            Handling & Transportation Contractors


          </p>
          <div style={{ marginTop: "0", marginBottom: "0" }}>
            {value.address}
          </div>
          <div style={{ marginTop: "0", marginBottom: "0" }}>
            Received goods as per details below for carriage Subject to condition overleaf
          </div>
        </div>

        <div style={{ width: "100%", marginTop: "10px", border: "1px solid black", padding: "5px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
            {/* Left Column */}
            <div>
              <div style={{ marginBottom: "3px" }}>
                <strong>Receipt No:</strong> <span style={{ fontWeight: "normal", fontSize: "15px" }}> {data?.receipt_number || "NA"} </span>
              </div>
              <div style={{ marginBottom: "3px" }}>
                <strong>From:</strong> <span style={{ fontWeight: "normal", fontSize: "15px" }}> {data.from || "NA"} </span>
              </div>
              <div style={{ marginBottom: "3px" }}>
                <strong>Driver Name:</strong> <span style={{ fontWeight: "normal", fontSize: "15px" }}>  {data?.transport_driver_name || "NA"} </span>
              </div>


              <div>
                <strong>Consignor :</strong> <span style={{ fontWeight: "normal", fontSize: "15px" }}>  {data?.vendor_name || "NA"} </span>
              </div>
              <div>
                <strong>Address :</strong> <span style={{ fontWeight: "normal", fontSize: "15px" }}>{data?.address || "NA"} </span>
              </div>

            </div>

            <div>
              <div style={{ marginBottom: "3px", fontSize: "16px" }}>
                <strong>Date:</strong> {formatDate(data?.createdAt || "NA")}
              </div>
              <div >
                <strong>Truck No:</strong> <span style={{ fontWeight: "normal", fontSize: "15px" }}>{data?.transport_number || "NA"} </span>
              </div>
              <div>
                <strong> </strong>
              </div>
              <div>
                <strong>Consignee :</strong> <span style={{ fontWeight: "normal", fontSize: "15px" }}>{data?.supplier_name || "NA"} </span>
              </div>


              <div>
                <strong>Place :</strong> <span style={{ fontWeight: "normal", fontSize: "15px" }}> {data?.ship_to_address1 || "NA"}  </span>
              </div>
              <div>
                <strong>District :</strong> <span style={{ fontWeight: "normal", fontSize: "15px" }}>{data?.ship_to_district || "NA"} </span>
              </div>
              <div>
                <strong>Mobile No :</strong> <span style={{ fontWeight: "normal", fontSize: "15px" }}>{data?.mobileNo || "NA"} </span>
              </div>
            </div>
          </div>
        </div>


        <div style={{ width: "100%" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "5px", textAlign: "center", border: "1px solid black", fontSize: "14px", }}>
            <thead style={{ backgroundColor: "#F5F5F5" }}>
              <tr>
                {columns.description && (
                  <th style={{ padding: "4px", border: "1px solid black", fontWeight: "bold", color: "black" }}>
                    Description
                  </th>
                )}
                {columns.articles && (
                  <th style={{ border: "1px solid black", fontWeight: "bold", color: "black" }}>
                    Bag / Weight (kg)

                  </th>
                )}
                {columns.weight && (
                  <th style={{ border: "1px solid black", fontWeight: "bold", color: "black" }}>
                    No. of Bags
                  </th>
                )}
                {columns.mt && (
                  <th style={{ border: "1px solid black", fontWeight: "bold", color: "black" }}>
                    Metric Ton (MT)
                  </th>
                )}
              </tr>
            </thead>
            <tbody>
              {data?.productDetails?.map((product, index) => (
                <tr key={index}>
                  {columns.description && (
                    <td style={{ padding: "4px", border: "1px solid black" }}>
                      {product.product_name || "NA"}
                    </td>
                  )}
                  {columns.articles && (
                    <td style={{ padding: "4px", border: "1px solid black" }}>
                      {findrate(product.product_name) || "NA"}
                    </td>
                  )}
                  {columns.weight && (
                    <td style={{ padding: "4px", border: "1px solid black" }}>
                      {product.weight || "NA"}
                    </td>
                  )}
                  {columns.mt && (

                    <td style={{ padding: "4px", border: "1px solid black" }}>
                      {product?.mt || "NA"}
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{ marginTop: "2px" }}>
          <div><strong>Advance Cash:</strong> ₹ {formatIndianCurrency(data.sc) || "NA"}</div>
          <div><strong>Diesel:</strong> ₹ {formatIndianCurrency(data.hamali) || "NA"} </div>
          <div>
            <strong>Total Freight Payable:</strong> ₹{" "}
            {data?.topayamt
              ? numberToWords.toWords(data.topayamt).replace(/\b\w/g, (c) => c.toUpperCase()) + " Rupees Only"
              : "Zero Rupees Only"}
          </div>

          <Divider
            sx={{
              mb: 1,
              mt: 1,
              borderColor: "#444", // Darker divider color
              borderWidth: "1.5px", // Slightly thicker divider
            }}
          />
        </div>




        <div> <strong>Terms and Conditions </strong> </div>
        <div variant="body2" component="ul" align="left" style={{ listStylePosition: "inside", paddingLeft: 0 }}>
          <li>
            LR once acknowledged confirms that consignee has received the goods in good condition and has no further claims.
          </li>
          <li>
            Subject to {value?.district || "NA"} Jurisdiction only.
          </li>
        </div>
        <Divider
          sx={{
            mb: 1,
            mt: 1,
            borderColor: "#444", // Darker divider color
            borderWidth: "1.5px", // Slightly thicker divider
          }}
        />
        <div style={{ marginTop: '60px', fontWeight: 'bold', textAlign: "center", fontSize: "15px", display: "flex", justifyContent: "space-between" }}>
          <div><strong>Driver Signature</strong> </div>
          <div><strong>Receiver Signature</strong> </div>
          <div><strong>For: {value.id}</strong></div>
        </div>
      </div>
      <div className='no-print'>
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 3 }}>
          {/* Left Side: Buttons */}
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button variant="contained" color="primary" onClick={() => navigate(-1)}>
              Back
            </Button>
            <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
              Select Print Options
            </Button>
            <Button variant="contained" color="primary" onClick={handlePrint}>
              Print
            </Button>
          </Box>


          {/* <TranslateButton targetId="content-to-translate" /> */}

        </Box>

      </div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 300 }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400, // Slightly wider for better spacing
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 1,
              borderRadius: 3, // Rounded corners
              border: "1px solid #ccc", // Subtle border for better visibility
            }}
          >
            <Typography
              variant="h6"
              align="center"
              gutterBottom
              sx={{ fontWeight: "bold", color: "#333" }} // Bold and dark text
            >
              Select Options to Print
            </Typography>
            <Divider
              sx={{
                mb: 3,
                borderColor: "#444", // Darker divider color
                borderWidth: "1.5px", // Slightly thicker divider
              }}
            />
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: 1, // Increased gap for better spacing
              }}
            >
              {Object.keys(columns)
                .filter((key) => key !== "rate" && key !== "totalFreight") // Exclude "rate" and "totalFreight"
                .map((key) => (
                  <FormControlLabel
                    key={key}
                    control={
                      <Checkbox
                        checked={columns[key]}
                        onChange={() =>
                          setColumns((prev) => ({ ...prev, [key]: !prev[key] }))
                        }
                        sx={{
                          color: "#555", // Subtle checkbox color
                          "&.Mui-checked": { color: "#1976d2" }, // Primary color for checked state
                        }}
                      />
                    }
                    label={
                      key === "articles"
                        ? "Bag / Weight (kg)"
                        : key === "weight"
                          ? "No. of Bags"
                          : key.charAt(0).toUpperCase() + key.slice(1)
                    }

                    sx={{
                      fontSize: "14px", // Slightly smaller font for labels
                      color: "#333", // Darker text color
                    }}
                  />
                ))}


            </Box>
            <Box sx={{ textAlign: "center", mt: 4 }}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => setOpen(false)}
                sx={{
                  px: 3, // Add padding for a larger button
                  py: 0.5,
                  fontWeight: "bold",
                }}
              >
                Close
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
});

export default Poster;
