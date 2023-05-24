import React from "react";
import { Navigate,  } from "react-router-dom";
import { useSelector } from "react-redux";
 const  Authguard = (props) => {
  const registeralldata = useSelector((state)=> state.usecdata)
console.log(registeralldata,"log");
  const authtoken = JSON.parse(localStorage.getItem("loggin"))

//   const secretPass =
//   "PassWord@#$%^&*()+_012364778//sgvfcaslcauscasncbfbasfqwLODFFFF[DNDDmnnfnsvbjuficflkcvsjkxvxvbxvbjkxvxvzxv";
// const bytes = CryptoJS.AES.decrypt(authtoken, secretPass);
// const loginenctoken = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));


  // useEffect(() => {
    
  const cmp = props.cmp;
  const ispublic = props.public;
  const auth = document.cookie;
  console.log(ispublic,cmp,auth,"auth");
  if (ispublic) {
      if (!auth) {
          return cmp
         }else{
          return <Navigate to={"/"}/>
         }
  } else {
      if (auth) {
          return cmp
         }else{
          return <Navigate to={"/login"}/>
         }
  }

  // if (authtoken === true) {
  //   console.log("success")
  //   return children;
  // } else {
  //   return <Navigate to="/login" />;
  // }

  // // }, []);


}
export default Authguard