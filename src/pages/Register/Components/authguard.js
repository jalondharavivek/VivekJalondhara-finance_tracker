import React from "react";
import { Navigate,  } from "react-router-dom";

 const  Authguard = ({ children }) => {

  const authtoken = JSON.parse(localStorage.getItem("loggin"))

//   const secretPass =
//   "PassWord@#$%^&*()+_012364778//sgvfcaslcauscasncbfbasfqwLODFFFF[DNDDmnnfnsvbjuficflkcvsjkxvxvbxvbjkxvxvzxv";
// const bytes = CryptoJS.AES.decrypt(authtoken, secretPass);
// const loginenctoken = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));


  // useEffect(() => {
    


  if (authtoken === true) {
    console.log("success")
    return children;
  } else {
    return <Navigate to="/login" />;
  }

  // }, []);


}
export default Authguard