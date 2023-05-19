import React from "react";
import { useState } from "react";
import CryptoJS from "crypto-js";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { newuser } from "../../../store/slices/User";
import { useDispatch, useSelector } from "react-redux";


const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const registerdata = useSelector((state) => state.users);
  let userSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .required("Email is required")
      .email("Enter a valid email")
      .test(
        "all ready registered","This Email is Already extis",
        function (value) {
          var registerdata0 = registerdata;
          console.log();
          function already(rdata) {
            {
              console.log(rdata, "dataa");
            }
            return rdata.email === value;
          }
          const compare = registerdata0.find(already);
          if (compare === undefined) {
            return true;
          } else {
            return false;
          }
        }
      ),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters.")
      .max(25, "Password must be a maximum limit of 25 characters."),
    confirmpassword: yup
      .string()
      .required("Confirm Password is Required")
      .oneOf([yup.ref("password"), null], "Password not match"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(userSchema) });

  const registeruser = (data) => {
    let dataa = { ...data };

    console.log(dataa.receipt, "datttttta");
    const tralength = registerdata.reduce((ADDTRA) => ADDTRA + 1, 0);
    const idtransaction = registerdata[tralength - 1].id;
    dataa.id = idtransaction + 1;
    console.log(dataa, "1datttaaa");
    dispatch(newuser(dataa));
    // navigate("/login");
  };

  return (
    <div>
      <div className="loginmainclass">
        <div>
          <span className="loginheading">Register</span>
        </div>
        <div className="formmain">
          <form onSubmit={handleSubmit(registeruser)}>
            <div className="transactiondateclass">
              <div className="transactiondateclass">
                <label className="allinpulfieldlabel">Name : </label>
              </div>
              <div>
                <input
                  className="allinputbox"
                  type="Text"
                  placeholder="Name "
                  {...register("name", { required: true })}
                ></input>
                <div className="errorcolor">
                  {errors.name && <p>{errors.name.message} </p>}
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
                  {...register("email", { required: true })}
                ></input>
                <div className="errorcolor">
                  {errors.email && <p>{errors.email.message} </p>}
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
                  {errors.password && <p>{errors.password.message} </p>}
                </div>
              </div>
            </div>

            <div className="transactiondateclass">
              <div className="passwordpadding">
                <label className="allinpulfieldlabel">
                  Confirm Password :{" "}
                </label>
              </div>
              <div>
                <input
                  className="allinputbox"
                  type="Password"
                  placeholder="Confirm password "
                  {...register("confirmpassword", { required: true })}
                ></input>
                <div className="errorcolor">
                  {errors.confirmpassword && (
                    <p>{errors.confirmpassword.message} </p>
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
