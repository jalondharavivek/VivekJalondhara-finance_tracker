import React from "react";
import { Navigate,  } from "react-router-dom";
import CryptoJS from "crypto-js";

const Unauthguard = ({ children }) => {

  const authtoken = JSON.parse(localStorage.getItem("loggin"))
  if (authtoken) {
    return <Navigate to="/" />
    // return children;
  } else {
    return <Navigate to="/login" />;
  }

  // }, []);
};

export default Unauthguard;
