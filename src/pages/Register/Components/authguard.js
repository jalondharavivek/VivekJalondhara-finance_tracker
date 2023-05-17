import React, { useContext, useState } from "react";
import { Navigate,  } from "react-router-dom";
import { useEffect } from "react";
import { loginemail } from "./Login";
 const  Authguard = ({ children }) => {
const [lemail,setLmail] = useState()
  const authtoken = JSON.parse(localStorage.getItem("loggin"))

//   const secretPass =
//   "PassWord@#$%^&*()+_012364778//sgvfcaslcauscasncbfbasfqwLODFFFF[DNDDmnnfnsvbjuficflkcvsjkxvxvbxvbjkxvxvzxv";
// const bytes = CryptoJS.AES.decrypt(authtoken, secretPass);
// const loginenctoken = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

const ldata = useContext(loginemail)


 console.log(ldata,"datttaa0");

 useEffect(()=>{
  setLmail(ldata)
}, [ldata])
console.log(lemail,"datttaa1"); 
  // useEffect(() => {
  
  // 
  // }, []);

   if (authtoken === true) {
    console.log("success")
    return children;
  } else {
    return <Navigate to="/login" />;
  }

  

}
export default Authguard