import React from "react";
import { Navigate,  } from "react-router-dom";
import CryptoJS from "crypto-js";

const Unauthguard = ({ children }) => {

  const authtoken = JSON.parse(localStorage.getItem("loggin"))
//   const secretPass =
//   "PassWord@#$%^&*()+_012364778//sgvfcaslcauscasncbfbasfqwLODFFFF[DNDDmnnfnsvbjuficflkcvsjkxvxvbxvbjkxvxvzxv";
// const bytes = CryptoJS.AES.decrypt(authtoken, secretPass);
// const loginenctoken = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

//   console.log(loginenctoken, "auth");
//   // useEffect(() => {
    


  if (authtoken === true) {
    return <Navigate to="/" />
    // return children;
  } else {
    return <Navigate to="/login" />;
  }

  // }, []);
};

export default Unauthguard;
