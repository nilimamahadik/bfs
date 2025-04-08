import React, { useEffect } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { userLogout } from "../Redux/actions";

const Logout = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    const showConfirmationDialog = async () => {
      const result = await Swal.fire({
        title: "Are you sure?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, logout!",
      });

      if (result.isConfirmed) {
        props.userLogout();
        navigate("/");
      } else {
        // User clicked cancel or closed the dialog
        navigate("/dashboard"); // Redirect to a different page or handle as needed
      }
    };

    showConfirmationDialog();
  }, [navigate, props]);

  return null;
};

const mapStateToProps = (state) => {
  return { candidate: state.candidate };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ userLogout }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
