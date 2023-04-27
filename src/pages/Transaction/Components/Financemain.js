import React from "react";
import { useState } from "react";
import "./financemain.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Financetrackerform = () => {
  const [alltransaction, setAlltransaction] = useState([]);

  const [order, setOrder] = useState("default");
  const navigate = useNavigate();
  const [grpby, setgrpby] = useState({});
  const [data1, setData] = useState([]);
  console.log(data1, "inittt");
  const addtransaction = () => {
    navigate("/addtransaction");
  };
  console.log(data1, "array of object");
  useEffect(() => {
    setAlltransaction(
      JSON.parse(localStorage.getItem("addtransaction") || "[]")
    );
  }, []);

  // const datagrph = (event) => {
  //   console.log(event,"vivek valyueeeee");
  //   const transactionvalue = {
  //     ...grpby,
  //     [event.target.name]: event.target.value,
  //   };
  //   setgrpby(datagrp(transactionvalue));
  // };

  const datagrph = (val) => {
    const p = val.target.value;
    if(val === "None"){
      const GROUPBY1 = [...alltransaction];
      setData(GROUPBY1)
    }else{
    console.log("valll",p, "vvdvsvsvsvsv");
    const GROUPBY = [...alltransaction];
    console.log(GROUPBY, "valueeeeeee");
    const key = {
      monthyear: "monthyear",
      transactiondate: "transactiondate",
      transactiontype: "transactiontype",
      amount: "amount",
    };
    let cats = GROUPBY.reduce((datagroupby, key) => {
      {
        console.log(key, "sgtgdgdgdg");
      }
      (datagroupby[key[p]] = datagroupby[key[p]] || []).push(key);

      return datagroupby;
    }, {});

    setData(cats);
    console.log(cats, "dgdg");
    // console.log("heeeeee", cats);
    // console.log(datagrp, "vviviviviv");
  }
  };

  // console.log(datagrp, "onnnnn");

  const sortdatacolumn = (col) => {
    if (order === "default") {
      console.log(col, "dtaaaaaa");
      const sorted = [...alltransaction].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      console.log(sorted, "dtaaaaaa");
      setAlltransaction(sorted);
      setOrder("DSC");
    } else if (order === "DSC") {
      console.log(col, "dtaaaaaa");
      const sorted = [...alltransaction].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      console.log(sorted, "dtaaaaaa");
      setAlltransaction(sorted);
      setOrder("default");
    }
    // } else if (order === "fordefault") {
    //   console.log(col, "dtaaaaaa");
    //   // const sorted = [...alltransaction]
    //   // console.log(sorted, "dtaaaaaa");
    //   setAlltransaction(
    //     JSON.parse(localStorage.getItem("addtransaction") || "[]")
    //   );
    //   setOrder("default");
    // }
  };

  const sortdatacolumn1 = (col) => {
    if (order === "default") {

      const sorted = [...data1].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      console.log(sorted, "dtaaaaasssa");
      console.log(data1, "dtaaaaaa");
      setAlltransaction(sorted);
      setOrder("DSC");
    }
  }

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
      <div>
        <select name="groupbya" onInput={(event) => datagrph(event)}>
          <option value="None">None</option>
          <option value="monthyear">monthyear</option>
          <option value="transactiondate">transactiondate</option>
          <option value="amount">Amount</option>
          <option value="transactiontype">transactiontype</option>
        </select>
      </div>
      {/* {alltransaction === [] ? ( */}
        <div className="Tablefinancem">
          <table>
            <tr>
              <th onClick={() => sortdatacolumn("transactiondate")}>
                Transaction Date{" "}
                {order === "default" ? (
                  <i class="arrow up"></i>
                ) : (
                  <i class="arrow down"></i>
                )}{" "}
              </th>
              <th onClick={() => sortdatacolumn("monthyear")}>
                Month Year{" "}
                {order === "ASC" ? (
                  <i class="arrow up"></i>
                ) : (
                  <i class="arrow down"></i>
                )}{" "}
              </th>
              <th onClick={() => sortdatacolumn("transactiontype")}>
                Transacton Type{" "}
                {order === "ASC" ? (
                  <i class="arrow up"></i>
                ) : (
                  <i class="arrow down"></i>
                )}
              </th>
              <th onClick={() => sortdatacolumn("fromaccount")}>
                From Account{" "}
                {order === "ASC" ? (
                  <i class="arrow up"></i>
                ) : (
                  <i class="arrow down"></i>
                )}
              </th>
              <th onClick={() => sortdatacolumn("toaccount")}>
                To Acccount{" "}
                {order === "ASC" ? (
                  <i class="arrow up"></i>
                ) : (
                  <i class="arrow down"></i>
                )}
              </th>
              <th onClick={() => sortdatacolumn("amount")}>
                Amount{" "}
                {order === "ASC" ? (
                  <i class="arrow up"></i>
                ) : (
                  <i class="arrow down"></i>
                )}
              </th>
              <th onClick={() => sortdatacolumn("receipt")}>
                Receipt{" "}
                {order === "ASC" ? (
                  <i class="arrow up"></i>
                ) : (
                  <i class="arrow down"></i>
                )}
              </th>
              <th onClick={() => sortdatacolumn("notes")}>
                Notes{" "}
                {order === "ASC" ? (
                  <i class="arrow up"></i>
                ) : (
                  <i class="arrow down"></i>
                )}
              </th>
            </tr>

            {alltransaction.map((addtransaction, index) => (
              <tr key={index}>
                <td>{addtransaction.transactiondate} </td>
                <td>{addtransaction.monthyear}</td>
                <td>{addtransaction.transactiontype}</td>
                <td>{addtransaction.fromaccount}</td>
                <td>{addtransaction.toaccount}</td>
                <td>
                  ₹{" "}
                  {new Intl.NumberFormat("en-IN").format(addtransaction.amount)}
                </td>
                <td>
                  <img src={addtransaction.receipt} className="imgwidth" />
                </td>
                <td>{addtransaction.notes}</td>
              </tr>
            ))}
          </table>
        </div>
      {/* ) : ( */}
        <div>
          <div className="Tablefinancem">
            {/* {Object.keys(data1).map((item, index) =>
            data1[item].map((groupbydata) => (
              <table>
                <tr key={index}>
                  <th>Transaction Date</th>
                  <th>Month year</th>
                  <th>transactiontype</th>
                  <th>fromaccount</th>
                  <th>toaccount</th>
                  <th>amount</th>
                  <th>notes</th>
                </tr>
                <tr>
                  <td>{groupbydata.transactiondate}</td>
                  <td>{groupbydata.monthyear}</td>
                  <td>{groupbydata.transactiontype}</td>
                  <td>{groupbydata.fromaccount}</td>
                  <td>{groupbydata.toaccount}</td>
                  <td>{groupbydata.amount}</td>
                  <td>{groupbydata.notes}</td>
                </tr>
              </table>
            ))
          )} */}
            {Object.keys(data1).map((item, index) => (
              <table className="vvv">
                <tr className="itemd" key={index}>{item}</tr>
                <tr key={index}>
                  <th onClick={() => sortdatacolumn1("transactiondate")}> Transaction Date </th>
                  <th>Month year</th>
                  <th>transactiontype</th>
                  <th>fromaccount</th>
                  <th>toaccount</th>
                  <th>amount</th>
                  <th>notes</th>
                </tr>

                {data1[item].map((groupbydata, key) => (
                  <tr>
                    <td>{groupbydata.transactiondate}</td>
                    <td>{groupbydata.monthyear}</td>
                    <td>{groupbydata.transactiontype}</td>
                    <td>{groupbydata.fromaccount}</td>
                    <td>{groupbydata.toaccount}</td>
                    <td> ₹{" "}
                  {new Intl.NumberFormat("en-IN").format(groupbydata.amount)}</td>
                    <td>{groupbydata.notes}</td>
                  </tr>
                ))}
              </table>
            ))}
          </div>
        </div>
      {/* )} */}  
    </div>
  );
};
export default Financetrackerform;
