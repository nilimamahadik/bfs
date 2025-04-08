import React from "react";
import { CSVLink } from "react-csv";
import { formatDate } from "../commonfunction/formatDate";

const ExportCSV = ({ data, products }) => {
  const csvHeaders = [
    { label: "Sr.No.", key: "id" },
    { label: "Date", key: "Date" },
    { label: "LR No.", key: "receipt_number" },
    { label: "Name of Dealer", key: "vendor_name" },
    { label: "Address", key: "address" },
    { label: "Supplier Name", key: "supplier_name" },
    { label: "Place", key: "ship_to_address1" },
    { label: "District", key: "ship_to_district" },
    { label: "Transport Mode", key: "transport_mode" },
    { label: "Driver Name", key: "transport_driver_name" },
    { label: "Transport Number", key: "transport_number" },
    { label: "Products", key: "products" },
    { label: "Code", key: "product_codes" },
    { label: "UOM", key: "uom" },
    { label: "No. of Bags", key: "weight" },
    { label: "Rate", key: "rate" },
    { label: "MT", key: "mt" },
    { label: "Total Freight", key: "total_freight" },
    { label: "Delivery Type", key: "checkedValues" },
    { label: "Total Balance Amount", key: "total_balanceamount" },
    { label: "Diesel (Rs.)", key: "hamali" },
    { label: "To Pay ", key: "topayamt" },
    { label: "Total Amount", key: "total_amount" },
    { label: "Rate(Ex)", key: "topayrate" },
  ];

  const finduom = (productName) => {
    return (
      products &&
      products.length > 0 &&
      products.find((product) => product.name === productName)?.uom || "NA"
    );
  };

  const formattedData = data.map((item, index) => ({
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
    products: item.productDetails?.map((p) => p.product_name).join(", ") || "",
    product_codes: item.productDetails?.map((p) => p.product_code).join(", ") || "",
    uom: item.productDetails?.map((p) => finduom(p.product_name)).join(", ") || "NA",
    weight: item.productDetails?.map((p) => p.weight).join(", ") || "",
    rate: item.productDetails?.map((p) => p.rate).join(", ") || "",
    mt: item.productDetails?.map((p) => p.mt).join(", ") || "",
    total_freight: item.productDetails?.map((p) => p.total_freight).join(", ") || "",
    checkedValues: item.checkedValues || "NA",
    from: item.from || "NA",
    total_balanceamount: item.total_balanceamount || "NA",
    hamali: item.hamali || "NA",
    mobileNo: item.mobileNo || "NA",
    topayamt: item.topayamt || "NA",
    total_amount: item.total_amount || "NA",
    topayrate: item.topayrate || "NA",
  }));

  return (
    <CSVLink data={formattedData} headers={csvHeaders} filename="export.csv">
      <button
        style={{
          padding: "4px 8px",
          background: "rgb(170, 43, 29)",
          color: "white",
          border: "none",
          cursor: "pointer",
          borderRadius: "6px",
        }}
      >
        Export to CSV
      </button>
    </CSVLink>
  );
};

export default ExportCSV;