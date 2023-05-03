import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import CryptoJS from "crypto-js";
import "./login.css";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [login, setlogin] = useState([]);
  const [input, setinput] = useState({ email: "", password: "" });
  const [error, setErrors] = useState({});
  console.log(login, "viv");

  useEffect(() => {
    setlogin(JSON.parse(localStorage.getItem("user") || "[]"));
  }, []);
 
  const logindatafun = (event) => {
    const loginval = {
      ...input,
      [event.target.name]: event.target.value,
    };
    console.log(loginval, "7878");
    setinput(loginval);
  };
  const loginsubmit = (event) => {
    event.preventDefault();
    const errors = validationlogin(input);

    if (Object.values(errors).length > 0) {
      setErrors(validationlogin(input))
    } else {
      login.map((logcred) => {
        const secretPass =
          "PassWord@#$%^&*()+_012364778//sgvfcaslcauscasncbfbasfqwLODFFFF[DNDDmnnfnsvbjuficflkcvsjkxvxvbxvbjkxvxvzxv";
        const bytes = CryptoJS.AES.decrypt(logcred.password, secretPass);
        const data = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        console.log(data, "vivek");

        if (input.email === logcred.email && input.password === data) {
          console.log(logcred.id,"inputid");
        
          //  const  data = logcred.id
          // console.log(data);
          // const logintoekn = CryptoJS.AES.encrypt(
          //   JSON.stringify(input.email),
          //   secretPass
          // ).toString();

           localStorage.setItem("loggin" || [], true);
          navigate("/");
        } else {
          const error = {};
          error.password = "Enter Valid email and password "
          setErrors(error)
        }
     
       
      });
    }
  };

  const validationlogin = (input) => {
    console.log(input,  "4554545");
    const error = {};
    if (
      input.email === "" ||
      input.password === "" 
     
    ) {
      error.password = "Enter Email and passwords ";
    }

    return error;
  };

  return (
    <div>
      <div className="loginmainclass">
        <div>
          <span className="loginheading">Login</span>
        </div>
        <div className="formmain">
          <form onSubmit={(e) => loginsubmit(e)}>
            <div className="transactiondateclass">
              <div className="transactiondateclass">
                <label className="allinpulfieldlabel">Email : </label>
              </div>
              <div>
                <input
                  className="allinputbox"
                  type="Text"
                  placeholder="Email "
                  name="email"
                  value={input.email}
                  onInput={(e) => logindatafun(e)}
                ></input>
                {/* <div>
                  {error.transactiondate && (
                    <p className="valicolor">{error.transactiondate}</p>
                  )}
                </div> */}
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
                  value={input.password}
                  onChange={(e) => logindatafun(e)}
                ></input>
                <div>
                  {error.password && (
                    <p className="valicolor">{error.password}</p>
                  )}
                </div>
              </div>
            </div>
            <div className="loginsubmit">
              <input type="submit" value="Login" name="loginsubmit" />
            </div>
            <div className="registerlinkclass">
              <label>
                Don't Have An Account ? <a href="/register">Sign Up</a>{" "}
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
