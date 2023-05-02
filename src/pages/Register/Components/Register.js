import React from "react";
import { useState } from "react";
import CryptoJS from "crypto-js";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    nameregister: "",
    email: "",
    password: "",
  });
  const [login, setlogin] = useState([]);



  useEffect(() => {
    setlogin(JSON.parse(localStorage.getItem("user") || "[]"));
  }, []);

  const [error, setErrors] = useState({});
  console.log(user, "userdata");
  const handleInput = (event) => {
    const registervalue = {
      ...user,
      [event.target.name]: event.target.value,
    };
    
 

    const secretPass =
      "PassWord@#$%^&*()+_012364778//sgvfcaslcauscasncbfbasfqwLODFFFF[DNDDmnnfnsvbjuficflkcvsjkxvxvbxvbjkxvxvzxv";

    const encpassword = CryptoJS.AES.encrypt(
      JSON.stringify(registervalue.password),
      secretPass
    ).toString();
    console.log(encpassword, "password");
    const userdatastore = {
      password: encpassword,
      email: registervalue.email,
      nameregister: registervalue.nameregister,
    };
    setUser(userdatastore);
    // console.log(setAddtransaction(transactionvalue), "transaction values");
    // console.log(transactionvalue, "trans value");
  };

  //   const encryptData = () => {
  //     const data = CryptoJS.AES.encrypt(
  //       JSON.stringify(text),
  //       secretPass
  //     ).toString();

  //     setEncrptedData(data);
  //   };

  const registerusersubmit = (event) => {
    console.log(event, "register");
    event.preventDefault();
    const errors = validationregister(user);
    console.log(errors,"?/???");
    if(Object.values(errors).length>0){
      setErrors(validationregister(user))
    }else{
    setUser(user);
    var get = JSON.parse(localStorage.getItem("user") || "[]");

    var id = get.length + 1;

    user.id = id;
    console.log(id, "iddd");
    get.push(user);

    // localStorage.setItem('Transaction', JSON.stringify(get));
    localStorage.setItem("user", JSON.stringify(get));
    navigate("/login");
    }
  };

const validationregister = (user) =>{
  const error = {};

if (user.nameregister === "") {  
  error.nameregister = "Required Name";
} 
login.map((storagedata)=>{
if (user.email=== "") {
  error.email = "Required Email";
}else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(user.email)){
  error.email = "Enter Valid Email";
} else if(user.email === storagedata.email){
  error.email = "Enter Diff Email"
  }
  })
if(user.password ===""){
  error.password = "Enter Password"
}

return error;
}


  return (
    <div>
      <div className="loginmainclass">
        <div>
          <span className="loginheading">Register</span>
        </div>
        <div className="formmain">
          <form onSubmit={(e) => registerusersubmit(e)}>
            <div className="transactiondateclass">
              <div className="transactiondateclass">
                <label className="allinpulfieldlabel">Name : </label>
              </div>
              <div>
                <input
                  className="allinputbox"
                  type="Text"
                  placeholder="Name "
                  name="nameregister"
                  onInput={handleInput}
                ></input>
                <div>
                    {error.nameregister && (
                      <p className="valicolor">{error.nameregister}</p>
                    )}
                  </div>
              </div>
            </div>
            <div className="transactiondateclass">
              <div className="passwordpadding">
                <label className="allinpulfieldlabel">Email : </label>
              </div>
              <div>
                <input
                  className="allinputbox"
                  type="Text"
                  placeholder="Email "
                  name="email"
                  onInput={handleInput}
                ></input>
                <div>
                    {error.email && (
                      <p className="valicolor">{error.email}</p>
                    )}
                  </div>
              </div>
            </div>

            <div className="transactiondateclass">
              <div className="passwordpadding">
                <label className="allinpulfieldlabel">Password : </label>
              </div>
              <div>
                <input
                  className="allinputbox"
                  type="Password"
                  placeholder="password "
                  name="password"
                  onInput={handleInput}
                ></input>
                <div>
                    {error.password && (
                      <p className="valicolor">{error.password}</p>
                    )}
                  </div>
              </div>
            </div>
            <div className="loginsubmit">
              <input type="submit" value="Register" name="loginsubmit" />
            </div>
            <div className="registerlinkclass">
              <label>
                Already You Have An Account ? <a href="/login">Sign in</a>{" "}
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Register;
