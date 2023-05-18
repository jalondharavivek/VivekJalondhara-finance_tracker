// import React from "react";
// import { useState } from "react";
import "./addtransaction.css";
import { monthYearOptions } from "../../../utils/constant";
// import { useNavigate } from "react-router-dom";
import { transactionTypeOptions } from "../../../utils/constant";
import { accountOptions } from "../../../utils/constant";
// import { validation } from "./validation";
// const AddTransaction = () => {
//   const navigate = useNavigate();
//   const [addtransaction, setAddtransaction] = useState({
//     transactiondate: "",
//     monthyear: "",
//     transactiontype: "",
//     fromaccount: "",
//     toaccount: "",
//     amount: "",
//     receipt: "",
//     notes: "",
//   });

//   console.log(monthyearoptins, "monthyear");

//   const backtransactionpage = () => {
//     navigate("/");
//   };
//   // console.log(addtransaction, "vivek add tra data");
//   // const [datastore, setDatastore] = useState([
//   //   {
//   //     transactiondate: "",
//   //     monthyear: "",
//   //     transactiontype: "",
//   //     fromaccount: "",
//   //     toaccount: "",
//   //     amount: "",
//   //     receiptfile: "",
//   //     notes: "",
//   //   },
//   // ]);
//   // console.log(datastore, "vivek datat store");
//   console.log(addtransaction, "first");

//   const [error, setErrors] = useState({});
//   // console.log(error, "vivek");
//   const handleInput = (event) => {
//     const transactionvalue = {
//       ...addtransaction,
//       [event.target.name]: event.target.value,
//     };
//     setAddtransaction(transactionvalue);
//     // console.log(setAddtransaction(transactionvalue), "transaction values");
//     // console.log(transactionvalue, "trans value");
//   };

//   const addtransactionsubmit = (event) => {
//     event.preventDefault();
//     const errors = validation(addtransaction);

//     if (Object.values(errors).length > 0) {
//       setErrors(validation(addtransaction));
//     } else {
//       setAddtransaction(addtransaction);
//       var get = JSON.parse(localStorage.getItem("addtransaction") || "[]");
//       var id = get.length + 1;
//       addtransaction.id = id;
//       get.push(addtransaction);

//       // localStorage.setItem('Transaction', JSON.stringify(get));
//       localStorage.setItem("addtransaction", JSON.stringify(get));
//       navigate("/");
//     }
//   };
// const getBase64 = (file) => {
//   return new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.onload = () => resolve(reader.result);
//     reader.onerror = (error) => reject(error);
//     reader.readAsDataURL(file);
//   });
// };
// const fileupload = (e) => {
//   const file = e.target.files[0];
//   getBase64(file).then((base64) => {
//     const newobj = { ...addtransaction, receipt: base64 };
//     setAddtransaction(newobj);
//     console.debug("file stored", base64);
//   });
// };

//   return (
//     <div>
//       <div className="mainclassaddtransaction">
//         <div>
//           <span className="addtransactionheading">Add transaction</span>
//         </div>
//         <div className="formmain">
//           <form onSubmit={(e) => addtransactionsubmit(e)}>
//             <div className="transactiondateclass">
//               <div className="divpadding">
//                 <label className="transactiondatelabel">
//                   Transaction Date :{" "}
//                 </label>
//               </div>
//               <div>
//                 <input type="hidden" id="custId" name="custId" value="3487" />
//                 <input
//                   className="allinputbox"
//                   type="date"
//                   onInput={handleInput}
//                   name="transactiondate"
//                 ></input>
//                 <div>
//                   {error.transactiondate && (
//                     <p className="valicolor">{error.transactiondate}</p>
//                   )}
//                 </div>
//               </div>

