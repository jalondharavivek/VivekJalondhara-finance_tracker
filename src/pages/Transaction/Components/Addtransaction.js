import React from "react";
import { useState } from "react";
import "./addtransaction.css";

const AddTransaction = () => {
  const [addtransaction, setAddtransaction] = useState({
    transactiondate: "",
    monthyear: "",
    transactiontype: "",
    fromaccount: "",
    toaccount: "",
    amout: "",
    receipt: "",
    notes: "",
  });

  return (
    <div>
      <div className="mainclassaddtransaction">
        <div>
          <span className="addtransactionheading">Add transaction</span>
        </div>
        <div className="formmain">
          <form>
            <div className="transactiondateclass">
              <div className="divpadding">
                <label>Transaction Date : </label>
              </div>
              <div className="divpadding">
                <input type="date" name="transactiondate"></input>
              </div>

              <div className="divpadding">
                <label>Month Year :</label>
              </div>
              <div className="divpadding">
                <select>
                  <option>Select Month Year</option>
                  <option>Jan 2023</option>
                  <option>feb 2023</option>
                  <option>March 2023</option>
                  <option>April 2034</option>
                  <option>May 2023</option>
                  <option>June 2023</option>
                  <option>July 2023</option>
                  <option>August 2023</option>
                  <option>September 2023</option>
                  <option>October 2023</option>
                  <option>November 2023</option>
                  <option>December 20232</option>
                </select>
              </div>
              <div className="divpadding">
                <label>Transaction Type : </label>
              </div>
              <div className="divpadding">
                <select>
                  <option>Select Transaction Type</option>
                  <option>Home Expense</option>
                  <option>Personal Expense</option>
                  <option>Income</option>
                  <option>Income</option>
                </select>
              </div>
              <div className="divpadding">
                <label>From Account :-</label>
              </div>
              <div className="divpadding">
                <select>
                    <option>Select From Acccount</option>
                    <option>From Account</option>
                    <option>Personal Acccount</option>
                    <option>Real Leaving </option>
                    <option>My Dream Home</option>
                    <option>Full Circle</option>
                    <option>Core Realtors</option>
                    <option>Big Block</option>
                    

                </select>
              </div>
              <div className="divpadding">
                <label>To Account :-</label>
              </div>
              <div className="divpadding">
                <select>
                    <option>Select From Acccount</option>
                    <option>From Account</option>
                    <option>Personal Acccount</option>
                    <option>Real Leaving </option>
                    <option>My Dream Home</option>
                    <option>Full Circle</option>
                    <option>Core Realtors</option>
                    <option>Big Block</option>
                
                </select>
                </div>
                <div className="divpadding">
                <label>Receipt :-</label>
                </div>
              <div className="divpadding">
                <input type="file"></input>
              </div>
              
              <div className="divpadding">
                <label>Note :-</label>
                </div>
              <div className="divpadding" >
                <input type="text" placeholder="Add Note"></input>
              </div>
              
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTransaction;
