import React from "react";
import { useState } from "react";
import "./addtransaction.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import getBase64 from "get-base64";
const AddTransaction = () => {
  const navigate = useNavigate();
  const [addtransaction, setAddtransaction] = useState({
    transactiondate: "",
    monthyear: "",
    transactiontype: "",
    fromaccount: "",
    toaccount: "",
    amount: "",
    receipt: "",
    notes: "",
  });
  const backtransactionpage = () => {
    navigate("/");
  };
  // console.log(addtransaction, "vivek add tra data");
  // const [datastore, setDatastore] = useState([
  //   {
  //     transactiondate: "",
  //     monthyear: "",
  //     transactiontype: "",
  //     fromaccount: "",
  //     toaccount: "",
  //     amount: "",
  //     receiptfile: "",
  //     notes: "",
  //   },
  // ]);
  // console.log(datastore, "vivek datat store");
  console.log(addtransaction, "first");
  //   useEffect(() => {
  //   var get = JSON.parse(localStorage.getItem("addtransaction") || "[]");
  //   console.log(get, "loggg");
  //   console.log(addtransaction, "second");
  //   console.log();
  //   get.push({ addtransaction });

  //   // localStorage.setItem('Transaction', JSON.stringify(get));
  //   localStorage.setItem("addtransaction", JSON.stringify(get));
  //   console.log(localStorage, "third");
  // }, [addtransaction]);

  const [error, setErrors] = useState({});
  // console.log(error, "vivek");
  const handleInput = (event) => {
    const transactionvalue = {
      ...addtransaction,
      [event.target.name]: event.target.value,
    };
    setAddtransaction(transactionvalue);
    // console.log(setAddtransaction(transactionvalue), "transaction values");
    // console.log(transactionvalue, "trans value");
  };



  const addtransactionsubmit = (event) => {
    event.preventDefault();
    const errors = validation(addtransaction);

    if (Object.values(errors).length > 0) {
      setErrors(validation(addtransaction));
    } else {
      setAddtransaction(addtransaction);
      var get = JSON.parse(localStorage.getItem("addtransaction") || "[]");
      console.log(get, "loggg");
      console.log(get.transactiondate,"log value of tra date ");
      console.log(addtransaction, "second");
      console.log();
      get.push(addtransaction);

      // localStorage.setItem('Transaction', JSON.stringify(get));
      localStorage.setItem("addtransaction", JSON.stringify(get));
      navigate("/");
    }
  };
  const getBase64 = (file) => {
    return new Promise((resolve,reject) => {
       const reader = new FileReader();
       reader.onload = () => resolve(reader.result);
       reader.onerror = error => reject(error);
       reader.readAsDataURL(file);
    });
  } 
  const fileupload = (e) => {
    const file = e.target.files[0];
    getBase64(file).then(base64 => {
        const newobj = { ...addtransaction, receipt: base64 }
        setAddtransaction(newobj)
     console.log(base64,"base64");
      console.debug("file stored",base64);
    });
};

  const validation = (addtransaction) => {
    const error = {};
    // console.log(addtransaction.notes.length, "valueeeeee");
    // console.log(addtransaction, "addtransaction values in validation");
    // console.log(new Intl.NumberFormat("en-IN").format(addtransaction.amount));
    const currentdate = new Date();

    if (addtransaction.transactiondate === "") {
      error.transactiondate = "Enter A Transaction Date";
    } else if (addtransaction.transactiondate > currentdate.toISOString()) {
      error.transactiondate = "Enter A Valid Transaction Date";
    }

    if (
      addtransaction.monthyear === "" ||
      addtransaction.monthyear === "Select Month Year"
    ) {
      error.monthyear = "Select Month Year";
    }

    if (
      addtransaction.transactiontype === "" ||
      addtransaction.transactiontype === "Select Transaction Type"
    ) {
      error.transactiontype = "Select Transaction Type";
    }
    if (
      addtransaction.fromaccount === "" ||
      addtransaction.fromaccount === "Select From Account"
    ) {
      error.fromaccount = "Select From Account";
    }
    if (
      addtransaction.toaccount === "" ||
      addtransaction.toaccount === "Select To Account"
    ) {
      error.toaccount = "Select To Account";
    } else if (addtransaction.fromaccount === addtransaction.toaccount) {
      error.toaccount = "Select To and From Diffrent Account";
    }

    if (addtransaction.amount.trim() === "") {
      error.amount = "Enter A Amount";
    } 
    if (addtransaction.receipt === "") {
      error.receipt = "Upload Receipt";
    }
    //  else if (!addtransaction.receipt.match(/(\.jpg|\.jpeg|\.png|\.gif)$/i)
    // ) {
    //   error.receipt = "Upload Only jpg/jpeg/png/gif file";
    // }
    if (addtransaction.notes.trim() === "") {
      error.notes = "Enter A Notes";
    } else if (addtransaction.notes.length >= 251) {
      error.notes = "Notes less Than 250 char";
    }
    return error;
  };

  return (
    <div>
      <div className="mainclassaddtransaction">
        <div>
          <span className="addtransactionheading">Add transaction</span>
        </div>
        <div className="formmain">
          <form onSubmit={(e) => addtransactionsubmit(e)}>
            <div className="transactiondateclass">
              <div className="divpadding">
                <label className="transactiondatelabel">
                  Transaction Date :{" "}
                </label>
              </div>
              <div>
              <input type="hidden" id="custId" name="custId" value="3487"/>
                <input
                  className="allinputbox"
                  type="date"
                  onInput={handleInput}
                  name="transactiondate"
                ></input>
                <div>
                  {error.transactiondate && (
                    <p className="valicolor">{error.transactiondate}</p>
                  )}
                </div>
              </div>

              <div className="divpadding">
                <label>Month Year :</label>
              </div>
              <div>
                <select
                  className="allinputbox"
                  name="monthyear"
                  onInput={handleInput}
                >
                  <option value="Select Month Year">Select Month Year</option>
                  <option value="Jan 2023">Jan 2023</option>
                  <option value="feb 2023">feb 2023</option>
                  <option value="March 2023">March 2023</option>
                  <option value="April 2023">April 2023</option>
                  <option value="May 2023">May 2023</option>
                  <option value="June 2023">June 2023</option>
                  <option value="July 2023">July 2023</option>
                  <option value="August 2023">August 2023</option>
                  <option value="September 2023">September 2023</option>
                  <option value="October 2023">October 2023</option>
                  <option value="November 2023">November 2023</option>
                  <option value="December 2023">December 20232</option>
                </select>
                <div>
                  {error.monthyear && (
                    <p className="valicolor">{error.monthyear}</p>
                  )}
                </div>
              </div>
              <div className="divpadding">
                <label>Transaction Type : </label>
              </div>
              <div>
                <select
                  className="allinputbox"
                  name="transactiontype"
                  onInput={handleInput}
                >
                  <option value="Select Transaction Type">
                    Select Transaction Type
                  </option>
                  <option value="Home Expense">Home Expense</option>
                  <option value="Personal Expense">Personal Expense</option>
                  <option value="Income">Income</option>
                </select>
                <div>
                  {error.transactiontype && (
                    <p className="valicolor">{error.transactiontype}</p>
                  )}
                </div>
              </div>
              <div className="divpadding">
                <label>From Account :-</label>
              </div>
              <div>
                <select
                  className="allinputbox"
                  name="fromaccount"
                  onInput={handleInput}
                >
                  <option value="Select From Account">
                    Select From Account
                  </option>
                  <option value="Personal Acccount">Personal Acccount</option>
                  <option value="Real Leaving ">Real Leaving </option>
                  <option value="My Dream Home">My Dream Home</option>
                  <option value="Full Circle">Full Circle</option>
                  <option value="Core Realtors">Core Realtors</option>
                  <option value="Big Block">Big Block</option>
                </select>
                <div>
                  {error.fromaccount && (
                    <p className="valicolor">{error.fromaccount}</p>
                  )}
                </div>
              </div>
              <div className="divpadding">
                <label>To Account :-</label>
              </div>
              <div>
                <select
                  className="allinputbox"
                  name="toaccount"
                  onInput={handleInput}
                >
                  <option value="Select To Account">Select To Account</option>
                  <option value="Personal Acccount">Personal Acccount</option>
                  <option value="Real Leaving">Real Leaving</option>
                  <option value="My Dream Home">My Dream Home</option>
                  <option value="Full Circle">Full Circle</option>
                  <option value="Core Realtors">Core Realtors</option>
                  <option value="Big Block">Big Block</option>
                </select>
                <div>
                  {error.toaccount && (
                    <p className="valicolor">{error.toaccount}</p>
                  )}
                </div>
              </div>
              <div className="divpadding">
                <label>Amount :-</label>
              </div>
              <div>
                <input
                  placeholder="Amount"
                  name="amount"
                  onInput={handleInput}
                  className="allinputbox"
                  type="text"
                ></input>
                <div>
                  {error.amount && <p className="valicolor">{error.amount}</p>}
                </div>
              </div>
              <div className="divpadding">
                <label>Receipt :-</label>
              </div>
              <div>
                <input
                  onChange={fileupload}
                  className="allinputbox"
                  type="file"
                  name="receipt"
                ></input>
                <div>
                  {error.receipt && (
                    <p className="valicolor">{error.receipt}</p>
                  )}
                </div>
              </div>

              <div className="divpadding">
                <label>Note :-</label>
              </div>
              <div>
                <input
                  onInput={handleInput}
                  className="allinputbox"
                  type="text"
                  name="notes"
                  placeholder="Add Note"
                ></input>
                <div>
                  {error.notes && <p className="valicolor">{error.notes}</p>}
                </div>
              </div>
              <div>
                <input className="addtransactionback1" type="submit"></input>
              
                  <p className="addtransactionback" onClick={backtransactionpage}>
                    Back
                  </p>
                
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTransaction;
