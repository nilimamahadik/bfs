import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Dropdown, Button, Menu, Segmented, Table, Input, Spin, Form, DatePicker, Typography, Card, Col, Row, Select, Checkbox } from "antd";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import './poster.css'

import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Error, ErrorOutline } from '@mui/icons-material';
// import "./minutes.css"
// import { Icons } from '../../../Partner/Comman';
const BASEURL = "/api"
const { Option } = Select;

const FormDataInfo = ({
    graceEligibleStudents,
    open,
    handleClose,
    user,
    style,
    props,
    loader,
    setLoader,
    modalForm,
    record,
    filteredExam,
    selectedSubject,
    selectedBranch,
    findSubjectMaxMArks,
    findCourseName,
    findCourseCode,
    exams,
}) => {
    const { TextArea } = Input;
    const { Title } = Typography;
    const [products, setProducts] = useState([]);
    //////console.log(products);
    const [data, setData] = useState([])
    ////console.log(data);

    const [master, setMaster] = useState([])
    //console.log(master);

    const [value, setValue] = useState({})
    const navigate = useNavigate();
    const [file, setFile] = useState();
    const [projectOptions, setProjectOptions] = useState([]);
    const [openUser, setOpenUser] = useState(false)
    const [consignee, setConsignees] = useState([]);
    ////console.log(consignee);
    const [consignor, setConsignors] = useState([]);
    // console.log(consignor);
    const [transport, setTransports] = useState([]);
    //console.log(transport);

    const params = useParams()
    //////console.log(params);
    const groupId = params?.id
    ////console.log(groupId);
    const [selectedConsignee, setSelectedConsignee] = useState(null);

    const [selectedConsignor, setSelectedConsignor] = useState(null);
    const [selectedTransport, setSelectedTransport] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedProductCode, setSelectedProductCode] = useState(null);
    const [checkedValues, setCheckedValues] = useState([]);
    const [warehouse, setWarehouses] = useState([]);
    //console.log(warehouse);

    ////console.log(checkedValues);
    const [submitAction, setSubmitAction] = useState("");
    //console.log(submitAction);


    const onChange = (checkedList) => {
        // Restrict selection to only one checkbox
        const lastSelected = checkedList[checkedList.length - 1];
        setCheckedValues(lastSelected ? [lastSelected] : []);

        // // Check if "For" is selected and set "total" accordingly
        // if (lastSelected === "FOR") {
        //     modalForm.setFieldsValue({ total: "0.00" });
        // } else {
        //     modalForm.setFieldsValue({ total: "" }); // Reset when unchecked or "Ex" is selected
        // }
    };

    useEffect(() => {
        console.log(record);
        if (record) {
            setCheckedValues([record.checkedValues])

            modalForm.setFieldsValue({
                ...record,
                sum: record.total_amount,
                total: record.total_balanceamount,
            })
        }

    }, [record]);


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

    const fetchConsignees = async () => {
        try {
            const response = await axios.get(`${BASEURL}/consignee/${groupId}`);

            setConsignees(response?.data?.products);
        } catch (error) {
        }
    };

    const fetchConsignors = async () => {
        try {
            const response = await axios.get(`${BASEURL}/consignor/${groupId}`);
            setConsignors(response?.data?.products);
        } catch (error) {
            // // console.error("Error fetching products:", error);
        }
    };

    const fetchtransports = async () => {
        try {
            const response = await axios.get(`${BASEURL}/gettransportdetails/${groupId}`);
            // console.log(response);

            setTransports(response?.data?.transportdetails);
        } catch (error) {
            // // console.error("Error fetching products:", error);
        }
    };

    useEffect(() => {
        fetchConsignees();
        fetchConsignors();
        fetchtransports();
        fetchWarehouses();
    }, []);


    const getMaster = async () => {

        const get = axios.get(`${BASEURL}/get/master`)
            .then((res) => {
                setMaster(res.data.data);
                //  // ////consoleog(res.data);
                localStorage.setItem("count", JSON.stringify(res.data));
            })
            .catch((err) => {
            })
    }
    const getallusers = async () => {

        const get = axios.get(`${BASEURL}/getallusers/${params.id}`)
            .then((res) => {

                const filteredData = res.data.data.filter(user => !user.deleted);

                setData(filteredData);
                // setData(res.data.data);
                //  // //consoleog(res.data);
                localStorage.setItem("count", JSON.stringify(res.data));
            })
            .catch((err) => {
            })
    }
    useEffect(() => {
        getallusers();
        getMaster()
    }, []);


    const onFinish = async (values) => {
        console.log(checkedValues)
        if (checkedValues?.length === 0) {
            alert("Please select FOR or Ex!")
        }
        // cole.log(values)


        const userConfirmed = window.confirm(
            "Are you sure you want to proceed with the action?"
        );
        if (userConfirmed) {
            const formData = new FormData();
            formData.append("from", values.from);
            formData.append("transport_number", values.transport_number);
            formData.append("transport_driver_name", values.transport_driver_name)
            formData.append("transport_mode", values.transport_mode)
            formData.append("vendor_name", values.vendor_name)
            formData.append("address", values.address)
            formData.append("supplier_name", values.supplier_name)
            formData.append("mobileNo", values.mobileNo)
            formData.append("ship_to_address1", values.ship_to_address1)
            formData.append("ship_to_district", values.ship_to_district)
            formData.append("productDetails", JSON.stringify(values.productDetails))
            values.sc && formData.append("sc", values.sc)
            values.hamali && formData.append("hamali", values.hamali)
            values.sch && formData.append("sch", values.sch)
            formData.append("total_balanceamount", values.total)
            formData.append("group_id", params.id)
            formData.append("checkedValues", checkedValues)
            values.topayrate && formData.append("topayrate", values.topayrate)
            values.sum && formData.append("total_amount", values.sum)
            values.topayamt && formData.append("topayamt", values.topayamt)
            // record && formData.append("update", record._id)
            if (record) {
                formData.append("update", record._id)
                // formData.append("receipt_number", record.receipt_number)

            }
            try {
                const response = await axios.post(`${BASEURL}/submit`, formData);
                //console.log(response);
                handleClose();

                alert(response.data.message)
                getallusers();

                if (submitAction === "submit_print") {
                    navigate(`/poster/${response.data.data._id}`);
                } else {

                    window.location.reload();
                }

                return response;
            } catch (err) {
                alert(err.response.data.message)
            }
        }

    }

    const onFinishFailed = (errorInfo) => {
        alert("Please fill in the mandatory fields!")
    };

    const updateMetricTon = (index) => {
        const updatedProducts = [...modalForm.getFieldValue("productDetails")];

        const weightPerBag = parseFloat(updatedProducts[index]?.weightperbag) || 0; // Assuming `rate` is weight per bag
        const noOfBags = parseFloat(updatedProducts[index]?.weight) || 0;

        const metricTon = (noOfBags * weightPerBag) / 1000; // Convert to metric ton

        updatedProducts[index] = {
            ...updatedProducts[index],
            mt: metricTon.toFixed(3),
        };

        modalForm.setFieldsValue({ productDetails: updatedProducts });
        updateTotalSum();
    };

    const handleValuesChange = (changedValues, allValues) => {
        //console.log(allValues);

        // Extract product details from allValues
        const productDetails = allValues.productDetails || [];

        // Initialize an array to store the updated product details
        const updatedProductDetails = productDetails.map((product, index) => {

            const weight = parseFloat(product.mt) || 0;
            const rate = parseFloat(product.rate) || 0;
            const totalFreight = weight * rate;

            return {
                ...product,
                total_freight: totalFreight || '',
            };
        });
        //console.log(updatedProductDetails);

        const sumof = updatedProductDetails.reduce((sum, product) => {
            return sum + (parseFloat(product.mt) * parseFloat(product.rate)) || 0;
        }, 0);

        const sc = parseFloat(allValues.sc) || 0;      // Subtract this from sumof
        const hamali = parseFloat(allValues.hamali) || 0;  // Add this to result
        const topayrate = parseFloat(allValues.topayrate) || 0; // Add this to result
        const totalMt = updatedProductDetails.reduce((sum, product) => {
            return sum + (parseFloat(product.mt) || 0);
        }, 0);
        //console.log(totalMt);

        const topayamt = topayrate * totalMt;
        //console.log(topayamt);
        // Calculate "To Pay" as topayrate * total metric tons
        const finalTotal = (sumof - sc) - hamali;


        modalForm.setFields([
            {
                name: 'productDetails',
                value: updatedProductDetails,
            },
            {
                name: 'sum',
                value: sumof || '0.000',
            },
            {
                name: 'total',
                value: finalTotal || '0.000',
            },
            {
                name: 'topayamt',
                value: topayamt || '0.000',
            },
        ]);
    };

    const fetchProducts = async () => {
        try {
            const response = await axios.get(`${BASEURL}/products/${params.id}`);
            const activeProducts = response?.data?.products?.filter(product => product.active === true);
            setProducts(activeProducts);
        } catch (error) {
        }
    };
    useEffect(() => {
        fetchProducts();
    }, []);


    useEffect(() => {
        if (consignee.length > 0 && modalForm) {
            modalForm.setFieldsValue({
                supplier_name: consignee[0]?.name || "",
                ship_to_address1: consignee[0]?.place || "",
                ship_to_district: consignee[0]?.district || "",
                mobileNo: consignee[0]?.mobileNo || "",
            });
        }
    }, [consignee, modalForm]);

    const handleConsigneeChange = (value) => {
        const selected = consignee.find((item) => item._id === value);
        setSelectedConsignee(selected);

        modalForm.setFieldsValue({
            supplier_name: selected?.name || "",
            ship_to_address1: selected?.place || "",
            ship_to_district: selected?.district || "",
            mobileNo: selected?.mobileNo || "",
        });
    };

    const handleConsignorChange = (value) => {
        const selected = consignor.find((item) => item._id === value);
        setSelectedConsignor(selected);

        modalForm.setFieldsValue({
            vendor_name: selected?.name || "",
            address: selected?.place || "",

        });
    };


    const handleWarehouseChange = (value) => {
        //console.log(value);

        const selected = warehouse.find((item) => item._id === value);
        // setSelectedTranspor(selected);

        modalForm.setFieldsValue({
            from: selected?.place || "",
            transport_number: selected?.truckNo || "",
            transport_driver_name: selected?.truckDriverName || "",
            transport_mode: selected?.transportMode || "",



        });
    };
    const updateTotalSum = () => {
        const updatedProductDetails = modalForm.getFieldValue("productDetails") || [];
        const sumof = updatedProductDetails.reduce((sum, product) => {
            const weight = parseFloat(product.weight) || 0;
            const rate = parseFloat(product.rate) || 0;
            return sum + weight * rate; // Calculate total amount dynamically
        }, 0);

        modalForm.setFieldsValue({ sum: sumof.toFixed(2) || "0.000" }); // Update sum
    };
    const fetchWarehouses = async () => {
        try {
            const response = await axios.get(`${BASEURL}/getwarehouse/${groupId}`);
            setWarehouses(response?.data?.products);
        } catch (error) {
            // // console.error("Error fetching products:", error);
        }
    };
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Title level={3} className="m-2 text-center" style={{ color: "rgb(170, 43, 29)" }}>
                    {value.id}
                </Title>
                <hr />


                <Form
                    form={modalForm}
                    className="custom-form"
                    onValuesChange={handleValuesChange}
                    name="basic"
                    labelCol={{
                        span: 24,
                    }}
                    labelWrap
                    wrapperCol={{
                        span: 24,
                    }}
                    initialValues={{
                        remember: true,
                        productDetails: [{ product_name: "" }]
                    }}
                    autoComplete="off"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <h6>Transportation Details</h6>
                    <div className='custom-container'>

                        <Row gutter={16} style={{ display: 'flex', flexWrap: 'nowrap' }}>
                            <Col span={9}>
                                <Form.Item style={{ marginBottom: "0px" }} name="from" label="From"
                                    rules={[{ required: true, message: "Please select From!" }]}
                                >
                                    <Select
                                        showSearch
                                        placeholder="Select From"
                                        optionFilterProp="label"
                                        size="medium"
                                        style={{ width: "100%" }}
                                        getPopupContainer={(trigger) => trigger.parentNode}
                                        onChange={handleWarehouseChange}

                                    >
                                        {Array.isArray(warehouse) &&
                                            warehouse.map((item) => (
                                                //console.log(item),



                                                <Select.Option key={item._id} value={item._id} label={item.place}>
                                                    {item.place + ',' + item.name}
                                                </Select.Option>
                                            ))}

                                    </Select>
                                </Form.Item>

                            </Col>
                            <Col span={5}>
                                <Form.Item style={{ marginBottom: "0px" }} name='transport_number' label="Truck No."
                                    rules={[{ required: true, message: "Please enter Transport number !" }]}
                                >
                                    <Input placeholder="Enter Truck No." />
                                </Form.Item>
                            </Col>
                            <Col span={5}>
                                <Form.Item style={{ marginBottom: "0px" }} name='transport_driver_name' label="Truck Driver Name"
                                    rules={[{ message: "Please enter Truck Driver Name!" }]}
                                >
                                    <Input placeholder="Enter Truck Driver Name" />
                                </Form.Item>
                            </Col>
                            <Col span={5}>
                                <Form.Item
                                    style={{ marginBottom: "0px" }}
                                    name="transport_mode"
                                    label="Transport Mode"
                                    initialValue={master[0]?.transportmodename?.[0]} // Set the first option as default
                                    rules={[{ required: true, message: "Please select Transport Mode!" }]}
                                >
                                    <Select
                                        showSearch
                                        placeholder="Select Transport Mode"
                                        optionFilterProp="label"
                                        size="medium"
                                        style={{ width: "100%" }}
                                        options={master[0]?.transportmodename?.map((mode) => ({
                                            value: mode,
                                            label: mode,
                                        }))} // Convert array to objects
                                        getPopupContainer={(trigger) => trigger.parentNode}
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16} style={{ display: 'flex', flexWrap: 'nowrap' }}>

                        </Row>

                    </div>

                    {/* Roll Number */}

                    <h6>Consignor Details</h6>
                    <div className='custom-container' >
                        <Row gutter={16} style={{ display: 'flex', flexWrap: 'nowrap' }}>
                            <Col span={9}>
                                <Form.Item style={{ marginBottom: "0px" }} name="vendor_name" label="Name"
                                    rules={[{ required: true, message: "Please select Name of Consignor!" }]}

                                >
                                    <Select
                                        showSearch
                                        placeholder="Select Name of Consignor"
                                        optionFilterProp="label"
                                        size="medium"
                                        style={{ width: "100%" }}
                                        getPopupContainer={(trigger) => trigger.parentNode}
                                        onChange={handleConsignorChange}
                                    >
                                        {Array.isArray(consignor) &&
                                            consignor.map((item) => (
                                                <Select.Option key={item._id} value={item._id} label={item.name}>
                                                    {item.name + ',' + item.place}
                                                </Select.Option>
                                            ))}

                                    </Select>
                                </Form.Item>

                            </Col>
                            <Col span={5}>
                                <Form.Item style={{ marginBottom: "0px" }} name='address' label="Address"
                                    rules={[{ required: true, message: "Please enter Address!" }]}>
                                    <Input placeholder="Enter Address" />
                                </Form.Item>
                            </Col>
                        </Row>
                    </div>

                    <h6>Consignee Details</h6>
                    <div className='custom-container'>
                        <Row gutter={16} style={{ display: 'flex', flexWrap: 'nowrap' }}>
                            <Col span={9}>
                                <Form.Item style={{ marginBottom: "0px" }} name="supplier_name" label="Name of Consignee"
                                    rules={[{ required: true, message: "Please select Name of Consignee!" }]}>
                                    <Select
                                        showSearch
                                        placeholder="Select Name of Consignee"
                                        optionFilterProp="label"
                                        size="medium"
                                        style={{ width: "100%" }}
                                        getPopupContainer={(trigger) => trigger.parentNode}
                                        onChange={handleConsigneeChange}
                                    >
                                        {Array.isArray(consignee) &&
                                            consignee.map((item) => (
                                                <Select.Option key={item._id} value={item._id} label={item.name}>
                                                    {item.name + ',' + item.place}
                                                </Select.Option>
                                            ))}

                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={5}>
                                <Form.Item style={{ marginBottom: "0px" }} name='ship_to_address1' label="Place"
                                    rules={[{ required: true, message: "Please enter Place!" }]}>
                                    <Input placeholder="Enter Place" />
                                </Form.Item>
                            </Col>
                            <Col span={5}>
                                <Form.Item style={{ marginBottom: "0px" }} name='ship_to_district' label="District"
                                    rules={[{ required: true, message: "Please enter District!" }]}
                                >
                                    <Input placeholder="Enter District" />
                                </Form.Item>
                            </Col>
                            <Col span={5}>
                                <Form.Item
                                    style={{ marginBottom: "0px" }}
                                    name='mobileNo'
                                    label="Mobile Number"
                                    rules={[

                                        { pattern: /^\d{10}$/, message: "Please enter a valid 10-digit mobile number!" },
                                        { pattern: /^[0-9+\(\)#\.\s\/-]{5,20}$/, message: "Please enter a valid Mobile number!" },
                                    ]}
                                >
                                    <Input placeholder="Enter Mobile Number" />
                                </Form.Item>
                            </Col>
                        </Row>


                    </div>
                    <h6>Goods Details</h6>
                    <div className='custom-container'>

                        <Form.List name="productDetails">
                            {(fields, { add, remove }) => (
                                <>
                                    {fields.map(({ key, name, fieldKey, ...restField }, index) => (
                                        <div key={key}
                                        >
                                            <Row
                                                gutter={16}
                                                style={{
                                                    display: 'flex',
                                                    flexWrap: 'nowrap',
                                                    alignItems: 'flex-start',

                                                }}
                                            >
                                                <Col style={{ flex: 2 }}>
                                                    <Form.Item
                                                        {...restField}
                                                        name={[name, "product_code"]}
                                                        fieldKey={[fieldKey, "product_code"]}
                                                        label={index === 0 ? "Product Code" : null}
                                                        rules={[{ required: true, message: "Please enter Product Code!" }]}
                                                    >
                                                        <Select
                                                            showSearch
                                                            placeholder="Select Product Code"
                                                            optionFilterProp="label"

                                                            size="medium"
                                                            style={{ width: "100%" }}
                                                            getPopupContainer={(trigger) => trigger.parentNode}
                                                            onChange={(value) => {
                                                                const selectedProduct = products.find((product) => product.code === value);
                                                                if (selectedProduct) {
                                                                    const updatedProducts = [...modalForm.getFieldValue("productDetails")];

                                                                    updatedProducts[name] = {
                                                                        product_code: selectedProduct.code,
                                                                        product_name: selectedProduct.name,
                                                                        weightperbag: selectedProduct.rate || 0,
                                                                        weight: "", // Reset weight
                                                                        mt: "", // Reset metric ton
                                                                        rate: "", // Reset rate
                                                                        total_freight: "", // Reset total freight

                                                                    };
                                                                    updatedProducts[name] = {
                                                                        ...updatedProducts[name],
                                                                        product_name: selectedProduct.name,
                                                                        weightperbag: selectedProduct.rate || 0,
                                                                    };

                                                                    modalForm.setFieldsValue({ productDetails: updatedProducts });
                                                                    modalForm.setFields([
                                                                        { name: "sc", value: "" },
                                                                        { name: "hamali", value: "" },
                                                                        { name: "topayrate", value: "" },
                                                                        { name: "topayamt", value: "" },
                                                                        { name: "sum", value: "" },
                                                                        { name: "total", value: "" }
                                                                    ]);
                                                                    updateMetricTon(name);
                                                                    modalForm.validateFields([["productDetails", name, "product_code"]])
                                                                        .catch(() => { });
                                                                }
                                                            }}
                                                        >
                                                            {products.map((product) => (

                                                                <Select.Option key={product._id} value={product.code} label={product.name}>
                                                                    {product.code}
                                                                </Select.Option>
                                                            ))}
                                                        </Select>
                                                    </Form.Item>
                                                </Col>

                                                {/* Product Name Input (Auto-Filled) */}
                                                <Col style={{ flex: 1 }}>
                                                    <Form.Item
                                                        {...restField}
                                                        name={[name, "product_name"]}
                                                        fieldKey={[fieldKey, "product_name"]}
                                                        label={index === 0 ? "Product Name" : null}
                                                        rules={[{ required: true, message: "Please enter Product Name!" }]}
                                                    >
                                                        <Input size="medium" placeholder="Enter Product Name" />
                                                    </Form.Item>
                                                </Col>

                                                {/* To Range */}


                                                {/* Grade Point */}
                                                <Col style={{ flex: 1 }}>
                                                    <Form.Item
                                                        style={{ marginBottom: '5px' }}
                                                        {...restField}
                                                        name={[name, 'weight']}
                                                        fieldKey={[fieldKey, 'weight']}
                                                        label={index === 0 ? 'No. of Bags' : null} // Show label only for the first row
                                                        rules={[{ required: true, message: 'Please enter No. of Bags!' }]}
                                                    >
                                                        {/* <Input size="medium" placeholder=" enter No. of Bags" /> */}
                                                        <Input
                                                            size="medium"
                                                            placeholder="Enter No. of Bags"
                                                            onChange={(e) => {
                                                                const value = e.target.value;
                                                                const updatedProducts = [...modalForm.getFieldValue("productDetails")];

                                                                updatedProducts[name] = {
                                                                    ...updatedProducts[name],
                                                                    weight: value, // Update weight
                                                                };

                                                                modalForm.setFieldsValue({ productDetails: updatedProducts });

                                                                // Recalculate metric tons
                                                                updateMetricTon(name);
                                                                updateTotalSum()
                                                            }}
                                                        />
                                                    </Form.Item>
                                                </Col>
                                                <Col style={{ flex: 1 }}>
                                                    <Form.Item
                                                        style={{ marginBottom: '5px' }}
                                                        {...restField}
                                                        name={[name, 'mt']}
                                                        fieldKey={[fieldKey, 'mt']}
                                                        label={index === 0 ? 'Weight [MT]' : null} // Show label only for the first row
                                                        rules={[{ required: true, message: 'Please enter Weight' }]}
                                                    >

                                                        <Input size="medium" placeholder=" enter Weight" />
                                                    </Form.Item>
                                                </Col>
                                                <Col style={{ flex: 1 }}>
                                                    <Form.Item
                                                        style={{ marginBottom: '5px' }}
                                                        {...restField}
                                                        name={[name, 'rate']}
                                                        fieldKey={[fieldKey, 'rate']}
                                                        label={index === 0 ? 'Rate' : null} // Show label only for the first row
                                                        rules={[{ required: true, message: 'Please enter Rate!' }]}
                                                    >
                                                        <Input size="medium" placeholder="enter Rate" />
                                                    </Form.Item>
                                                </Col>
                                                <Col style={{ flex: 1 }}>
                                                    <Form.Item
                                                        style={{ marginBottom: '5px' }}
                                                        {...restField}
                                                        name={[name, 'total_freight']}
                                                        fieldKey={[fieldKey, 'total_freight']}
                                                        label={index === 0 ? 'Total Freight' : null} // Show label only for the first row
                                                    >
                                                        <Input size="medium" placeholder="Enter Total Freight" />
                                                    </Form.Item>
                                                </Col>

                                                <Col
                                                    style={{
                                                        flex: '0 0 auto',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        marginTop: index === 0 ? '24px' : '0px', // Align button to inputs for the first row
                                                    }}
                                                >
                                                    <Button
                                                        type="dashed"
                                                        onClick={() => remove(name)}
                                                        icon={<MinusCircleOutlined />}
                                                    >

                                                    </Button>
                                                    <Button
                                                        type="dashed"
                                                        onClick={() => {
                                                            add({ product_name: '', product_code: '', uom: '', weight: '', rate: '', total_freight: '' });
                                                            setTimeout(() => {
                                                                const updatedProductDetails = modalForm.getFieldValue('productDetails') || [];
                                                                const sumof = updatedProductDetails.reduce((sum, product) => {
                                                                    return sum + ((parseFloat(product.weight) || 0) * (parseFloat(product.rate) || 0));
                                                                }, 0);
                                                                modalForm.setFields([{ name: 'sum', value: sumof || '' }]);
                                                                updateTotalSum();
                                                            }, 100); // Small delay to ensure the new row is included
                                                        }}
                                                        icon={<PlusOutlined />}
                                                        style={{ width: '100%', marginLeft: "3px" }}
                                                    >

                                                    </Button>
                                                </Col>

                                            </Row>
                                        </div>
                                    ))}


                                </>
                            )}
                        </Form.List>
                    </div>




                    <Row gutter={16} style={{ display: 'flex', flexWrap: 'nowrap' }}>
                        <Col style={{ flex: 1, width: "20%", marginTop: "10px", marginLeft: "20px" }}>
                            <Form.Item

                            >
                                <Checkbox.Group
                                    options={[
                                        { label: "FOR", value: "FOR" },
                                        { label: "Ex", value: "Ex" },
                                    ]}
                                    value={checkedValues}
                                    onChange={onChange}
                                />
                                <p>Selected: {checkedValues.join(", ") || "None"}</p>

                            </Form.Item>

                        </Col>

                        <Col span={6} style={{ flex: 1, width: "10%" }}>
                            <Form.Item
                                style={{ marginBottom: '5px', marginRight: "80px" }}
                                name="sum"
                                label="Total Amount (Rs.)"
                            >
                                <Input size="medium" placeholder="Enter Total Amount" />
                            </Form.Item>
                        </Col>

                    </Row>


                    <Row gutter={16} style={{ display: 'flex', flexWrap: 'nowrap' }}>


                        {/* Student Name */}
                        <Col span={4}>
                            <Form.Item
                                style={{ marginBottom: "0px" }}
                                name='sc'
                                label="Advance Cash (Rs.)"
                            >
                                <Input size="medium" placeholder="Enter Advance Cash " />
                            </Form.Item>
                        </Col>

                        {/* Roll Number */}
                        <Col span={4}>
                            <Form.Item
                                style={{ marginBottom: "0px" }}
                                name='hamali'
                                label="Diesel (Rs.)"
                            >
                                <Input size="medium" placeholder="Enter Diesel" />
                            </Form.Item>
                        </Col>


                        {/* Roll Number */}
                        <Col span={4}>
                            <Form.Item
                                style={{ marginBottom: "0px" }}
                                name='total'
                                label="Total Balance (Rs.)"
                            >
                                <Input size="medium" placeholder="Enter Total" />
                            </Form.Item>
                        </Col>
                        {checkedValues.includes("Ex") && (
                            <>
                                <Col span={4}>
                                    <Form.Item
                                        style={{ marginBottom: "0px" }}
                                        name="topayrate"
                                        label="Rate"
                                    >
                                        <Input
                                            size="medium"
                                            placeholder="Enter Rate"
                                            onChange={() => handleValuesChange({}, modalForm.getFieldsValue())} // Trigger recalculation on change
                                        />
                                    </Form.Item>
                                </Col>
                                <Col span={4}>


                                    <Form.Item
                                        name="topayamt"
                                        label="To Pay (Rs.)"
                                    >
                                        <Input size="medium" placeholder="Enter To Pay" />
                                    </Form.Item>

                                </Col>
                            </>
                        )}

                    </Row>
                    <hr />
                    <Form.Item
                        style={{ marginBottom: "15px" }}
                        wrapperCol={{
                            offset: 10,
                            span: 12,
                        }}
                    >

                        {record ?
                            <Button
                                type="primary"
                                htmlType="submit"
                                size="medium"
                                loading={loader}
                                style={{ backgroundColor: "rgb(170, 43, 29)", marginRight: "10px" }}
                                onClick={() => setSubmitAction("submit")}
                            >
                                Update
                            </Button>

                            :
                            <>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    size="medium"
                                    loading={loader}
                                    style={{ backgroundColor: "rgb(170, 43, 29)", marginRight: "10px" }}
                                    onClick={() => setSubmitAction("submit")}
                                >
                                    Submit
                                </Button>

                                <Button
                                    type="primary"
                                    size="medium"
                                    htmlType="submit"
                                    loading={loader}
                                    style={{ backgroundColor: "rgb(29, 128, 170)" }}
                                    onClick={() => setSubmitAction("submit_print")}
                                >
                                    Submit & Print
                                </Button>
                            </>

                        }


                    </Form.Item>
                </Form>
            </Box>
        </Modal>
    );
};

export default FormDataInfo;