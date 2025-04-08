import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Card,
  Col,
  Form,
  Input,
  Row,
  Select,
  Typography,
  Upload,
} from "antd";
import { toast } from "react-toastify";
import { Fragment, useEffect, useState } from "react";
import styles from "./AddProd.module.css";
import Layout from "./Layout";
import { bindActionCreators } from "redux";
import {
  requestAddResume,
  requestApplyJob,
  requestAdminGetProfile,
  requestJobDetails,
} from "../Redux/actions";
import { connect } from "react-redux";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { saveAs } from "file-saver";

const UploadData = (props) => {
  // console.log(props);
  const LeadStatus = [
    "New",
    "Contacted",
    "Engaged",
    "KYC Completed",
    "accepted",
    "MorefollowUp",
    "NotAccepted",
  ];
  const Status = [
    "Free listing",
    "Paid listing",
    "Advertisement",
    "Social",
    "Digital",
    "Web development",
    "Other",
  ];
  const state = ["maharastra"];
  const city = ["wardha", "nagpur", "gondia", "amravti"];
  const category = [
    "Glocery",
    "Education",
    "Civil Contractors",
    "Home Services",
    "Travel",
  ];
  const subcategory = ["Supermarket", "Kirana Store", "Oil and Ghee", "Masale"];

  // const category = useSelector((state) => state.productCategories?.list);

  // const subCategory = useSelector((state) => state.productSubCategories?.list);

  // const brand = useSelector((state) => state.productBrands?.list);

  // const dispatch = useDispatch();
  //useEffect for loading category list from redux
  // useEffect(() => {
  // dispatch(loadAllProductCategory({ page: 1, limit: 100 }));
  // dispatch(loadAllProductSubCategory({ page: 1, limit: 100 }));
  // dispatch(loadAllProductBrand({ page: 1, limit: 100 }));
  // }, [dispatch]);
  // const CsvTemplateDownload = () => {

  const downloadTemplate = () => {
    const csvTemplate =
      "BusinessName,Address,Mobile,Pincode,City,State,Category,Subcategory,LeadStatus,Status";
    const blob = new Blob([csvTemplate], { type: "text/csv" });
    saveAs(blob, "template.csv");
  };
  const { Title } = Typography;
  const [fileList, setFileList] = useState([]);
  const [loader, setLoader] = useState(false);
  const [csvFile, setCsvFile] = useState(null);
  const [user, setUser] = useState({});
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setCsvFile(file);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (csvFile) {
      const formData = new FormData();
      formData.append("csvFile", csvFile);
      try {
        props.requestAddResume({
          id: user.id,
          token: user.token,
          data: {
            formData,
          },
        });
        setLoader(true);
      } catch (error) {
        console.error(error);
        alert("Error uploading CSV file. Please Check Format");
        setLoader(false);
      }
    } else {
      Swal.fire("Error!", "Please select a CSV file.", "error");
    }
  };

  useEffect(() => {
    let loginData = props.candidate.loginData;
    if (loginData !== undefined) {
      if (loginData?.data?.status === "success") {
        setUser(loginData.data.data);
      }
    }
  }, [props.candidate.loginData]);

  useEffect(() => {
    let loginData = props.data.loginData;
    if (loginData !== undefined) {
      if (loginData?.data?.status == "success") {
        if (loginData?.data?.data.role === "admin") {
          setUser(loginData.data.data);
        }
      }
    }
  }, [props.data.loginData]);

  // useEffect(() => {
  //   if (user.role === "admin") {
  //     props.requestAdminGetProfile({
  //       id: user.id,
  //     });
  //   } else {
  //     props.requestJobDetails({
  //       id: user.id,
  //     });
  //   }
  // }, [user]);

  useEffect(() => {
    let addresume = props.candidate.addResumeData;
    if (addresume !== undefined) {
      if (addresume?.data?.status == "success") {
        Swal.fire("Good job!", "CSV File Uploaded successfully.", "success");
        setLoader(false);
        document.getElementById("csvFileInput").value = "";
        props.candidate.addResumeData = undefined;
      } else {
        Swal.fire(
          "Error!",
          "There is some error in uploading CSV file.",
          "error"
        );
        setLoader(false);
        props.candidate.addResumeData = undefined;
        props.candidate.resumeData = undefined;
      }
    }
  }, [props.candidate.addResumeData]);

  const onFinish = async (values) => {
    try {
      let formData = new FormData();
      formData.append("businessName", values.businessName);
      formData.append("mobile", values.mobile);
      formData.append("pincode", values.pincode);
      formData.append("category", values.category);
      formData.append("city", values.city);
      formData.append("state", values.state);
      formData.append("address", values.address);
      formData.append("subcategory", values.subcategory);
      formData.append("leadStatus", values.leadStatus);
      formData.append("status", values.status);
      formData.append("p_id", user.id);

      props.requestApplyJob({
        token: user.token,
        data: {
          formData,
        },
      });
      setLoader(true);
      // const resp = await dispatch(addProduct(formData));
      // console.log(formData.address);
      // if (resp.message === "success") {
      // 	form.resetFields();
      // 	setFileList([]);
      // setLoader(false);
      // } else {
      // 	setLoader(false);
      // }
    } catch (error) {
      console.log(error.message);
      toast.error("error at creating");
      setLoader(false);
    }
  };

  useEffect(() => {
    let applyJobData = props.candidate.applyJobData;
    if (applyJobData !== undefined) {
      if (applyJobData?.data?.status == "success") {
        Swal.fire("Good job!", "Data Uploaded successfully.", "success");
        setLoader(false);
        form.resetFields();
        props.candidate.applyJobData = undefined;
      } else {
        Swal.fire("Alert!", "Something Went Wrong.", "error");
        setLoader(false);
        props.candidate.applyJobData = undefined;
      }
    }
  }, [props.candidate.applyJobData]);

  const onFinishFailed = (errorInfo) => {
    setLoader(false);
    toast.error("Something went wrong !");
    console.log("Failed:", errorInfo);
  };

  const handelChange = ({ fileList }) => {
    setFileList(fileList);
  };

  const onClickLoading = () => {
    setLoader(true);
  };

  return (
    <Layout>
      <Fragment>
        <Row className="mr-top" justify="space-between" gutter={[0, 30]}>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={11}
            xl={11}
            className="rounded column-design"
          >
            <Card bordered={false}>
              <Title level={4} className="m-2 text-center">
                Add Data
              </Title>
              <Form
                form={form}
                name="basic"
                labelCol={{
                  span: 7,
                }}
                labelWrap
                wrapperCol={{
                  span: 16,
                }}
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  style={{ marginBottom: "15px" }}
                  name="businessName"
                  label="Business Name"
                  rules={[
                    {
                      required: true,
                      message: "Please input Business Name!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  style={{ marginBottom: "15px" }}
                  label="Mobile Number"
                  name="mobile"
                  rules={[
                    {
                      required: true,
                      message: "Please input Mobile Number!",
                    },
                  ]}
                >
                  <Input type="number" />
                </Form.Item>
                <Form.Item
                  style={{ marginBottom: "15px" }}
                  name="address"
                  label="Address"
                  rules={[
                    {
                      required: true,
                      message: "Please input Address!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  style={{ marginBottom: "15px" }}
                  label="Pincode"
                  name="pincode"
                  rules={[
                    {
                      required: true,
                      message: "Please input  Pincode!",
                    },
                  ]}
                >
                  <Input type="number" />
                </Form.Item>

                <Form.Item
                  style={{ marginBottom: "15px" }}
                  name="state"
                  label="Select State"
                  rules={[
                    {
                      required: true,
                      message: "Please select state!",
                    },
                  ]}
                >
                  <Select
                    name="state"
                    loading={!state}
                    showSearch
                    placeholder="Select State"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      option.children.includes(input)
                    }
                    filterSort={(optionA, optionB) =>
                      optionA.children
                        .toLowerCase()
                        .localeCompare(optionB.children.toLowerCase())
                    }
                  >
                    {state &&
                      state.map((brandSingle) => (
                        <Select.Option key={brandSingle} value={brandSingle}>
                          {brandSingle}
                        </Select.Option>
                      ))}
                  </Select>
                </Form.Item>
                <Form.Item
                  style={{ marginBottom: "15px" }}
                  name="city"
                  label="Select City"
                  rules={[
                    {
                      required: true,
                      message: "Please select city!",
                    },
                  ]}
                >
                  <Select
                    name="city"
                    loading={!city}
                    showSearch
                    placeholder="Selct City"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      option.children.includes(input)
                    }
                    filterSort={(optionA, optionB) =>
                      optionA.children
                        .toLowerCase()
                        .localeCompare(optionB.children.toLowerCase())
                    }
                  >
                    {city &&
                      city.map((brandSingle) => (
                        <Select.Option key={brandSingle} value={brandSingle}>
                          {brandSingle}
                        </Select.Option>
                      ))}
                  </Select>
                </Form.Item>
                <Form.Item
                  style={{ marginBottom: "15px" }}
                  name="category"
                  label="Select Category"
                  rules={[
                    {
                      required: true,
                      message: "Please select category!",
                    },
                  ]}
                >
                  <Select
                    name="category"
                    loading={!category}
                    showSearch
                    placeholder="Select category"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      option.children.includes(input)
                    }
                    filterSort={(optionA, optionB) =>
                      optionA.children
                        .toLowerCase()
                        .localeCompare(optionB.children.toLowerCase())
                    }
                  >
                    {category &&
                      category.map((brandSingle) => (
                        <Select.Option key={brandSingle} value={brandSingle}>
                          {brandSingle}
                        </Select.Option>
                      ))}
                  </Select>
                </Form.Item>

                <Form.Item
                  style={{ marginBottom: "15px" }}
                  name="subcategory"
                  label="Select Subcategory "
                  rules={[
                    {
                      required: true,
                      message: "Please select sub-category!",
                    },
                  ]}
                >
                  <Select
                    name="subcategory"
                    loading={!subcategory}
                    showSearch
                    placeholder="Select Subcategory"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      option.children.includes(input)
                    }
                    filterSort={(optionA, optionB) =>
                      optionA.children
                        .toLowerCase()
                        .localeCompare(optionB.children.toLowerCase())
                    }
                  >
                    {subcategory &&
                      subcategory.map((subcat) => (
                        <Select.Option key={subcat} value={subcat}>
                          {subcat}
                        </Select.Option>
                      ))}
                  </Select>
                </Form.Item>

                <Form.Item
                  style={{ marginBottom: "15px" }}
                  name="leadStatus"
                  label="Select Lead Status "
                  rules={[
                    {
                      required: true,
                      message: "Please select Lead Status!",
                    },
                  ]}
                >
                  <Select
                    name="leadStatus"
                    loading={!LeadStatus}
                    showSearch
                    placeholder="Select Lead Status"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      option.children.includes(input)
                    }
                    filterSort={(optionA, optionB) =>
                      optionA.children
                        .toLowerCase()
                        .localeCompare(optionB.children.toLowerCase())
                    }
                  >
                    {LeadStatus &&
                      LeadStatus.map((unit) => (
                        <Select.Option key={unit} value={unit}>
                          {unit}
                        </Select.Option>
                      ))}
                  </Select>
                </Form.Item>
                <Form.Item
                  style={{ marginBottom: "15px" }}
                  name="status"
                  label="Status "
                  rules={[
                    {
                      required: true,
                      message: "Please select Status!",
                    },
                  ]}
                >
                  <Select
                    name="status"
                    loading={!Status}
                    showSearch
                    placeholder="Select Status"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      option.children.includes(input)
                    }
                    filterSort={(optionA, optionB) =>
                      optionA.children
                        .toLowerCase()
                        .localeCompare(optionB.children.toLowerCase())
                    }
                  >
                    {Status &&
                      Status.map((unit) => (
                        <Select.Option key={unit} value={unit}>
                          {unit}
                        </Select.Option>
                      ))}
                  </Select>
                </Form.Item>

                <Form.Item
                  style={{ marginBottom: "15px" }}
                  className={styles.addProductBtnContainer}
                >
                  <Button
                    type="primary"
                    htmlType="submit"
                    shape="round"
                    loading={loader}
                    onClick={onClickLoading}
                    style={{ backgroundColor: "#2c3e50" }}
                  >
                    Add Data
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={24} lg={11} xl={11} className=" rounded">
            <Card className={`${styles.importCsvCard} column-design`}>
              <Title level={4} className="m-2 text-center">
                Import From CSV
              </Title>
              <div className="text-center mt-2 ">
                <form className="form-group ">
                  <input
                    className="form-control"
                    type={"file"}
                    id={"csvFileInput"}
                    accept={".csv"}
                    onChange={handleFileChange}
                  />
                  <br />
                  {/* <Button
                    className="mt-2"
                    type="primary"
                    htmlType="submit"
                    shape="round"
                    onClick={downloadTemplate}
                    style={{backgroundColor:"#2c3e50"}} 
                  >
                    Download CSV Template
                  </Button> */}
                  <h6>
                    <a
                      href="#"
                      className="ant-btn ant-btn-primary ant-btn-round mt-2"
                      onClick={downloadTemplate}
                    >
                      Download
                    </a>
                    &nbsp; the excel template here that needs to be uploaded .
                  </h6>

                  {/* <br /> */}
                  <Button
                    className="mt-2"
                    type="primary"
                    htmlType="submit"
                    shape="round"
                    loading={loader}
                    onClick={handleUpload}
                    style={{ backgroundColor: "#2c3e50" }}
                  >
                    Import From CSV
                  </Button>
                </form>
              </div>{" "}
            </Card>
          </Col>
        </Row>
      </Fragment>
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {
    candidate: state.candidate,
    employee: state.employee,
    data: state.data,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      requestAddResume,
      requestApplyJob,
      requestAdminGetProfile,
      requestJobDetails,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(UploadData);
