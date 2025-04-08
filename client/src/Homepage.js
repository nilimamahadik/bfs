import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Homepage.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { userLogout } from "./Redux/actions";
// import { Button } from "antd";
import { Button, Card, Typography, Row, Col } from "antd";
const { Title, Paragraph } = Typography;

function App(props) {
  const [selectedOption, setSelectedOption] = useState("");
  const navigate = useNavigate();

  const handleOptionChange = (event) => {
    const selectedRoute = event.target.value;
    setSelectedOption(selectedRoute);

    if (selectedRoute) {
      navigate(selectedRoute); // Navigate to the selected route
    }
  };

  useEffect(() => {
    props.userLogout();
  }, []);

  return (

    <div className="outer">
      {/* Left Side: Containers */}
      <div className="containers">
       
      </div>

      {/* Right Side: Image Overlay */}
      <div className="image-overlay">
        <div className="login-options">
          <Title level={2} style={{ color: "#AA2B1D", fontSize: "50px", marginBottom: "10px" }}>
            Bharat Freight Solutions
          </Title>
          <Paragraph style={{ fontSize: "18px", marginBottom: "20px" }}>
            Efficiently manage your fleet with our advanced system.
          </Paragraph>
          <Title level={3} style={{ color: "black", marginTop: "30px" }}>
            Choose Login Option
          </Title>
          <Row justify="center" gutter={16} style={{ marginTop: "20px" }}>
            <Col>
              <Button type="primary" size="large" onClick={() => navigate("/adminlogin")}>
                Company Admin
              </Button>
            </Col>
            <Col>
              <Button type="default" size="large" onClick={() => navigate("/userlogin")}>
                Employee
              </Button>
            </Col>
          </Row>
          <Paragraph style={{ fontSize: "16px", marginTop: "50px" }}>
            For more information or query contact{" "}
            <a href="http://www.bharat-online.com" target="_blank" rel="noopener noreferrer">
              www.bharat-online.com
            </a>
          </Paragraph>
        </div>
      </div>
    </div>



  );
}
const styles = {
  outer: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  row: {
    width: "80%",
    maxWidth: "1100px",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  lorryImage: {
    width: "100%",
    maxWidth: "400px",
    borderRadius: "10px",
  },
  card: {
    textAlign: "center",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
  },
  title: {
    color: "#AA2B1D",
    textAlign: "center",
    marginBottom: "10px",
    marginTop: "40px",
    fontSize: "60px"
  },
  paragraph: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize:"16px"
  },

  paragraphh: {
    textAlign: "center",
    marginBottom: "40px",
    fontSize:"17px",
    marginTop:"50px"
  },
  subtitle: {
    textAlign: "center",
    color: "black",
    marginTop: "60px"
  },
};
const mapStateToProps = (state) => {
  return { candidate: state.candidate };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ userLogout }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);