//               <div className="divpadding">
//                 <label>Month Year :</label>
//               </div>
//               <div>
//                 <select
//                   className="allinputbox"
//                   name="monthyear"
//                   onInput={handleInput}
//                 >
//                   {monthyearoptins.map((data) => (
//                     <option key={data.label} value={data.value}>
//                       {data.label}
//                     </option>
//                   ))}
//                 </select>
//                 <div>
//                   {error.monthyear && (
//                     <p className="valicolor">{error.monthyear}</p>
//                   )}
//                 </div>
//               </div>
//               <div className="divpadding">
//                 <label>Transaction Type : </label>
//               </div>
//               <div>
//                 <select
//                   className="allinputbox"
//                   name="transactiontype"
//                   onInput={handleInput}
//                 >
//                   {transactionTypeOptions.map((data) => (
//                     <option key={data.label} value={data.value}>
//                       {data.label}
//                     </option>
//                   ))}
//                 </select>
//                 <div>
//                   {error.transactiontype && (
//                     <p className="valicolor">{error.transactiontype}</p>
//                   )}
//                 </div>
//               </div>
//               <div className="divpadding">
//                 <label>From Account :-</label>
//               </div>
//               <div>
//                 <select
//                   className="allinputbox"
//                   name="fromaccount"
//                   onInput={handleInput}
//                 >
//                   {accountOptions.map((data) => (
//                     <option key={data.label} value={data.value}>
//                       {data.label}
//                     </option>
//                        ))}
//                 </select>
//                 <div>
//                   {error.fromaccount && (
//                     <p className="valicolor">{error.fromaccount}</p>
//                   )}
//                 </div>
//               </div>
//               <div className="divpadding">
//                 <label>To Account :-</label>
//               </div>
//               <div>
//                 <select
//                   className="allinputbox"
//                   name="toaccount"
//                   onInput={handleInput}
//                 >
//                   {accountOptions.map((data) => (
//                     <option key={data.label} value={data.value}>
//                       {data.label}
//                     </option>
//                        ))}
//                 </select>
//                 <div>
//                   {error.toaccount && (
//                     <p className="valicolor">{error.toaccount}</p>
//                   )}
//                 </div>
//               </div>
//               <div className="divpadding">
//                 <label>Amount :-</label>
//               </div>
//               <div>
//                 <input
//                   placeholder="Amount"
//                   name="amount"
//                   onInput={handleInput}
//                   className="allinputbox"
//                   type="number"
//                 ></input>
//                 <div>
//                   {error.amount && <p className="valicolor">{error.amount}</p>}
//                 </div>
//               </div>
//               <div className="divpadding">
//                 <label>Receipt :-</label>
//               </div>
//               <div>
//                 <input
//                   onChange={fileupload}
//                   className="allinputbox"
//                   type="file"
//                   name="receipt"
//                 ></input>
//                 <div>
//                   {error.receipt && (
//                     <p className="valicolor">{error.receipt}</p>
//                   )}
//                 </div>
//               </div>

//               <div className="divpadding">
//                 <label>Note :-</label>
//               </div>
//               <div>
//                 <input
//                   onInput={handleInput}
//                   className="allinputbox"
//                   type="text"
//                   name="notes"
//                   placeholder="Add Note"
//                 ></input>
//                 <div>
//                   {error.notes && <p className="valicolor">{error.notes}</p>}
//                 </div>
//               </div>
//               <div>
//                 <input className="addtransactionback1" type="submit"></input>

//                 <p className="addtransactionback" onClick={backtransactionpage}>
//                   Back
//                 </p>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddTransaction;
import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import * as yup from "yup";
import { object, string, mixed } from "yup"

import { yupResolver } from "@hookform/resolvers/yup";

const today = new Date();

let userSchema = yup.object().shape({
  transactiondate: yup.string()
  .required("Transaction Date is Required")
  .max(today, "Enter Valid Transaction Date"),
  monthyear: yup.string().required("Month Year is Required"),
  transactiontype: yup.string().required("Transaction Type is Required"),
  fromaccount: yup.string().required("From Account  is Required").notOneOf([yup.ref("fromaccount")],"select diffrent to and from account") ,
  toaccount: yup.string().required("To Account  is Required"),
  amount: yup.string().required("Amount  is Required"),
  notes: yup
    .string("notwes should be a string")
    .trim()
    .required("Notes is a required field")
    .min(2, "Notes Min 2 character"),

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

});

const Transactionadd = (props) => {
  const navigate = useNavigate();
  console.log(props, "props");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(userSchema) });

  async function bs(file) {
    let reader = new FileReader()
    reader.readAsDataURL(file)
    await new Promise(resolve => reader.onload = () => resolve())
    return reader.result
}
  const onSubmitHandler = async(data) => {
    console.log(data.receipt,"jjdjd");
    if (typeof (data.receipt) !== "string") {
      let url = await bs(data.receipt[0])

data.receipt = url;
  }
    if (props?.all?.id) {




      var editdata1 = JSON.parse(
        localStorage.getItem("addtransaction") || "[]"
      );
      console.log(editdata1[props.all.id - 1], "10101010");

      const index = editdata1.findIndex((item) => item.id === props?.all?.id);

      editdata1[index] = { ...data, id: props?.all?.id };

      localStorage.setItem("addtransaction", JSON.stringify(editdata1));
      navigate("/");
    } else {
      var get = JSON.parse(localStorage.getItem("addtransaction") || "[]");
      var id = get.length + 1;
      data.id = id;
      get.push(data);

      localStorage.setItem("addtransaction", JSON.stringify(get));
      // navigate("/");
      reset();
    }
  };
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
                    type="date"
                    {...register("transactiondate", { required: true })}
                    defaultValue={props?.all?.transactiondate?.substring(0, 10)}
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
                    {...register("receipt", { required: true })}
                  ></input>
                  <div className="errordiv">
                    {errors.receipt && <p> {errors.receipt.message} </p>}
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
