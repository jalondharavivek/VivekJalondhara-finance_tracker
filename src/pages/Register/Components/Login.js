import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import CryptoJS from "crypto-js";
import "./login.css";
import { Navigate, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useSelector } from "react-redux";
import { useCookies } from 'react-cookie';
  var Cookies = require("js-cookie")

const Login = () => {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(['Token']);


  const registeralldata = useSelector((state)=> state.users)

  let userSchema = yup.object().shape({
   
    email: yup
      .string()
      .required("Email is required")
      .email("This is not a valid email").test("emailwrong", "Enter Valid Email", function (value) {
        var registerdata = registeralldata;

        function already(rdata) {
          console.log(rdata);
          return rdata.email === value;
        }
        const compare = registerdata.find(already);
        console.log(compare, "compare");
        if (compare === undefined) {
          return false;
        } else {
          return true;
        }
      }),
     
    password: yup
      .string()
      .required("Password is required") .test("emailwrong", "Enter Valid Password", function (value) {
        var registerdata = registeralldata;

        function already(rdata) {
          console.log(rdata);
          return rdata.password === value;
        }
        const compare = registerdata.find(already);
     
        if (compare === undefined) {
          return false;
        } else {
          return true;
        }
      }),
     
      
  });
  
  const loginsubmit = (data) => {

    const string = Math.random().toString(36).substr(2,60)
    console.log(string,"str");
    Cookies.set('Token', string, { expires: 7 })


    // const Token =string
    // document.cookie=`Token= ${Token};max-age=`+60;
    navigate("/")
    }
  



 

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(userSchema) });

  return (
    <div>
      <div className="loginmainclass">
        <div>
          <span className="loginheading">Login</span>
        </div>
        <div className="formmain">
          <form onSubmit={handleSubmit(loginsubmit)}>
            <div className="transactiondateclass">
              <div className="transactiondateclass">
                <label className="allinpulfieldlabel">Email : </label>
              </div>
              <div>
                <input
                  className="allinputbox"
                  type="Text"
                  placeholder="Email "
                  {...register("email", { required: true })}
                ></input>
                <div className="errorcolor">
                {errors.email && (
                      <p>{errors.email.message} </p>
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
                  
                  {...register("password", { required: true })}

                
                ></input>
                <div className="errorcolor">
                {errors.password && (
                      <p>{errors.password.message} </p>
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
