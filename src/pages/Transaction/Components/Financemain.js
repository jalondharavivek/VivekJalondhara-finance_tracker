import React from "react";
import { useState } from "react";
import "./financemain.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AddTransaction from "./Addtransaction";
const Financetrackerform = (prop) => {
  console.log(prop);
  const [alltransaction, setAlltransaction] = useState([]);
  const [sortprevalue, setPrevalue] = useState("");
  const [order, setOrder] = useState(0);

  const [shorto, setShorto] = useState("");

  const [filterval, setFilval] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const recordsPerPage = 3;
  const [records, setRecords] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const lastindex = currentPage * recordsPerPage;
    const firstindex = lastindex - recordsPerPage;

    let data = [];

    console.log("order=", order);
    if (filterval) {
      const searchdata = alltransaction.filter(
        (item) =>
          item.monthyear.toLowerCase().includes(filterval.toLowerCase()) ||
          item.transactiondate
            .toLowerCase()
            .includes(filterval.toLowerCase()) ||
          item.transactiontype
            .toLowerCase()
            .includes(filterval.toLowerCase()) ||
          item.notes.toLowerCase().includes(filterval.toLowerCase()) ||
          item.fromaccount.toLowerCase().includes(filterval.toLowerCase()) ||
          item.toaccount.toLowerCase().includes(filterval.toLowerCase()) ||
          item.amount.toLowerCase().includes(filterval.toLowerCase())
      );
      data = searchdata;
    } else {
      data = alltransaction;
    }
    if (shorto) {
      const col = shorto;

      if (order === 1) {
        const sorted = [...data].sort((a, b) =>
          a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
        );
        data = sorted;
      } else if (order === 2) {
        const sorted = [...data].sort((a, b) =>
          a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
        );
        data = sorted;
      }
    }
    if (shorto) {
      

      if (order === 1) {
        const sorted = [...data].sort((a, b) =>
             a.amount - b.amount
        );
        data = sorted;
      } else if (order === 2) {
        const sorted = [...data].sort((a, b) =>
           b.amount - a.amount
        );
        data = sorted;
      }
    }
    setRecords(data.slice(firstindex, lastindex));
    setPage(Math.ceil(data.length / recordsPerPage));
  }, [currentPage, alltransaction, filterval, shorto, order]);

  const number = [...Array(page + 1).keys()].slice(1);

  const navigate = useNavigate();

  const addtransaction = () => {
    navigate("/addtransaction");
  };

  useEffect(() => {
    setAlltransaction(prop.all);
  }, [prop]);

  //   // for (let key of Object.keys(sorted)) {
  //   //   return [key, sorted[key]];

  const shortfun = (sort) => {
    console.log("sortprevalue=", sortprevalue);
    console.log("sort", sort);
    if (sortprevalue === "") {
      setOrder(1);
      setShorto(sort);
      setPrevalue(sort);
    } else if (sortprevalue === sort) {
      if (order === 1) {
        setOrder(2);
      } else if (order === 2) {
        setOrder(0);
      } else {
        setOrder(1);
      }

      setShorto(sort);
      setPrevalue(sort);
    } else if (sortprevalue !== sort) {
      setOrder(1);
      setShorto(sort);
      setPrevalue(sort);
    } else {
      setOrder(0);
      setShorto(sort);
      setPrevalue(sort);
    }
  };








  const numericamount = (sort) => {
    console.log("sortprevalue=", sortprevalue);
    console.log("sort", sort);
    if (sortprevalue === "") {
      setOrder(1);
      setShorto(sort);
      setPrevalue(sort);
    } else if (sortprevalue === sort) {
      if (order === 1) {
        setOrder(2);
      } else if (order === 2) {
        setOrder(0);
      } else {
        setOrder(1);
      }

      setShorto(sort);
      setPrevalue(sort);
    } else if (sortprevalue !== sort) {
      setOrder(1);
      setShorto(sort);
      setPrevalue(sort);
    } else {
      setOrder(0);
      setShorto(sort);
      setPrevalue(sort);
    }
  };








  //   // }
  //   // const conv = Object.keys(sorted)
  //   // conv.map((d,e)=>{
  //   //   d.map((a,b) => {

  //   //   });
  //   // })
  // };
  const changepage = (id) => {
    setCurrentPage(id);
  };

  const editdata = (AddTransaction, i, ireceipt) => {
    navigate(`/transaction/edit/${AddTransaction.id}`, {
      state: AddTransaction.id,
      AddTransaction,
      i,
    });
  };
  const viewd = (AddTransaction, i, ireceipt) => {
    navigate(`/transaction/view/${AddTransaction.id}`, {
      state: AddTransaction,
      i,
    });
  };

  return (
    <div className="maindisplay">
      <div className="addandgroupby">
        <label>Search :</label>{" "}
        <input
          value={filterval}
          onInput={(e) => setFilval(e.target.value)}
        ></input>
      </div>

      <div className="Tablefinancem">
        <table className="vvv">
          <thead>
            <tr>
              <th>id</th>
              <th onClick={() => shortfun("transactiondate")}>
                Transaction Date{" "}
                {order === "default" ? (
                  <i className="arrow up"></i>
                ) : (
                  <i className="arrow down"></i>
                )}{" "}
              </th>
              <th
                onClick={() => {
                  shortfun("monthyear");
                }}
              >
                Month Year{" "}
                {order === "ASC" ? (
                  <i className="arrow up"></i>
                ) : (
                  <i className="arrow down"></i>
                )}{" "}
              </th>
              <th onClick={() => shortfun("transactiontype")}>
                Transacton Type{" "}
                {order === "ASC" ? (
                  <i className="arrow up"></i>
                ) : (
                  <i className="arrow down"></i>
                )}
              </th>
              <th onClick={() => shortfun("fromaccount")}>
                From Account{" "}
                {order === "ASC" ? (
                  <i className="arrow up"></i>
                ) : (
                  <i className="arrow down"></i>
                )}
              </th>
              <th onClick={() => shortfun("toaccount")}>
                To Acccount{" "}
                {order === "ASC" ? (
                  <i className="arrow up"></i>
                ) : (
                  <i className="arrow down"></i>
                )}
              </th>
              <th onClick={() => numericamount("amount")}>
                Amount{" "}
                {order === "ASC" ? (
                  <i className="arrow up"></i>
                ) : (
                  <i className="arrow down"></i>
                )}
              </th>
              <th onClick={() => shortfun("receipt")}>
                Receipt{" "}
                {order === "ASC" ? (
                  <i className="arrow up"></i>
                ) : (
                  <i className="arrow down"></i>
                )}
              </th>
              <th onClick={() => shortfun("notes")}>
                Notes{" "}
                {order === "ASC" ? (
                  <i className="arrow up"></i>
                ) : (
                  <i className="arrow down"></i>
                )}
              </th>
              <th>Action </th>
              <th>Action </th>
            </tr>
          </thead>
          <tbody>
            {records.map((addtransaction, index) => (
              <tr key={index}>
                <td>{index}</td>
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
                <td
                  onClick={() =>
                    viewd(addtransaction, index, addtransaction.receipt)
                  }
                >
                  View
                </td>
                <td
                  onClick={() =>
                    editdata(addtransaction, index, addtransaction.receipt)
                  }
                >
                  edit
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <nav>
          <ul className="paggination">
            <li className="page-item1">
              <a className="page-link">previous</a>
            </li>

            {number.map((n, i) => (
              <li
                className={`page-item ${currentPage === n ? "active" : ""}`}
                key={i}
              >
                <a
                  className={`page-item page-item1 ${
                    currentPage === n ? "active" : ""
                  }`}
                  onClick={() => changepage(n)}
                  href="#"
                >
                  {n}
                </a>
              </li>
            ))}
            <li className="page-item1">
              <a href="#" className="page-link">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default Financetrackerform;
