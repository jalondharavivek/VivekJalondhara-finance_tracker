import React from "react";
import { useState } from "react";
import "./financemain.css";
import { useNavigate } from "react-router-dom";
const Financetrackerform = () => {
  const navigate = useNavigate();
  const addtransaction = () => {
    navigate("/addtransaction");
  };

  return (
    <div>
      <div>
        <span className="headingfinancetracker">Finance Tracker</span>
      </div>
      <div>
        <p className="addtransaction" onClick={addtransaction}>
          ADD +
        </p>
      </div>
      <div className="Tablefinancem">
        <table>
          <tr>
            <th>Transaction Date</th>
            <th>Month Year</th>
            <th>Transacton Type</th>
            <th>From Account</th>
            <th>To Acccount</th>
            <th>Amount</th>
            <th>Receipt</th>
            <th>Notes</th>
          </tr>
          <tr>
            <td></td>
            <td>vsd</td>
            <td>sdv</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>
    </div>
  );
};
export default Financetrackerform;
