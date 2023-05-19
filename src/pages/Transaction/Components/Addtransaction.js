import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { transactondataadd ,edittransactiondata } from "../../../store/slices/Tradet";

import {
  monthYearOptions,
  transactionTypeOptions,
  accountOptions,
  selectgroupby,
} from "../../../utills/constants";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "../../../assets/style/addtransaction.css";
import { useNavigate } from "react-router-dom";
const today = new Date();

let userSchema = yup.object().shape({
  transactiondate: yup.string()
  .required("Transaction Date is Required")
  .max(today, "Enter Valid Transaction Date"),
  monthyear: yup.string().required("Month Year is Required"),
  transactiontype: yup.string().required("Transaction Type is Required"),
  fromaccount: yup.string().required("From Account  is Required"),
  toaccount: yup.string().required("To Account  is Required"),
  amount: yup.string().required("Amount  is Required"),
  receipt:yup.mixed().test("required", "You need to provide a file", (value) => {
    if (value.length > 0) {  
      return true;
    }
    return false;

  }).test("type", "We only support jpeg and jpg format", function (value) {
    if (typeof value ==="string") {
      return true;
    }else{
      return value[0] && (value[0].type === "image/jpg" || value[0].type === "image/jpeg" || value[0].type === "image/png");
    }
  }).test("fileSize", "The file is too large", (value) => {
    if (typeof value ==="string") {
      return true;
    }else{
      return value[0] && value[0].size <= 2000000;
    }
  }),
  notes: yup
    .string("notwes should be a string")
    .trim()
    .required("Notes is a required field")
    .min(2, "Notes Min 2 character"),
  // createdOn: date().default(() => new Date()),
});

