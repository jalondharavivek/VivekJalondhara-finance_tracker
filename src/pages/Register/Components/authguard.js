import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

import { useEffect } from "react";
const Authguard = ({ children }) => {
  const navigate = useNavigate();
  const authtoken = JSON.parse(localStorage.getItem("loggin"))


  console.log(authtoken, "auth");
  // useEffect(() => {
    


  if (authtoken === true) {
    console.log("success")
    return children;
  } else {
    return <Navigate to="/login" />;
  }

  // }, []);
};

export default Authguard;
