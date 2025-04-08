import React, { Fragment, useEffect, useState } from "react";
import { Card, Col, Row } from "antd";
import Layout from "./Layout";
import "./style.css";
import QuickLinks from "./quick";
import { bindActionCreators } from "redux";
import {
  requestAddResume,
  requestApplyJob,
  requestAdminGetProfile,
  requestJobDetails,
  requestAdminMonthJob,
  requestGetCandidate,
} from "../Redux/actions";
import { connect } from "react-redux";
import Pie from "./pie";
import Bar from "./bar";
import DemoBar from "./calender";
import Graph from "./bar";

const Dashboard = ({ information, ...props }) => {
  const [user, setUser] = useState({});
  const [list, setList] = useState([]);

  // useEffect(() => {
  //   let loginData = props.candidate.loginData;
  //   if (loginData !== undefined) {
  //     if (loginData?.data?.status === "success") {
  //       setUser(loginData.data.data);
  //     }
  //   }
  // }, [props?.candidate?.loginData]);

  // useEffect(() => {
  //   let loginData = props.data.loginData;
  //   if (loginData !== undefined) {
  //     if (loginData?.data?.status == "success") {
  //       if (loginData?.data?.data.role === "admin") {
  //         setUser(loginData.data.data);
  //       }
  //     }
  //   }
  // }, [props?.data?.loginData]);

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




  //for proxy & employee  registration
  useEffect(() => {
    let loginData = props.candidate.loginData;
    if (loginData !== undefined) {
      if (loginData?.data?.status == "success") {
        setUser(loginData.data.data);
        props.requestGetCandidate({
          id: loginData.data.data.id,
          role: loginData.data.data.role,
          token: loginData.data.data.token,
        });
      }
    }
  }, [props.candidate.loginData]);

  useEffect(() => {
    let getCandidateData = props.candidate.getCandidateData;
    // console.log(getCandidateData);
    if (getCandidateData !== undefined) {
      if (getCandidateData?.data?.status === "success") {
        setList(getCandidateData.data.data.response);
      }
    }
  }, [props?.candidate?.getCandidateData]);




  //for admin total registration data
  useEffect(() => {
    let loginData = props.data.loginData;
    if (loginData !== undefined) {
      if (loginData?.data?.status == "success") {
        if (loginData?.data?.data.role === "admin") {
          setUser(loginData.data.data);
          props.requestAdminMonthJob({
            token: loginData.data.data.token,
          });
        }
      }
    }
  }, [props?.data?.loginData]);

  useEffect(() => {
    let monthWiseJobData = props.data.monthWiseJobData;
    if (monthWiseJobData !== undefined) {
      if (monthWiseJobData?.data?.status == "success") {
        setList(monthWiseJobData.data.data.response);
      }
    }
  }, [props?.data?.monthWiseJobData]);


  return (
    <Layout>
      <Fragment>
        <div>
          <QuickLinks />
          <br />
          <div className="row">
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="card dashboard-card">
                <div className="card-content">
                  <div
                    className="card-body dashboard-card-body"
                    style={{
                      borderRadius: "10px",
                      background:
                        "linear-gradient(90deg, hsla(211, 87%, 65%, 1) 0%, hsla(211, 33%, 30%, 1) 100%)",
                    }}
                  >
                    <div className="media d-flex">
                      <div className="media-body text-left">
                        <h3 className="">{list?.length ? list?.length : 0}</h3>
                        <span className="">Total Registration</span>
                      </div>
                      <div className="align-self-center">
                        <i
                          className="icon-cloud-download font-large-2 float-right"
                          style={{ color: "#fff	" }}
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="card dashboard-card">
                <div className="card-content">
                  <div
                    className="card-body dashboard-card-body"
                    style={{
                      borderRadius: "10px",
                      background:
                        "linear-gradient(90deg, hsla(161, 68%, 73%, 1) 0%, hsla(161, 100%, 27%, 1) 100%)",
                    }}
                  >
                    <div className="media d-flex">
                      <div className="media-body text-left">
                        <h3 className="">
                          {list
                            ? list.filter(
                                (user) => user.leadStatus === "accepted"
                              ).length
                            : 0}
                        </h3>
                        <span className="">Total Active Registration</span>
                      </div>
                      <div className="align-self-center">
                        <i
                          className="icon-rocket font-large-2 float-right"
                          style={{ color: "#fff	" }}
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 col-12">
              <div className="card dashboard-card">
                <div className="card-content">
                  <div
                    className="card-body dashboard-card-body"
                    style={{
                      borderRadius: "10px",
                      background:
                        "linear-gradient(90deg, hsla(223, 28%, 73%, 1) 0%, hsla(222, 22%, 48%, 1) 100%)",
                    }}
                  >
                    <div className="media d-flex">
                      <div className="media-body text-left">
                        <h3 className="">
                          {information?.sale_profit
                            ? information?.sale_profit
                            : 0}
                        </h3>
                        <span className="">Digital</span>
                      </div>
                      <div className="align-self-center">
                        <i
                          className="icon-wallet font-large-2 float-right"
                          style={{ color: "#fff	" }}
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="card dashboard-card">
                <div className="card-content">
                  <div
                    className="card-body dashboard-card-body"
                    style={{
                      borderRadius: "10px",
                      background:
                        "linear-gradient(90deg, hsla(287, 46%, 75%, 1) 2%, hsla(287, 24%, 44%, 1) 100%)",
                    }}
                  >
                    <div className="media d-flex">
                      <div className="media-body text-left">
                        <h3 className="">
                          {information?.sale_count
                            ? information?.sale_count
                            : 0}
                        </h3>
                        <span className="">Other </span>
                      </div>
                      <div className="align-self-center">
                        <i
                          className="icon-wallet font-large-2 float-right"
                          style={{ color: "#fff	" }}
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
<br/>
<div>
{/* <Row >
              <Col sm={10} md={10} lg={10} span={24}>
                <Card title="Total Registration Vs Active Registration" >
                  <Pie />
                  
                </Card>
              </Col>
             </Row> */}
             </div>
             {/* <div>
              <Graph/>
             </div> */}
          
        </div>
      </Fragment>
    </Layout>
  );
};

// export default Dashboard;
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
      requestAdminMonthJob,
      requestGetCandidate,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