const Transactionadd = (props) => {
  console.log(props, "log props");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const transactiondata = useSelector((state) => state.transactions);
  console.log(transactiondata,"dattttttttttttttttttttt");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue
    
  } = useForm({ resolver: yupResolver(userSchema) });
  async function bs(file) {
    console.log(file,"image1");
    let reader = new FileReader()
    reader.readAsDataURL(file)
    await new Promise(resolve => reader.onload = () => resolve())
    return reader.result
}
  const onSubmitHandler = async(data) => {

    console.log(data.receipt,"imagwe");
    if (typeof (data.receipt) !== "string") {
      let url = await bs(data.receipt[0])

data.receipt = url;
console.log(url,"url");
    }
    console.log(data.receipt,"0000vivek");
    if (props?.all?.id) {
      // const newdata = {
      //    transactiondate: data.transactiondate,
      //   monthyear: data.monthyear,
      //   transactiontype: data.transactiontype,
      //   fromaccount: data.fromaccount,
      //   toaccount: data.toaccount,
      //   amount: data.amount,
      //   notes: data.notes,
      // };
      var editdata1 = {...data};
          console.log("dattttvivek");
          console.log({id:props?.all?.id},"datttt0101");
          console.log({data:editdata1},"dattttvivek");
      // console.log(editdata1, "vvv");
      // console.log(editdata1[props.all.id], "vvvv1");
      // console.log(editdata1[props.all.id - 1], "10101010");
      
      
      //  const index = editdata1.findIndex((item) => item.id === props?.all?.id);
console.log(editdata1,"dataimage");
       editdata1  = { ...data, id: props?.all?.id };
       console.log(editdata1,"vivekkkkkk01..");
      dispatch(edittransactiondata({id:props?.all?.id,data:editdata1}))
      // dispatch(edittransactiondata(editdata1));
      navigate("/");
    } else {
     
      let dataa = { ...data};
      console.log(editdata1,"dataa");
console.log(dataa.receipt,"datttttta");
      const tralength = transactiondata.reduce((ADDTRA) => ADDTRA + 1, 0);
      const idtransaction = transactiondata[tralength - 1].id;
      dataa.id = idtransaction + 1;
      console.log(dataa,"1datttaaa");
      dispatch(transactondataadd(dataa));
    
      navigate("/");
    }
    };
    // console.log(props?.all?.monthyear,"1010");
    //   console.log(datastate, "LLLLLLLLLLLLLL");
  // };
  return (
    <>
      <div>
        <div className="mainclassaddtransaction">
          <div>
            <span className="addtransactionheading">Add transaction</span>
          </div>
          <div className="formmain">
            <form onSubmit={handleSubmit(onSubmitHandler)}>
              <div className="transactiondateclass">
                <div className="divpadding">
                  <label className="transactiondatelabel">
                    Transaction Date :{" "}
                  </label>
                </div>
                <div>
                  <input
                    className="allinputbox"
                    type="Date"
                    {...register("transactiondate", { required: true })}
                    defaultValue={props?.all?.transactiondate}
                  ></input>

                  <div className="errordiv">
                    {errors.transactiondate && (
                      <p>{errors.transactiondate.message} </p>
                    )}
                  </div>
                </div>

                <div className="divpadding">
                  <label>Month Year :</label>
                </div>
                <div>
                  <select
                    className="allinputbox"
                    {...register("monthyear", { required: true })}
                    defaultValue={props?.all?.monthyear}
                  >
                    {monthYearOptions.map((data) => (
                      <option key={data.label} value={data.value}>
                        {data.label}
                      </option>
                    ))}
                  </select>
                  <div className="errordiv">
                    {errors.monthyear && <p>{errors.monthyear.message} </p>}
                  </div>
                </div>
                <div className="divpadding">
                  <label>Transaction Type : </label>
                </div>
                <div>
                  <select
                    className="allinputbox"
                    {...register("transactiontype", { required: true })}
                    defaultValue={props?.all?.transactiontype}
                  >
                    {transactionTypeOptions.map((data) => (
                      <option key={data.label} value={data.value}>
                        {data.label}
                      </option>
                    ))}
                  </select>
                  <div className="errordiv">
                    {errors.transactiontype && (
                      <p>{errors.transactiontype.message} </p>
                    )}
                  </div>
                </div>
                <div className="divpadding">
                  <label>From Account :-</label>
                </div>
                <div>
                  <select
                    className="allinputbox"
                    {...register("fromaccount", { required: true })}
                    defaultValue={props?.all?.fromaccount}
                  >
                    {accountOptions.map((data) => (
                      <option key={data.label} value={data.value}>
                        {data.label}
                      </option>
                    ))}
                  </select>
                  <div className="errordiv">
                    {errors.fromaccount && <p>{errors.fromaccount.message} </p>}
                  </div>
                </div>
                <div className="divpadding">
                  <label>To Account :-</label>
                </div>
                <div>
                  <select
                    className="allinputbox"
                    {...register("toaccount", { required: true })}
                    defaultValue={props?.all?.toaccount}
                  >
                    {accountOptions.map((data) => (
                      <option key={data.label} value={data.value}>
                        {data.label}
                      </option>
                    ))}
                  </select>
                  <div className="errordiv">
                    {errors.toaccount && <p>{errors.toaccount.message} </p>}
                  </div>
                </div>
                <div className="divpadding">
                  <label>Amount :-</label>
                </div>
                <div>
                  <input
                    placeholder="Amount"
                    className="allinputbox"
                    type="number"
                    {...register("amount", { required: true })}
                    defaultValue={props?.all?.amount}
                  ></input>
                  <div className="errordiv">
                    {errors.amount && <p>{errors.amount.message} </p>}
                  </div>
                </div>
                <div className="divpadding">
                  <label>Receipt :-</label>
                </div>
                <div>
                  <input
                    className="allinputbox"
                    type="file"
                   setValue = { <img
                    src={props?.all?.receipt}
                    alt="preview"
                    className="h-64 w-full object-contain"
                  />}
                    {...register("receipt",{ required: true }  ) }
                  ></input>
                 
                  <div className="errordiv">
                    {errors.receipt && <p> Receipt is required*.</p>}
                  </div>
                </div>

                <div className="divpadding">
                  <label>Note :-</label>
                </div>
                <div>
                  <input
                    className="allinputbox"
                    type="text"
                    placeholder="Add Note"
                    {...register("notes")}
                    defaultValue={props?.all?.notes}
                  ></input>
                  <div className="errordiv">
                    {errors.notes && <p> {errors.notes.message} </p>}
                  </div>
                  {/* <div className="errordiv">
                     {errors.notes  ? ( <p> {errors.notes.message} </p>) :(<p></p>)
                     }                   
                       </div> */}
                </div>
                <div>
                  <input className="addtransactionback1" type="submit"></input>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Transactionadd;
